import { useState } from 'react'
import SplashScreen from './screens/SplashScreen'
import MainNavigation from './screens/MainNavigation'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  setTimeout(() => setShowSplash(false), 2000)

  return showSplash ? <SplashScreen /> : <MainNavigation />
}

export default App
