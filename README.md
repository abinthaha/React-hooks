# React Hooks

This is a sample project using React hooks.

### Update

Added store service to bring the concept of redux-store and emit the store data whenever a change in that variable happens.
Now if you look at the example, the data from firstSection sends to the store and the second section is subscribed to the store so that any change in the store will needs to be re rendered.

### Tech

Doesn't have so much packages as it a sample one:

* React
* React DOM
* Webpack
* rxjs - For subscribing to the store service

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd React-hooks
$ npm install
$ npm start / npm run start
```

For build...

```sh
$ npm run build
```
### Todos

 - Write a complete application and check the feasibility of using Hooks approach instead of Class based approach
 - Add styles
 - Add testing framerworks

