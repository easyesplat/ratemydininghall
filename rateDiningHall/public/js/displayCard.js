const getNotes = (userId) => {
    console.log("entered");
  const notesRef = firebase.database().ref(`colleges`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    renderDataAsHtml(data);
  });
};

const renderDataAsHtml = (data) => {
  let cards = ``;
  for(const noteItem in data) {
    const note = data[noteItem];
    // For each note create an HTML card
    cards += createCard(note, noteItem)
  };
  // Inject our string of HTML into our viewNotes.html page
  document.querySelector('#app').innerHTML = cards;
};

getNotes();