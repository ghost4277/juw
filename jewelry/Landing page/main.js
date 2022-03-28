let loader = document.querySelector('.loader__wrapper')
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.remove()
    }, 1000);
})