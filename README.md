Housing API

This assignment impliments a Housing API to manage housing properties, their availability status, and other related parameters.

Features: 
-Create a New Property: Add housing properties to the database.
-Get All Properties: Retrieve all housing properties with pagination support.
-Get Single Property: Retrieve details of a specific property using its ID.
-Update Property: Update details of a property using its ID.
-Delete Property: Mark a property as deleted by updating its status.
-Validation: Ensure input data meets requirements.
-Error Handling: Provide meaningful error messages and HTTP status codes.

Technology Stack:
-Backend Framework: Node.js with Express.js
-Database: MySQL (with Sequelize ORM)

Setup Instructions:
1. Clone the repository
    git clone <https://github.com/chirugck9/housing-api.git>
    cd housing-api
2. Install Dependencies:
    npm install
3. Configure Environment Variables:
   Create a .env file in the root directory with the following variables: 
    DB_NAME=housing_db
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_HOST=localhost
    PORT=3306 
4. Setup the Database:
    Create a MySQL database named housing_db.
    The Sequelize models will automatically sync tables on server startup.
5. Start the Server:
    node app.js

API Endpoints
1. Create a New Property,
Endpoint: POST /api/housing,
Request Body:
{
    "title": "Villa 4",
    "description": "4 BHK villa with swimming pool",
    "location": [
        82.4536,
        94.1254
    ],
    "price": 45000,
    "features": [
        "4 BHK",
        "Swimming pool"
    ]
}
Response:
{
    "property": {
        "status": "available",
        "id": 7,
        "title": "Villa 4",
        "description": "4 BHK villa with swimming pool",
        "location": [
            82.4536,
            94.1254
        ],
        "price": 45000,
        "features": [
            "4 BHK",
            "Swimming pool"
        ],
        "updated_at": "2024-12-11T17:30:08.392Z",
        "created_at": "2024-12-11T17:30:08.392Z"
    },
    "message": "Property created succesfully"
}

2. Get All Properties
Endpoint: GET /api/housing?offset=1&limit=2

Query Parameters:
offset (optional): default: 1
limit (optional): default: 10

Response:
{
    "count": 7,
    "rows": [
        {
            "id": 2,
            "title": "Villa 1",
            "description": "3 BHK villa with a swimming pool",
            "location": [
                38.4536,
                47.1254
            ],
            "price": "35000.00",
            "status": "pending",
            "features": [
                "3 BHK",
                "Swimming Pool"
            ],
            "created_at": "2024-12-11T17:15:48.000Z",
            "updated_at": "2024-12-11T17:23:08.000Z"
        },
        {
            "id": 3,
            "title": "Villa 2",
            "description": "2 BHK villa ",
            "location": [
                45.4536,
                75.1254
            ],
            "price": "20000.00",
            "status": "available",
            "features": [
                "2 BHK"
            ],
            "created_at": "2024-12-11T17:25:47.000Z",
            "updated_at": "2024-12-11T17:25:47.000Z"
        }
    ]
}

3. Get Single Property
Endpoint: GET /api/housing/:id

Response:
{
    "id": 2,
    "title": "Villa 1",
    "description": "3 BHK villa with a swimming pool",
    "location": [
        38.4536,
        47.1254
    ],
    "price": "30000.00",
    "status": "available",
    "features": [
        "3 BHK",
        "Swimming Pool"
    ],
    "created_at": "2024-12-11T17:15:48.000Z",
    "updated_at": "2024-12-11T17:15:48.000Z"
}

4. Update Property
Endpoint: PUT /api/housing/:id

Request Body:
{
  "price": 35000,
  "status": "pending"
}

Response:
{
    "property": {
        "id": 2,
        "title": "Villa 1",
        "description": "3 BHK villa with a swimming pool",
        "location": [
            38.4536,
            47.1254
        ],
        "price": 35000,
        "status": "pending",
        "features": [
            "3 BHK",
            "Swimming Pool"
        ],
        "created_at": "2024-12-11T17:15:48.000Z",
        "updated_at": "2024-12-11T17:23:08.754Z"
    },
    "message": "Updated Succesfully"
}

5. Delete Property
Endpoint: DELETE /api/housing/:id

Response:
{
    "message": "Property marked as deleted successfully",
    "property": {
        "id": 6,
        "status": "deleted"
    }
}

Error Handling:

-Property Not Found:
{
  "error": "Property not found"
}
-Server Error:
{
  "error": "Internal server error"
}

Postman Collection:

The Postman collection for testing the API is included in the repository as postman_collection.json. Import this file into Postman to test all endpoints.
