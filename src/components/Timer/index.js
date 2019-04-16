import React from "react";
import { useState, useEffect } from "react";

let bgColour = { backgroundColor: "pink" };

const Timer = () => {
  var countDownDate = new Date("Nov 24, 2019 00:00:00").getTime();
  const [time, setTime] = useState("start");
  useEffect(() => {
    var x = setInterval(function() {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      bgColour = { backgroundColor: "green" };

      setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
  }, []);

  useEffect(() => {
    var color = setTimeOut(() => {
      bgColour = { backgroundColor: "pink" };
    }, 2 * 1000);
  }, [timer]);

  return <div style={bgColour}>{time.toString()}</div>;
};

// Update the count down every 1 second

// Display the result in the element with id="demo"

// If the count down is finished, write some text

export default Timer;
