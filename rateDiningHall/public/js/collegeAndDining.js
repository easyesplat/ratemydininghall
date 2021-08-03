window.onload = (event) => {
  //figure out how we are structuring the data in the database
  //const diningHallsRef = firebase.database().ref(`users/${googleUser.uid}`);
  diningHallsRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderData(data, '#app');
  });
};


const renderData = (data, location) => {
    const destination = document.querySelector(location);
    destination.innerHTML = "";
    if(location == '#app')
    {
        for (let key in data) {
            const val = data[key];
            destination.innerHTML += createCard(val);
        }
    }
    else if(location == '#appDining')
    {
        for (let key in data) {
            const val = data[key];
            destination.innerHTML += createBox(val);
        }
    }
};

const createCard = (hall) => {
    /*edit this to return name and other variables based on hall*/
    return `<div class = "card is-small has-background-white-ter" style = "padding: 20px;" onclick = "goToHall(hall)"> 
                        <div style = "width: 100%;">
                          <div style="width: 30%; float: left;">
                            <p style = "color: BLACK; text-align: center; font-size: 1.1rem;"> Dining Hall Name (5 reviews) </p>
                          </div>
                          <div style="margin-left: 30%;"> 
                              <div style="width: 150px;">
                                <div style="width: 50%; float: left; padding-bottom: 20px;" id = "forkRatingLeft"> 
                                </div>
                                <div style="margin-left: 50%;" id = "forkRatingRight"> 
                                </div>
                              </div>
                          </div>
                       </div>
              </div>`;
};

const createBox = (review) => {
    /*edit this to return name and other variables based on review*/
    return `<div class = "box" style = "padding: 20px;"> 
                              <div style="width: 150px;">
                                <div style="width: 50%; float: left; padding-bottom: 20px;" id = "forkRatingLeft"> 
                                </div>
                                <div style="margin-left: 50%;" id = "forkRatingRight"> 
                                </div>
                              </div>
                              <div>
                                <p id = "collegeInfo">
                                  Dish: dish name (meal)
                                </p>
                                <br>
                                <p style = "padding-left: 5px;">
                                  blahblahbblahblahblahblaasdlfkjsdl;fkjsdlafkjlskdfjlsadkjfdsjfsdaflkjasd;flkjads;lkfjsdlakfjdsal;kjf
                                </p>
                                <br>
                                <p style = "font-size: .75rem;">
                                  Reviewed by a person on 08/09/2021
                                </p>
                 </div>
                 </div>`;
}

const goToHall = (hall) => {
    renderData(hall, '#appDining');
    window.location = "diningHall.html";
}