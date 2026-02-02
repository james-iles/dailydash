import { useState } from 'react';

const quotes = [
  { quote: "Make the main thing the main thing.", name: "Stephen Covey" },
  { quote: "The key is not to prioritize what's on your schedule, but to schedule your priorities.", name: "Stephen Covey" },
  { quote: "It's not enough to be busy, so are the ants. The question is, what are we busy about?", name: "Henry David Thoreau" },
  { quote: "The successful warrior is the average man, with laser-like focus.", name: "Bruce Lee" },
  { quote: "Focus on being productive instead of busy.", name: "Tim Ferriss" },
  { quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.", name: "Steve Jobs" },
  { quote: "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.", name: "Leo Babauta" },
  { quote: "The shorter way to do many things is to only do one thing at a time.", name: "Mozart" },
  { quote: "Don't sweat the petty things and don't pet the sweaty things.", name: "George Carlin" },
  { quote: "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.", name: "Alexander Graham Bell" },
  { quote: "The successful man is the one who finds out what is the matter with his business before his competitors do.", name: "Roy L. Smith" },
  { quote: "You will never reach your destination if you stop and throw stones at every dog that barks.", name: "Winston Churchill" },
  { quote: "The more you eliminate the non-essential, the more you can focus on what really matters.", name: "Greg McKeown" },
  { quote: "The difference between successful people and very successful people is that very successful people say 'no' to almost everything.", name: "Warren Buffett" },
  { quote: "Do the hard jobs first. The easy jobs will take care of themselves.", name: "Dale Carnegie" },
  { quote: "The future depends on what you do today.", name: "Mahatma Gandhi" },
  { quote: "Lost time is never found again.", name: "Benjamin Franklin" },
  { quote: "Time is what we want most, but what we use worst.", name: "William Penn" },
  { quote: "I need schnacks.", name: "Emma Jane" },
  { quote: "Don't be shit.", name: "James Mooney" }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export function QuoteCard() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote);

  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <div className="card">
      <h2>Daily Quote</h2>
      <div className="quote-container">
        <p className="quote-text">{currentQuote.quote}</p>
        <p className="quote-name">— {currentQuote.name}</p>
      </div>
      <button className="card-button" onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
  );
}
