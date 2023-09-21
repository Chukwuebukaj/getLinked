export const calculateTimeRemaining = () => {
  const targetDate = new Date("2023-11-18T00:00:00");
  const currentDate = new Date();
  const timeRemaining = targetDate.getTime() - currentDate.getTime();

  if (timeRemaining <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));  

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
