import { useState, useEffect } from 'react'
import './OTPScreen.css'

function OTPScreen({ phoneNumber, onVerify, onBack }) {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [countdown, setCountdown] = useState(30)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleVerify = () => {
    const otpValue = otp.join('')
    if (otpValue.length === 4) {
      onVerify(otpValue)
    }
  }

  const handleResend = () => {
    setCountdown(30)
    setCanResend(false)
    // Simulate resend
    alert('OTP resent successfully!')
  }

  return (
    <div className="otp-screen">
      <div className="otp-background">
        <div className="keeply-logo">
          <div className="logo-icon">✱</div>
        </div>
      </div>
      
      <div className="otp-modal">
        <h2>ENTER OTP TO VERIFY DETAILS</h2>
        <p className="otp-sent-text">
          OTP sent to {phoneNumber} 
          <button className="edit-number" onClick={onBack}>✏️</button>
        </p>
        
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otp-digit"
              maxLength="1"
            />
          ))}
        </div>

        <div className="resend-section">
          {canResend ? (
            <button className="resend-btn" onClick={handleResend}>
              Resend OTP
            </button>
          ) : (
            <p className="countdown">Resend OTP in {countdown} seconds</p>
          )}
        </div>

        <button 
          className="verify-btn"
          onClick={handleVerify}
          disabled={otp.join('').length !== 4}
        >
          Verify OTP
        </button>
      </div>
    </div>
  )
}

export default OTPScreen