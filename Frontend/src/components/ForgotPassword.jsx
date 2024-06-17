import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgotPassword.css';
import { EmailContext } from '../contexApi/EmailPRovider';

const  ForgotPassword = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [loading, setLoading] = useState(false);
  const { email, setEmail } = useContext(EmailContext);
  const navigate = useNavigate();

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('https://panasonic-pioneers-062.onrender.com/user/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('OTP sent successfully');
        setTimeout(() => {
          setOtpRequested(true);
          setMessage('');
        }, 2000);
      } else {
        setError(data.message || 'Failed to request OTP');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://panasonic-pioneers-062.onrender.com/user/verifyOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp: otp.join('') }),
      });
    
      const data = await response.json();
      console.log(response)
      if (response.status===200) {
        navigate('/reset');
      } else {
        setError(data.message || 'Invalid OTP');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='forgot-main'>
    <div className="forgot-enter-otp">
      <h2 className="forgot-enter-otp-title">Forgot Password</h2>
      {!otpRequested ? (
        <form className="forgot-enter-otp-form" onSubmit={handleRequestOtp}>
          <label className="forgot-enter-otp-label">
            Email:
            <input
              className="forgot-enter-otp-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button className="forgot-enter-otp-button" type="submit" disabled={loading}>
            {loading ? <div className="loading-spinner"></div> : 'Request OTP'}
          </button>
          {message && <p className="forgot-enter-otp-message success">{message}</p>}
          {error && <p className="forgot-enter-otp-message error">{error}</p>}
        </form>
      ) : (
        <>
          <p className="forgot-enter-otp-message success">OTP sent successfully</p>
          <form className="forgot-enter-otp-form animate" onSubmit={handleSubmit}>
            <div className="forgot-enter-otp-input-container">
              {otp.map((data, index) => (
                <input
                  key={index}
                  className="forgot-enter-otp-input-otp"
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            <button className="forgot-enter-otp-button" type="submit">Submit OTP</button>
            {error && <p className="forgot-enter-otp-message error">{error}</p>}
          </form>
        </>
      )}
    </div>
    </div>
  );
};

export default ForgotPassword;
