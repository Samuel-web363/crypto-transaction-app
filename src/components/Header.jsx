import { TrendingUp, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <TrendingUp className="logo-icon" />
          <span className="logo-text">Sam Crypto:Invest Smart</span>
        </div>

        <nav className="nav">
          <a href="/billers" className="nav-link">Home</a>
          <a className="nav-link">Sell</a>
          <a className="nav-link">Trade</a>
          <a className="nav-link">Earn</a>
          <a className="nav-link">Learn</a>
        </nav>


        <div className="header-actions">
          <Bell className="action-icon" />
          <div className="user-avatar">
            <User className="user-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;