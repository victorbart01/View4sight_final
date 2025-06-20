# 🚀 Polar Integration Setup for View4Sight

This document explains how to configure Polar payments for your View4Sight website.

## 📋 Prerequisites

- Polar account created at [polar.sh](https://polar.sh)
- Your 4 products already created in Polar (✅ Done)
- Access to your Polar organization settings

## 🔧 Configuration Steps

### 1. Get Your Polar Access Token

1. Log into your Polar Dashboard
2. Go to **Settings** → **Developers**
3. Click **"New token"**
4. Give it a name like "View4Sight Production"
5. Set expiration to **"No expiration"**
6. Enable these scopes:
   - `checkouts:read`
   - `checkouts:write` 
   - `products:read`
   - `subscriptions:read`
   - `webhooks:read`
   - `webhooks:write`
7. Copy the generated token

### 2. Set Environment Variables

Create a `.env.local` file in your project root:

```bash
# Polar Configuration
POLAR_ACCESS_TOKEN=your_polar_access_token_here
POLAR_SERVER=sandbox  # Change to "production" when ready to go live
POLAR_WEBHOOK_SECRET=your_webhook_secret_here
NEXT_PUBLIC_BASE_URL=https://yourdomain.com  # Your website URL
```

### 3. Configure Webhooks in Polar

1. In Polar Dashboard, go to **Settings** → **Developers** → **Webhooks**
2. Click **"Add Endpoint"**
3. Set URL to: `https://yourdomain.com/api/webhooks/polar`
4. Select **RAW** format
5. Generate a webhook secret and add it to your `.env.local`
6. Enable these events:
   - `checkout.completed`
   - `subscription.created`
   - `subscription.updated`
   - `subscription.canceled`

### 4. Product ID Mapping

Your Polar products are already configured in `data/view4sight-pricing.js`:

- **Team Monthly**: `5fc3924d-2e25-440e-974c-090d20f62adf`
- **Team Yearly**: `c6de731d-6d27-4a55-a5c0-4692def2e057`
- **Studio Monthly**: `f08772d3-5547-472d-88e3-2e7305cf5f8f`
- **Studio Yearly**: `1bd82a15-b50d-496c-b7b6-82095e6b4c0d`

## 🏗️ Architecture Overview

### API Endpoints Created:

- `/api/checkout` - Polar's automatic checkout handler
- `/api/create-checkout` - Custom checkout session creator
- `/api/webhooks/polar` - Webhook event handler

### Pages Created:

- `/confirmation` - Post-payment success page

### Modified Components:

- `PricingSection.jsx` - Now uses Polar checkout buttons
- `view4sight-pricing.js` - Added Polar product IDs

## 🧪 Testing

### Development Testing:
1. Set `POLAR_SERVER=sandbox` in your `.env.local`
2. Use Polar's test mode
3. Test checkout flow with test credit cards

### Production Deployment:
1. Change `POLAR_SERVER=production`
2. Update `NEXT_PUBLIC_BASE_URL` to your live domain
3. Update webhook URL in Polar dashboard

## 🔄 Payment Flow

1. User clicks pricing button
2. `handleCheckout()` calls `/api/create-checkout`
3. Polar checkout session created
4. User redirected to Polar checkout
5. User completes payment
6. Polar sends webhook to `/api/webhooks/polar`
7. User redirected to `/confirmation` page

## 📚 Next Steps

1. **User Management**: Implement user account creation in webhook handlers
2. **Email Integration**: Set up welcome emails and receipts
3. **Analytics**: Track conversion events
4. **Database**: Store subscription data for access control

## 🚨 Important Security Notes

- Never commit `.env.local` to version control
- Use different tokens for development and production
- Verify webhook signatures for security
- Implement proper error handling and logging

## 🆘 Troubleshooting

### Common Issues:

1. **"Product ID not found"**: Check your product IDs in Polar dashboard
2. **"Unauthorized"**: Verify your access token and scopes
3. **"Webhook failed"**: Check webhook URL and secret configuration
4. **"CORS errors"**: Ensure proper domain configuration

### Testing Checklist:

- [ ] Environment variables set correctly
- [ ] Polar products created and IDs match
- [ ] Webhook endpoint responding
- [ ] Test payments work in sandbox
- [ ] Confirmation page displays correctly

For support, contact the development team or check Polar's documentation at [docs.polar.sh](https://docs.polar.sh). 