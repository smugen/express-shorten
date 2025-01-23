# express-shorten

An simple URL shortener using Express.js and MongoDB.

## Install and Run

1. clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. cd into the project directory:

    ```bash
    cd express-shorten
    ```

### Using Docker

1. Up with docker-compose:

   ```bash
   docker compose up -d
   ```

### Local development

1. Install dependencies:

    ```bash
    npm install
    ```

2. Set the environment variables `.env` file:

    ```bash
    cp .env.example .env
    ```

3. Start the MongoDB server:

    ```bash
    docker compose up -d mongodb
    ```

4. Start the server:

    ```bash
    npm start
    ```

    Or in watch mode:

    ```bash
    npm run dev
    ```

## Functionality sample

1. Shorten a URL:

    ```bash
    curl -X POST http://localhost:3000/shorten -H "Content-Type: application/json" -d '{"url": "https://expressjs.com/en/4x/api.html#res.redirect"}'
    ```

    Response:

    ```json
    {"url":"http://localhost:3000/?q=lRYhC"}
    ```

2. Redirect to the original URL:

    ```bash
    curl -v http://localhost:3000/?q=lRYhC
    ```

    Or open the URL in a browser
