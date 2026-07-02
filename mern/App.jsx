import React, { useState, useEffect, useCallback } from 'react';

/**
 * Custom Hook: useFetch
 * Simplifies the process of fetching data from a given API URL.
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {object} { data, loading, error }
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      // Capturing native error messages (like "Failed to fetch" when offline)
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default function App() {
  // Using EscuelaJS API exactly as requested from the PDF
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=50');

  // Helper to clean up malformed image URLs from the dummy API
  const cleanImageUrl = (url) => {
    if (!url) return 'https://via.placeholder.com/600/000000/FFFFFF/?text=No+Image';
    return url.replace(/[\[\]"]/g, '');
  };

  // Loading State - Matches the pure black screen with centered white text from the video
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-sans">
        Loading...
      </div>
    );
  }

  // Error State - Matches the "Error : Failed to fetch" screen when Wi-Fi is turned off
  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-sans">
        Error : {error}
      </div>
    );
  }

  // Success State - Matches the 4-column white-bordered grid
  return (
    <div className="min-h-screen bg-black text-white py-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 tracking-wide">
        Photos
      </h1>
      
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Rendering the data array */}
          {data && data.map((item) => (
            <div 
              key={item.id} 
              className="border border-white p-3 flex flex-col bg-black"
            >
              <img 
                src={cleanImageUrl(item.images[0])} 
                alt={item.title} 
                className="w-full aspect-square object-cover"
                loading="lazy"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600/000000/FFFFFF/?text=Error'; }}
              />
              <p className="mt-4 mb-1 text-center text-sm w-full whitespace-nowrap overflow-hidden">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
