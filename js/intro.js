let header = document.querySelector('#intro');
let anim = [
    { t: "<OIHFWSEFOR>", ms: 150 },
    { t: "<KAEGIOWEUQ>", ms: 150 },
    { t: "<WSIOFGUHRN>", ms: 150 },
    { t: "<OPSIRJGRWI>", ms: 150 },
    { t: "<IFGBIOEUFZ>", ms: 150 },
    { t: "<WSGIOUBHEV>", ms: 150 },
    { t: "<WSOPIGJNEL>", ms: 150 },
    { t: "<PEITBGJIRD>", ms: 150 },
    { t: "<PREPRTGPGM>", ms: 150 },
    { t: "<BTGRGIURHX>", ms: 150 },

    { t: "<RRTBHGRHGJ>", ms: 150 }, //R FOUND
    { t: "<RIHFWSEFOR>", ms: 150 },

    { t: "<RAEGIOWEUQ>", ms: 150 }, //A FOUND
    { t: "<RALOHJHPOE>", ms: 150 },

    { t: "<RAYRPOPEKG>", ms: 150 }, //Y FOUND
    { t: "<RAYEITBGJI>", ms: 150 },

    { t: "<RAY JEPRGK>", ms: 150 }, //SPACE FOUND
    { t: "<RAY IOEUFZ>", ms: 150 },

    { t: "<RAY HFEOIH>", ms: 150 }, //H FOUND
    { t: "<RAY HGJIRD>", ms: 150 },

    { t: "<RAY HOIPER>", ms: 150 }, //O FOUND
    { t: "<RAY HOJNEL>", ms: 150 },

    { t: "<RAY HOWAPR>", ms: 150 }, //W FOUND
    { t: "<RAY HOWEOR>", ms: 150 },

    { t: "<RAY HOWAJG>", ms: 150 }, //A FOUND
    { t: "<RAY HOWABN>", ms: 150 },

    { t: "<RAY HOWARL>", ms: 150 }, //R FOUND
    { t: "<RAY HOWARM>", ms: 150 },
    
    { t: "<RAY HOWARD>", ms: 300 },  //D FOUND


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
