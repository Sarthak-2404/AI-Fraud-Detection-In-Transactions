#!/usr/bin/env python3
"""
Backend Setup Script
====================

This script helps set up the fraud detection backend by:
1. Creating a virtual environment
2. Installing dependencies
3. Providing setup instructions

Usage:
    python setup_backend.py
"""

import subprocess
import sys
import os

def run_command(command, description):
    """Run a command and handle errors"""
    print(f"🔧 {description}...")
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✅ {description} completed successfully")
            return True
        else:
            print(f"❌ {description} failed:")
            print(f"Error: {result.stderr}")
            return False
    except Exception as e:
        print(f"❌ {description} failed: {e}")
        return False

def check_python_version():
    """Check if Python version is compatible"""
    print("🐍 Checking Python version...")
    version = sys.version_info
    if version.major >= 3 and version.minor >= 7:
        print(f"✅ Python {version.major}.{version.minor}.{version.micro} is compatible")
        return True
    else:
        print(f"❌ Python {version.major}.{version.minor}.{version.micro} is not compatible")
        print("💡 Please use Python 3.7 or higher")
        return False

def create_virtual_environment():
    """Create virtual environment"""
    venv_name = "fraud_detection_env"
    if not os.path.exists(venv_name):
        return run_command(f"python -m venv {venv_name}", f"Creating virtual environment '{venv_name}'")
    else:
        print(f"✅ Virtual environment '{venv_name}' already exists")
        return True

def activate_virtual_environment():
    """Get activation command for virtual environment"""
    if sys.platform == "win32":
        return "fraud_detection_env\\Scripts\\activate"
    else:
        return "source fraud_detection_env/bin/activate"

def install_dependencies():
    """Install Python dependencies"""
    return run_command(
        "pip install -r requirements.txt",
        "Installing Python dependencies"
    )

def check_dataset():
    """Check if dataset exists"""
    dataset_file = "PS_201743727_1493027263459746.csv"
    if os.path.exists(dataset_file):
        print(f"✅ Dataset '{dataset_file}' found")
        return True
    else:
        print(f"❌ Dataset '{dataset_file}' not found")
        print("💡 Please download the PaySim dataset from:")
        print("   https://www.kaggle.com/datasets/ealaxi/paysim1")
        print("   and place it in the current directory")
        return False

def main():
    """Main setup function"""
    print("🚀 Fraud Detection Backend Setup")
    print("=" * 50)
    
    # Check Python version
    if not check_python_version():
        return
    
    # Create virtual environment
    if not create_virtual_environment():
        print("❌ Setup failed - could not create virtual environment")
        return
    
    # Install dependencies
    print("\n📦 Installing dependencies...")
    print("💡 If this fails, manually run:")
    print(f"   {activate_virtual_environment()}")
    print("   pip install -r requirements.txt")
    
    if not install_dependencies():
        print("❌ Setup failed - could not install dependencies")
        return
    
    # Check dataset
    print("\n📊 Checking dataset...")
    dataset_ok = check_dataset()
    
    # Setup complete
    print("\n🎉 Setup completed!")
    print("=" * 50)
    
    print("\n📝 Next steps:")
    print("1. Activate virtual environment:")
    print(f"   {activate_virtual_environment()}")
    
    if not dataset_ok:
        print("\n2. Download and setup dataset:")
        print("   - Download from: https://www.kaggle.com/datasets/ealaxi/paysim1")
        print("   - Place 'PS_201743727_1493027263459746.csv' in this directory")
        print("   - Or run with a different dataset by modifying 'train.py'")
    
    print("\n3. Train the model:")
    print("   python train.py")
    
    print("\n4. Start the API server:")
    print("   python app.py")
    
    print("\n5. Test the API:")
    print("   python test_api.py")
    
    print("\n🔗 API will be available at: http://localhost:5000")
    print("\n📚 For more information, see README_BACKEND.md")

if __name__ == "__main__":
    main()
