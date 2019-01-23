const chunks = ['a', 'b', 'c'];

// load chunk only when selector is in dom
const chunkGenerator = () => {
    for(let i = 0; i < chunks.length; i++) {
        if([...document.getElementsByClassName(chunks[i])].length) {
            import(`./js/${chunks[i]}`);
        }
    }
};

// load chunk only on an event fired
const loadOnClick = () => {
    const button = document.getElementsByClassName('button');
    button[0].addEventListener('click', (e) =>  import('./js/d'));
};

document.addEventListener('DOMContentLoaded',(e) => {
    chunkGenerator();
    loadOnClick();
});
