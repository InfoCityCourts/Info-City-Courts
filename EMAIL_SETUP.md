# EmailJS Setup Guide for Contact Form

## Overview
The contact form now sends emails directly to the restaurant email using EmailJS. This allows customers to send feedback/reviews that arrive in the restaurant's inbox.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (allow less secure apps or use App Passwords)
5. Name your service (e.g., "Gmail_Service")

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:**
```
New Customer Review from {{from_name}} - INFO CITY COURTS
```

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Customer Review</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #ff6b35; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
        .review-box { background: white; padding: 15px; border-left: 4px solid #ff6b35; margin: 15px 0; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Customer Review</h1>
            <p>INFO CITY COURTS</p>
        </div>
        <div class="content">
            <h2>Hello Restaurant Team,</h2>
            <p>You have received a new customer review/message through your website contact form.</p>
            
            <div class="review-box">
                <h3>Customer Details:</h3>
                <p><strong>Name:</strong> {{from_name}}</p>
                <p><strong>Email:</strong> {{from_email}}</p>
                <p><strong>Date:</strong> {{current_date}}</p>
            </div>
            
            <div class="review-box">
                <h3>Message:</h3>
                <p>{{message}}</p>
            </div>
            
            <p>Please respond to this customer at your earliest convenience.</p>
            <p>You can reply directly to: <a href="mailto:{{from_email}}">{{from_email}}</a></p>
            
            <hr>
            <p><em>This email was sent from your INFO CITY COURTS website contact form.</em></p>
        </div>
        <div class="footer">
            <p>© 2025 INFO CITY COURTS. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

**Template Variables:**
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{message}}` - The review/message content
- `{{current_date}}` - Current date (you can add this in the send parameters)

### 4. Get Your Keys
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `abcdefghijk`)
3. Go to "Email Services" and copy your **Service ID** (e.g., `service_123456`)
4. Go to "Email Templates" and copy your **Template ID** (e.g., `template_abcdef`)

### 5. Update the Code
In `customer/contact.html`, replace these placeholders:

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    // ... parameters
})
```

**Example:**
```javascript
emailjs.init("abcdefghijk");

emailjs.send("service_123456", "template_abcdef", {
    from_name: name,
    from_email: email,
    message: message,
    to_email: "biswajeet.chakra2012@gmail.com",
    reply_to: email,
    current_date: new Date().toLocaleDateString()
})
```

### 6. Test the Form
1. Open your website
2. Go to the contact page
3. Fill out and submit the form
4. Check your email (biswajeet.chakra2012@gmail.com) for the review

## Features
- **Real-time Email Delivery**: Messages are sent instantly to the restaurant
- **Professional Design**: Well-formatted HTML emails
- **Dashboard Integration**: Messages are also stored locally for restaurant dashboard access
- **Error Handling**: User-friendly error messages if email fails to send
- **Loading States**: Visual feedback during form submission

## Troubleshooting
- **Emails not sending**: Check your EmailJS dashboard for error logs
- **Gmail issues**: Make sure "Less secure app access" is enabled or use App Passwords
- **Template errors**: Verify all template variables are correctly named
- **CORS issues**: EmailJS should handle this automatically

## Security Note
The public key is safe to expose in client-side code. EmailJS handles sensitive operations server-side.</content>
<parameter name="filePath">c:\Users\Home\Desktop\Uber Eats\EMAIL_SETUP.md