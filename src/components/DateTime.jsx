import { useState, useEffect } from 'react';

export function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const dateString = dateTime.toLocaleDateString('en-GB', options);
  const timeString = dateTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const timeParts = timeString.split(':');
  const hoursMinutes = `${timeParts[0]}:${timeParts[1]}`;
  const seconds = timeParts[2];

  return (
    <div className="date-time">
      <div className="todays-date">
        <p><span className="date">{dateString}</span></p>
      </div>
      <div className="current-time">
        {hoursMinutes}<span className="seconds">:{seconds}</span>
      </div>
    </div>
  );
}
