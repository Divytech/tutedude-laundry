function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

  if (loading) {
    return <h2 className="message">Loading...</h2>;
  }

  if (error) {
    return <h2 className="message">Error loading photos</h2>;
  }

  return (
    <div className="container">
      <h1>Photos</h1>

      <div className="grid">
        {data.slice(0, 10).map(photo => (
          <div className="card" key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
