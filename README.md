### Ecommerce Store 
Welcome to my Ecommerce Store! This document serves as a guide to understanding the features and requirements of our Next.js-based ecommerce store.

## Table of Contents
Project Overview
Features
Technology Stack
Testing
Deployment
Security
Database
TypeScript and JSDoc
SEO
Contributing
Project Overview
Our ecommerce store is built using Next.js and provides the following key features to users:

## Features
Products Page
Displays a list of products.
Each product is a clickable link that leads to its individual product page.
Header includes a link to the Products page.

# Single Product Page
Displays product details including name, image, price, quantity input, and "Add to Cart" button.
Allows users to add a quantity to the cart.
Ensures the product's URL contains its unique ID.
Prevents negative quantity values.

# Cart Page
Displays products added to the cart, including product name, quantity, subtotal, and a "Remove" button.
Shows the total price of all products.
Prevents negative quantity values.
Includes a "Checkout" button.

# Checkout Page
Prompts users for shipping and payment information.
Requires users to enter their first name, last name, email, address, city, postal code, country, credit card details, expiration date, and security code.
Prevents form submission with empty fields.
Offers a "Confirm Order" button to finalize the purchase.

# Thank You Page
Confirms the order with a "Thank You for Your Order" message.
Includes a header with a link to the Cart, showing the number of items in the cart.
Updates the cart count as items are added or removed.
Clears the cart and navigates to the Thank You page upon confirming the order.

## Header
Appears on all pages within an HTML <header> element. Displays the number of items in the cart. Includes a link to the Cart page.

## Cookies
Utilizes a "cart" cookie to store information about the user's cart. Ensures cart data security, preventing unauthorized changes.

## Database
Utilizes a PostgreSQL database and relevant tables.

## Testing
Includes end-to-end (E2E) tests for adding to the cart, changing quantity, and removing from the cart.
E2E tests the entire checkout flow, payment page, and thank you page.
Unit tests the function that combines product data from the database with product quantity data from the cart.
Unit tests the function for updating the quantity of items in the cart.
Unit tests the cart sum function.
GitHub Actions
Sets up GitHub Actions for automated code testing.

## Technology Stack
Our ecommerce store is built using the following technologies:

- Next.js for the frontend.
- PostgreSQL for the database.
- TypeScript for type-safe development.
- Cookies for cart data management.
- GitHub Actions for CI/CD.
- Fly.io for deployment.

## Testing
To ensure our ecommerce store functions correctly, we've implemented a comprehensive testing strategy, including end-to-end (E2E) and unit tests. This helps maintain the quality and reliability of the application.

## Deployment
Our ecommerce store is deployed on Fly.io, ensuring high availability and reliable hosting for our application. Refer to the provided cheatsheet for deployment instructions.

## Security
The security of user data is a top priority. We use cookies to store cart information and implement measures to prevent unauthorized changes to cart data. We do not save user payment or personal information unless a privacy policy is in place.

## Database
Our ecommerce store uses a PostgreSQL database to store and manage product and order data. We connect to and query information from this database to provide users with an efficient shopping experience.

## SEO
Our ecommerce store is optimized for search engines with titles and meta descriptions on all pages.
