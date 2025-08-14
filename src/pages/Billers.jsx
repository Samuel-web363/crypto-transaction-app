import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bitcoin, DollarSign, Zap } from 'lucide-react';

const Billers = () => {
  const navigate = useNavigate();

  const cryptocurrencies = [
    {
      id: 'bitcoin',
      name: 'Bitcoin (BTC)',
      description: 'The original cryptocurrency, known for its decentralized nature and limited supply.',
      icon: Bitcoin,
      color: '#f7931a',
      bgGradient: 'from-orange-500/20 to-yellow-500/20'
    },
    {
      id: 'tether',
      name: 'Tether (USDT)',
      description: 'A stablecoin pegged to the US dollar, providing stability in the volatile crypto market.',
      icon: DollarSign,
      color: '#26a17b',
      bgGradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'solana',
      name: 'Solana (SOL)',
      description: 'A high-performance blockchain platform designed for decentralized applications and scalable solutions.',
      icon: Zap,
      color: '#9945ff',
      bgGradient: 'from-purple-500/20 to-indigo-500/20'
    }
  ];

  const handleSelect = (crypto) => {
    localStorage.setItem('selectedCrypto', JSON.stringify(crypto));
    navigate('/form');
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Choose a cryptocurrency</h1>
        
        <div className="crypto-grid">
          {cryptocurrencies.map((crypto) => {
            const IconComponent = crypto.icon;
            return (
              <div key={crypto.id} className={`crypto-card bg-gradient-to-br ${crypto.bgGradient}`}>
                <div className="crypto-info">
                  <h3 className="crypto-name">{crypto.name}</h3>
                  <p className="crypto-description">{crypto.description}</p>
                  <button 
                    className="select-btn"
                    onClick={() => handleSelect(crypto)}
                  >
                    Select
                  </button>
                </div>
                <div className="crypto-icon-container">
                  <IconComponent 
                    className="crypto-icon" 
                    style={{ color: crypto.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Billers;