const getUsername = () => {
    return prompt("İsminizi giriniz");
}

const setUsername = (name) => {
    const $userName = document.querySelector("#myName");
    $userName.innerHTML = name;
}

const showTime = () => {
    const $timeEl = document.querySelector("#myClock");
    const date = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = days[date.getDay()];

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    $timeEl.innerHTML = `${hours}:${minutes}:${seconds} ${day}`;

    $timeEl.innerHTML = `${hours}:${minutes}:${seconds} ${day}`;
}

const main = () => {
    const userName = getUsername();
    setUsername(userName);
    setInterval(showTime, 1000)
}

main();