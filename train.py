#!/usr/bin/env python3
"""
Fraud Detection Model Training Script
=====================================

This script trains a RandomForest classifier on the PaySim dataset
to detect fraudulent transactions.

Requirements:
- pandas
- numpy
- scikit-learn
- joblib

Usage:
    python train.py
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
from sklearn.preprocessing import LabelEncoder
import joblib
import warnings
warnings.filterwarnings('ignore')

def load_and_preprocess_data(csv_path, sample_size=None):
    """
    Load and preprocess the PaySim dataset
    
    Args:
        csv_path (str): Path to the CSV file
        sample_size (int): Optional sample size for memory optimization
    
    Returns:
        pd.DataFrame: Preprocessed dataset
    """
    print("📊 Loading dataset...")
    
    # Define required columns to reduce memory usage
    required_columns = [
        'type', 'amount', 'oldbalanceOrg', 'newbalanceOrig',
        'oldbalanceDest', 'newbalanceDest', 'isFraud'
    ]
    
    try:
        # Load dataset with only required columns
        if sample_size:
            df = pd.read_csv(csv_path, usecols=required_columns)
            df = df.sample(n=sample_size, random_state=42)
            print(f"📈 Using sample of {sample_size} records")
        else:
            df = pd.read_csv(csv_path, usecols=required_columns)
            print(f"📈 Loaded full dataset with {len(df)} records")
            
    except FileNotFoundError:
        print(f"❌ Error: Dataset file not found at {csv_path}")
        print("💡 Please download the PaySim dataset and place it in the root directory")
        print("🔗 Dataset: https://www.kaggle.com/datasets/ealaxi/paysim1")
        return None
    
    # Display basic info
    print(f"📋 Dataset shape: {df.shape}")
    print(f"🔍 Fraud cases: {df['isFraud'].sum()} ({df['isFraud'].mean()*100:.2f}%)")
    
    return df

def preprocess_features(df):
    """
    Preprocess features for training
    
    Args:
        df (pd.DataFrame): Raw dataset
    
    Returns:
        tuple: (X, y, label_encoder)
    """
    print("🔧 Preprocessing features...")
    
    # Make a copy to avoid modifying original data
    df_processed = df.copy()
    
    # Convert 'type' column to numeric using label encoding
    label_encoder = LabelEncoder()
    df_processed['type_encoded'] = label_encoder.fit_transform(df_processed['type'])
    
    # Drop original 'type' column and any other unnecessary columns
    # (nameOrig and nameDest were already excluded during loading)
    df_processed = df_processed.drop('type', axis=1)
    
    # Separate features and target
    X = df_processed.drop('isFraud', axis=1)
    y = df_processed['isFraud']
    
    print(f"✅ Features shape: {X.shape}")
    print(f"🎯 Target distribution: {y.value_counts().to_dict()}")
    
    return X, y, label_encoder

def train_model(X, y):
    """
    Train RandomForest classifier
    
    Args:
        X (pd.DataFrame): Features
        y (pd.Series): Target variable
    
    Returns:
        tuple: (model, X_test, y_test)
    """
    print("🚀 Training model...")
    
    # Split dataset into train/test (80/20)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    print(f"📚 Training set: {X_train.shape}")
    print(f"🧪 Test set: {X_test.shape}")
    
    # Initialize RandomForest with reasonable defaults
    rf_model = RandomForestClassifier(
        n_estimators=50,
        max_depth=10,
        min_samples_split=5,
        min_samples_leaf=2,
        random_state=42,
        n_jobs=-1  # Use all available cores
    )
    
    # Train the model
    rf_model.fit(X_train, y_train)
    print("✅ Model training completed!")
    
    return rf_model, X_test, y_test

def evaluate_model(model, X_test, y_test):
    """
    Evaluate model performance
    
    Args:
        model: Trained model
        X_test: Test features
        y_test: Test target
    
    Returns:
        dict: Evaluation metrics
    """
    print("📊 Evaluating model...")
    
    # Make predictions
    y_pred = model.predict(X_test)
    
    # Calculate metrics
    accuracy = accuracy_score(y_test, y_pred)
    
    print(f"\n🎯 Model Performance:")
    print(f"📈 Accuracy: {accuracy:.4f}")
    print(f"📋 Classification Report:")
    print(classification_report(y_test, y_pred))
    
    return {
        'accuracy': accuracy,
        'classification_report': classification_report(y_test, y_pred)
    }

def save_model(model, label_encoder, model_path='fraud_model.pkl', encoder_path='label_encoder.pkl'):
    """
    Save trained model and label encoder
    
    Args:
        model: Trained model
        label_encoder: Fitted label encoder
        model_path (str): Path to save model
        encoder_path (str): Path to save encoder
    """
    print("💾 Saving model...")
    
    # Save model
    joblib.dump(model, model_path)
    print(f"✅ Model saved to {model_path}")
    
    # Save label encoder
    joblib.dump(label_encoder, encoder_path)
    print(f"✅ Label encoder saved to {encoder_path}")

def main():
    """Main training pipeline"""
    print("🔥 Starting Fraud Detection Model Training")
    print("=" * 50)
    
    # Configuration
    CSV_PATH = "PS_201743727_1493027263459746.csv"  # PaySim dataset filename
    SAMPLE_SIZE = 100000  # Use 100k samples for memory optimization (set to None for full dataset)
    
    # Load and preprocess data
    df = load_and_preprocess_data(CSV_PATH, SAMPLE_SIZE)
    if df is None:
        return
    
    # Preprocess features
    X, y, label_encoder = preprocess_features(df)
    
    # Train model
    model, X_test, y_test = train_model(X, y)
    
    # Evaluate model
    metrics = evaluate_model(model, X_test, y_test)
    
    # Save model
    save_model(model, label_encoder)
    
    print("\n🎉 Training pipeline completed successfully!")
    print("=" * 50)
    print("📝 Next steps:")
    print("1. Run 'python app.py' to start the API server")
    print("2. Send POST requests to http://localhost:5000/predict")

if __name__ == "__main__":
    main()
