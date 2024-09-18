# URL Shortener with JWT Authentication

A URL shortener service built with **Express**, **EJS** for templating, **JWT** for user authentication, and **MongoDB** for data storage.

## Features

- **URL Shortening**: Shorten URLs and store them for logged-in users.
- **JWT Authentication**: Secure login and registration with JSON Web Tokens.
- **EJS Templating**: Dynamic rendering of pages with server-side rendering.
- **MongoDB**: Store user data, shortened URLs, and tokens.
- **RESTful API**: Backend logic with JWT-protected routes.

## Prerequisites

- Node.js
- MongoDB (local or cloud)

## Setup

### 1. Clone the repository

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ashishstomar/shortner-url.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd shortner-url
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create a .env file in the root directory with the following environment variables**:

   ```bash
   PORT=3000
   JWT_SECRET=your_jwt_secret
   ```

   ```bash
   npm start
   ```

## Usage

1. **Start the server**:

   ```bash
   npm start
   ```

   or

   ```bash
   npm run dev

   ```

   The server will run on `http://localhost:3000` by default.

2. **Build Tailwind CSS:**:

   ```bash
   npm run tailwind:css

   ```

   This will compile `public/stylesheets/tailwind.css` into `public/stylesheets/style.css`.

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
