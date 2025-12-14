import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SetPassword.css';

function SetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleCreateTree = () => {
    if (password.trim().length >= 8) {
      const treeData = {
        name: localStorage.getItem('userName'),
        treeStyle: JSON.parse(localStorage.getItem('treeStyle')),
        topper: JSON.parse(localStorage.getItem('treeTopper')),
        email: localStorage.getItem('userEmail'),
        password,
        createdAt: new Date().toISOString(),
        treeId: Math.random().toString(36).substr(2, 9),
      };

      localStorage.setItem('myTree', JSON.stringify(treeData));
      navigate('/my-tree');
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
        <div className="setpassword-screen">

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
            <div className="progress-fill progress-100" />
          </div>

          {/* Content */}
          <div className="content">
            <h1>
              Set a Password, <br /> Protect Your Tree
            </h1>

            <p>Set a secure password, at least 8 characters</p>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
            />

            <button
              className="primary-btn"
              onClick={handleCreateTree}
              disabled={password.length < 8}
            >
              Make My Tree
            </button>

            <p className="legal">
              Please proceed by agreeing to the{' '}
              <span>Terms of Use</span> and <span>Privacy Policy</span>, which are necessary for the operation, maintenance,
               and improvement of the flourish My Tree service.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SetPassword;
