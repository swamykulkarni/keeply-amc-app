import { useState } from 'react'
import './HomeScreen.css'

function HomeScreen({ appliances, onScanQR, onAddManual, onShowAMCStatus, onBrowseAdd }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return '#4CAF50'
      case 'expiring': return '#FF9800'
      case 'expired': return '#F44336'
      default: return '#999'
    }
  }

  const getStatusCounts = () => {
    const counts = { active: 0, expiring: 0, expired: 0 }
    appliances.forEach(appliance => {
      counts[appliance.amcStatus]++
    })
    return counts
  }

  const statusCounts = getStatusCounts()

  const showNotifications = () => {
    const notifications = [
      '🚨 Bosch Dishwasher AMC expires in 12 days',
      '⚠️ Samsung Washing Machine AMC expires in 7 days',
      '✅ Voltas AC AMC renewed successfully',
      '📅 LG Refrigerator AMC expired 33 days ago - Renew now!'
    ]
    alert('Recent Notifications:\n\n' + notifications.join('\n\n'))
  }

  return (
    <div className="home-screen">
      <header className="app-header">
        <h1>My Appliances</h1>
        <button className="icon-btn notification-btn" onClick={() => showNotifications()}>
          🔔
          <span className="notification-badge">2</span>
        </button>
      </header>

      <div className="stats-overview">
        <div className="stat-card active">
          <span className="stat-number">{statusCounts.active}</span>
          <span className="stat-label">Active AMCs</span>
        </div>
        <div className="stat-card expiring">
          <span className="stat-number">{statusCounts.expiring}</span>
          <span className="stat-label">Expiring Soon</span>
        </div>
        <div className="stat-card expired">
          <span className="stat-number">{statusCounts.expired}</span>
          <span className="stat-label">Expired</span>
        </div>
      </div>

      <div className="quick-actions">
        <button className="action-btn" onClick={onScanQR}>
          <span className="action-icon">📷</span>
          <span>Scan QR</span>
        </button>
        <button className="action-btn" onClick={onAddManual}>
          <span className="action-icon">➕</span>
          <span>Add Manual</span>
        </button>
        <button className="action-btn" onClick={onBrowseAdd}>
          <span className="action-icon">➕</span>
          <span>Browse & Add</span>
        </button>
      </div>

      <section className="appliances-section">
        <h2>Recent Appliances</h2>
        <div className="appliances-grid">
          {appliances.slice(0, 4).map(appliance => (
            <div key={appliance.id} className="appliance-card" onClick={() => alert(`${appliance.name} Details:\nModel: ${appliance.model}\nAMC Expires: ${appliance.expiryDate}`)}>
              <span className="appliance-icon">{appliance.icon}</span>
              <h3>{appliance.name}</h3>
              <p className="model-number">{appliance.model}</p>
              <div className="amc-status">
                <span 
                  className="status-badge" 
                  style={{ backgroundColor: getStatusColor(appliance.amcStatus) }}
                >
                  {appliance.amcStatus.toUpperCase()}
                </span>
                <span className="days-left">
                  {appliance.daysLeft > 0 
                    ? `${appliance.daysLeft} days left`
                    : appliance.daysLeft === 0 
                    ? 'Expires today'
                    : `Expired ${Math.abs(appliance.daysLeft)} days ago`
                  }
                </span>
              </div>
            </div>
          ))}
        </div>
        {appliances.length > 4 && (
          <button className="view-all-btn">View All {appliances.length} Appliances</button>
        )}
      </section>
    </div>
  )
}

export default HomeScreen
