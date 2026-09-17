# Task 5 - React Custom Hooks

## Overview

This project demonstrates a simple custom React hook called `useFetch`.

The hook takes a URL, fetches data from the API, and returns:

- `data`
- `loading`
- `error`

## API Used

https://jsonplaceholder.typicode.com/photos

## How It Works

`useFetch.js` contains the custom hook.

`App.jsx` uses the hook to fetch photos and displays the first 10 results.

The application also shows a loading message while the data is being fetched and an error message if the request fails.

## What I Learned

- How to create a custom React hook.
- How `useState` stores data, loading and error states.
- How `useEffect` runs the API request.
- How to use a custom hook inside a React component.
- How to handle loading and error states.

## Setup

No npm installation is required.

Open `index.html` in a browser.

The project uses React and Babel through CDN links.

## Deployment

The project can be deployed on Netlify as a static website.
