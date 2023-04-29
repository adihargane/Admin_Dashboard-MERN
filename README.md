
# Admin-Dashboard MERN

• The Admin Dashboard is a web-based system with a simple and user-friendly UI. It includes several key features, including a products page, a customers page, and a sales graph.

• The Admin Dashboard was built using several key technologies, including React JS, Node JS, Express JS, MongoDB, and Material UI.
## Installation


Open project in VS code, open terminal in split view. In one screen and type 

```bash
  cd client
  npm i
```

Create .env.local file and add 
```bash
  REACT_APP_BASE_URL=http://localhost:5001
```

To start project run command
```bash
  npm run start
```

Open MongoDB Atlas on web browser. Create database and click connect select driver as Node.js and copy connection string

In other screen in terminal type
```bash
    cd server
    npm i
```

Create .env file and add
```bash
    MONGO_URL = "you are connection string"
    PORT = 5001
```

In server folder open index.js file uncomment line no 64 to 69 and run command
```bash
    npm run dev
```

When it run successfully then comment lines from 64 to 69

## Authors

- [@adihargane](https://github.com/adihargane)

