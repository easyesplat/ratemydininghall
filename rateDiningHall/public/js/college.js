var name = window.localStorage.getItem("dataLocalStorage");

window.onload = (event) => {
    var diningHallsRef = firebase.database().ref(`colleges/${name}`);
    console.log(diningHallsRef);
    diningHallsRef.on('value', (snapshot) => {
       const data = snapshot.val();
       renderData(data["dininghall"]);
       makeCollegeCard(data["dininghall"]);
       changePicture(data["photos"]);
    });
};

changePicture = (data) => {
    let img;
    for(let i in data){
        img=data[i].Picture;
    }
    myImage = document.querySelector("#collegeImage");
    myImage.innerHTML = `<figure class="image">
              <img style = "max-width: 55%; height: auto; display: block; margin-left: auto; margin-right:auto" src = "${img}" alt = "college dining hall">
            </figure>`;
}

const renderData = (data) => {
    const destination = document.querySelector('#diningHallCards');
    destination.innerHTML = "";

        for (let key in data) {
            const val = data[key];
            let x = 0;
            let y = 0;

            for(let key2 in val)
            {
                let review = val[key2];
                console.log(review.Rating);
                x = x+parseInt(review.Rating);
                y = y+1;
            }
            x = ((x/5)/y)*100;
            destination.innerHTML += createCard(val, key, x);
        }
};

const createCard = (hall, key, x) => {
    return `<div class = "card is-small has-background-white-ter" style = "padding: 20px;" onclick = "goToHall('${key}')"> 
                        <div style = "width: 100%;">
                          <div style="width: 30%; float: left;">
                            <p style = "color: BLACK; text-align: center; font-size: 1.1rem;"> ${key} </p>
                          </div>
                          <div style="margin-left: 30%;"> 
                              <div style="width: 150px;">
                                <div style="width: ${x}%; float: left; padding-bottom: 20px;" id = "forkRatingLeft"> 
                                </div>
                                <div style="margin-left: ${x}%;" id = "forkRatingRight"> 
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
            `;
}

const goToHall = (key) => {
    window.localStorage.setItem("keyLocalStorage", name + "/dininghall/"+ key);  
    window.location = "diningHall.html";
};