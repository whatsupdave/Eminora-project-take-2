// Function that generates random
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Selecting elements
let scrollerSpan = document.querySelector('.scroller > span')
// Creating elements
let textInsideScroller = document.createElement('span') 

// Function generating service name in random order for scroller
const dynamicServiceNames = () => {
    const serviceNames = ['grožio', 'gaminimo', 'apskaitos', 'prižiūrėjimo', 'metinės ataskaitos', 'deklaracijų teikimo', 'barščių virimo'];
    const randomName = serviceNames[rand(0, serviceNames.length)];
    textInsideScroller.append(randomName)
    scrollerSpan.append(textInsideScroller)
};

for (let i = 0; i < 6; i++){
    setTimeout(dynamicServiceNames, 2000);
    break;
};


