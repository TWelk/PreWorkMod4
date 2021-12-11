//Thank you to my friend Daniel who helped me with this bit of js.

function jukebox() {
  let currentSong = 0;
  const jukeBoxEl = document.querySelector("#jukebox");
  const songs = document.querySelectorAll(".songs");
  jukeBoxEl.setAttribute("src", `${songs[0].getAttribute("href")}`)

  for (let i = 0; i < songs.length; i++) {
    const element = songs[i];
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const currentSongEl = document.querySelector(".current-song");

      jukeBoxEl.setAttribute("src", `${event.target.getAttribute("href")}`)
      jukeBoxEl.play();

      currentSongEl.classList.remove("current-song");
      event.target.parentElement.classList.add("current-song");
      currentSong = i;
    });
  }

  jukeBoxEl.addEventListener("ended", (event) => {
    const currentSongEl = document.querySelector(".current-song");
    currentSong++;
    if (currentSong == songs.length) currentSong = 0;
    currentSongEl.classList.remove("current-song")
    songs[currentSong].parentElement.classList.add("current-song");
    jukeBoxEl.setAttribute("src", `${songs[currentSong].getAttribute("href")}`)
    jukeBoxEl.play();
  });
}

jukebox();
