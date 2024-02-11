function updateTime(){
    var Time = new Date();
    var hour = Time.getHours();
    var minute = Time.getMinutes();
    var second = Time.getSeconds();

    var timeString = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0');

    document.getElementById('time').innerText = timeString;
}

function updateToday(){
    var Today = new Date();
    var year = Today.getFullYear();
    var month = Today.getMonth() + 1;
    var day = Today.getDate();

    var TodayString = day.toString().padStart(2, '0')+ '.' + month.toString().padStart(2,'0') + '.' + year;

    document.getElementById('date').innerText = TodayString;
}

updateTime();
updateToday();

setInterval(updateTime, 1000);
setInterval(updateToday, 1000);