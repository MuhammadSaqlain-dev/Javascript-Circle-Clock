function getTime() {
  // Getting the class Elements
  const secHand = document.querySelector(".sec-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  // Getting the Current-Date
  const date = new Date();

  // Setting the Transform Property for Seconds
  const seconds = date.getSeconds();
  const secdegree = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secdegree}deg)`;

  // Setting the Transform Property for Minute
  const minutes = date.getMinutes();
  const mindegree = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${mindegree}deg)`;

  // Setting the Transform Property for Hour
  const hours = date.getHours();
  const hourdegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourdegree}deg)`;
}

// Calling the function every 1sec
setInterval(getTime, 1000);

getTime();
