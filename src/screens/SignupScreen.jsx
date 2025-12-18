import { useState } from 'react'
import './SignupScreen.css'

function SignupScreen({ onSignup, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pinCode: '',
    city: '',
    state: '',
    country: 'India'
  })

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleLocationAccess = () => {
    // Simulate location access
    setFormData({
      ...formData,
      pinCode: '560066',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    })
    alert('Location detected successfully!')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.email) {
      onSignup(formData)
    }
  }

  return (
    <div className="signup-screen">
      <div className="signup-background">
        <div className="keeply-logo">
          <div className="logo-icon">✱</div>
        </div>
      </div>
      
      <div className="signup-modal">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        
        <h2>Good To Have You Here!</h2>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Name <span className="required">*</span></label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Write name"
              required
            />
          </div>

          <div className="form-group">
            <label>Contact Number <span className="required">*</span></label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+91 9999999999"
              required
            />
          </div>

          <div className="form-group">
            <label>Email <span className="required">*</span></label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Write email here.."
              required
            />
          </div>

          <button 
            type="button" 
            className="location-btn"
            onClick={handleLocationAccess}
          >
            🎯 Use my current location
          </button>

          <div className="form-row">
            <div className="form-group half">
              <label>Pin Code <span className="required">*</span></label>
              <input
                type="text"
                value={formData.pinCode}
                onChange={(e) => handleChange('pinCode', e.target.value)}
                placeholder="Type here..."
              />
            </div>
            <div className="form-group half">
              <label>City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                placeholder="Type here..."
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>State</label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleChange('state', e.target.value)}
                placeholder="Type here..."
              />
            </div>
            <div className="form-group half">
              <label>Country</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => handleChange('country', e.target.value)}
                placeholder="Type here..."
              />
            </div>
          </div>

          <button type="submit" className="create-account-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignupScreen