# Simple-Product-API-CRUD-Operations
 A simple Product Catalog API built with Express.js that supports CRUD operations.

This project implements a basic **Product Catalog API** using **Express.js**. 
The API supports **CRUD (Create, Read, Update, Delete)** operations for managing products, with product data stored in a `products.json` file.

### Features:
- **Create**: Add a new product with a name and description.
- **Read**: Retrieve all products or a specific product by its ID.
- **Update**: Update the details of an existing product.
- **Delete**: Remove a product by its ID.

### Product Data:
Each product consists of the following fields:
- `id`: The unique identifier for the product.
- `name`: The name of the product.
- `desc`: A description of the product.

### How to Run:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/product-catalog-api.git
   
### Install dependencies by typing the following command in your terminal:
npm install

### Start the server:
npm start

### 2. Test the Functions in Postman

### GET all products:
-Method: GET
-URL: http://localhost:4000/api/products

### GET a product by ID:
- Method: GET
- URL: http://localhost:4000/api/products/{productId}
  
### POST a new product:
- Method: POST
- URL: http://localhost:4000/api/products
- Body (raw JSON):
   {
     "name": "New Product",
     "desc": "This is a new product"
   }
  
### PATCH update a product:
- Method: PATCH
- URL: http://localhost:4000/api/products/{productId}
- Body (raw JSON):
    {
      "name": "Updated Product",
      "desc": "This is an updated product"
    }
### DELETE a product:
- Method: DELETE
- URL: http://localhost:4000/api/products/{productId}
