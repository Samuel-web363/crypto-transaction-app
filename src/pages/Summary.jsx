import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bitcoin, Wallet, Clock } from 'lucide-react';

const Summary = () => {
  const navigate = useNavigate();
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('transactionData');
    if (data) {
      setTransactionData(JSON.parse(data));
    } else {
      navigate('/billers');
    }
  }, [navigate]);

  const handleSubmit = () => {
    navigate('/success');
  };

  const formatArrivalTime = (time) => {
    return time;
  };

  if (!transactionData) return null;

  return (
    <div className="page-container">
      <div className="summary-container">
        <h1 className="page-title">Confirm your transaction</h1>
        
        <div className="summary-details">
          <div className="summary-item">
            <div className="summary-icon">
              <Bitcoin />
            </div>
            <div className="summary-info">
              <div className="summary-label">{transactionData.crypto.name.split(' ')[0]}</div>
              <div className="summary-value">{transactionData.crypto.name}</div>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-icon">
              <Wallet />
            </div>
            <div className="summary-info">
              <div className="summary-label">Wallet Address</div>
              <div className="summary-value summary-address">
                {transactionData.walletAddress}
              </div>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-icon">
              <Clock />
            </div>
            <div className="summary-info">
              <div className="summary-label">Estimated Arrival</div>
              <div className="summary-value">
                {formatArrivalTime(transactionData.arrivalTime)}
              </div>
            </div>
          </div>

          {transactionData.notes && (
            <div className="summary-notes">
              <h4>Notes:</h4>
              <p>{transactionData.notes}</p>
            </div>
          )}
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
