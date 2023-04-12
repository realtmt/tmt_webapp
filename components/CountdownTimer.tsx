"use client";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date("2023-04-26").getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="flex space-x-1 flex-wrap justify-center">
      <span className="whitespace-nowrap">{countdown.days} days</span>,
      <span className="whitespace-nowrap">{countdown.hours} hours</span>,
      <span className="whitespace-nowrap">{countdown.minutes} minutes</span>,
      <span className="whitespace-nowrap">{countdown.seconds} seconds</span>
    </h1>
  );
};

export default CountdownTimer;
