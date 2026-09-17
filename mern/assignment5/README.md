# React Custom Hooks - Task 5

## Project Overview

This project demonstrates a simple custom React hook called `useFetch`.

The hook fetches data from an API and manages the data, loading, and error states.

## Requirements Covered

- Created a custom hook named `useFetch`
- Hook accepts a URL
- Fetches data using `fetch()`
- Returns `data`, `loading`, and `error`
- Uses `useState` and `useEffect`
- Created a React component that uses the hook
- Displays API data
- Added simple CSS styling

## API Used

https://jsonplaceholder.typicode.com/photos

## How It Works

The `useFetch` hook receives a URL.

When the URL is available, `useEffect` runs the API request. The response is converted to JSON and stored in the `data` state.

While the request is running, `loading` is true. If the request fails, the error is stored in the `error` state.

The `App` component uses these values to show loading, error, or photo data.

## What I Learned

I learned how custom hooks can be used to reuse logic in React.

I also learned how to use `useState` for storing API data and state, and `useEffect` for running the API request when the component loads.

## Setup

This project uses React through CDN, so no npm installation is required.

1. Download the project.
2. Open `index.html` in a browser.
3. Keep an internet connection enabled because React and the API are loaded online.

## Submission

Deploy this project on Netlify and upload the project to GitHub.
