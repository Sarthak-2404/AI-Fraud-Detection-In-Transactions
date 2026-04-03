#!/usr/bin/env python3
"""
Test script for Fraud Detection API
===================================

This script tests the fraud detection API endpoints with sample data.

Usage:
    python test_api.py
"""

import requests
import json
import time

# API base URL
BASE_URL = "http://localhost:5000"

def test_health():
    """Test health check endpoint"""
    print("🏥 Testing health check...")
    try:
        response = requests.get(f"{BASE_URL}/health")
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Health check failed: {e}")
        return False

def test_home():
    """Test home endpoint"""
    print("\n🏠 Testing home endpoint...")
    try:
        response = requests.get(f"{BASE_URL}/")
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ Home endpoint failed: {e}")
        return False

def test_prediction():
    """Test fraud prediction endpoint"""
    print("\n🔮 Testing fraud prediction...")
    
    # Test cases: legitimate and fraudulent transactions
    test_cases = [
        {
            "name": "Legitimate Transaction",
            "data": {
                "type": "CASH_OUT",
                "amount": 1000.0,
                "oldbalanceOrg": 5000.0,
                "newbalanceOrig": 4000.0,
                "oldbalanceDest": 1000.0,
                "newbalanceDest": 2000.0
            }
        },
        {
            "name": "Suspicious Transaction",
            "data": {
                "type": "TRANSFER",
                "amount": 1000000.0,
                "oldbalanceOrg": 1000000.0,
                "newbalanceOrig": 0.0,
                "oldbalanceDest": 1000000.0,
                "newbalanceDest": 1000000.0
            }
        }
    ]
    
    for test_case in test_cases:
        print(f"\n📊 Testing: {test_case['name']}")
        try:
            response = requests.post(
                f"{BASE_URL}/predict",
                json=test_case['data'],
                headers={'Content-Type': 'application/json'}
            )
            print(f"Status: {response.status_code}")
            print(f"Response: {json.dumps(response.json(), indent=2)}")
        except Exception as e:
            print(f"❌ Prediction failed: {e}")

def test_invalid_input():
    """Test invalid input handling"""
    print("\n🚫 Testing invalid input handling...")
    
    invalid_cases = [
        {
            "name": "Missing field",
            "data": {
                "type": "CASH_OUT",
                "amount": 1000.0
                # Missing other required fields
            }
        },
        {
            "name": "Invalid type",
            "data": {
                "type": 123,  # Should be string
                "amount": 1000.0,
                "oldbalanceOrg": 5000.0,
                "newbalanceOrig": 4000.0,
                "oldbalanceDest": 1000.0,
                "newbalanceDest": 2000.0
            }
        },
        {
            "name": "Negative amount",
            "data": {
                "type": "CASH_OUT",
                "amount": -1000.0,  # Should not be negative
                "oldbalanceOrg": 5000.0,
                "newbalanceOrig": 4000.0,
                "oldbalanceDest": 1000.0,
                "newbalanceDest": 2000.0
            }
        }
    ]
    
    for test_case in invalid_cases:
        print(f"\n❌ Testing: {test_case['name']}")
        try:
            response = requests.post(
                f"{BASE_URL}/predict",
                json=test_case['data'],
                headers={'Content-Type': 'application/json'}
            )
            print(f"Status: {response.status_code}")
            print(f"Response: {json.dumps(response.json(), indent=2)}")
            
            # Should return 400 for invalid input
            if response.status_code != 400:
                print(f"⚠️  Expected 400 status, got {response.status_code}")
        except Exception as e:
            print(f"❌ Test failed: {e}")

def main():
    """Main test function"""
    print("🧪 Starting API Tests")
    print("=" * 50)
    
    # Wait a moment for server to start (if called immediately after app.py)
    time.sleep(2)
    
    # Run tests
    health_ok = test_health()
    home_ok = test_home()
    
    if health_ok:
        test_prediction()
        test_invalid_input()
    else:
        print("\n❌ Server not responding - make sure app.py is running")
        print("💡 Run: python app.py")
    
    print("\n🏁 Tests completed!")

if __name__ == "__main__":
    main()
