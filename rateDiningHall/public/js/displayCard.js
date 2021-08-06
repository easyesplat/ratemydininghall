////let cRef = firebase.database().ref('colleges');
//let imgRef = firebase.database().ref('collegephoto');
const getNotes = () => {
    console.log("Entered");

    const notesRef = firebase.database().ref('colleges')

    notesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        //Object.keys(data)

        renderDataAsHtml(data);
    });
};

const renderDataAsHtml = (data) => {
    let count = 1;
    for (let i in data) {
        let name = i;
        let diningHall = getDine(data[i]['dininghall']);
        let img = getImg(data[i]['photos']);
        console.log(name);
        console.log(diningHall);
        console.log(img);

        const nameChange = document.querySelector(`#name${count}`);
        nameChange.innerHTML = name;
        const diningChange = document.querySelector(`#dh${count}`);
        diningChange.innerHTML = diningHall;
        const imgChange = document.querySelector(`#img${count}`);
        imgChange.innerHTML = createImg(img);
        count++;

    }
};

const getDine = (data) => {
    let combineStr = "";
    for (let i in data) {
        combineStr += "(" + i + ")";
    }
    return combineStr;
};

const getImg = (data) => {
    let img;
    for (let i in data) {
        img = data[i].Picture;
    }
    return img;
}

const createImg = (img) => {
    let innerHTML = "";
    innerHTML += '<figure class="image is-4by3">';
    innerHTML += `<img id="img1" src="${img}" alt="College Photo">`
    innerHTML += '</figure>';
    return innerHTML;
};

getNotes();