const uhrEl=document.getElementById("uhr");
const minutenEl=document.getElementById("minuten");
const secundenEl=document.getElementById("secunden");
const ampmEl=document.getElementById("ampm");

function updateUhr(){
    let st = new Date().getHours();
    let m = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM"

    if(st > 12){
        st = st -12
        ampm = "PM"
    }

    st = st < 10 ? "0" + st : st;
    m = m < 10 ? "0" + m : m;
    sec = sec < 10 ? "0" + sec : sec;

    uhrEl.innerText = st;
    minutenEl.innerText = m;
    secundenEl.innerText = sec;
    ampmEl, (innerText =ampm);
    setTimeout(()=>{
        updateUhr()
    }, 1000)
}

updateUhr();