"use strict";

const userbase = getUser();
runPlayer(userbase);

function runPlayer(userbase) {
  const elementsWrapper = getElements();

  elementsWrapper.searchButton.addEventListener("click", () => {
    const searchString = elementsWrapper.searchInput.value;
    refresh(elementsWrapper.resultDiv);

    let User = [];

    for (let i = 0; i < userbase.length; i++) {
      if (userbase[i].name.startsWith(searchString)) {
        User.push(userbase[i]);
      }
    }

    // renderResult(User)
    renderResult(User, elementsWrapper);
  });
}

function refresh(el) {
  el.innerHTML = "";
}

function renderResult(username, wrapper) {
  if (username.length === 0) {
    console.log("user not found!");
    wrapper.resultDiv.innerHTML = "user not found!";
  } else {
    for (let i = 0; i < username.length; i++) {
      const newValue =
        wrapper.resultDiv.innerHTML +
        `<li><img src='../assets/images/${
          username[i].photoName
        }' width="300" ></img>${username[i].name}${getLIkeImageString(
          username[i]
        )}</li>`;
      wrapper.resultDiv.innerHTML = newValue;
    }
  }
}

function getLIkeImageString(track) {
  if (track.addedToFavorite === true) {
    return '<img src="../assets/images/pngtree-vector-like-icon-png-image_695769.jpg" alt="" style="width:50px;">';
  } else {
    return '<img src="../assets/images/940_like_icon.jpg" alt="" style="width:50px;">';
  }
}

function getUser() {
  const user1 = {
    id: 1,
    name: "Randy",
    likes: 198,
    dateOfBirth: 2015,
    addedToFavorite: true,
    photoName: "fotos-da-torre-de-paris.jpg",
  };

  const user2 = {
    id: 2,
    name: "Dima",
    likes: 201,
    releaseDate: 2012,
    addedToFavorite: false,
    photoName: "polaris-dream.jpg",
  };

  const userbase = [user1, user2];
  return userbase;
}

function getElements() {
  const searchButton = document.querySelector("#search-button");
  const searchInput = document.querySelector("#search-string");
  const resultDiv = document.querySelector("#result-div");
  const wrapper = {
    searchButton: searchButton,
    searchInput: searchInput,
    resultDiv: resultDiv,
  };
  return wrapper;
}
