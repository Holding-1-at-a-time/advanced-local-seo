# Google API Setup Checklist for One Detail At A Time

## 📋 Pre-Setup Checklist

- [ ] Ensure you have a Google account (preferably the business account)
- [ ] Verify you have access to Google Cloud Console
- [ ] Note down your application domain (e.g., `your-domain.com`)
- [ ] Prepare your redirect URI: `https://your-domain.com/api/auth/callback/google`
- [ ] Install required dependencies: `npm install googleapis`

## 🚀 Step 1: Create Google Cloud Project

- [ ] Go to [Google Cloud Console](https://console.cloud.google.com)
- [ ] Click "Create Project" or select an existing project
- [ ] Enter project name: "One Detail At A Time API"
- [ ] Select organization (if applicable)
- [ ] Click "Create"
- [ ] Wait for project creation to complete
- [ ] Note down your Project ID (shown in dashboard)

## 🔧 Step 2: Enable Required APIs

- [ ] Navigate to "APIs & Services" > "Library"
- [ ] Search for "Gmail API" and click on it
- [ ] Click "Enable"
- [ ] Search for "Google Calendar API" and click on it
- [ ] Click "Enable"
- [ ] Wait for both APIs to be enabled (may take a few seconds)

## 🔐 Step 3: Create OAuth 2.0 Credentials

- [ ] Go to "APIs & Services" > "Credentials"
- [ ] Click "Create Credentials" > "OAuth client ID"
- [ ] Select application type: "Web application"
- [ ] Enter name: "One Detail At A Time Web Client"
- [ ] Add authorized JavaScript origins:
  - `http://localhost:3000` (for local development)
  - `https://your-domain.com` (for production)
- [ ] Add authorized redirect URIs:
  - `http://localhost:3000/api/auth/callback/google` (for local development)
  - `https://your-domain.com/api/auth/callback/google` (for production)
- [ ] Click "Create"
- [ ] Note down your Client ID and Client Secret
- [ ] Click "Download JSON" to save credentials
- [ ] Store the JSON file securely (don't commit to version control)

## 🔑 Step 4: Configure OAuth Consent Screen

- [ ] Go to "APIs & Services" > "OAuth consent screen"
- [ ] Select "External" user type
- [ ] Click "Create"
- [ ] Fill in app information:
  - App name: "One Detail At A Time"
  - User support email: your business email
  - Developer contact email: your email
- [ ] Add required scopes:
  - `https://www.googleapis.com/auth/gmail.send`
  - `https://www.googleapis.com/auth/calendar`
  - `https://www.googleapis.com/auth/calendar.events`
- [ ] Add test users (your Google account email)
- [ ] Save changes

## 🔄 Step 5: Get Refresh Token

### Option A: Using OAuth Playground
- [ ] Go to [Google OAuth Playground](https://developers.google.com/oauthplayground/)
- [ ] Click the gear icon in top right
- [ ] Check "Use your own OAuth credentials"
- [ ] Enter your Client ID and Client Secret
- [ ] Close settings
- [ ] Select required scopes:
  - `https://www.googleapis.com/auth/gmail.send`
  - `https://www.googleapis.com/auth/calendar`
  - `https://www.googleapis.com/auth/calendar.events`
- [ ] Click "Authorize APIs"
- [ ] Sign in with your Google account
- [ ] Click "Exchange authorization code for tokens"
- [ ] Copy the "Refresh token" value
- [ ] Store this securely (you'll only get this once)

### Option B: Using Node.js Script
- [ ] Create a script to get refresh token:
```javascript
const { google } = require('googleapis');
const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'https://your-domain.com/api/auth/callback/google'
);

const scopes = [
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events'
];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
  prompt: 'consent'
});

console.log('Authorize this app by visiting:', url);
```
- [ ] Run the script and visit the generated URL
- [ ] After authorization, you'll get a code in the redirect URL
- [ ] Exchange the code for tokens:
```javascript
const { tokens } = await oauth2Client.getToken(code);
console.log('Refresh token:', tokens.refresh_token);
```

## 📝 Step 6: Configure Environment Variables

- [ ] Open `.env.local` file
- [ ] Add Google API credentials:
```
GOOGLE_CLIENT_ID=your-client-id-from-step-3
GOOGLE_CLIENT_SECRET=your-client-secret-from-step-3
GOOGLE_REDIRECT_URI=https://your-domain.com/api/auth/callback/google
GOOGLE_REFRESH_TOKEN=your-refresh-token-from-step-5
GMAIL_SENDER_EMAIL=your-business-email@gmail.com
GOOGLE_CALENDAR_ID=primary
```
- [ ] For local development, you may need separate variables:
```
GOOGLE_REDIRECT_URI_LOCAL=http://localhost:3000/api/auth/callback/google
```

## 🧪 Step 7: Test the Setup

- [ ] Start your development server: `pnpm dev`
- [ ] Test calendar API: `curl -X POST http://localhost:3000/api/calendar/create-event`
- [ ] Test email API: `curl -X POST http://localhost:3000/api/email/send`
- [ ] Check for errors in console
- [ ] Verify events appear in your Google Calendar
- [ ] Verify emails are sent from your Gmail account

## 🚀 Step 8: Production Deployment

- [ ] Add all environment variables to your Vercel project
- [ ] Ensure production redirect URI is configured in Google Cloud Console
- [ ] Test in staging environment before full deployment
- [ ] Monitor API usage in Google Cloud Console

## 🔍 Troubleshooting Checklist

### Common Issues & Solutions

- [ ] **403 Forbidden Errors**: Check if API is enabled and scopes are correct
- [ ] **401 Unauthorized**: Verify refresh token is valid and not expired
- [ ] **Redirect URI Mismatch**: Ensure exact URI match in Google Cloud Console
- [ ] **Quota Exceeded**: Check Google Cloud API quotas and increase if needed
- [ ] **Token Expired**: Refresh tokens don't expire, but access tokens do (handled automatically)

### Debugging Steps

- [ ] Check Google Cloud Console logs
- [ ] Verify environment variables are loaded correctly
- [ ] Test with smaller scopes first
- [ ] Use Google's API Explorer to test endpoints
- [ ] Check network requests in browser dev tools

## 📌 Important Notes

✅ **Security Best Practices**:
- Never commit credentials to version control
- Use separate credentials for development and production
- Restrict API keys to specific domains
- Monitor API usage regularly

✅ **Maintenance**:
- Refresh tokens don't expire unless revoked
- Review API permissions annually
- Update scopes if new features are added
- Monitor for deprecated API versions

✅ **Cost Management**:
- Google APIs have free tiers
- Set up billing alerts
- Monitor usage in Google Cloud Console
- Consider quotas for production

## 🎯 Verification Checklist

- [ ] Google Cloud project created and APIs enabled
- [ ] OAuth credentials configured correctly
- [ ] Refresh token obtained and stored securely
- [ ] Environment variables set in `.env.local`
- [ ] Local development testing successful
- [ ] Production environment variables configured
- [ ] API rate limits and quotas reviewed
- [ ] Monitoring and alerts set up