let googleUser;

window.onload = (event) => {
     //Use this to retain user state between html pages.
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('Logged in as: ' + user.displayName);
            googleUser = user;
        } else {
            window.location = 'index.html'; // If not logged in, navigate back to login page.
        }
    });
};
console.log("js loaded");

/*const button = document.querySelector("#subButton");
button.addEventListener('click', getInfo());*/
    const fileInput = document.querySelector('#file input[type=file]');
    fileInput.onchange = () => {
     if (fileInput.files.length > 0) {
      const fileName = document.querySelector('#file .file-name');
      fileName.textContent = fileInput.files[0].name;
      console.log("here");
     }
    }

const getInfo = () => {
    const school = document.querySelector("#schoolName").value;
    const hall = document.querySelector("#diningName").value;
    const food = document.querySelector("#foodName").value;
    const reviewText = document.querySelector("#revText").value;
    const rating = ratingValue();
    const picLink = document.querySelector("#picLink").value;
    console.log(typeof picLink)
    //push the information to the firebase
    firebase.database().ref(`users/${googleUser.uid}`).push({
            School: school,
            DiningHall: hall,
            Rating: rating,
            Review: reviewText,
            Picture: picLink
        })
        // 3. Clear the form so that we can write a new note
    firebase.database().ref(`colleges/${school}/dininghall/${hall}`).push({
            Rating: rating,
            Review: reviewText,
            UserId: googleUser.uid,
    })
    firebase.database().ref(`collegephoto/${school}/photos`).push({
        Picture: picLink
    })
        .then(() => {
            document.querySelector("#schoolName").value = "";
            document.querySelector("#diningName").value = "";
            document.querySelector("#revText").value = "";
            document.querySelector("#picLink").value = "";
        });
}

const ratingValue = () => {
    var rating = document.getElementsByName('answer');

    for (i = 0; i < rating.length; i++) {
        if (rating[i].checked) {
            const num = rating[i].value.charAt(0);
            rating[i].checked = false;
            return num;
        }
    }
}