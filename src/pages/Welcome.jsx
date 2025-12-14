import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="app-wrapper">
        <div className="mobile-container">
          <div className="loading-screen">
            <div className="loading-bars">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
            </div>
            <h2>LOADING</h2>
            <p>
              People received <br />
              an average of 15.7 messages
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <div className="welcome-screen">

          {/* Header */}
          <div className="welcome-card">
            <div className="logo">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <path d="M40 10 L20 40 L60 40 Z" fill="#0d5c4f" />
                <path d="M40 30 L15 65 L65 65 Z" fill="#0a4a3f" />
                <circle cx="55" cy="15" r="10" fill="#ef4444" />
              </svg>
            </div>
            <h1>
              <span className="subtitle">WELCOME TO</span>
              <span className="title">DECO MY TREE</span>
            </h1>
          </div>

          {/* Tree Illustration */}
          <div className="tree-wrapper">
            <svg width="200" height="280" viewBox="0 0 200 280">
              <circle cx="100" cy="15" r="12" fill="#fbbf24" />
              <text x="100" y="22" fontSize="16" textAnchor="middle">⭐</text>

              <path d="M100 30 L70 70 L130 70 Z" fill="#0d5c4f" />
              <path d="M100 60 L60 110 L140 110 Z" fill="#065f46" />
              <path d="M100 95 L50 155 L150 155 Z" fill="#0d5c4f" />
              <path d="M100 135 L40 200 L160 200 Z" fill="#065f46" />

              <rect x="85" y="200" width="30" height="30" rx="3" fill="#92400e" />

              <circle cx="85" cy="80" r="4" className="ornament red" />
              <circle cx="115" cy="85" r="4" className="ornament blue delay-1" />
              <circle cx="80" cy="120" r="4" className="ornament yellow delay-2" />
              <circle cx="120" cy="125" r="4" className="ornament red delay-3" />
              <circle cx="70" cy="165" r="4" className="ornament blue delay-4" />
              <circle cx="130" cy="170" r="4" className="ornament yellow delay-5" />
            </svg>

            <div className="presents">
              <span className="gift green"></span>
              <span className="gift purple"></span>
              <span className="gift blue"></span>
              <span className="gift red"></span>
            </div>

            <div className="reindeer">🦌</div>
          </div>

          {/* Actions */}
          <div className="actions">
            <button className="primary-btn" onClick={() => navigate('/how-to-use')}>
              Make My Tree
            </button>

            <button className="link-btn" onClick={() => navigate('/login')}>
              I Already Have a Tree
            </button>

            <button className="help-btn">❓</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Welcome;
