// selecting elements 

const deadLine = document.querySelector('.deadline');
const endLine = document.querySelector('.countown-box');
const headingFour = document.querySelectorAll('.sngle-h4 h4');

// arrays

const mounts = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octobor",
    "November",
    "December"
];
const weaks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
// Set deadline time
const tampDate = new Date();
const tampYear = tampDate.getFullYear();
const tampMounth = tampDate.getMonth();
const tampDay = tampDate.getDate();
const FutureDate = new Date(tampYear,tampMounth,tampDay +10 ,11, 30,0); 

const setYear = FutureDate.getFullYear();
const setMounth = FutureDate.getMonth();
const setDate = FutureDate.getDate();
const setDay = FutureDate.getDay();
const setHour = FutureDate.getHours();
const setMins = FutureDate.getMinutes();

deadLine.innerHTML = `Giveway end on ${setYear} ${mounts[setMounth]} ${setDate} ${weaks[setDay]} ${setHour}:${setMins}AM`;

const GetRemeningTime = () =>{
    const remainingTime = FutureDate - new Date().getTime();
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMins = 60*1000;
    const days = Math.floor(remainingTime / oneDay);
    const hours = Math.floor(remainingTime / oneHour);
    const mins = Math.floor(remainingTime / oneMins);
    const sec = Math.floor(remainingTime / 1000);
    // set value in a array
    
    const values = [days,hours,mins,sec]

    const format = (item) =>{
        if(item < 10){
            return item = `0 ${item}`
        }
        else{
            return item
        }
    };
    headingFour.forEach((item,index) =>{
        item.innerHTML = format(values[index])
    })
    if(remainingTime<0){
        endLine.innerHTML = `<h3>The timer has been ended </h3>`
    }
 
}
let timer = setInterval(GetRemeningTime,1000);

GetRemeningTime();

