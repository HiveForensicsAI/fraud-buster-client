
---

# **Fraud Buster Client**

A modern client library for integrating **Hive Forensics A.I. Inc.**'s **Fraud Buster API** into your **Node.js** or **React** projects. This package provides a simple and efficient way to connect to the API, submit transaction details, and receive real-time risk assessments.

---

## **Features**

- Lightweight and optimized for both **Node.js** and **browser** environments (React compatible).
- Supports fraud detection for transactions.
- Simple integration using **async/await**.
- **Built-in error handling** for robust production deployments.

---

## **Installation**

Install the package via npm:

```bash
npm install fraud-buster-client
```

---

## **Configuration**

Set the **API URL** and **API key** in your environment variables. 

Example **`.env` file** for **Node.js** or **React** projects:

```bash
FRAUD_BUSTER_URL="http://localhost:8000/api/transaction"
API_KEY="your-api-key-here"
```

> Alternatively, you can pass the API URL and API key **directly** when creating the client instance.

---

## **Usage**

### **React Frontend Example**

1. **Import and initialize the client:**
```javascript
import FraudBusterClient from 'fraud-buster-client';

const fraudClient = new FraudBusterClient({
  apiKey: process.env.API_KEY, // Environment variable
});
```

2. **Evaluate a transaction:**
```javascript
(async () => {
  try {
    const transactionData = {
      product: "Rolex Watch",
      amount: 9500,
      location: "Florida",
      time: "2024-03-04T10:30:00Z",
      customerProfile: "Tech Enthusiast",
      onlinePurchase: true,
      paymentMethod: "Amex",
      shippingAddress: "PO BOX 8877 Los Angeles CA 90210",
      billingAddress: "2125 SW 955 Ave Miami Florida 33156",
      customerEmail: "sam@protonmail.com",
      customerName: "Steven Smith",
      isVPN: false,
      clientBrowser: "Chrome",
      deviceType: "Desktop",
      ipAddress: "192.168.1.186",
      deviceFingerprint: "abcd1234efgh5678",
      transactionFrequency: 2,
      accountAge: 365,
      emailDomain: "protonmail.com",
      addressMismatch: true,
      twoFactorAuth: false,
      referralSource: "Google Search",
      proxyOrVPN: true,
      orderQuantity: 1,
      strictness: 50
    };

    const response = await fraudClient.evaluateTransaction(transactionData);
    console.log("Fraud Assessment Result:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
```

---

### **Node.js Backend Example**

```javascript
const FraudBusterClient = require('fraud-buster-client');

const fraudClient = new FraudBusterClient({
  apiKey: process.env.API_KEY,
  apiUrl: process.env.FRAUD_BUSTER_URL,
});

(async () => {
  try {
    const transactionData = { 
      product: "MacBook Pro",
      amount: 2500,
      paymentMethod: "Visa",
      ipAddress: "192.168.1.100",
      onlinePurchase: true
    };

    const response = await fraudClient.evaluateTransaction(transactionData);
    console.log("Fraud Assessment Result:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
```

---

## **Response Format**

A typical API response includes:

```json
{
  "transactionId": "821c09c1-fdaa-4199-b3ea-c4b715f8a150",
  "ConfidenceLevel": "Medium",
  "Result": "Failed"
}
```

### **Risk Level Definitions**

| **Risk Level** | **Description**                           |
|----------------|-------------------------------------------|
| `0`            | Critical Risk - Immediate Failure         |
| `1`            | High Risk - Manual Verification Required  |
| `2`            | Failed                                    |
| `3`            | Monitor Closely - Review Logs             |
| `4`            | Low Risk - Auto Approved                  |
| `5`            | Safe Zone - Pass                          |
| `6`            | Caution - Review Recommended              |
| `7`            | Additional Verification Needed (Fallback) |

---

## **License**

This package is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## **About**

Developed by **Hive Forensics A.I. Inc.**  
[Visit us at hiveforensics.com](https://hiveforensics.com)

---

### **Key Updates**
1. **Standardized Environment Variables**  
   - Replaced `REACT_APP_FRAUD_BUSTER_URL` → `FRAUD_BUSTER_URL` for consistency in Node.js and React.
   
2. **Enhanced Error Handling**  
   - The API client now logs errors before rethrowing them for better debugging.

3. **Updated Example Code**  
   - Made frontend and backend examples clearer.

---

