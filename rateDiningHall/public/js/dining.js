var nameOfHall = window.localStorage.getItem("keyLocalStorage");
let index = nameOfHall.indexOf("/");
var collegeName = nameOfHall.substr(0, index);
var hallName = nameOfHall.substr(nameOfHall.indexOf("/", index+1)+1);



window.onload = (event) => {
    var reviewsRef = firebase.database().ref(`colleges/${collegeName}`);
    reviewsRef.on('value', (snapshot) => {
       const data = snapshot.val();
       renderData(data["dininghall"][hallName]);
       createDiningHallInfo(data["dininghall"][hallName]);
       changePicture(data["photos"]);
    });
};

changePicture = (data) => {
    let img;
    for(let i in data){
        img=data[i].Picture;
    }
    myImage = document.querySelector("#diningImage");
    myImage.innerHTML = `<figure class="image">
              <img style = "height: 500px; padding-top: 25px;" src = "${img}" alt = "college dining hall">
            </figure>`;
}

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
    let diningInfoCard = document.querySelector("#appDiningHallInfo");
    diningInfoCard.innerHTML = `<h1 id = "collegeTitleCard">
              ${hallName}
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
