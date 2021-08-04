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

    return `<div class = "card is-small has-background-white-ter" style = "padding: 20px;" onclick = "goToHall(hall)"> 
                        <div style = "width: 100%;">
                          <div style="width: 30%; float: left;">
                            <p style = "color: BLACK; text-align: center; font-size: 1.1rem;"> ${hall.name} (${hall.name.length} reviews) </p>
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

    return `<div class = "box" style = "padding: 20px;"> 
                              <div style="width: 150px;">
                                <div style="width: 50%; float: left; padding-bottom: 20px;" id = "forkRatingLeft"> 
                                </div>
                                <div style="margin-left: 50%;" id = "forkRatingRight"> 
                                </div>
                              </div>
                              <div>
                                <p id = "collegeInfo">
                                  Dish: ${review.dish}
                                </p>
                                <br>
                                <p style = "padding-left: 5px;">
                                 ${review.content}
                                </p>
                                <br>
                                <p style = "font-size: .75rem;">
                                  Reviewed by ${review.userId}
                                </p>
                 </div>
                 </div>`;
}

const createDiningHallInfo = (hall) => {
    return `<h1 id = "collegeTitleCard">
              ${hall.name}
            </h1>
            <br>
            <div style = "width: 100%;">
                          <div style="width: 30%; float: left;">
                            <p id = "collegeInfo"> Overall: </p>
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
            <hr>
            <div style = "width: 100%;">
                          <div style="width: 30%; float: left;">
                            <p id = "collegeInfo"> Breakfast: </p>
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
            <div style = "width: 100%;">
                          <div style="width: 30%; float: left;">
                            <p id = "collegeInfo"> Lunch: </p>
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
            <div style = "width: 100%;">
                          <div style="width: 30%; float: left;">
                            <p id = "collegeInfo"> Dinner: </p>
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
            <div style = "width: 100%;">
                          <div style="width: 30%; float: left;">
                            <p id = "collegeInfo"> Dessert: </p>
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
            <hr>
            <p id = "collegeInfo">
            Best dish at this dining hall:
            </p>`;
}

const goToHall = (hall) => {
    renderData(hall, '#appDining');
    diningHallInfo = document.querySelector('#appDiningHallInfo');
    diningHallInfo.innerHTML = createDiningHallInfo(hall);
    window.location = "diningHall.html";
}