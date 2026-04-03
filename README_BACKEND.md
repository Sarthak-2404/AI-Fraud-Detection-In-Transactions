# Fraud Detection Backend

A complete fraud detection system built with Python, Flask, and Machine Learning.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Download Dataset
Download the PaySim dataset from Kaggle:
- 🔗 [PaySim Dataset](https://www.kaggle.com/datasets/ealaxi/paysim1)
- Place `PS_201743727_1493027263459746.csv` in the root directory

### 3. Train Model
```bash
python train.py
```

### 4. Start API Server
```bash
python app.py
```

## 📊 API Endpoints

### Home
```
GET http://localhost:5000/
```

### Health Check
```
GET http://localhost:5000/health
```

### Fraud Prediction
```
POST http://localhost:5000/predict
Content-Type: application/json

{
    "type": "CASH_OUT",
    "amount": 1000.0,
    "oldbalanceOrg": 5000.0,
    "newbalanceOrig": 4000.0,
    "oldbalanceDest": 1000.0,
    "newbalanceDest": 2000.0
}
```

**Response:**
```json
{
    "fraud": 0,
    "confidence": 0.9876,
    "risk_level": "low",
    "message": "Prediction completed successfully"
}
```

## 🛠️ Features

- **Machine Learning**: RandomForest classifier trained on PaySim dataset
- **Real-time Prediction**: Flask API for instant fraud detection
- **Memory Optimization**: Efficient data loading with sampling options
- **Error Handling**: Comprehensive validation and error responses
- **CORS Support**: Ready for React frontend integration
- **Production Ready**: Structured code with proper logging

## 📁 Files

- `train.py` - Model training script
- `app.py` - Flask API server
- `fraud_model.pkl` - Trained model (generated after training)
- `label_encoder.pkl` - Transaction type encoder (generated after training)
- `requirements.txt` - Python dependencies

## 🔧 Configuration

### Model Training
- Edit `SAMPLE_SIZE` in `train.py` to adjust dataset size
- Default: 100,000 samples (for memory optimization)
- Set to `None` to use full dataset

### API Server
- Default port: 5000
- Debug mode: Enabled
- CORS: Enabled for all origins

## 📈 Model Performance

The RandomForest classifier provides:
- High accuracy on fraud detection
- Fast prediction times (< 1ms)
- Confidence scores for risk assessment

## 🔍 Transaction Types

The system supports these transaction types:
- CASH_OUT
- CASH_IN
- DEBIT
- PAYMENT
- TRANSFER

## 🚨 Important Notes

1. **Dataset Required**: You must download the PaySim dataset before training
2. **Memory Usage**: Use sampling for large datasets
3. **Model Retraining**: Periodically retrain with new data for better accuracy
4. **Production**: Consider using a production WSGI server like Gunicorn

## 🐛 Troubleshooting

### Model Loading Error
```bash
❌ Error loading model files: [Errno 2] No such file or directory: 'fraud_model.pkl'
```
**Solution**: Run `python train.py` first to generate the model file.

### Dataset Not Found
```bash
❌ Error: Dataset file not found at PS_201743727_1493027263459746.csv
```
**Solution**: Download the PaySim dataset and place it in the root directory.

### Memory Issues
**Solution**: Reduce `SAMPLE_SIZE` in `train.py` or install more RAM.

## 🔗 Integration with React

The API is ready for frontend integration:

```javascript
const response = await fetch('http://localhost:5000/predict', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'CASH_OUT',
    amount: 1000,
    oldbalanceOrg: 5000,
    newbalanceOrig: 4000,
    oldbalanceDest: 1000,
    newbalanceDest: 2000
  })
});
const result = await response.json();
```

## 📝 License

This project is for educational and demonstration purposes.
