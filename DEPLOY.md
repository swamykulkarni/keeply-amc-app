# 🚀 Deploy Keeply AMC App to Railway

## ✅ Pre-Deployment Checklist

Your app is now configured to run on **port 4000** and is ready for Railway deployment!

- ✅ Production build tested locally
- ✅ Port configured to 4000 (avoiding 3000 and 5173)
- ✅ Railway configuration files created
- ✅ Docker support added
- ✅ Environment variables configured

## 📦 Deployment Steps

### Method 1: Railway CLI (Recommended)

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize Project**
   ```bash
   railway init
   ```

4. **Deploy**
   ```bash
   railway up
   ```

5. **Open in Browser**
   ```bash
   railway open
   ```

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Deploy Keeply AMC App"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect and deploy!

3. **Configure (if needed)**
   - Railway will automatically use `railway.toml` or `nixpacks.toml`
   - Port 4000 is already configured
   - No additional environment variables needed

### Method 3: Railway Dashboard

1. Go to [railway.app/new](https://railway.app/new)
2. Click "Deploy from GitHub repo"
3. Authorize Railway to access your repos
4. Select the Keeply repository
5. Click "Deploy Now"

## 🌐 Your App Will Be Live At

```
https://your-project-name.up.railway.app
```

Railway will provide you with a unique URL once deployed.

## 🔧 Configuration Details

### Port Configuration
- **Development**: Port 4000 (localhost)
- **Production**: Port 4000 (Railway)
- **Avoided**: Ports 3000 and 5173 as requested

### Build Configuration
```toml
Build Command: cd web && npm install && npm run build
Start Command: cd web && npm run start
Port: 4000
```

### Environment Variables (Auto-configured)
```
NODE_ENV=production
PORT=4000
```

## 📊 Expected Deployment Time

- **Build Time**: 2-3 minutes
- **Deploy Time**: 30-60 seconds
- **Total**: ~3-4 minutes

## ✨ Post-Deployment

Once deployed, your app will have:

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-scaling
- ✅ Zero-downtime deployments
- ✅ Custom domain support (optional)

## 🧪 Test Your Deployment

Visit your Railway URL and test:

1. **Splash Screen** - Should load with animations
2. **Home Screen** - View AMC stats and appliances
3. **Scan QR** - Test the QR scanner modal
4. **Add Manual** - Add a new appliance
5. **Database** - Search and browse appliances
6. **Profile** - View user profile and settings

## 🔍 Troubleshooting

### Build Fails
```bash
# Check logs in Railway dashboard
railway logs
```

### Port Issues
- Railway automatically assigns PORT environment variable
- Our app is configured to use PORT 4000
- Railway will map it correctly

### Dependencies Issues
```bash
# Clear cache and rebuild
railway run npm cache clean --force
railway up --force
```

## 📱 Share Your App

Once deployed, share your app:
```
🏠 Keeply AMC Tracker
Track your appliance AMCs effortlessly!
https://your-app.railway.app
```

## 🎉 Success!

Your Keeply AMC app is now live on Railway running on port 4000!

**Local Preview**: http://localhost:4000
**Production**: https://your-app.railway.app

---

Need help? Check [Railway Docs](https://docs.railway.app) or [Railway Discord](https://discord.gg/railway)