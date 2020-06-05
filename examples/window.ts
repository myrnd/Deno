window.addEventListener('load', () => {
    console.log("loaded");
});

window.addEventListener('unload', () => {
    console.log('unloaded');
});


setTimeout(() => {
    console.log('after 2s');
}, 2000);