let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.
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

const getInfo = () => {
    const school = document.querySelector("#schoolName").value;
    const hall = document.querySelector("#diningName").value;
    //idk how to get the rating
    const reviewText = document.querySelector("#revText").value;
    const rating = ratingValue();
    //push the information to the firebase
    firebase.database().ref(`users/${googleUser.uid}`).push({
        School: school,
        DiningHall: hall,
        Rating: rating,
        Review: reviewText
    })
  // 3. Clear the form so that we can write a new note
  .then(() => {
    document.querySelector("#schoolName").value = "";
    document.querySelector("#diningName").value = "";
    document.querySelector("#revText").value = "";
  });
}
const ratingValue = () => {
            var rating = document.getElementsByName('answer');
              
            for(i = 0; i < rating.length; i++) {
                if(rating[i].checked){
                    const num = rating[i].value;
                    rating[i].checked = false;
                    return num;
                }
            }
        }