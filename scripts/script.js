let startingTheme = localStorage?.getItem(`theme`) ?? `Dark`;

let themModBtn = document.querySelector(`.themeModeButton`);
let bodyClasses = document.body.classList;

let toggleThemeModeButtonText = () => {
    let isInLightMode = bodyClasses?.contains(`lightMode`);
    if (isInLightMode) {
        themModBtn.innerHTML = `Dark Mode`;
    } else {
        themModBtn.innerHTML = `Light Mode`;
    }
}

let saveUserThemePreferenceLocally = () => {
    let isInLightMode = bodyClasses?.contains(`lightMode`);
    if (isInLightMode) {
        localStorage.setItem(`theme`, `Light`);
    } else {
        localStorage.setItem(`theme`, `Dark`);
    }
}

let toggleTheme = () => {
    bodyClasses?.toggle(`lightMode`);
    toggleThemeModeButtonText();
    saveUserThemePreferenceLocally();
}

let listenForThemeBtnClicks = () => {
    if (themModBtn) {
        themModBtn.addEventListener(`click`, () => toggleTheme());
    }
}

if (startingTheme == `Light`) {
    toggleTheme();
}

listenForThemeBtnClicks();