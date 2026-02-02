import { useState, useEffect } from 'react';

export function AdviceCard() {
  const [advice, setAdvice] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = async () => {
    setIsLoading(true);
    setAdvice('Loading...');
    try {
      const res = await fetch('https://api.adviceslip.com/advice', {
        cache: 'no-store'
      });
      const data = await res.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setAdvice('Could not fetch advice. Try again!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="card">
      <h2>Daily Advice</h2>
      <div className="advice-container">
        <p className="advice-text">{advice}</p>
      </div>
      <button className="card-button" onClick={fetchAdvice} disabled={isLoading}>
        New Advice
      </button>
    </div>
  );
}
