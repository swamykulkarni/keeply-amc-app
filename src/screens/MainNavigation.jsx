import { useState } from 'react'
import HomeScreen from './HomeScreen'
import DevicesScreen from './DevicesScreen'
import ProductsScreen from './ProductsScreen'
import ProfileScreen from './ProfileScreen'
import AddApplianceModal from '../components/AddApplianceModal'
import ScanQRModal from '../components/ScanQRModal'
import './MainNavigation.css'

function MainNavigation() {
  const [activeTab, setActiveTab] = useState(0)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showScanModal, setShowScanModal] = useState(false)
  
  const [appliances, setAppliances] = useState([
    { 
      id: 1, 
      name: 'Samsung Washing Machine', 
      model: 'WA70H4000SY',
      icon: '🧺', 
      brand: 'Samsung',
      amcStatus: 'active',
      expiryDate: '2024-12-25',
      daysLeft: 7,
      purchaseDate: '2023-01-15',
      amcStartDate: '2023-12-18'
    },
    { 
      id: 2, 
      name: 'LG Refrigerator', 
      model: 'GL-T322RPZU',
      icon: '❄️', 
      brand: 'LG',
      amcStatus: 'expired',
      expiryDate: '2024-11-15',
      daysLeft: -33,
      purchaseDate: '2022-05-20',
      amcStartDate: '2023-11-15'
    },
    { 
      id: 3, 
      name: 'Voltas AC', 
      model: '183V DZA',
      icon: '❄️', 
      brand: 'Voltas',
      amcStatus: 'active',
      expiryDate: '2025-03-10',
      daysLeft: 82,
      purchaseDate: '2023-03-10',
      amcStartDate: '2024-03-10'
    },
    { 
      id: 4, 
      name: 'Bosch Dishwasher', 
      model: 'SMS50D32IN',
      icon: '🍽️', 
      brand: 'Bosch',
      amcStatus: 'expiring',
      expiryDate: '2024-12-30',
      daysLeft: 12,
      purchaseDate: '2023-06-15',
      amcStartDate: '2023-12-30'
    },
    { 
      id: 5, 
      name: 'Whirlpool Microwave', 
      model: 'MWP 301 SB',
      icon: '📱', 
      brand: 'Whirlpool',
      amcStatus: 'active',
      expiryDate: '2025-01-20',
      daysLeft: 33,
      purchaseDate: '2023-01-20',
      amcStartDate: '2024-01-20'
    }
  ])

  const handleScanQR = () => {
    setShowScanModal(true)
  }

  const handleAddManual = () => {
    setShowAddModal(true)
  }

  const handleShowAMCStatus = () => {
    setActiveTab(1) // Switch to Appliances tab
  }

  const handleBrowseAdd = () => {
    setActiveTab(2) // Switch to Browse & Add tab
  }

  const handleAddAppliance = (newAppliance) => {
    const appliance = {
      ...newAppliance,
      id: Date.now(),
      daysLeft: Math.ceil((new Date(newAppliance.expiryDate) - new Date()) / (1000 * 60 * 60 * 24)),
      amcStatus: (() => {
        const days = Math.ceil((new Date(newAppliance.expiryDate) - new Date()) / (1000 * 60 * 60 * 24))
        if (days < 0) return 'expired'
        if (days <= 30) return 'expiring'
        return 'active'
      })()
    }
    setAppliances([...appliances, appliance])
    setShowAddModal(false)
  }

  const handleScanComplete = (scannedAppliance) => {
    handleAddAppliance(scannedAppliance)
    setShowScanModal(false)
  }

  const handleAddFromDatabase = (product) => {
    const today = new Date()
    const expiryDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
    
    const newAppliance = {
      name: product.name,
      model: product.model,
      brand: product.brand,
      icon: product.icon,
      purchaseDate: today.toISOString().split('T')[0],
      amcStartDate: today.toISOString().split('T')[0],
      expiryDate: expiryDate.toISOString().split('T')[0]
    }
    
    handleAddAppliance(newAppliance)
  }

  const screens = [
    <HomeScreen 
      key="home" 
      appliances={appliances}
      onScanQR={handleScanQR}
      onAddManual={handleAddManual}
      onShowAMCStatus={handleShowAMCStatus}
      onBrowseAdd={handleBrowseAdd}
    />,
    <DevicesScreen key="devices" appliances={appliances} />,
    <ProductsScreen key="products" onAddFromDatabase={handleAddFromDatabase} />,
    <ProfileScreen key="profile" />
  ]

  const tabs = [
    { icon: '🏠', label: 'Home' },
    { icon: '📱', label: 'Appliances' },
    { icon: '➕', label: 'Browse & Add' },
    { icon: '👤', label: 'Profile' }
  ]

  return (
    <div className="main-navigation">
      <div className="screen-content">
        {screens[activeTab]}
      </div>
      <nav className="bottom-nav">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`nav-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      {showAddModal && (
        <AddApplianceModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddAppliance}
        />
      )}

      {showScanModal && (
        <ScanQRModal
          onClose={() => setShowScanModal(false)}
          onScanComplete={handleScanComplete}
        />
      )}
    </div>
  )
}

export default MainNavigation
