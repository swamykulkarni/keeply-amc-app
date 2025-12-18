# Keeply - Annual Maintenance Contract (AMC) Tracking App

A mobile app for tracking Annual Maintenance Contracts (AMC) for home appliances. Users can add appliances manually or via QR/barcode scanning, track AMC expiry dates, and receive notifications.

## Features

- 📱 **Appliance Management**: Add and track all your home appliances
- 📷 **QR/Barcode Scanning**: Quick appliance registration via scanning
- 🗃️ **Master Database**: Browse and add appliances from a comprehensive database
- 📅 **AMC Tracking**: Monitor AMC status and expiry dates
- 🔔 **Notifications**: Get alerts before AMC expiration
- 📊 **Dashboard**: Overview of all appliances and their AMC status

## Key Functionality

1. **Add Appliances**
   - Manual entry with brand, model, purchase date
   - Scan QR code or barcode to auto-populate details from master database
   
2. **AMC Status Tracking**
   - Active (green) - AMC is valid
   - Expiring Soon (orange) - AMC expires within 30 days
   - Expired (red) - AMC has expired

3. **Master Database**
   - Pre-populated database of common appliances
   - Search by brand, model, or appliance type
   - Categories: Kitchen, Laundry, Cooling, Water, Furniture

## Getting Started

### Web Version (Quick Start)
```bash
cd web
npm install
npm run dev
```
Open http://localhost:3000

### Flutter Version
```bash
flutter pub get
flutter run
```

## Technologies Used

- **Web**: React + Vite
- **Mobile**: Flutter + Provider
- **Storage**: SQLite (local database)
- **Scanning**: Flutter Barcode Scanner
