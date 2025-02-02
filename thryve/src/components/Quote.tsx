import { useState, useEffect } from 'react';
import axios from 'axios';

interface QuoteData {
  quote: string;
  author: string;
}

function Quote() {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://qapi.vercel.app/api/random');
      setQuote(response.data);  // Assuming the response contains quote and author
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch quote');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {quote ? (
        <blockquote>
          <p>{quote.quote}</p>
          <footer>- {quote.author}</footer>
        </blockquote>
      ) : (
        <p>No quote available</p>
      )}
    </div>
  );
}

export default Quote;
