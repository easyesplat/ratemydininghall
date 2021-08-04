const getNotes = () => {
    console.log("entered");
  const notesRef = firebase.database().ref(`colleges/UCLA/dininghall/Rieber Court`);
  notesRef.on('value', (snapshot) => {
    
    const data = snapshot.val();
    //console.log(data[-MgIAKBYEYEMF0mu77oe].Meal);
    /*
    let name = data[0].name;
    console.log("name: " + name);
    let diningHall = name.database().ref('dininghall');
    let pussy = diningHall[0];
    console.log("pussy: "+pussy);
    const picRef = firebase.database().ref('collegephoto');
    let photo;
    for(let i = 0; i < picRef.lenth; i++)
    {
        if(picRef[i] == name)
            photo = picRef[i].Picture;
    }
    */
    renderDataAsHtml(data);
  });
};

const renderDataAsHtml = (data) => {
  let cards = ``;
  for(const noteItem in data) {
    console.log(noteItem);
    const note = data[noteItem];
    console.log(note.Meal);
    // For each note create an HTML card
    //cards += createCard(note, noteItem)
  };
  // Inject our string of HTML into our viewNotes.html page
  //document.querySelector('#app').innerHTML = cards;
};

getNotes();