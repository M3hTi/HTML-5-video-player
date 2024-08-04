// get Elements first
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
console.dir(video)
const toggleButton = player.querySelector('.toggle')
console.dir(toggleButton)
const ranges = player.querySelectorAll('.playerSlider')
// console.dir(ranges)
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progressField')

// build our functions
// make a flag for video ; is it playing or not
let isPlaying = false;
function togglePlay() {
    if (!isPlaying) {
        toggleButton.innerText = '❚ ❚'
        video.play()
        isPlaying = true;
    } else {
        toggleButton.innerText = '▶'
        video.pause()
        isPlaying = false;
    }
}



// for handle The Ranges 
function handleRangeUpdate() {
    // console.dir(this)
    // console.log(this.value);
    video[this.name] = this.value;
}



// for handling progress Bar
function handleProgreesBar() {
    // console.log(video.currentTime);
    // console.log(video.duration);
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}




function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    // progressBar.style.flexBasis = `${scrubTime}%`
    video.currentTime = scrubTime
}








let mouseDown = false
// addEventListener
toggleButton.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
ranges.forEach((rangeElement) => {
    rangeElement.addEventListener('change', handleRangeUpdate)
})
video.addEventListener('timeupdate', handleProgreesBar)
progress.addEventListener('click', scrub)

progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup',() => mouseDown = false)






// setInterval(() => {
//     console.dir(video.currentTime)
// }, 1000);

