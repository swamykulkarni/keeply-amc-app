import { useState } from 'react'
import './AddApplianceModal.css'

function AddApplianceModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    brand: '',
    icon: '📱',
    purchaseDate: '',
    amcStartDate: '',
    expiryDate: ''
  })

  const icons = ['🧺', '❄️', '🍽️', '📱', '💧', '🔥', '🗄️', '📺', '🔌', '💡']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.model && formData.brand && formData.expiryDate) {
      onAdd(formData)
    }
  }

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Appliance Manually</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="add-form">
          <div className="form-group">
            <label>Appliance Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="e.g., Samsung Washing Machine"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Model *</label>
              <input
                type="text"
                value={formData.model}
                onChange={(e) => handleChange('model', e.target.value)}
                placeholder="e.g., WA70H4000SY"
                required
              />
            </div>
            <div className="form-group">
              <label>Brand *</label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) => handleChange('brand', e.target.value)}
                placeholder="e.g., Samsung"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Icon</label>
            <div className="icon-selector">
              {icons.map(icon => (
                <button
                  key={icon}
                  type="button"
                  className={`icon-option ${formData.icon === icon ? 'selected' : ''}`}
                  onClick={() => handleChange('icon', icon)}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Purchase Date</label>
              <input
                type="date"
                value={formData.purchaseDate}
                onChange={(e) => handleChange('purchaseDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>AMC Start Date</label>
              <input
                type="date"
                value={formData.amcStartDate}
                onChange={(e) => handleChange('amcStartDate', e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>AMC Expiry Date *</label>
            <input
              type="date"
              value={formData.expiryDate}
              onChange={(e) => handleChange('expiryDate', e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="add-btn">
              Add Appliance
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddApplianceModal