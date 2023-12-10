const picInputDiv = document.querySelector("#picInputDiv");
const picInput = document.querySelector("#picInput");

picInputDiv.addEventListener("click", () => {
    picInput.click();
})

picInput.addEventListener("change", ()=> {
    if (picInput.files.length > 0) {
        const file = picInput.files[0];
        console.log("file", file);
    }
})