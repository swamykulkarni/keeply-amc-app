import './SplashScreen.css'

function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="logo-container">
          <div className="logo-icon">
            <span className="logo-emoji">🏠</span>
            <div className="logo-badge">✓</div>
          </div>
        </div>
        <h1 className="splash-title">Keeply</h1>
        <p className="splash-tagline">Your AMC Companion</p>
        <div className="loading-indicator">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="splash-footer">
        <p>Made in India 🇮🇳</p>
        <p>Version 2.1.0</p>
      </div>
    </div>
  )
}

export default SplashScreen
