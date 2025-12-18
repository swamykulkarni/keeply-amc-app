import { useState } from 'react'
import './ProfileScreen.css'

function ProfileScreen() {
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [userProfile, setUserProfile] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@gmail.com',
    phone: '+91 98765 43210',
    address: 'Flat 204, Green Valley Apartments, Whitefield, Bangalore - 560066',
    memberSince: '2023-01-15'
  })

  const [notifications, setNotifications] = useState({
    amcReminders: true,
    emailNotifications: true,
    smsAlerts: false,
    pushNotifications: true
  })

  const menuItems = [
    { 
      icon: '👤', 
      label: 'Edit Profile', 
      action: () => setShowEditProfile(true),
      subtitle: 'Update personal information'
    },
    { 
      icon: '🔔', 
      label: 'Notification Settings', 
      action: () => alert('Notification Settings:\n\n✅ AMC Reminders\n✅ Email Notifications\n❌ SMS Alerts\n✅ Push Notifications'),
      subtitle: 'Manage alerts and reminders'
    },
    { 
      icon: '📊', 
      label: 'AMC Reports', 
      action: () => alert('AMC Reports:\n\n📈 Monthly AMC Status Report\n📋 Appliance Maintenance History\n💰 AMC Cost Analysis\n📅 Upcoming Renewals'),
      subtitle: 'View maintenance reports'
    },
    { 
      icon: '🏠', 
      label: 'My Properties', 
      action: () => alert('Properties:\n\n🏠 Home - Whitefield, Bangalore\n🏢 Office - Electronic City\n\nManage appliances across locations'),
      subtitle: 'Manage multiple locations'
    },
    { 
      icon: '💳', 
      label: 'Subscription', 
      action: () => alert('Keeply Premium\n\n✅ Active until Dec 2025\n• Unlimited appliances\n• Priority support\n• Advanced analytics\n• Export reports'),
      subtitle: 'Premium plan active'
    },
    { 
      icon: '📱', 
      label: 'Export Data', 
      action: () => alert('Export Options:\n\n📄 PDF Report\n📊 Excel Spreadsheet\n📧 Email Summary\n☁️ Cloud Backup'),
      subtitle: 'Download your data'
    },
    { 
      icon: '❓', 
      label: 'Help & Support', 
      action: () => alert('Support Options:\n\n📞 Call: 1800-KEEPLY-1\n📧 Email: support@keeply.com\n💬 Live Chat (9 AM - 9 PM)\n📚 Knowledge Base'),
      subtitle: '24/7 customer support'
    },
    { 
      icon: '⭐', 
      label: 'Rate Keeply', 
      action: () => alert('Thank you for using Keeply!\n\n⭐⭐⭐⭐⭐\n\nYour feedback helps us improve. Would you like to rate us on the App Store?'),
      subtitle: 'Share your experience'
    },
    { 
      icon: '🔒', 
      label: 'Privacy & Security', 
      action: () => alert('Privacy & Security:\n\n🔐 Two-factor authentication\n🛡️ Data encryption\n📋 Privacy policy\n🗑️ Delete account'),
      subtitle: 'Manage privacy settings'
    },
    { 
      icon: '🚪', 
      label: 'Logout', 
      action: () => {
        if (confirm('Are you sure you want to logout?')) {
          alert('Logged out successfully!')
        }
      },
      subtitle: 'Sign out of your account'
    }
  ]

  const handleSaveProfile = (updatedProfile) => {
    setUserProfile(updatedProfile)
    setShowEditProfile(false)
    alert('Profile updated successfully!')
  }

  return (
    <div className="profile-screen">
      <header className="app-header">
        <h1>Profile</h1>
        <button className="icon-btn" onClick={() => alert('Settings saved to cloud ☁️')}>⚙️</button>
      </header>

      <div className="profile-header">
        <div className="profile-avatar">
          <span className="avatar-text">RK</span>
          <div className="premium-badge">✨</div>
        </div>
        <h2>{userProfile.name}</h2>
        <p className="email">{userProfile.email}</p>
        <p className="member-since">Member since {new Date(userProfile.memberSince).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>
        
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label">Appliances</span>
          </div>
          <div className="stat">
            <span className="stat-number">3</span>
            <span className="stat-label">Active AMCs</span>
          </div>
          <div className="stat">
            <span className="stat-number">₹12,500</span>
            <span className="stat-label">AMC Value</span>
          </div>
        </div>
      </div>

      <div className="menu-list">
        {menuItems.map((item, index) => (
          <button key={index} className="menu-item" onClick={item.action}>
            <span className="menu-icon">{item.icon}</span>
            <div className="menu-content">
              <span className="menu-label">{item.label}</span>
              <span className="menu-subtitle">{item.subtitle}</span>
            </div>
            <span className="menu-arrow">›</span>
          </button>
        ))}
      </div>

      {showEditProfile && (
        <EditProfileModal
          profile={userProfile}
          onSave={handleSaveProfile}
          onClose={() => setShowEditProfile(false)}
        />
      )}
    </div>
  )
}

function EditProfileModal({ profile, onSave, onClose }) {
  const [formData, setFormData] = useState(profile)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content edit-profile-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              rows="3"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileScreen
