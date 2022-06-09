# Lap 1 futureproof project - Storyboard messaging API

This API is part of the project set out by futureproof for Lap 1 of the 13-week bootcamp. The task was to design and develop a journaling-style website using full-stack. We have chosen our project to be a storyboard messaging webapp for school children whereby they can create stories which are displayed. This repository deals with the back-end of the project.

We have used **NodeJS** and **Express** to build this API. The code has been laid out using an **MVC architecture**. This API has several endpoints which respond with getting and posting stories and their replies.

## Pre-requisites

A minimum of [Node v16.11.0](https://nodejs.org/en/) needs to be installed

## Installing

After git cloning this repository, CD into the directory `lap-1-project-server-side` and run the following command to install all the dependencies:

```
$ npm i
```

After the dependencies are installed, the API is ready to be ran

## Launching the API

To start the API, run the following script:

```
$ npm run dev
```

From here a GET and POST requests can be made by using the local host with base URL: http://localhost:3000/ in [insomnia](https://docs.insomnia.rest/) or in a web browser.

## Testing

For testing, [Jest](https://jestjs.io/) has been implemented. To run the test, execute the following command:

```
$ npm t
```

## Hosting

The API is hosted on [Heroku](https://lap1-project-backend.herokuapp.com/). This URL can be used as the base URL. Previews of the what requests and responses look like are avaialbe here.

## Requests

These are the requests that can be made to the API:

GET:

- **/all** - gets all messages
- **/:id** - gets messages by their Id's
- **/:id/replies** - gets all replies to messages by the message ID

POST:

- **/post** - posts body from client onto the database
- **/:id/replies** - posts reply body onto database corresponding to message ID

Add these endpoints to the base URL to make a request

### Change log

For heroku, the 'start' script seems to be linked to heroku, hence it should only contain the node command, not others such as nodemon.

## Authors

Team Surviving With Google:

- [Richard](https://github.com/sigltech)
- [Samantha](https://github.com/Tari38)
- [Dak](https://github.com/Dakz1)
- [Syed](https://github.com/syedmjavaid)
