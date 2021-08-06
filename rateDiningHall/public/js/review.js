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
    let school = document.querySelector("#schoolName").value;
    if(school == "ucla" || school == "UC Los Angeles" || school == "Ucla"||school == "UCLA")
        school = 'UCLA';
    else if(school == 'harvard'||school == 'Harvard')
        school = 'Harvard';
    else if(school == 'stanford'||school == 'Stanford')
        school = 'Stanford';
    else if(school == 'UC Berkeley'||school == "uc berkeley" || school == 'Uc Berkeley' || school == 'UC berkeley' || school == 'berkeley' || school == 'Berkeley' || school == 'Uc berkeley' || school == 'ucb' || school == 'UCB')
        school = 'UC Berkeley';
    else if(school == 'UC davis' || school == 'uc davis' || school == 'Uc Davis'|| school == 'UC Davis' || school == 'ucd' || school == 'UCD')
        school = 'UC Davis';
    else if(school == 'UC Merced' || school == 'UC merced' || school == 'uc merced' || school == 'uc Merced' || school == 'ucm' || school == 'UCM')
        school = 'UC Merced';
    else if(school == 'UC Riverside' || school == "UC riverside" || school == 'uc Riverside' || school == 'uc riverside' || school == 'ucr' || school == 'UCR')
        school = 'UC Riverside';
    else if(school == "UC San Diego" || school == "uc san diego" || school == 'UC san diego' || school == 'UCSD' || school == 'ucsd')
        school = 'UC San Diego';
    else 
        school = school.toUpperCase();
    const hall = document.querySelector("#diningName").value;
    const food = document.querySelector("#foodName").value;
    const reviewText = document.querySelector("#revText").value;
    const rating = ratingValue();
    const picLink = document.querySelector("#picLink").value;
    const meal = document.querySelector("#foodName").value;
    console.log(typeof picLink)
    //push the information to the firebase
    firebase.database().ref(`users/${googleUser.uid}`).push({
            School: school,
            DiningHall: hall,
            Rating: rating,
            Review: reviewText,
            Picture: picLink,
            Meal: meal
        })
        // 3. Clear the form so that we can write a new note
    
    //     firebase.database().ref(`colleges/${school}`).push({
            
    //             'dininghall': {
    //                 hall:{
    //                     'meal': meal,
    //                     'Rating': rating,
    //                     'Review': reviewText,
    //                 }
    //             },
    //             'photo': picLink
    //     })
    // }
    if(picLink != ""){
    firebase.database().ref(`colleges/${school}/photos`).push({
        Picture: picLink
    })}
    firebase.database().ref(`colleges/${school}/dininghall/${hall}`).push({
            Rating: rating,
            Review: reviewText,
            Meal: meal,
            UserId: googleUser.uid,
    })
    .then(() => {
        document.querySelector("#schoolName").value = "";
        document.querySelector("#diningName").value = "";
        document.querySelector("#revText").value = "";
        document.querySelector("#picLink").value = "";
        document.querySelector("#foodName").value = "";
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

const changeWindow = (event) => {
    window.location = "index.html";
}