import { useState } from 'react'
import './DevicesScreen.css'

function DevicesScreen({ appliances }) {
  const [sortBy, setSortBy] = useState('name')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredAndSortedAppliances = appliances
    .filter(appliance => filterStatus === 'all' || appliance.amcStatus === filterStatus)
    .sort((a, b) => {
      switch(sortBy) {
        case 'name': return a.name.localeCompare(b.name)
        case 'expiry': return new Date(a.expiryDate) - new Date(b.expiryDate)
        case 'brand': return a.brand.localeCompare(b.brand)
        default: return 0
      }
    })

  const getStatusCounts = () => {
    const counts = { all: appliances.length, active: 0, expiring: 0, expired: 0 }
    appliances.forEach(appliance => {
      counts[appliance.amcStatus]++
    })
    return counts
  }

  const statusCounts = getStatusCounts()

  return (
    <div className="devices-screen">
      <header className="app-header">
        <h1>My Appliances ({appliances.length})</h1>
        <div className="header-actions">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="name">Sort by Name</option>
            <option value="expiry">Sort by Expiry</option>
            <option value="brand">Sort by Brand</option>
          </select>
        </div>
      </header>

      <div className="filter-tabs">
        {[
          { id: 'all', label: 'All', count: statusCounts.all },
          { id: 'active', label: 'Active', count: statusCounts.active },
          { id: 'expiring', label: 'Expiring', count: statusCounts.expiring },
          { id: 'expired', label: 'Expired', count: statusCounts.expired }
        ].map(filter => (
          <button
            key={filter.id}
            className={`filter-tab ${filterStatus === filter.id ? 'active' : ''}`}
            onClick={() => setFilterStatus(filter.id)}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>

      <div className="devices-list">
        {filteredAndSortedAppliances.map(appliance => (
          <div 
            key={appliance.id} 
            className="device-item"
            onClick={() => alert(`${appliance.name} Details:\n\nModel: ${appliance.model}\nBrand: ${appliance.brand}\nPurchase Date: ${appliance.purchaseDate}\nAMC Start: ${appliance.amcStartDate}\nAMC Expires: ${appliance.expiryDate}\nDays Left: ${appliance.daysLeft > 0 ? appliance.daysLeft : 'Expired'}`)}
          >
            <span className="device-icon-large">{appliance.icon}</span>
            <div className="device-info">
              <h3>{appliance.name}</h3>
              <p className="model">{appliance.model}</p>
              <p className="brand">{appliance.brand}</p>
              <p className="amc-dates">
                AMC: {new Date(appliance.expiryDate).toLocaleDateString()}
              </p>
              <p className="days-remaining">
                {appliance.daysLeft > 0 
                  ? `${appliance.daysLeft} days left`
                  : appliance.daysLeft === 0 
                  ? 'Expires today'
                  : `Expired ${Math.abs(appliance.daysLeft)} days ago`
                }
              </p>
            </div>
            <span className={`status-indicator ${appliance.amcStatus}`}>
              {appliance.amcStatus === 'active' ? '✓' : 
               appliance.amcStatus === 'expiring' ? '⚠️' : '❌'}
            </span>
          </div>
        ))}
      </div>

      {filteredAndSortedAppliances.length === 0 && (
        <div className="no-appliances">
          <span className="no-appliances-icon">📱</span>
          <h3>No appliances found</h3>
          <p>
            {filterStatus === 'all' 
              ? 'Add your first appliance to get started'
              : `No ${filterStatus} appliances found`
            }
          </p>
        </div>
      )}

      <button className="fab" onClick={() => alert('Add new appliance - use the buttons on Home screen!')}>➕</button>
    </div>
  )
}

export default DevicesScreen
