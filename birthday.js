const btn = document.getElementById('btn');
const img = document.getElementById('MainBirthday');
const audio1 = new Audio('./videoplayback.mp3');
const reset = document.getElementById('reset')  // Fix path with forward slash
const body=document.getElementById('body')
const backgroundAudio = document.getElementById('backgroundaudio');
let width = 40;
let height = 30;
let isPlaying = false;
function randomcolor(){
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`;

}
btn.addEventListener('click', () => {
    width += 10;
    height += 5;
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    let newColor=randomcolor();
    document.body.style.backgroundColor=newColor;
    if (width === 350 && !isPlaying) {
        try {
            audio1.play()
                .catch(error => {
                    console.error('Audio playback failed:', error);
                });
            isPlaying = true;
            backgroundAudio.pause();
        } catch (error) {
            console.error('Error:', error);
        }
    }
});
reset.addEventListener('click',()=>{
    width=4;
    height=3;
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    document.body.style.backgroundColor=`#4169e1`
    backgroundAudio.play(); // Resume background audio on reset
    audio1.pause(); // Stop audio1
    isPlaying = false;
})
audio1.addEventListener('ended', () => {
    backgroundAudio.play();
    isPlaying = false;
});
