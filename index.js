// Function that generates random
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Selecting elements
let scrollerSpan = document.querySelector('.scroller > span')

// Function generating service name in random order for scroller
const dynamicServiceNames = () => {
    const serviceNames = ['example1', 'example2', 'example3', 'example4', 'example5', 'example6', 'example7'];
    const randomName = serviceNames[rand(0, serviceNames.length)];
    scrollerSpan.innerHTML= `<span>${randomName}</span>`;   
};


// Executing my function
let i = 1;
setInterval(function()
{
        console.log('in function')
    dynamicServiceNames(i++);
}, 1000)

