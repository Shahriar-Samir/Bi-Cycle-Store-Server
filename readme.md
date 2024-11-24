### Project: Bi-Cycle store
Bi-Cycle store is server-side express application for managing bicycle store, bicycle products and orders.

## Features:

- Create a bicycle product data in database.
- Get all the products data at a time and also you use query params for searching products based on product's name, type, brand.
- Get a specific bicycle product data.
- Update a single bicycle data.
- Delete a bicycle data.
- Order a bicycle.
- Get the sum of revenue of all orders
- Displays validation, 404 and other errors when incorrect data is entered in the input fields.

## Steps to Run the Project on Your Local Machine

- At first download the zip file or clone this repository on your local machine.
- Unzip or use git clone in the terminal for cloning the project.
- After unzipping or cloning, run the command 'npm install' on your vs code terminal.
- After finishing the installation, create a .env file in the root directory.
- In that .env file, add port and MongoDB database link variable using PORT and DATABASE_URL.
- For PORT you can give 4000 or 5000. For DATABASE_URL, you need give your MongoDB connection link provided by the MongoDB.
- After configuring .env file, run 'npm run start:dev' in your terminal and that terminal should be open in your project's folder's root.
- Now your application should run on the specified port of .env.
