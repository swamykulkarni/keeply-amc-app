import { useState } from 'react'
import './LoginScreen.css'

function LoginScreen({ onLogin }) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+91')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (phoneNumber.length >= 10) {
      onLogin({ phone: countryCode + phoneNumber, method: 'phone' })
    }
  }

  const handleSocialLogin = (provider) => {
    onLogin({ method: provider })
  }

  return (
    <div className="login-screen">
      <div className="login-background">
        <div className="keeply-logo">
          <div className="logo-icon">✱</div>
        </div>
      </div>
      
      <div className="login-modal">
        <h2>Enter Mobile Number</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="phone-input-group">
            <select 
              value={countryCode} 
              onChange={(e) => setCountryCode(e.target.value)}
              className="country-code"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter mobile number"
              className="phone-input"
              maxLength="10"
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-login">
          <button 
            className="social-btn google"
            onClick={() => handleSocialLogin('google')}
          >
            <span className="social-icon">G</span>
          </button>
          <button 
            className="social-btn facebook"
            onClick={() => handleSocialLogin('facebook')}
          >
            <span className="social-icon">f</span>
          </button>
          <button 
            className="social-btn apple"
            onClick={() => handleSocialLogin('apple')}
          >
            <span className="social-icon">🍎</span>
          </button>
        </div>

        <p className="terms-text">
          By proceeding you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default LoginScreen