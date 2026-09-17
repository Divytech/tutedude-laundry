# Task 5 - React Custom Hooks

## Overview

This project demonstrates a custom React hook called `useFetch`.

The hook accepts a URL, fetches data from the API, and returns `data`, `loading`, and `error`.

## API Used

https://api.escuelajs.co/api/v1/products

## How It Works

`useFetch.js` contains the custom hook.

`App.jsx` uses the hook to fetch product data and displays 20 products.

The application shows a loading message while data is being fetched and an error message if the request fails.

## What I Learned

- How to create a custom React hook.
- How `useState` is used for data, loading, and error states.
- How `useEffect` is used to fetch data.
- How to use a custom hook inside a React component.
- How to handle loading and error states.

## Setup

No npm installation is required.

Open `index.html` in a browser.

The project uses React and Babel through CDN links.

## Deployment

The project can be deployed on Netlify as a static website.
