# 🚀 GitHub Pages Deployment Guide

This document provides detailed instructions for deploying your Tic-Tac-Toe game to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Node.js and npm installed

## 🔧 Configuration Files

The following files have been configured for GitHub Pages deployment:

### `.github/workflows/deploy.yml`
- **Purpose**: GitHub Actions workflow for automatic deployment
- **Triggers**: Runs on every push to `main` branch
- **Process**: Installs dependencies → Type checks → Builds → Deploys

### `vite.config.js`
- **Base Path**: Configured to use `/tic-tac-toe/` in production
- **Environment**: Automatically detects production vs development

### `package.json`
- **Deploy Script**: `npm run deploy` for manual deployment
- **Dependencies**: Includes `gh-pages` for manual deployment option

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

1. **Create GitHub Repository**
   ```bash
   # Initialize git if not already done
   git init
   git add .
   git commit -m "Initial commit"
   
   # Add remote origin (replace with your repo URL)
   git remote add origin https://github.com/yourusername/tic-tac-toe.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**
   - Save the settings

3. **Automatic Deployment**
   - The workflow will automatically trigger on push
   - Check the **Actions** tab to monitor deployment progress
   - Once complete, your site will be live at: `https://yourusername.github.io/tic-tac-toe/`

### Method 2: Manual Deployment

If you prefer manual control over deployments:

```bash
# Build and deploy manually
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

## 🔍 Troubleshooting

### Common Issues

1. **404 Error on GitHub Pages**
   - Ensure the base path in `vite.config.js` matches your repository name
   - Check that GitHub Pages source is set to "GitHub Actions"

2. **Build Fails in GitHub Actions**
   - Check the Actions tab for detailed error logs
   - Ensure all dependencies are properly listed in `package.json`

3. **Assets Not Loading**
   - Verify the base path configuration
   - Check browser developer tools for 404 errors

### Debugging Steps

1. **Local Testing**
   ```bash
   # Test the production build locally
   npm run build
   npm run preview
   ```

2. **Check GitHub Actions Logs**
   - Go to repository → Actions tab
   - Click on the failed workflow
   - Review the logs for specific errors

3. **Verify Configuration**
   - Ensure `vite.config.js` has correct base path
   - Check that workflow file is in `.github/workflows/`

## 🔄 Updating Your Site

To update your deployed site:

1. **Make Changes**
   - Edit your code locally
   - Test changes with `npm run dev`

2. **Deploy Updates**
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```

3. **Monitor Deployment**
   - Check Actions tab for deployment status
   - Site updates automatically after successful build

## 📊 Monitoring

### GitHub Actions Status
- **Green checkmark**: Deployment successful
- **Red X**: Deployment failed (check logs)
- **Yellow circle**: Deployment in progress

### Site Availability
- Allow 5-10 minutes for changes to propagate
- Use browser's hard refresh (Ctrl+F5) to see latest changes
- Check GitHub Pages settings if site doesn't load

## 🎯 Best Practices

1. **Branch Protection**
   - Consider protecting the `main` branch
   - Require pull request reviews for important changes

2. **Testing**
   - Always test locally before pushing
   - Run `npm run type-check` before committing

3. **Commit Messages**
   - Use descriptive commit messages
   - Follow conventional commit format if desired

4. **Environment Variables**
   - Keep sensitive data out of the repository
   - Use GitHub Secrets for any required environment variables

---

**Your Tic-Tac-Toe game is now ready for GitHub Pages! 🎉**

For any issues, check the GitHub Actions logs or refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).
