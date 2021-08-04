let googleUserId;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUserId = user.uid;
      getNotes(googleUserId);
    } else {
      // If not logged in, navigate back to login page.
      window.location = 'index.html'; 
    };
  });
};

const getNotes = (userId) => {
  const notesRef = firebase.database().ref(`users/${userId}`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
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

/*const editNote = (reviewId) => {
  const editNoteModal = document.querySelector('#editNoteModal');
  const reviewRef = firebase.database().ref(`users/${googleUserId}`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    const noteDetails = data[reviewId];
    document.querySelector('#editReviewId').value = reviewId;
    document.querySelector('#editSchoolId').value = noteDetails.title;
    document.querySelector('#editDiningHallId').value = noteDetails.text;
    document.querySelector('#editReviewDataId').value = noteDetails.text;
    document.querySelector('#editRatingId').value = noteDetails.text;
  });

  editNoteModal.classList.toggle('is-active');
};

const deleteNote = (noteId) => {
  firebase.database().ref(`users/${googleUserId}/${noteId}`).remove();
}

const saveEditedNote = () => {
  const reviewId = document.querySelector('#editReviewId').value;
  const schoolId = document.querySelector('#editSchoolId').value;
  const diningHallId = document.querySelector('#editDiningHallId').value;
  const reviewData = document.querySelector('#editReviewDataId').value;
  const ratingId = document.querySelector('#editRatingId').value;
  const noteEdits = {
    title: noteTitle,
    text: noteText
  };
  firebase.database().ref(`users/${googleUserId}/${noteId}`).update(noteEdits);
  closeEditModal();
}

const closeEditModal = () => {
  const editNoteModal = document.querySelector('#editNoteModal');
  editNoteModal.classList.toggle('is-active');
};*/

const createCard = (note, noteId) => {
  let innerHTML = "";
  innerHTML += `<div class="column is-one-quarter">`
  innerHTML += `<div class="card">`
  innerHTML += `<header class="card-header">`
  innerHTML += `<p class="card-header-title">`
  innerHTML += `${note.DiningHall} at ${note.School}`
  innerHTML += `</p>`
  innerHTML += `</header>`
  innerHTML += `<div class="card-content">`
  innerHTML += `<div class="content">`
  innerHTML += `Rating - ${note.Rating}`
  innerHTML += `</div>`
  innerHTML += `</div>`
  innerHTML += `<div class="card-content">`
  innerHTML += `<div class="content">`
  innerHTML += `Rating - ${note.Review}`
  innerHTML += `</div>`
  innerHTML += `</div>`
  innerHTML +=  `</footer>`
  innerHTML += `</div>`
  innerHTML += `</div>`

  return innerHTML;
};