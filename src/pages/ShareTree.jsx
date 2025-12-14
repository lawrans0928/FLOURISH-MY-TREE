import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ShareTree() {
  const navigate = useNavigate();
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('myTree'));
    if (!data) {
      navigate('/');
      return;
    }
    setTreeData(data);
  }, [navigate]);

  if (!treeData) return null;

  const shareLink = `${window.location.origin}/decorate/${treeData.treeId}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    alert('Link copied! Share it with your friends! 🎄');
  };

  return (
    <div className="min-h-screen bg-pink-pattern flex flex-col px-4 py-8">
      {/* Header with hearts pattern */}
      <div className="grid grid-cols-7 gap-4 mb-8 opacity-50">
        {[...Array(14)].map((_, i) => (
          <div key={i} className="text-3xl text-center">❤️</div>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#ff1493' }}>
        Share your tree to<br />get more messages
      </h1>

      {/* Phone mockup showing Instagram story */}
      <div className="flex-1 flex items-center justify-center mb-8">
        <div className="relative">
          {/* Phone frame */}
          <div className="w-80 h-[600px] bg-gradient-to-br from-pink-400 to-pink-600 rounded-[3rem] p-4 shadow-2xl">
            {/* Screen */}
            <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-200 rounded-[2.5rem] overflow-hidden relative">
              {/* Instagram story header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm">👤</div>
                  <span className="text-white font-semibold text-sm">Your story</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-white text-xl">✕</button>
                </div>
              </div>

              {/* Tree preview */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <h2 className="text-2xl font-bold text-teal-darker mb-2">{treeData.name}'s Tree</h2>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 mb-4">
                  <span className="text-sm font-semibold text-teal-darker">❤️ 13 messages</span>
                </div>

                <svg width="180" height="220" viewBox="0 0 180 220" className="mb-4">
                  <text x="90" y="25" fontSize="28" textAnchor="middle">{treeData.topper.emoji}</text>
                  {treeData.treeStyle.colors.map((color, idx) => {
                    const width = 35 + (idx * 12);
                    const y = 40 + (idx * 28);
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
                  <rect x="77" y="170" width="26" height="28" fill="#92400e" rx="3" />
                  
                  {/* Ornaments with names */}
                  <circle cx="70" cy="80" r="12" fill="white" opacity="0.9" />
                  <text x="70" y="85" fontSize="10" textAnchor="middle" fill="#333">Som...</text>
                  
                  <circle cx="110" cy="90" r="12" fill="white" opacity="0.9" />
                  <text x="110" y="95" fontSize="10" textAnchor="middle" fill="#333">Jack...</text>
                </svg>

                <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
                  <span className="text-blue-600 font-bold">🔗 DECOMYTREE.COM</span>
                </div>

                <p className="text-xs text-teal-darker text-center px-4">
                  Mention more people in your story.
                </p>
              </div>

              {/* Bottom navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-around px-8 text-white text-xs">
                <span>Highlight</span>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Go to Tree Button */}
      <button 
        onClick={() => navigate('/my-tree')}
        className="w-full max-w-md mx-auto mb-4 py-4 rounded-full font-bold text-xl flex items-center justify-center gap-2"
        style={{ background: 'linear-gradient(90deg, #ff1493 0%, #ff69b4 100%)', color: 'white' }}
      >
        🎄 Go to My Tree
      </button>

      <button 
        onClick={copyLink}
        className="w-full max-w-md mx-auto text-center text-pink-700 font-semibold"
      >
        Or copy your link to share
      </button>
    </div>
  );
}

export default ShareTree;