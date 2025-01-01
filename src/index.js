// src/index.js
/**
 * FraudBusterClient class
 */
class FraudBusterClient {
  /**
   * @param {Object} options
   * @param {string} options.apiKey - Your API key
   * @param {string} [options.apiUrl] - The Fraud Buster API URL. 
   *                                    If not provided, reads from process.env.FRAUD_BUSTER_URL
   */
  constructor({ apiKey, apiUrl }) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl || process.env.REACT_APP_FRAUD_BUSTER_URL; // Use environment variable for React
    if (!this.apiKey) {
      throw new Error("API key is required to initialize FraudBusterClient.");
    }
    if (!this.apiUrl) {
      throw new Error(
        "API URL is required. Set REACT_APP_FRAUD_BUSTER_URL in environment or pass it in constructor."
      );
    }
  }

  /**
   * Evaluate a transaction with the Fraud Buster API
   * @param {Object} transactionData - The transaction details
   * @returns {Promise<Object>} - The response from the API
   */
  async evaluateTransaction(transactionData) {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
      },
      body: JSON.stringify(transactionData),
    });

    if (!response.ok) {
      const errorMsg = await response.text();
      throw new Error(
        `Fraud Buster API request failed with status ${response.status}: ${errorMsg}`
      );
    }

    return response.json();
  }
}

export default FraudBusterClient;

