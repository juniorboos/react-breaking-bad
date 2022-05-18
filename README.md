# react-coding-test

As a chemistry company we absolutely love Breaking Bad! But there are so many characters, we can't keep track anymore so you will help us by developing a simple web application that lets us search and sort all the breaking bad characters.

[Here you can see how the app should look and what it should do](https://www.youtube.com/watch?v=O4-sGOxdaso&feature=youtu.be&ab_channel=BorealisDigitalStudio)

## Requirements

-  Implement the features that are shown in the video
-  Use the provided React starter code, relax it's just the default TypeScript Create React App
-  Use the [Breaking Bad API](https://breakingbadapi.com/) to get the character data
-  Use [Material UI](https://material-ui.com/) as much as possible
-  Use our [custom Material UI theme](https://www.npmjs.com/package/poc-material-ui-theme) to Borealize your components
-  For the rest you are free to do whatever you want, feel free to add a testing framework of your choice
-  Consider adding a dockerfile to containerize the application

## Uploading

-  Just push your changes, Github Classroom will automatically setup a pull request
-  Deploy your Breaking Bad app to [Netlify](https://www.netlify.com/)
-  Paste your Netlify url here: <YOUR NETLIFY URL>

<h1 align="center">
  Breaking Bad
</h1>

Webpage to list all [Breaking Bad](https://breakingbadapi.com/) characters.

![Alt Text](./resources/demo.gif)

## Built with

-  Typescript
-  React
-  Material UI
-  React Testing Library
-  Docker
-  Eslint & Prettier

## 🔥 Setup

-  Install all dependencies and run:

```bash
$ yarn install
$ yarn start // Run locally
$ yarn dev // Run docker
```

_It will run at http://localhost:3000_

## ✔️ Run tests

```bash
$ yarn test
```

## 📋 To do

-  Cover edge cases
-  Add loading states
-  Add more unit and integration tests
-  Add animations

## 🐛 Problems

-  Couldn't add inputs inside the ThemeProvider because the Borealis theme was hiding the outline borders and making it look different than expected.
