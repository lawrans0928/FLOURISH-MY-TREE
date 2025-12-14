import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnterEmail.css';

function EnterEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (email.trim() && email.includes('@')) {
      localStorage.setItem('userEmail', email);
      navigate('/create/password');
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <div className="enteremail-screen">

          {/* Header */}
          <div className="header">
            <button className="back-btn" onClick={() => navigate(-1)}>
              ←
            </button>

            <h2 className="header-title">Make My Tree</h2>

            <div className="header-spacer"></div>
          </div>

          {/* Progress */}
          <div className="progress-bar">
            <div className="progress-fill progress-80" />
          </div>

          {/* Content */}
          <div className="content">
            <h1>Enter Your Email</h1>

            <p>Email will be used to manage your tree</p>

            <input
              type="email"
              placeholder="lawrans@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="primary-btn"
              onClick={handleNext}
              disabled={!email.trim() || !email.includes('@')}
            >
              NEXT
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EnterEmail;
