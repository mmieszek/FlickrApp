# FlickrApp

## Running the app

The app is implemented with Create React Native App, so standard commans apply:
```
yarn install
yarn start
```
Then you can start the app by pressing i (for iOS) or scanning the QR Code from the Expo client app on physical iPhone.

## Application Features
- Search Flickr images using the web API
- Infinite scroll implemented with FlatList component. FLickr API is paged.
- Configure how many images are in the row in config.js (const photosPerRow = 3)
- There is a debouncing mechanism when typing a query phrase. The search starts when typing has stopped for 750 ms
- Tap the image to open it full screen
- Slide from left to go back
- Slide up to see the image details

## 3rd Party Libs

**styled-components** - it helps to move the style out of the render method and make the code cleaner and more readable due to custom component names. Works the same across web and native React.

**react-navigation** - de-facto standard for routing and navigation

**prop-types** - Prop Types validation

**eslint (and related plugins)** - checking code quality