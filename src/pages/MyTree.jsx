import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyTree.css';

function MyTree() {
  const navigate = useNavigate();
  const [treeData, setTreeData] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('myTree'));
    if (!data) {
      navigate('/');
      return;
    }
    setTreeData(data);

    const interval = setInterval(() => {
      const christmas = new Date('2025-12-25T00:00:00');
      const now = new Date();
      const diff = christmas - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${days}d ${hours.toString().padStart(2, '0')}h ${minutes
          .toString()
          .padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  if (!treeData) return null;

  const copyLink = () => {
    const link = `${window.location.origin}/decorate/${treeData.treeId}`;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <div className="app-content">
          {/* Header */}
          <div className="header">
            <div className="timer">{timeLeft}</div>
            <button className="menu-btn" onClick={() => setShowMenu(true)}>
              ☰
            </button>
          </div>

          {/* Tree */}
          <div className="tree-section">
            <svg width="200" height="280" viewBox="0 0 200 280">
              <text x="100" y="30" fontSize="32" textAnchor="middle">
                {treeData.topper.emoji}
              </text>

              {treeData.treeStyle.colors.map((color, idx) => {
                const width = 40 + idx * 15;
                const y = 50 + idx * 35;
                return (
                  <ellipse
                    key={idx}
                    cx="100"
                    cy={y}
                    rx={width}
                    ry="20"
                    fill={color}
                    opacity="0.9"
                  />
                );
              })}

              <path d="M70 70 Q100 80 130 70" className="garland" />
              <path d="M60 110 Q100 125 140 110" className="garland" />
              <path d="M50 155 Q100 175 150 155" className="garland" />

              <text x="75" y="120" fontSize="24">🍪</text>
              <rect x="85" y="220" width="30" height="30" className="trunk" />
            </svg>

            <div className="carousel">
              <button>←</button>
              <span>1 / 1</span>
              <button>→</button>
            </div>

            <h2 className="tree-title">{treeData.name}'s Tree</h2>

            <div className="reactions">
              <span>❤️ 1</span>
              <span>🎄 1</span>
            </div>
          </div>

          {/* Share */}
          <div className="share-section">
            <button className="primary-btn" onClick={copyLink}>
              📋 Copy your link to share
            </button>
            <p>Share to get more ornaments!</p>
          </div>

          {/* Menu */}
          {showMenu && (
            <div className="menu-overlay">
              <button className="close-btn" onClick={() => setShowMenu(false)}>
                ✕
              </button>

              <h2>Hello, {treeData.name}!</h2>

              <div className="menu-buttons">
                <button>HELP CENTER</button>
                <button>FAQ</button>
                <button>Contact</button>
                <button>Settings</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyTree;
