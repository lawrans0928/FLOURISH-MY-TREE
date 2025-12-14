import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DecorateTree.css';

function DecorateTree() {
  const { treeId } = useParams();
  const navigate = useNavigate();

  const [treeData, setTreeData] = useState(null);
  const [yourName, setYourName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedOrnament, setSelectedOrnament] = useState('🎄');
  const [step, setStep] = useState(1);

  const ornaments = ['🎄', '⭐', '🎅', '❄️', '🎁', '🔔', '🕯️', '🦌', '🍪', '🧦', '🎀', '⛄'];

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('myTree'));
    if (!data || data.treeId !== treeId) {
      alert('Tree not found!');
      navigate('/');
      return;
    }
    setTreeData(data);
  }, [treeId, navigate]);

  const handleAddDecoration = () => {
    if (!yourName.trim()) {
      alert('Please enter your name!');
      return;
    }

    const decoration = {
      id: Date.now(),
      name: yourName,
      ornament: selectedOrnament,
      message,
      date: new Date().toISOString(),
    };

    const decorations = JSON.parse(
      localStorage.getItem('treeDecorations') || '[]'
    );

    decorations.push(decoration);
    localStorage.setItem('treeDecorations', JSON.stringify(decorations));

    alert('🎄 Decoration added! It will be revealed on Christmas Day!');
    navigate('/');
  };

  if (!treeData) return null;

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <div className="decorate-screen">

          {/* Header */}
          <div className="header">
            <button className="back-btn" onClick={() => navigate('/')}>←</button>
            <h2 className="header-title">
              Decorate {treeData.name}&apos;s Tree
            </h2>
            <div className="header-spacer" />
          </div>

          <div className="content">

            {/* =====================
                STEP 1 – ENTER NAME
            ===================== */}
            {step === 1 && (
              <>
                <h1>Who Are You?</h1>
                <p>Your name will appear with your decoration 🎄</p>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  maxLength={30}
                />

                <button
                  className="primary-btn"
                  disabled={!yourName.trim()}
                  onClick={() => setStep(2)}
                >
                  Continue
                </button>
              </>
            )}

            {/* =====================
                STEP 2 – ORNAMENT
            ===================== */}
            {step === 2 && (
              <>
                <h1>Choose an Ornament</h1>
                <p>Pick a decoration for {treeData.name}&apos;s tree!</p>

                <div className="tree-preview">
                  <svg width="180" height="220" viewBox="0 0 180 220">
                    <text x="90" y="25" fontSize="28" textAnchor="middle">
                      {treeData.topper.emoji}
                    </text>

                    {treeData.treeStyle.colors.map((color, idx) => {
                      const width = 35 + idx * 12;
                      const y = 40 + idx * 28;
                      return (
                        <ellipse
                          key={idx}
                          cx="90"
                          cy={y}
                          rx={width}
                          ry="16"
                          fill={color}
                          opacity="0.9"
                        />
                      );
                    })}

                    <rect x="77" y="170" width="26" height="28" rx="3" className="trunk" />
                    <text x="90" y="100" fontSize="24" textAnchor="middle">
                      {selectedOrnament}
                    </text>
                  </svg>
                </div>

                <div className="ornament-grid">
                  {ornaments.map((ornament) => (
                    <button
                      key={ornament}
                      className={`ornament-item ${
                        selectedOrnament === ornament ? 'active' : ''
                      }`}
                      onClick={() => setSelectedOrnament(ornament)}
                    >
                      {ornament}
                    </button>
                  ))}
                </div>

                <div className="actions-row">
                  <button className="btn-secondary" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button className="primary-btn" onClick={() => setStep(3)}>
                    Next
                  </button>
                </div>
              </>
            )}

            {/* =====================
                STEP 3 – MESSAGE
            ===================== */}
            {step === 3 && (
              <>
                <h1>Leave a Message</h1>
                <p>Your message will be revealed on Christmas Day 🎁</p>

                <textarea
                  placeholder="Write your Christmas message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={200}
                />

                <div className="actions-row">
                  <button className="btn-secondary" onClick={() => setStep(2)}>
                    Back
                  </button>
                  <button
                    className="primary-btn"
                    disabled={!message.trim()}
                    onClick={handleAddDecoration}
                  >
                    Add to Tree
                  </button>
                </div>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default DecorateTree;
