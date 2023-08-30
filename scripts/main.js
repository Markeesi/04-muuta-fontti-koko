document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const fontKoko = document.getElementById("fontkoko");
  const fontKokoNyt = document.getElementById("nyt");

  let fontinKoko = 16;
  fontKoko.style.fontSize = fontinKoko + "px"; // set the fontsize to 16px
  fontKokoNyt.textContent = "Fontin koko nyt: " + fontinKoko + "px";

  button.onclick = () => {
    fontinKoko += 4;
    if (fontinKoko > 32) {
      fontinKoko = 16;
    }

    fontKoko.style.fontSize = fontinKoko + "px"; // Update the font size after the change
    fontKokoNyt.textContent = "Fontin koko nyt " + fontinKoko + "px";
  };
});
