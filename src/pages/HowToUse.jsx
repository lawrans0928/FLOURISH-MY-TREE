import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './HowToUse.css';

function HowToUse() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <div className="howto-screen">

          {/* Header */}
          <div className="howto-card">
            <div className="howto-logo">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <path d="M30 10 L15 30 L45 30 Z" fill="#0d5c4f" />
                <path d="M30 22 L10 48 L50 48 Z" fill="#0a4a3f" />
                <circle cx="42" cy="12" r="8" fill="#ef4444" />
              </svg>
            </div>
            <h1>
              <span className="subtitle">DECO MY TREE</span>
              <span className="title">HOW TO USE</span>
            </h1>
          </div>

          {/* Stats */}
          <div className="stats">
            <p>
              Globally, people receive <br />
              an average of 14.3 decorations
            </p>
          </div>

          {/* Steps */}
          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <p>Make Your Own Tree</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <p>Share Your Tree and Get Decos</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <p>Visit Friend&apos;s Tree and Start Deco</p>
            </div>
          </div>

          {/* Action */}
          <div className="actions">
            <button
              className="primary-btn"
              onClick={() => navigate('/create/name')}
            >
              NEXT
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HowToUse;
