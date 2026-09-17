function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2 className="message">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="message error">Error: {error}</h2>;
  }

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="grid">
        {data.slice(0, 50).map(product => (
          <div className="card" key={product.id}>
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
