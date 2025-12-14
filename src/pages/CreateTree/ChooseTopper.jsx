import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChooseTopper.css';

function ChooseTopper() {
  const navigate = useNavigate();
  const [selectedTopper, setSelectedTopper] = useState(0);

  const toppers = [
    { id: 0, emoji: '🎅', name: 'Santa Hat' },
    { id: 1, emoji: '⭐', name: 'Star' },
    { id: 2, emoji: '💵', name: 'Money' },
    { id: 3, emoji: '💎', name: 'Diamond' },
    { id: 4, emoji: '🪐', name: 'Planet' },
    { id: 5, emoji: '❤️', name: 'Heart' },
    { id: 6, emoji: '👑', name: 'Crown' },
    { id: 7, emoji: '🎁', name: 'Gift' },
  ];

  const treeStyle = JSON.parse(
    localStorage.getItem('treeStyle') ||
      '{"colors":["#0d5c4f","#065f46","#0a4a3f"]}'
  );

  const handleNext = () => {
    localStorage.setItem('treeTopper', JSON.stringify(toppers[selectedTopper]));
    navigate('/create/email');
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
        <div className="choosetopper-screen">

          {/* Header */}
          <div className="header">
            <button className="back-btn" onClick={() => navigate(-1)}>
              ←
            </button>
            <h2 className="header-title">Make My Tree</h2>
            <div className="header-spacer" />
          </div>

          {/* Progress */}
          <div className="progress-bar">
            <div className="progress-fill progress-60" />
          </div>

          {/* Content */}
          <div className="content">
            <h1>
              Pick a <br /> Tree-topper
            </h1>

            {/* Tree Preview */}
            <div className="tree-preview">
              <svg width="180" height="220" viewBox="0 0 180 220">
                <text x="90" y="25" fontSize="32" textAnchor="middle">
                  {toppers[selectedTopper].emoji}
                </text>

                {treeStyle.colors.map((color, idx) => {
                  const width = 35 + idx * 12;
                  const y = 40 + idx * 30;
                  return (
                    <ellipse
                      key={idx}
                      cx="90"
                      cy={y}
                      rx={width}
                      ry="18"
                      fill={color}
                      opacity="0.9"
                    />
                  );
                })}

                <rect
                  x="77"
                  y="180"
                  width="26"
                  height="28"
                  rx="3"
                  className="trunk"
                />
              </svg>
            </div>

            {/* Topper Carousel */}
            <div className="carousel">
              <button
                className="nav-btn"
                onClick={() => setSelectedTopper((i) => Math.max(0, i - 1))}
                disabled={selectedTopper === 0}
              >
                ←
              </button>

              <div className="topper-list">
                {toppers
                  .slice(Math.max(0, selectedTopper - 1), selectedTopper + 3)
                  .map((topper) => (
                    <button
                      key={topper.id}
                      className={`topper-item ${
                        selectedTopper === topper.id ? 'active' : ''
                      }`}
                      onClick={() => setSelectedTopper(topper.id)}
                    >
                      {topper.emoji}
                    </button>
                  ))}
              </div>

              <button
                className="nav-btn"
                onClick={() =>
                  setSelectedTopper((i) =>
                    Math.min(toppers.length - 1, i + 1)
                  )
                }
                disabled={selectedTopper === toppers.length - 1}
              >
                →
              </button>
            </div>

            <button className="primary-btn" onClick={handleNext}>
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ChooseTopper;
