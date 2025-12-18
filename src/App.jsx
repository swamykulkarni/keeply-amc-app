import { useState, useEffect } from 'react'
import SplashScreen from './screens/SplashScreen'
import LoginScreen from './screens/LoginScreen'
import TermsScreen from './screens/TermsScreen'
import SignupScreen from './screens/SignupScreen'
import OTPScreen from './screens/OTPScreen'
import MainNavigation from './screens/MainNavigation'

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash')
  const [userData, setUserData] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('keeplyUser')
    if (savedUser) {
      setTimeout(() => setCurrentScreen('main'), 2000)
    } else {
      setTimeout(() => setCurrentScreen('login'), 2000)
    }
  }, [])

  const handleLogin = (data) => {
    if (data.method === 'phone') {
      setPhoneNumber(data.phone)
      setCurrentScreen('terms')
    } else {
      // Social login - skip to signup
      setCurrentScreen('signup')
    }
  }

  const handleTermsAccept = () => {
    setCurrentScreen('signup')
  }

  const handleSignup = (data) => {
    setUserData(data)
    setCurrentScreen('otp')
  }

  const handleOTPVerify = (otp) => {
    // Simulate OTP verification
    if (otp === '2222' || otp.length === 4) {
      const user = {
        ...userData,
        phone: phoneNumber,
        verified: true
      }
      localStorage.setItem('keeplyUser', JSON.stringify(user))
      setCurrentScreen('main')
    } else {
      alert('Invalid OTP. Please try again.')
    }
  }

  const handleBack = () => {
    if (currentScreen === 'otp') setCurrentScreen('signup')
    else if (currentScreen === 'signup') setCurrentScreen('terms')
    else if (currentScreen === 'terms') setCurrentScreen('login')
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />
      case 'login':
        return <LoginScreen onLogin={handleLogin} />
      case 'terms':
        return <TermsScreen onAccept={handleTermsAccept} onBack={handleBack} />
      case 'signup':
        return <SignupScreen onSignup={handleSignup} onBack={handleBack} />
      case 'otp':
        return <OTPScreen phoneNumber={phoneNumber} onVerify={handleOTPVerify} onBack={handleBack} />
      case 'main':
        return <MainNavigation />
      default:
        return <SplashScreen />
    }
  }

  return renderScreen()
}

export default App
