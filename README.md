# To-Do Application

Problem Statement: Build a simple CRUD (Create, Read, Update, Delete) application using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) that allows users to add, view, update and delete tasks.

## Documentation

Tasks you can perform :

- Add a Todo
- Update a Todo
- Delete a Todo

### API Documentation

    1. Add a Todo - /add
       Method - POST
       Body -  {text : string}

    2. Update a Todo - /update
       Method - POST
       Body -  {_id : mongoObjectID,text: string}

    3. Delete a Todo - /delete
       Method - POST
       Body -  {_id : mongoObjectID}

## Installation

Install Code-Editor with npm

```bash
  git clone https://github.com/amantyagi22/To-Do-Application.git
  cd To-Do-Application
```

Root folder will have two folders `client` (Frontend), `server` (Backend)

- Using `npm` 

Setup frontend (client side)

```bash
  cd client
  npm install
  npm start
```

Setup backend (client side) 

```bash
  cd server
  npm install 
  npm start
```

- Using `yarn`

Setup frontend (client side)

```bash
  cd client
  yarn
  yarn start
```

Setup backend (client side)

```bash
  cd server
  yarn 
  yarn start
```

- We should add `.env` file to `.gitignore` but for your ease I'm not adding it.

## Extra Skills

- I've also worked with Next.js with scss and Node.js both using Typescript.
- I can also work with `vite` to create a react app.
