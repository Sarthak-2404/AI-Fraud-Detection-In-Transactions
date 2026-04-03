#!/usr/bin/env python3
"""
Fraud Detection API Server
==========================

Flask API server for fraud detection predictions.
Exposes a POST endpoint /predict for real-time fraud detection.

Requirements:
- flask
- joblib
- numpy
- scikit-learn

Usage:
    python app.py
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import warnings
warnings.filterwarnings('ignore')

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Global variables for model and encoder
model = None
label_encoder = None
feature_names = None

def load_model():
    """
    Load the trained fraud detection model and label encoder
    
    Returns:
        bool: True if loading successful, False otherwise
    """
    global model, label_encoder, feature_names
    
    try:
        # Load model
        model = joblib.load('fraud_model.pkl')
        print("✅ Model loaded successfully")
        
        # Load label encoder
        label_encoder = joblib.load('label_encoder.pkl')
        print("✅ Label encoder loaded successfully")
        
        # Define feature names (must match training data)
        feature_names = [
            'amount', 'oldbalanceOrg', 'newbalanceOrig',
            'oldbalanceDest', 'newbalanceDest', 'type_encoded'
        ]
        
        return True
        
    except FileNotFoundError as e:
        print(f"❌ Error loading model files: {e}")
        print("💡 Please run 'python train.py' first to train and save the model")
        return False
    except Exception as e:
        print(f"❌ Unexpected error loading model: {e}")
        return False

def validate_input(data):
    """
    Validate input data for prediction
    
    Args:
        data (dict): Input data dictionary
    
    Returns:
        tuple: (is_valid, error_message)
    """
    required_fields = [
        'type', 'amount', 'oldbalanceOrg', 
        'newbalanceOrig', 'oldbalanceDest', 'newbalanceDest'
    ]
    
    # Check if all required fields are present
    for field in required_fields:
        if field not in data:
            return False, f"Missing required field: {field}"
    
    # Validate data types
    try:
        # Type should be a string that can be encoded
        if not isinstance(data['type'], str):
            return False, "Field 'type' must be a string"
        
        # Numeric fields should be numbers
        numeric_fields = ['amount', 'oldbalanceOrg', 'newbalanceOrig', 
                         'oldbalanceDest', 'newbalanceDest']
        
        for field in numeric_fields:
            if not isinstance(data[field], (int, float)):
                return False, f"Field '{field}' must be a number"
            
            # Check for negative values where appropriate
            if field in ['amount', 'oldbalanceOrg', 'newbalanceOrig', 'oldbalanceDest', 'newbalanceDest']:
                if data[field] < 0:
                    return False, f"Field '{field}' cannot be negative"
        
    except Exception as e:
        return False, f"Validation error: {str(e)}"
    
    return True, None

def preprocess_input(data):
    """
    Preprocess input data for prediction
    
    Args:
        data (dict): Raw input data
    
    Returns:
        np.array: Preprocessed features ready for prediction
    """
    try:
        # Encode transaction type
        type_encoded = label_encoder.transform([data['type']])[0]
        
        # Create feature array in the correct order
        features = [
            data['amount'],
            data['oldbalanceOrg'],
            data['newbalanceOrig'],
            data['oldbalanceDest'],
            data['newbalanceDest'],
            type_encoded
        ]
        
        return np.array(features).reshape(1, -1)
        
    except ValueError as e:
        raise ValueError(f"Invalid transaction type: {data['type']}. Must be one of {list(label_encoder.classes_)}")
    except Exception as e:
        raise ValueError(f"Preprocessing error: {str(e)}")

@app.route('/')
def home():
    """Home endpoint with API information"""
    return jsonify({
        'message': 'Fraud Detection API',
        'version': '1.0.0',
        'endpoints': {
            '/': 'API information',
            '/predict': 'POST - Predict fraud (JSON)',
            '/health': 'GET - Health check'
        },
        'usage': {
            'predict': {
                'method': 'POST',
                'content-type': 'application/json',
                'body': {
                    'type': 'string (CASH_OUT, TRANSFER, etc.)',
                    'amount': 'number',
                    'oldbalanceOrg': 'number',
                    'newbalanceOrig': 'number',
                    'oldbalanceDest': 'number',
                    'newbalanceDest': 'number'
                }
            }
        }
    })

@app.route('/health')
def health_check():
    """Health check endpoint"""
    if model is None:
        return jsonify({
            'status': 'unhealthy',
            'message': 'Model not loaded'
        }), 503
    
    return jsonify({
        'status': 'healthy',
        'message': 'API is ready for predictions'
    })

@app.route('/predict', methods=['POST'])
def predict():
    """
    Fraud prediction endpoint
    
    Expected JSON input:
    {
        "type": "CASH_OUT",
        "amount": 1000.0,
        "oldbalanceOrg": 5000.0,
        "newbalanceOrig": 4000.0,
        "oldbalanceDest": 1000.0,
        "newbalanceDest": 2000.0
    }
    
    Returns:
    {
        "fraud": 0 or 1,
        "confidence": 0.0 to 1.0,
        "message": "Prediction completed successfully"
    }
    """
    # Check if model is loaded
    if model is None:
        return jsonify({
            'error': 'Model not loaded',
            'message': 'Please ensure the model is trained and loaded'
        }), 500
    
    # Parse JSON input
    try:
        data = request.get_json()
        if data is None:
            return jsonify({
                'error': 'Invalid JSON',
                'message': 'Request must contain valid JSON data'
            }), 400
            
    except Exception as e:
        return jsonify({
            'error': 'JSON parsing error',
            'message': str(e)
        }), 400
    
    # Validate input
    is_valid, error_message = validate_input(data)
    if not is_valid:
        return jsonify({
            'error': 'Validation error',
            'message': error_message
        }), 400
    
    # Preprocess input
    try:
        features = preprocess_input(data)
    except ValueError as e:
        return jsonify({
            'error': 'Preprocessing error',
            'message': str(e)
        }), 400
    except Exception as e:
        return jsonify({
            'error': 'Unexpected preprocessing error',
            'message': str(e)
        }), 500
    
    # Make prediction
    try:
        # Get prediction (0 = not fraud, 1 = fraud)
        prediction = model.predict(features)[0]
        
        # Get prediction probability (confidence)
        probabilities = model.predict_proba(features)[0]
        confidence = float(max(probabilities))
        
        # Determine fraud risk level
        risk_level = "low"
        if prediction == 1:
            if confidence > 0.8:
                risk_level = "high"
            else:
                risk_level = "medium"
        
        return jsonify({
            'fraud': int(prediction),
            'confidence': round(confidence, 4),
            'risk_level': risk_level,
            'message': 'Prediction completed successfully',
            'details': {
                'prediction_type': 'fraud' if prediction == 1 else 'legitimate',
                'model_confidence': confidence
            }
        })
        
    except Exception as e:
        return jsonify({
            'error': 'Prediction error',
            'message': f'Error during model prediction: {str(e)}'
        }), 500

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({
        'error': 'Endpoint not found',
        'message': 'The requested endpoint does not exist',
        'available_endpoints': ['/', '/health', '/predict']
    }), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({
        'error': 'Internal server error',
        'message': 'An unexpected error occurred on the server'
    }), 500

def main():
    """Main function to start the server"""
    print("🚀 Starting Fraud Detection API Server")
    print("=" * 50)
    
    # Load model
    if not load_model():
        print("❌ Failed to start server - model loading failed")
        return
    
    print("🌐 Server starting on http://localhost:5000")
    print("📋 Available endpoints:")
    print("   GET  /           - API information")
    print("   GET  /health     - Health check")
    print("   POST /predict    - Fraud prediction")
    print("\n💡 Example usage:")
    print("   curl -X POST http://localhost:5000/predict \\")
    print("        -H 'Content-Type: application/json' \\")
    print("        -d '{\"type\":\"CASH_OUT\",\"amount\":1000,\"oldbalanceOrg\":5000,\"newbalanceOrig\":4000,\"oldbalanceDest\":1000,\"newbalanceDest\":2000}'")
    print("=" * 50)
    
    # Start Flask app
    app.run(host='0.0.0.0', port=5000, debug=True)

if __name__ == "__main__":
    main()
