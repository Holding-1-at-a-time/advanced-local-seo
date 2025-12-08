# One Detail At A Time - Setup Guide

## Environment Variables Required

Add these to your Vercel project or `.env.local`:

### Convex Database
\`\`\`
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
\`\`\`

### Google APIs (Gmail & Calendar)
\`\`\`
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=https://your-domain.com/api/auth/callback/google
GOOGLE_REFRESH_TOKEN=your-refresh-token
GMAIL_SENDER_EMAIL=rromerojr1@gmail.com
GOOGLE_CALENDAR_ID=primary
\`\`\`

## Google API Setup

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Gmail API and Google Calendar API

### 2. Create OAuth Credentials
1. Go to APIs & Services > Credentials
2. Create OAuth 2.0 Client ID
3. Set authorized redirect URIs
4. Download credentials JSON

### 3. Get Refresh Token
Use the OAuth Playground or a script to get a refresh token:
1. Go to [OAuth Playground](https://developers.google.com/oauthplayground/)
2. Select Gmail API and Calendar API scopes
3. Authorize and exchange for refresh token

### Required Scopes
- `https://www.googleapis.com/auth/gmail.send`
- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.events`

## Convex Setup

1. Install Convex CLI: `npm install -g convex`
2. Login: `npx convex login`
3. Initialize: `npx convex dev`
4. Copy deployment URL to `NEXT_PUBLIC_CONVEX_URL`

## Running Locally

\`\`\`bash
# Terminal 1: Start Convex
npx convex dev

# Terminal 2: Start Next.js
pnpm dev
\`\`\`

## Deployment

1. Connect to Vercel
2. Add all environment variables
3. Install Convex integration from Vercel marketplace
4. Deploy!
