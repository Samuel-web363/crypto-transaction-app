import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Form = () => {
  const navigate = useNavigate();
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [formData, setFormData] = useState({
    walletAddress: '',
    arrivalTime: '',
    notes: ''
  });

  useEffect(() => {
    const crypto = localStorage.getItem('selectedCrypto');
    if (crypto) {
      setSelectedCrypto(JSON.parse(crypto));
    } else {
      navigate('/billers');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContinue = () => {
    if (formData.walletAddress && formData.arrivalTime) {
      localStorage.setItem('transactionData', JSON.stringify({
        ...formData,
        crypto: selectedCrypto
      }));
      navigate('/summary');
    }
  };

  if (!selectedCrypto) return null;

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="page-title">Send {selectedCrypto.name.split(' ')[0]}</h1>
        
        <div className="form-group">
          <label className="form-label">Wallet Address</label>
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleInputChange}
            placeholder="Enter wallet address"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Expected Arrival Time</label>
          <div className="select-wrapper">
            <select
              name="arrivalTime"
              value={formData.arrivalTime}
              onChange={handleInputChange}
              className="form-select"
              required
            >
              <option value="">Select arrival time</option>
              <option value="within-10-minutes">Within 10 minutes</option>
              <option value="within-30-minutes">Within 30 minutes</option>
              <option value="within-1-hour">Within 1 hour</option>
              <option value="within-24-hours">Within 24 hours</option>
            </select>
            <ChevronDown className="select-icon" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Optional Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Add notes (optional)"
            className="form-textarea"
            rows="4"
          />
        </div>

        <button 
          className="continue-btn"
          onClick={handleContinue}
          disabled={!formData.walletAddress || !formData.arrivalTime}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Form;