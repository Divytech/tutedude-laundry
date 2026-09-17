# React Custom Hooks

## Project Overview

This project demonstrates how to create and use a custom React hook called `useFetch`.

The hook is used to fetch photo data from an API and manage three states:

- `data` - stores the fetched data
- `loading` - tells whether the data is still being fetched
- `error` - stores an error if the request fails

## API Used

JSONPlaceholder Photos API:

https://jsonplaceholder.typicode.com/photos

## Project Structure

```text
react-custom-hooks/
├── index.html
├── README.md
└── src/
    ├── App.jsx
    ├── useFetch.js
    └── style.css
```

## How It Works

`useFetch` receives a URL as its parameter.

When the component loads, `useEffect` runs the fetch request. The response is converted to JSON and stored using `useState`.

If the request is still running, the application shows `Loading...`.

If the request fails, an error message is displayed.

After the data is received, the first 10 photos are displayed on the page.

## What I Learned

- How to create a custom React hook.
- How `useState` can be used to manage data, loading, and error states.
- How `useEffect` can be used to run an API request when a component loads.
- How a custom hook can keep API fetching logic separate from the UI.
- How to handle a basic API error.

## Setup

No npm installation is required for this version because React is loaded using CDN links.

1. Download or clone the project.
2. Open `index.html` in a browser.
3. Make sure the browser has an internet connection so React and the API can load.

## Submission

Before submitting:

- Deploy the project on Netlify.
- Upload the project to GitHub.
- Add the Netlify and GitHub links to the assignment form.

## Note

The implementation is intentionally kept simple so that the main focus remains on understanding the `useFetch` custom hook.
