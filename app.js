function clock() {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let peroid = document.getElementById('peroid');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";

    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (m < 10) ? "0" + s : s;


    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    peroid.innerHTML = ampm;

};


setInterval(clock, 1000);