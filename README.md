# INFO CITY COURTS - Multi-Role Food Ordering Platform

![WhatsApp Image 2024-07-31 at 12 14 34_7f6a556a](https://github.com/user-attachments/assets/06f6422f-2fa0-4b6f-a6b1-ff1fce770392)

## Overview
A comprehensive food ordering platform with role-based access for Customers, Restaurants, and Food Courts. Features include online ordering, restaurant management, and real-time email notifications.

## Features

### For Customers
- Browse restaurant menus
- Add items to cart
- Place orders with checkout
- Contact form for feedback/reviews
- Order history tracking

### For Restaurants
- Order management (accept/reject orders)
- Customer message inbox
- Menu management
- Analytics dashboard

### For Food Courts
- Multi-restaurant order oversight
- Tenant management
- Customer feedback monitoring
- Comprehensive analytics

## Project Structure

```
/
├── index.html                 # Role selection page
├── register_*.html           # Registration pages for each role
├── test_email.html           # Email testing page
├── EMAIL_SETUP.md            # EmailJS setup instructions
├── customer/                 # Customer-facing pages
│   ├── index.html
│   ├── menu.html
│   ├── about.html
│   └── contact.html
├── restaurant/               # Restaurant management pages
│   ├── index.html
│   ├── foodcourt.html
│   ├── orders.html
│   └── messages.html
├── script.js                 # Main JavaScript functionality
├── style.css                 # Main stylesheet
└── README.md
```

## Email Integration

The contact form sends professional HTML emails directly to the restaurant email (biswajeet.chakra2012@gmail.com) using EmailJS.

### Setup Email Functionality
1. Follow the detailed setup guide in `EMAIL_SETUP.md`
2. Create an EmailJS account
3. Configure email service and template
4. Update the API keys in `customer/contact.html`
5. Test using `test_email.html`

### Email Features
- **Professional Design**: Well-formatted HTML emails with branding
- **Instant Delivery**: Real-time email notifications
- **Dashboard Integration**: Messages also stored locally for restaurant dashboard
- **Error Handling**: User-friendly feedback for form submissions

## Getting Started

1. **Choose Your Role**: Visit `index.html` to select Customer, Restaurant, or Food Court
2. **Register**: Complete the registration process for your chosen role
3. **Access Dashboard**: Use the respective dashboard for your role's functionality

## Technologies Used

- HTML5, CSS3, JavaScript
- EmailJS for email functionality
- Local Storage for data persistence
- Font Awesome for icons

## Setup Instructions

1. Clone or download the project files
2. Set up EmailJS following `EMAIL_SETUP.md`
3. Open `index.html` in a web browser
4. Test the email functionality using `test_email.html`

## Contact

For technical support or questions about the platform, please contact the development team.
