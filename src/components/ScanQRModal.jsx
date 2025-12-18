import { useState, useEffect } from 'react'
import './ScanQRModal.css'

function ScanQRModal({ onClose, onScanComplete }) {
  const [scanning, setScanning] = useState(false)
  const [scannedData, setScannedData] = useState(null)

  // Simulate QR scanning with demo data
  const simulateQRScan = () => {
    setScanning(true)
    
    // Simulate scanning delay
    setTimeout(() => {
      const demoAppliances = [
        {
          name: 'Godrej Refrigerator',
          model: 'RT EON 311 P',
          brand: 'Godrej',
          icon: '❄️',
          purchaseDate: '2024-01-15',
          amcStartDate: '2024-01-15',
          expiryDate: '2025-01-15'
        },
        {
          name: 'IFB Washing Machine',
          model: 'TL-RCW 6.5KG',
          brand: 'IFB',
          icon: '🧺',
          purchaseDate: '2024-02-10',
          amcStartDate: '2024-02-10',
          expiryDate: '2025-02-10'
        },
        {
          name: 'Blue Star AC',
          model: '3HW18FA1',
          brand: 'Blue Star',
          icon: '❄️',
          purchaseDate: '2024-03-05',
          amcStartDate: '2024-03-05',
          expiryDate: '2025-03-05'
        }
      ]
      
      const randomAppliance = demoAppliances[Math.floor(Math.random() * demoAppliances.length)]
      setScannedData(randomAppliance)
      setScanning(false)
    }, 2000)
  }

  const handleConfirmAdd = () => {
    onScanComplete(scannedData)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content scan-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Scan QR Code</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="scan-content">
          {!scanning && !scannedData && (
            <div className="scan-instructions">
              <div className="qr-frame">
                <div className="qr-corners">
                  <div className="corner top-left"></div>
                  <div className="corner top-right"></div>
                  <div className="corner bottom-left"></div>
                  <div className="corner bottom-right"></div>
                </div>
                <div className="scan-line"></div>
              </div>
              <p>Position the QR code within the frame</p>
              <button className="scan-btn" onClick={simulateQRScan}>
                Start Scanning
              </button>
            </div>
          )}

          {scanning && (
            <div className="scanning-state">
              <div className="qr-frame scanning">
                <div className="qr-corners">
                  <div className="corner top-left"></div>
                  <div className="corner top-right"></div>
                  <div className="corner bottom-left"></div>
                  <div className="corner bottom-right"></div>
                </div>
                <div className="scan-line active"></div>
              </div>
              <p>Scanning...</p>
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          {scannedData && (
            <div className="scan-result">
              <div className="success-icon">✅</div>
              <h3>Appliance Found!</h3>
              <div className="appliance-preview">
                <span className="preview-icon">{scannedData.icon}</span>
                <div className="preview-details">
                  <h4>{scannedData.name}</h4>
                  <p>Model: {scannedData.model}</p>
                  <p>Brand: {scannedData.brand}</p>
                  <p>AMC Valid Until: {new Date(scannedData.expiryDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="scan-actions">
                <button className="cancel-btn" onClick={onClose}>
                  Cancel
                </button>
                <button className="confirm-btn" onClick={handleConfirmAdd}>
                  Add to My Appliances
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ScanQRModal