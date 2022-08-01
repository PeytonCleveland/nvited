const GetGreeting = () => {
  const time = new Date().getHours();
  const greeting =
    time < 12
      ? "Good morning, Peyton"
      : time < 1730
      ? "Good afternoon, Peyton"
      : "Good evening, Peyton";
  return greeting;
};

export default GetGreeting;
