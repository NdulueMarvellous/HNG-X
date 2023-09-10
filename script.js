function getCurrentDateTime() {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  
  const currentDate = new Date();
  const milliseconds = currentDate.getTime();
  const dayOfWeek = weekDays[currentDate.getUTCDay()];

  document.getElementById("day").textContent = day;
  document.getElementById("time").textContent = time;


getCurrentDateTime();
