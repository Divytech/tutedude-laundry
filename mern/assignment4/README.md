# Laundry Services Web Application

A simple web application for booking laundry services. Users can choose services, add them to a cart, and submit a booking request.

This project helped me practice JavaScript, HTML, CSS, and working with an API.

## Features

- **Add to Cart:** Users can add laundry services to the cart.
- **Remove from Cart:** Users can remove services from the cart anytime.
- **Total Price:** The total price updates automatically when items are added or removed.
- **Form Validation:** Users must fill in all required details and add at least one service before submitting.
- **EmailJS Integration:** After booking, the application sends a confirmation email with the user's details, selected services, and total amount.
- **Responsive Design:** The website works on mobile, tablet, and desktop screens.
- **Success & Error Messages:** Shows simple messages on the page instead of browser alerts.

## Setup Instructions

1. Download or clone the project.
2. Open `assignment4.html` in your browser.

### EmailJS Setup

1. Create a free account on **EmailJS**.
2. Add an email service (like Gmail).
3. Create an email template.
4. Use these variables in the template:
   - `{{from_name}}`
   - `{{user_email}}`
   - `{{phone_number}}`
   - `{{total_amount}}`
   - `{{services}}`
5. Copy your:
   - Public Key
   - Service ID
   - Template ID
6. Open `assignment4.html`.
7. Replace:
   - `YOUR_PUBLIC_KEY`
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
8. Save the file and refresh the browser.

Now you can test the booking and email feature.

## What I Learned

From this project, I learned how to:

- Use JavaScript to add and remove items from a cart.
- Update the total price automatically.
- Validate form inputs before submission.
- Store cart data in an array.
- Use functions to update the webpage.
- Connect my project with EmailJS to send emails.
- Handle API responses using `.then()`.
- Make a simple responsive website using Tailwind CSS.
```