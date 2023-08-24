# eventhandlingbackend


## Routes

- **Login**
  - Endpoint: `/login`
  - Method: POST
  - Description: Allows users to log in with their credentials.
  - Payload: `email`, `name`

- **Register**
  - Endpoint: `/register`
  - Method: POST
  - Description: Allows new users to create an account.
  - Payload: `name`, `name`

## Schema

- `name`: User's name.
- `email`: User's email address.

## Authentication

JWT is used for user authentication. Successful login generates a JWT token.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Configure environment variables.
4. Start the server: `npm start`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)

## Contact

md.saleem516@gmail.com


