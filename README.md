# TasteBin
Sharing code or notes easily. This project is a clone of HasteBin (https://www.toptal.com/developers/hastebin).
The logic of this project follows from a youtube tutorial and is improved by some added new features.
TasteBin was written using Node Js with Express Framework and TypeScript.
## Features
- Share and store code snippets, text, and other information online.

## Tech
- Node JS (Node v14 or above)
- TypeScript
- Mongo DB

## Package/Frameworks
- Express JS (v4.17)
- Mongoose

## Getting Started
To get started with TasteBin, you will need to have Node JS installed on your computer. You can download Node JS from the official website: https://nodejs.org/
And also you need to have Mongo DB installed on your computer. You can download Mongo DB from the official website: https://www.mongodb.com/

Once you have Node Js and Mongo DB installed, follow these steps:
- Clone the repository to your local machine using
```bash
git clone https://github.com/Alitindrawan24/taste-bin.git
```
- Navigate to the project directory using the command line.
- Create .env file from .env.example and setup .env with your environment configuration
```bash
cp .env.example .env
```
- Install dependencies
```bash
npm install
```
- Compile typescript
```bash
npm run tsc
```
- Or compile typescript using watch mode
```bash
npm run tsw
```
- Run the app using
```bash
npm run start
```
- Or run the app using nodemon
```bash
npm run dev-start
```
- Open your web browser and navigate to http://localhost:3000 to access the application.

## What's Next ?
- Set an expiration date for their paste
- Allows multiple users to collaborate on a single code snippet, which can be useful for team projects.

## Reference Tutorial
- https://www.youtube.com/watch?v=cDNejBxZ0hI&pp=ugMICgJpZBABGAE%3D