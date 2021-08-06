var name = window.localStorage.getItem("dataLocalStorage");

window.onload = (event) => {
    var diningHallsRef = firebase.database().ref(`colleges/${name}/dininghall`);
    console.log(diningHallsRef);
    diningHallsRef.on('value', (snapshot) => {
       const data = snapshot.val();
       renderData(data, "#diningHallCards");
       makeCollegeCard(data);
    });
};

const renderData = (data, location) => {
    const destination = document.querySelector(location);
    destination.innerHTML = "";
    if(location == '#diningHallCards')
    {
        for (let key in data) {
            const val = data[key];
            destination.innerHTML += createCard(val, key);
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

const createCard = (hall, key) => {

    return `<div class = "card is-small has-background-white-ter" style = "padding: 20px;" onclick = "goToHall('${key}')"> 
                        <div style = "width: 100%;">
                          <div style="width: 30%; float: left;">
                            <p style = "color: BLACK; text-align: center; font-size: 1.1rem;"> ${key} </p>
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

makeCollegeCard = (data) => {
    collegeCard = document.querySelector("#collegeCard");
    collegeCard.innerHTML = `<h1 id = "collegeTitleCard">
              ${name}
            </h1>
            <br>
            <p id = "collegeInfo">
            Overall:
            </p>
            <p id = "collegeInfo">
            Sort by:
            </p>
            <p id = "collegeInfo">
            Best dining hall on campus:
            </p>
            <p id = "collegeInfo">
            Best meal on campus:
            </p>
          </div>`;
}

const goToHall = (key) => {
    window.localStorage.setItem("keyLocalStorage", name + "/dininghall/"+ key);  
    window.location = "diningHall.html";
};