import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    localStorage.removeItem('selectedCrypto');
    localStorage.removeItem('transactionData');
    navigate('/billers');
  };

  return (
    <div className="page-container">
      <div className="success-container">
        <h1 className="page-title">Your transaction is on its way!</h1>

        <div className="success-card">
          <div className="success-icon">
            <Check className="check-icon" />
          </div>
        </div>

        <p className="success-message">Estimated arrival time: 10 minutes</p>

        <button className="back-home-btn" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
