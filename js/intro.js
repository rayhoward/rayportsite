let header = document.querySelector('#intro');
let anim = [
    { t: "<OIHFWSEFOR>", ms: 200 },
    { t: "<KAEGIOWEUQ>", ms: 200 },
    { t: "<WSIOFGUHRN>", ms: 200 },
    { t: "<OPSIRJGRWI>", ms: 200 },
    { t: "<IFGBIOEUFZ>", ms: 200 },
    { t: "<WSGIOUBHEV>", ms: 200 },
    { t: "<WSOPIGJNEL>", ms: 200 },
    { t: "<PEITBGJIRD>", ms: 200 },
    { t: "<PREPRTGPGM>", ms: 200 },
    { t: "<BTGRGIURHX>", ms: 200 },

    { t: "<RRTBHGRHGJ>", ms: 200 }, //R FOUND
    { t: "<RIHFWSEFOR>", ms: 200 },

    { t: "<RAEGIOWEUQ>", ms: 200 }, //A FOUND
    { t: "<RALOHJHPOE>", ms: 200 },

    { t: "<RAYRPOPEKG>", ms: 200 }, //Y FOUND
    { t: "<RAYEITBGJI>", ms: 200 },

    { t: "<RAY JEPRGK>", ms: 200 }, //SPACE FOUND
    { t: "<RAY IOEUFZ>", ms: 200 },

    { t: "<RAY HFEOIH>", ms: 200 }, //H FOUND
    { t: "<RAY HGJIRD>", ms: 200 },

    { t: "<RAY HOIPER>", ms: 200 }, //O FOUND
    { t: "<RAY HOJNEL>", ms: 200 },

    { t: "<RAY HOWAPR>", ms: 200 }, //W FOUND
    { t: "<RAY HOWEOR>", ms: 200 },

    { t: "<RAY HOWAJG>", ms: 200 }, //A FOUND
    { t: "<RAY HOWABN>", ms: 200 },

    { t: "<RAY HOWARL>", ms: 200 }, //R FOUND
    { t: "<RAY HOWARM>", ms: 200 },

    { t: "<RAY HOWARD>", ms: 500 },  //D FOUND


];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();