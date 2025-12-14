import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnterName.css';

function EnterName() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleNext = () => {
    if (name.trim()) {
      localStorage.setItem('userName', name);
      navigate('/create/tree');
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
        <div className="entername-screen">

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
            <div className="progress-fill" />
          </div>

          {/* Content */}
          <div className="content">
            <h1>
              What&apos;s Your <br /> Name?
            </h1>

            <p>
              Something recognizable by your friends <br />
              You can&apos;t change this afterwards!
            </p>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={30}
            />

            <button
              className="secondary-btn"
              onClick={handleNext}
              disabled={!name.trim()}
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EnterName;
