# Ticket Store

Welcome to my Ticket Store! I am building it for a tourism association in Lower Austria. This ecommerce store is a Next.js-based application designed to provide a seamless and secure shopping experience. From ticket browsing to checkout, the store offers a range of features to enhance user satisfaction. This README provides an overview of the features and requirements of the store.

👷 This project is still under construction 👷

## Table of Contents
2. [Technology Stack](#technology-stack)
3. [Features](#features)
4. [Cookies](#cookies)
5. [Database](#database)
6. [SEO](#seo)
7. [Testing](#testing)
8. [Security](#security)
9. [Deployment](#deployment)


## Technology Stack
The ecommerce store leverages the following technologies:

- **Next.js:** Frontend development.
- **PostgreSQL:** Database management.
- **TypeScript:** Ensures type-safe development.
- **Cookies:** Manages cart data securely.
- **GitHub Actions:** Used for CI/CD.
- **Fly.io:** Deployment for high availability.

## Features
The ecommerce store offers the following key features:

### Header
- Appears on all pages.
- Displays the number of items in the cart.
- Includes a link to the Cart page.

### Products Page
- Displays a list of products.
- Each product is a clickable link leading to its individual product page.
- Header includes a link to the Products page.

### Single Product Page
- Displays product details.
- Allows users to add a quantity to the cart.
- Ensures the product's URL contains its unique ID.
- Prevents negative quantity values.

### Cart Page
- Displays products added to the cart.
- Shows product name, quantity, subtotal, and a "Remove" button.
- Shows the total price of all products.
- Prevents negative quantity values.
- Includes a "Checkout" button.

### Checkout Page
- Prompts users for shipping and payment information.
- Requires users to enter various details.
- Prevents form submission with empty fields.
- Offers a "Confirm Order" button to finalize the purchase.

### Thank You Page
- Confirms the order with a "Thank You for Your Order" message.
- Includes a header with a link to the Cart, showing the number of items in the cart.
- Updates the cart count as items are added or removed.
- Clears the cart and navigates to the Thank You page upon confirming the order.

## Cookies
Utilizes a "cart" cookie to store information about the user's cart. Ensures cart data security, preventing unauthorized changes.

## Database
The ecommerce store uses a PostgreSQL database to store and manage product and order data. I connect to and query information from this database to provide users with an efficient shopping experience.

## SEO
The ecommerce store is optimized for search engines with titles and meta descriptions on all pages.

## Testing
To ensure the ecommerce store functions correctly, I've implemented a comprehensive testing strategy, including end-to-end (E2E) and unit tests. This helps maintain the quality and reliability of the application. Includes: 

- E2E tests for adding to the cart, changing quantity, and removing from the cart.
- E2E tests the entire checkout flow, payment page, and thank you page.
- Unit tests the function that combines product data from the database with product quantity data from the cart.
- Unit tests the function for updating the quantity of items in the cart.
- Unit tests the cart sum function.

I set up GitHub Actions for automated code testing.

## Security
The security of user data is a top priority. I use cookies to store cart information and implement measures to prevent unauthorized changes to cart data. I do not save user payment or personal information so far - this will be handled via stripe in the future. 

## Deployment
The ecommerce store is deployed on Fly.io, ensuring high availability and reliable hosting for the application.
