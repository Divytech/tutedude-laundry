function App() {
  const [page, setPage] = React.useState(1);
  const [photos, setPhotos] = React.useState([]);

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
  );

  React.useEffect(() => {
    if (data) {
      setPhotos(prev => [...prev, ...data]);
    }
  }, [data]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        if (!loading) {
          setPage(prev => prev + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  if (photos.length === 0 && loading) {
    return <h2 className="message">Loading...</h2>;
  }

  if (photos.length === 0 && error) {
    return <h2 className="message">Error loading photos</h2>;
  }

  return (
    <div className="container">
      <h1>Photos</h1>

      <div className="grid">
        {photos.map(photo => (
          <div className="card" key={photo.id}>
            <img
              src={photo.thumbnailUrl.replace("via.placeholder.com", "dummyimage.com")}
              alt={photo.title}
              onError={e => {
                e.target.src = `https://dummyimage.com/150/92c952?text=${photo.id}`;
              }}
            />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>

      {loading && <h2 className="message">Loading more photos...</h2>}
      {error && <h2 className="message">Error loading more photos</h2>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
