
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');





const valentine = "7 feb 2021";

function count(){
	const valentineDate = new Date(valentine);
	const currentDate = new Date();
	const totalseconds = (valentineDate-currentDate)/1000;


    const days = Math.floor(totalseconds / 3600 / 24);

    const hours = Math.floor((totalseconds / 3600)%24);

    const minutes = Math.floor ((totalseconds/60)%60);
    
    const seconds = Math.floor(totalseconds%60);  
  

  daysEl.innerHTML =days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

}

count();
setInterval(count,1000);
