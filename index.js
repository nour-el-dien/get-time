
let myele = document.querySelector("h1");

function updateTime(){


    let data = new Date()

    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let month = data.getUTCMonth();
    let year = data.getUTCFullYear();
    let day = data.getUTCDate();

    console.log(data);
    myele.innerHTML = `${year}-${month}-${day} <br>
     ${hours}:${minutes}:${seconds}`;
}


setInterval (function(){
updateTime()
 },1000)
 updateTime()