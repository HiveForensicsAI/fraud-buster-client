### **README.md**

```markdown
# Fraud Buster Client

A modern client library for integrating Hive Forensics A.I. Inc.'s Fraud Buster API into your Node.js or React projects. This package provides a simple and efficient way to connect to the API, submit transaction details, and receive real-time risk assessments.

---

## **Features**

- Lightweight and optimized for both Node.js and browser environments (React compatible).
- Supports customizable strictness for fraud detection.
- Simple integration with `async/await` for modern applications.
- Built-in error handling for robust production deployments.

---

## **Installation**

Install the package via npm:

```bash
npm install fraud-buster-client
```

---

## **Configuration**

Set the API URL in your environment configuration. For example:

- Add a `.env` file to your project (for React or Node.js):

```bash
REACT_APP_FRAUD_BUSTER_URL="http://localhost:8000/api/transaction"
REACT_APP_API_KEY="your-api-key-here"
```

> Alternatively, pass the API URL and API key directly to the client constructor.

---

## **Usage**

### **React Frontend Example**

1. Import and initialize the client:

```javascript
import FraudBusterClient from 'fraud-buster-client';

const fraudClient = new FraudBusterClient({
  apiKey: process.env.REACT_APP_API_KEY,
});
```

2. Use the client to evaluate a transaction:

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
      ipAddress: "352.168.1.186",
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

### **Node.js Backend Example**

```javascript
const FraudBusterClient = require('fraud-buster-client');

const fraudClient = new FraudBusterClient({
  apiKey: process.env.API_KEY,
  apiUrl: process.env.FRAUD_BUSTER_URL,
});

(async () => {
  try {
    const transactionData = { /* transaction data here */ };
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
|-----------------|-------------------------------------------|
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

This package is licensed under the MIT License. See the LICENSE file for details.

---

## **About**

Developed by **Hive Forensics A.I. Inc.**  
[Visit us at hiveforensics.com](https://hiveforensics.com)
```

---

### **Key Updates**

1. **React Compatibility**: Explicitly highlighted React usage with environment variables (`REACT_APP_*`).
2. **Backend and Frontend Examples**: Separate examples for Node.js and React.
3. **Enhanced Professionalism**: Polished language to reflect branding and professionalism.

Let me know if you need further modifications!