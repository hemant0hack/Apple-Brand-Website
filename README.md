# Personal-Brand-Website

A modern, Apple-inspired personal brand website with a responsive design, interactive features, and fully functional email contact system.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with smooth responsiveness across all devices
- **Modern Aesthetics**: Apple-inspired design with clean typography and premium styling
- **Email Contact System**: Fully integrated EmailJS for seamless contact form submissions
- **Smooth Interactions**: Animated transitions, hover effects, and smooth scrolling
- **Mobile Menu**: Hamburger menu with keyboard accessibility (ESC to close)
- **Interactive Demo**: Dynamic message display with refresh functionality
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation

## 📋 Project Structure

```text
├── index.html          # Main HTML structure
├── style.css           # Complete responsive styling
├── script.js           # JavaScript functionality & EmailJS integration
├── README.md           # Documentation
└── LICENSE             # Project license
```

## 🚀 Getting Started

### Prerequisites

- No backend server required
- Just need a modern web browser
- EmailJS account for contact form functionality

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hemant0hack/Personal-Brand-Website.git
   cd Personal-Brand-Website
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:

   ```bash
   python -m http.server 8000
   # or with Node.js
   npx http-server
   ```

## 📧 EmailJS Setup

The contact form uses **EmailJS** to send emails without a backend server.

### Step 1: Create EmailJS Account

1. Visit [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account

### Step 2: Create Email Service

1. Go to **Email Services** in the dashboard
2. Create a new service (Gmail recommended)
3. Connect your Gmail account
4. Copy your **Service ID** (e.g., `service_personal_brand`)

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Create a new template with the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
3. Copy your **Template ID** (e.g., `template_contact_form`)

### Step 4: Update Credentials in script.js

Replace the placeholder values in `script.js` (lines 6-7, 92-93):

```javascript
emailjs.init("YOUR_PUBLIC_KEY");        // Line 7
const serviceID = 'YOUR_SERVICE_ID';    // Line 92
const templateID = 'YOUR_TEMPLATE_ID';  // Line 93
```

Find your **Public Key** in EmailJS Account Settings → API Keys

## 🔧 What Was Fixed

### Issues Resolved

1. **Incomplete Email Code** ✓
   - Fixed truncated contact form submission handler
   - Added complete try-catch error handling
   - Implemented proper async/await for EmailJS

2. **Form Validation** ✓
   - Added input field validation
   - Implemented email format validation (regex)
   - Added trim() to remove whitespace
   - Displays specific error messages

3. **User Feedback** ✓
   - Success message (green) after sending
   - Error message (red) on failure
   - Loading state (blue) while sending
   - Animated status messages with slide-in effect
   - Auto-reset after 3 seconds

4. **Button Management** ✓
   - Disabled state during sending
   - Dynamic button text ("Sending...")
   - Automatic re-enabling after response

5. **Accessibility Improvements** ✓
   - Added ARIA alert role to form status messages
   - ESC key to close mobile menu
   - Semantic HTML structure
   - Proper focus states on form inputs

6. **UI/UX Enhancements** ✓
   - Added hover effects to `.apple-btn`
   - Implemented smooth scroll behavior
   - Form status message animations
   - Better visual feedback for all interactions

7. **Mobile Responsiveness** ✓
   - Mobile menu with hamburger icon
   - Responsive typography with `clamp()`
   - Touch-friendly button sizes
   - Optimized for screens 320px and up

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ IE 11 (Basic support, no CSS Grid)

## 🎯 Customization

### Change Colors

Edit the CSS variables in `style.css`:

```css
Primary Blue: #0071e3
Dark Text: #1d1d1f
Light Text: #6e6e73
Background: #ffffff / #fbfbfd
```

### Modify Contact Form Fields

1. Add new input in `index.html`
2. Add JavaScript handler in `script.js` formData object
3. Update EmailJS template with new variable

### Update Apple Messages

Edit the `appleMessages` array in `script.js` (lines 40-50)

## 🚨 Troubleshooting

### Form Not Sending?

- ✓ Check EmailJS credentials are correct
- ✓ Verify service and template IDs match your account
- ✓ Check browser console for errors (F12)
- ✓ Ensure email service is active in EmailJS dashboard

### Mobile Menu Not Working?

- ✓ Clear browser cache
- ✓ Check if JavaScript is enabled
- ✓ Verify `script.js` is loaded in console

### Styling Issues?

- ✓ Hard refresh (Ctrl+Shift+R)
- ✓ Check CSS file path is correct
- ✓ Verify all Font Awesome icons load

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Hemant** - [GitHub Profile](https://github.com/hemant0hack)

---

**Last Updated**: April 18, 2026
**Version**: 1.0.0 (Production Ready)
