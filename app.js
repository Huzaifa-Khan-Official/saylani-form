import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBc-Pl4KzZp5LtV72iJ_UlgYAW5NbDrdg",
    authDomain: "saylani-form-clone.firebaseapp.com",
    projectId: "saylani-form-clone",
    storageBucket: "saylani-form-clone.appspot.com",
    messagingSenderId: "484217162335",
    appId: "1:484217162335:web:da892ec4634e7cbb86e9ea"
};

const app = initializeApp(firebaseConfig);


const picInputDiv = document.querySelector("#picInputDiv");
const picInput = document.querySelector("#picInput");
const submitBtn = document.querySelector(".submitBtn");

picInputDiv.addEventListener("click", () => {
    picInput.click();
})

picInput.addEventListener("change", () => {
    if (picInput.files.length > 0) {
        const file = picInput.files[0];
        console.log("file", file);
    }
})

submitBtn.addEventListener("click", () => {
    const selectCity = document.getElementById("select-city");
    const selectCourse = document.getElementById("select-course");
    const nameInput = document.getElementById("nameInput");
    const fatherNameInput = document.getElementById("fatherNameInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");
    const cnicInput = document.getElementById("cnicInput");
    const fatherCnicInput = document.getElementById("fatherCnicInput");
    const dateInput = document.getElementById("dateInput");
    const selectGender = document.getElementById("select-gender");
    const addressInput = document.getElementById("addressInput");
    const lastQualification = document.getElementById("last-qualification");
    const haveLaptop = document.getElementById("have-laptop");

    const city = selectCity.value;
    const course = selectCourse.value;
    const name = nameInput.value;
    const fatherName = fatherNameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const cnic = cnicInput.value;
    let fatherCnic
    if (fatherCnicInput) {
        fatherCnic = fatherCnicInput.value;
    } else {
        fatherCnic = "";
    }
    const dateOfBirth = dateInput.value;
    const gender = selectGender.value;
    const address = addressInput.value;
    const qualification = lastQualification.value;
    const laptopAvailable = haveLaptop.value;

    if (!city) {
        location.href = "#select-city";
    } else if (!course) {
        location.href = "#select-course";
    } else if (!name) {
        location.href = "#nameInput";
    } else if (!fatherName) {
        location.href = "#fatherNameInput";
    } else if (!email) {
        location.href = "#emailInput";
    } else if (!phone) {
        location.href = "#phoneInput";
    } else if (!cnic) {
        location.href = "#cnicInput";
    } else if (!dateOfBirth) {
        location.href = "#dateInput";
    } else if (!gender) {
        location.href = "#select-gender";
    } else if (!address) {
        location.href = "#addressInput";
    } else if (!qualification) {
        location.href = "#last-qualification";
    } else if (!laptopAvailable) {
        location.href = "#have-laptop";
    } else {
        const studentData = {
            city,
            course,
            name,
            fatherName,
            email,
            phone,
            cnic,
            fatherCnic,
            dateOfBirth,
            gender,
            address,
            qualification,
            laptopAvailable
        }
        
    }

})