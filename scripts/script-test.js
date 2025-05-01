let themModBtn = document.querySelector(`.themeModeButton`);
let bodyClasses = document.body.classList;

if (themModBtn) {
    themModBtn.addEventListener(`click`, () => {

        bodyClasses?.toggle(`lightMode`);

        let isInLightMode = bodyClasses?.contains(`lightMode`);
        if (isInLightMode) {
            themModBtn.innerHTML = `Dark Mode`;
        } else {
            themModBtn.innerHTML = `Light Mode`;
        }
        
    });
}