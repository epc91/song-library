const playSong = document.getElementsByClassName('play')
const stopSong = document.getElementsByClassName('stop')

let audio

for (element of playSong) {
    element.addEventListener('click', function () {
        let song = this.getAttribute('id')
        audio = new Audio(`./songs/${song}.mp3`)
        audio.play()
    })
}

for (element of stopSong) {
    element.addEventListener('click', function () {
        audio.pause()
    })
}