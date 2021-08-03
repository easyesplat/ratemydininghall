console.log("js loaded");

const button = document.querySelector("#subButton");

button.addEventListener('click', getInfo);

const getInfo = () => {
    const school = document.querySelector("#schoolName").value;
    const hall = document.querySelector("#schoolName").value;
    //idk how to get the rating
    const reviewText = document.querySelector("#revText").value;

    //push the information to the firebase
}