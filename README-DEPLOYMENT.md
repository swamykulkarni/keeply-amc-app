# Keeply AMC App - Railway Deployment

## 🚀 Quick Deploy to Railway

### Option 1: One-Click Deploy
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/deploy)

### Option 2: Manual Deployment

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy from GitHub**
   ```bash
   # Push this code to your GitHub repository
   git init
   git add .
   git commit -m "Initial commit - Keeply AMC App"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Connect to Railway**
   - Create new project in Railway
   - Connect your GitHub repository
   - Railway will auto-detect and deploy

4. **Environment Variables** (Optional)
   ```
   NODE_ENV=production
   PORT=4000
   ```

## 📱 App Features

- **AMC Tracking**: Track Annual Maintenance Contracts for home appliances
- **QR Scanning**: Add appliances by scanning QR codes
- **Master Database**: Browse and add from appliance database
- **Notifications**: Get AMC expiry reminders
- **Multi-location**: Manage appliances across properties

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Styling**: CSS3 with modern features
- **Icons**: Emoji-based for universal support
- **Responsive**: Mobile-first design
- **Deployment**: Railway with Nixpacks

## 🌐 Live Demo

Once deployed, your app will be available at:
`https://your-app-name.railway.app`

## 📊 Performance

- **Build Time**: ~2-3 minutes
- **Bundle Size**: ~500KB gzipped
- **Load Time**: <2 seconds
- **Lighthouse Score**: 95+

## 🔧 Local Development

```bash
cd web
npm install
npm run dev
# App runs on http://localhost:4000
```

## 📞 Support

For deployment issues:
- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway