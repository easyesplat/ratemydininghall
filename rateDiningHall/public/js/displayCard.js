const getNotes = () => {
    console.log("entered");
   
  const notesRef = firebase.database().ref(`colleges`);
  //console.log(notesRef);
  notesRef.on('value', (snapshot) => {
    //console.log(notesRef.getKey());
    const data = snapshot.val();
    //console.log(data['UCLA']);
    //pushCard(data['UCLA']);
    
    /*
    for(let i in data)
    {
        console.log(i);
        //i -> key
        //data[i] = value of key i
        for(let j in data[i]['dininghall'])
        {
            //can also be (data[i]).dininghall
            console.log(j);
            const dininghall = data[i]['dininghall'][j];
            for(let k in dininghall)
            {
                console.log(dininghall[k]);
            }
        }
    }
    */

    //Object.keys(data)

    renderDataAsHtml(data);
 });
};

const renderDataAsHtml = (data) => {
  for(let i in data)
  {
      let name = i;
      let diningHall = getDine(data[i]['dininghall']);
      let img = getImg(name);
      console.log(name);
      console.log(diningHall);
      console.log(img);
  }

  /*
  for(const noteItem in data) {
    console.log(noteItem);
    document.querySelector('#card1DiningHall').innerHTML +=noteItem;
    // For each note create an HTML card
    //cards += createCard(note, noteItem)
  };
  document.querySelector('#card1School').innerHTML = school;

  // Inject our string of HTML into our viewNotes.html page
  //document.querySelector('#app').innerHTML = cards;
  */
};

const getDine = (data) => {
    let combineStr = "";
    for(let i in data)
    {
        combineStr += "(" + i + ")";
    }
    return combineStr;
};

const getImg = (school) => {
    const iRef = firebase.database().ref(`collegephoto`);
    let img = "";

    iRef.on('value', (snapshot) => {
        const data = snapshot.val();
        for(let i in data)
        {
            if(i.localeCompare(school) == 0)
            {
                for(let j in data[i]['photos'])
                {
                    img = data[i]['photos'][j];
                    //console.log(img.Picture);
                }
            }
        }
    });
    return img.Picture;
};

const createNote = (college, diningHalls, img) => {
    let innerHTML = "";
    innerHTML += `<div class="card-image" id='card1Img'>`;
    innerHTML += `<figure class="image is-4by3">`
    innerHTML += `<img src="${img}" alt="College Image">`
    innerHTML += `</figure>`
    innerHTML += `</div>`
    innerHTML += `<div class="card-content">`
    innerHTML += `<div class="content">`
    innerHTML += `<p class="title is-4" id="card1School">${college}</p>`
    innerHTML += `<p class="subtitle is-6" id="card1DiningHall">${diningHalls}</p>`
    innerHTML += `</div>`
    innerHTML += `</div>`
    return innerHTML;
};

getNotes();