# Fraud Detection Dashboard

A complete React dashboard for real-time fraud detection with beautiful UI and comprehensive analytics.

## 🚀 Features

### **Core Functionality**
- ✅ Real-time fraud prediction via API
- ✅ Transaction form with validation
- ✅ Visual fraud alerts (Safe/Fraud)
- ✅ Transaction history tracking
- ✅ Live API status monitoring

### **Analytics & Charts**
- ✅ **Pie Chart**: Fraud vs Safe distribution
- ✅ **Bar Chart**: Recent transaction amounts
- ✅ **Risk Distribution**: Low/Medium/High risk levels
- ✅ **Statistics Cards**: Total, Safe, Fraud counts

### **UI/UX Features**
- ✅ Modern glassmorphism design
- ✅ Framer Motion animations
- ✅ Responsive layout (mobile/tablet/desktop)
- ✅ Loading states and error handling
- ✅ Real-time API status indicator

### **Technical Features**
- ✅ Axios for API calls
- ✅ Recharts for data visualization
- ✅ Custom hooks (useApiStatus)
- ✅ Modular component architecture
- ✅ TypeScript-ready structure

## 📁 File Structure

```
src/
├── pages/
│   └── Dashboard.jsx              # Main dashboard page
├── components/
│   ├── DashboardButton.jsx        # Dashboard navigation button
│   ├── TransactionForm.jsx        # Transaction input form
│   ├── FraudAlert.jsx             # Fraud detection alerts
│   ├── TransactionHistory.jsx     # Transaction history table
│   └── AnalyticsCharts.jsx        # Charts and analytics
├── hooks/
│   └── useApiStatus.js            # API status monitoring hook
└── App.jsx                        # Updated with dashboard route
```

## 🔗 API Integration

### **Backend Requirements**
- Flask API running at `http://localhost:5000`
- POST `/predict` endpoint
- GET `/health` endpoint

### **API Request Format**
```javascript
POST /predict
{
  "type": "CASH_OUT",
  "amount": 1000.0,
  "oldbalanceOrg": 5000.0,
  "newbalanceOrig": 4000.0,
  "oldbalanceDest": 1000.0,
  "newbalanceDest": 2000.0
}
```

### **API Response Format**
```javascript
{
  "fraud": 0,
  "confidence": 0.9876,
  "risk_level": "low",
  "message": "Prediction completed successfully"
}
```

## 🎨 UI Components

### **Transaction Form**
- Dropdown for transaction types
- Number inputs for amounts and balances
- Real-time validation
- Loading states
- Error handling

### **Fraud Alert**
- Color-coded alerts (Green=Safe, Red=Fraud)
- Confidence percentage
- Risk level indicators
- Recommended actions for fraud

### **Analytics Charts**
- **Fraud Distribution**: Pie chart showing safe vs fraud ratio
- **Transaction Amounts**: Bar chart of recent transactions
- **Risk Levels**: Distribution of low/medium/high risk

### **Transaction History**
- Sortable table with all predictions
- Color-coded rows based on fraud status
- Summary statistics
- Responsive design

## 🛠️ Setup Instructions

### **1. Install Dependencies**
```bash
npm install recharts axios
```

### **2. Start Backend**
```bash
# In Python environment
python app.py
```

### **3. Start Frontend**
```bash
npm run dev
```

### **4. Access Dashboard**
Navigate to: `http://localhost:5173/dashboard`

## 📊 Dashboard Sections

### **1. Header**
- Title and description
- Real-time API status indicator
- Animated entrance

### **2. Statistics Cards**
- Total transactions count
- Safe transactions count
- Fraud transactions count
- Animated counters

### **3. Transaction Form**
- Input fields for transaction data
- Real-time validation
- Submit button with loading state
- Error display

### **4. Fraud Alert**
- Appears after prediction
- Color-coded based on result
- Shows confidence and risk level
- Dismissible

### **5. Analytics Charts**
- Multiple chart types
- Real-time updates
- Interactive tooltips
- Responsive sizing

### **6. Transaction History**
- Complete transaction log
- Sortable columns
- Color-coded results
- Summary statistics

## 🎯 Key Features

### **Real-time API Monitoring**
- Automatic API health checks
- Visual status indicators
- Error recovery
- Timeout handling

### **Form Validation**
- Required field validation
- Numeric validation
- Positive number checks
- Real-time error messages

### **State Management**
- React hooks for state
- Transaction history persistence
- Loading states
- Error handling

### **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop layouts
- Touch-friendly controls

### **Animations**
- Framer Motion integration
- Smooth transitions
- Loading animations
- Micro-interactions

## 🔧 Customization

### **Colors**
```css
/* Primary colors */
--purple-500: #8b5cf6;
--pink-500: #ec4899;
--green-400: #10b981;
--red-400: #ef4444;
```

### **API Configuration**
```javascript
const API_BASE_URL = 'http://localhost:5000';
```

### **Chart Options**
- Customizable colors
- Responsive sizing
- Interactive tooltips
- Animation settings

## 🚨 Error Handling

### **API Errors**
- Network timeouts
- Server unavailable
- Invalid responses
- Connection errors

### **Validation Errors**
- Missing required fields
- Invalid numeric values
- Negative amounts
- Type mismatches

### **UI Errors**
- Loading states
- Empty states
- Error messages
- Recovery options

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔄 Data Flow

1. **User Input** → Form validation
2. **API Request** → Backend prediction
3. **Response Processing** → State update
4. **UI Update** → Charts and alerts
5. **History Storage** → Transaction log

## 🎯 Performance

- Optimized re-renders
- Efficient state management
- Lazy loading components
- Minimal API calls
- Responsive charts

## 🔒 Security

- Input sanitization
- XSS protection
- API timeout limits
- Error message filtering
- Secure data handling

## 📈 Scalability

- Component-based architecture
- Modular design
- Easy to extend
- Plugin-ready
- API-agnostic structure

The dashboard is production-ready and can handle thousands of transactions with smooth performance and beautiful visualizations.
