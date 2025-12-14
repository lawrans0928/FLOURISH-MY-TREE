import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔐 OTP states
  const [step, setStep] = useState('email'); // email → otp → password
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otp, setOtp] = useState('');

  // 🔑 Generate 6-digit OTP
  const sendOtp = () => {
    if (!email) {
      alert('Enter email first');
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    setStep('otp');

    // Demo purpose
    alert(`Your OTP is: ${otpCode}`);
    console.log('OTP:', otpCode);
  };

  // ✅ Verify OTP
  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setStep('password');
      alert('OTP verified!');
    } else {
      alert('Invalid OTP');
    }
  };

  // ✅ Login
  const handleLogin = () => {
    const savedTree = JSON.parse(localStorage.getItem('myTree'));

    if (
      savedTree &&
      savedTree.email === email &&
      savedTree.password === password
    ) {
      navigate('/my-tree');
    } else {
      alert('Invalid email or password!');
    }
  };

  // Disable scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <div className="login-page">

          <button className="back-btn" onClick={() => navigate('/')}>←</button>

          <div className="login-box">
            <h2 className="title">Login to Your Tree</h2>

            {/* EMAIL */}
            {step === 'email' && (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
                <button className="btn-primary" onClick={sendOtp}>
                  Send OTP
                </button>
              </>
            )}

            {/* OTP */}
            {step === 'otp' && (
              <>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="input-field"
                />
                <button className="btn-primary" onClick={verifyOtp}>
                  Verify OTP
                </button>
              </>
            )}

            {/* PASSWORD */}
            {step === 'password' && (
              <>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                />
                <button className="btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </>
            )}

            <button
              className="text-link"
              onClick={() => navigate('/create/name')}
            >
              Don't have a tree? Create one!
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
