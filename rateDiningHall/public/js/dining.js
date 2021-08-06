var nameOfHall = window.localStorage.getItem("keyLocalStorage");

window.onload = (event) => {
    var reviewsRef = firebase.database().ref(`colleges/${nameOfHall}`);
    reviewsRef.on('value', (snapshot) => {
       const data = snapshot.val();
       renderData(data);
       createDiningHallInfo();
    });
};

const renderData = (data) => {
    const destination = document.querySelector("#appDining");
    destination.innerHTML = "";
    for (let key in data) {
            const val = data[key];
            destination.innerHTML += createBox(val);
    }
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
                                  Meal: ${review.Meal}
                                </p>
                                <br>
                                <p style = "padding-left: 5px;">
                                 ${review.Review}
                                </p>
                                <br>
                                <p style = "font-size: .75rem;">
                                  Reviewed by ${review.UserId}
                                </p>
                 </div>
                 </div>`;
}

const createDiningHallInfo = () => {
    return `<h1 id = "collegeTitleCard">
              Hi
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
