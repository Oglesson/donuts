# Donuts

Seems to be a lot like noughts and crosses/tic tac toe. Because it is. With Donuts. Just for Homer Simpson.

## Getting Started

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Prerequisites

A modern browser, node/npm via command line/bash

## Testing

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Changing build and config

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Built With

- [Create React App](https://github.com/facebook/create-react-app)

## Author

- **Sophie Oglesson** - _Initial work_ - [Oglesson](https://github.com/Oglesson)

## Credits

- **Jess P Designs** - donut SVGs - [Jess P Designs Etsy Shop](https://www.etsy.com/uk/shop/JessPDesign)
- **Sam Oglesson** - Tea making and moral support

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

## Learn More About Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

## The task

Task description here

## Sophie's notes regarding the task

These to outline why I made some of the decisions I did. It's important to note that often I feel a webapp is never fully complete and there is always something more to do but also say that I did not want to spend days doing this exercise but enough for proof that I have the skills required, hence I'll be noting things about priority here!

- Removed reportWebVitals that comes as default create-react-app. Analytics are important for insitest into user experience, but decided to trim it in this case for leaness and as something else to 'manage'.

- Service workers are opt-in and I didn't add them this time. A simple game like those shouldn't really be handling a lot of requests and for leaness, I've left this out.

- I had a quick look at the react-testing-library but ultimately decided to uses the enzyme library as it's the one I'm familar with and the one I could do the fastest!
