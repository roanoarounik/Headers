let themModBtn = document.querySelector(`.themeModeButton`);

let listenForThemeBtnClicks = () => {
    if (themModBtn) {
        themModBtn.addEventListener(`click`, () => {
            let bodyClasses = document.body.classList;
            bodyClasses.toggle(`lightMode`);
        })
    }
}

listenForThemeBtnClicks();