function getLIkeImageString(tracks) {
  if (tracks.addedToFavorite === true) {
    return '<img src="../assets/images/thumbs-up.jpg" alt="" style="width:50px;" class="unlike">';
  } else {
    return '<img src="../assets/images/940_like_icon.jpg" alt="" style="width:50px;" class="like">';
  }
}

function bindLikeEventHandlers() {
  const likeButtons = document.querySelectorAll(".like, .unlike");
  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", () => {
      playlist[i].addedToFavorite = !playlist[i].addedToFavorite;
      refreshUI();
    });
  }
}
