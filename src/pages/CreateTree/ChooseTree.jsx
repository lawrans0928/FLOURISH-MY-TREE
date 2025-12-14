import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChooseTree.css';

function ChooseTree() {
  const navigate = useNavigate();
  const [selectedTree, setSelectedTree] = useState(0);

  const trees = [
    {
      id: 0,
      name: 'Rainbow Tree',
      colors: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'],
    },
    {
      id: 1,
      name: 'Dark Red Tree',
      colors: ['#8b0000', '#a00000', '#b00000'],
    },
    {
      id: 2,
      name: 'Classic Green Tree',
      colors: ['#0d5c4f', '#065f46', '#0a4a3f'],
    },
    {
      id: 3,
      name: 'Blue Tree',
      colors: ['#1e3a8a', '#1e40af', '#2563eb'],
    },
  ];

  const handleNext = () => {
    localStorage.setItem('treeStyle', JSON.stringify(trees[selectedTree]));
    navigate('/create/topper');
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
        <div className="choosetree-screen">

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
            <div className="progress-fill progress-40" />
          </div>

          {/* Content */}
          <div className="content">
            <h1>Choose a Tree</h1>

            <p>
              Choose wisely, because once you&apos;ve made your choice,
              <br />
              it&apos;s set in stone
            </p>

            {/* Carousel */}
            <div className="carousel">
              <button
                className="nav-btn"
                onClick={() => setSelectedTree((i) => Math.max(0, i - 1))}
                disabled={selectedTree === 0}
              >
                ←
              </button>

              <div className="tree-preview">
                <svg width="200" height="240" viewBox="0 0 200 240">
                  {trees[selectedTree].colors.map((color, idx) => {
                    const width = 40 + idx * 15;
                    const y = 30 + idx * 35;
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
                  <rect x="85" y="200" width="30" height="30" rx="3" className="trunk" />
                </svg>
              </div>

              <button
                className="nav-btn"
                onClick={() =>
                  setSelectedTree((i) => Math.min(trees.length - 1, i + 1))
                }
                disabled={selectedTree === trees.length - 1}
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

export default ChooseTree;
