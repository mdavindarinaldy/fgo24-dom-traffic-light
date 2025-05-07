const light1 = document.querySelector(`div>div:first-child`);
const light2 = document.querySelector(`div>div:nth-child(2)`);
const light3 = document.querySelector(`div>div:last-child`);

async function yellowOn() {
    await setInterval(()=> {
        if(light1.classList=='red') {
            light1.classList.replace('red','gray')
            light2.classList.replace('gray','yellow')
        }
    }, 3000)
}

async function greenOn() {
    await setInterval(()=> {
        if(light2.classList=='yellow') {
        light2.classList.replace('yellow','gray')
        light3.classList.replace('gray','green') }
    }, 2000)
}

async function redOn() {
    await setInterval(()=> {
        if(light3.classList=='green') {
        light3.classList.replace('green','gray')
        light1.classList.replace('gray','red') }
    }, 3000)
}

yellowOn().then(()=>greenOn()).then(()=>redOn());

