# Library Server

## Overview
This is a Node.js application that provides an API for the [Library website](https://github.com/YoelEigner/books). It uses Express.js as the web server and MongoDB as the database.

## Setup
Before you begin, ensure you have Node.js installed on your machine. If you don't have Node.js installed, you can download it from [Node.js official website](https://nodejs.org/).

1. Clone this repository to your local machine using 
```bash
git clone https://github.com/YoelEigner/books-server.git
```
2. Navigate into the cloned repository using 
```bash
cd books-server
```
3. Install the project dependencies using
```bash
npm install
```
4. Ensure MongoDB is set up and running. The project uses MongoDB Atlas and the connection string is already provided in the code.

## Running the Application
To start the server, use the command below from the root directory of the project
```bash
npm start
```

## API Endpoints

#### The task API provides the following endpoints:
### `GET /books`
Gets all the library's books.

### `GET /bookofday`
Gets the library's book of the day