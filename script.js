const wrapper = document.querySelector(".wrapper"),
    qrinput = wrapper.querySelector(".form input"),
    generatebtn = wrapper.querySelector(".form button"),
    qrimg = wrapper.querySelector(".qr-code img");

generatebtn.addEventListener("click", () => {
    let qrvalue = qrinput.value;
    if (!qrvalue) return; //if the input is empty return from here
    generatebtn.innerText = "Generating QR Code .....";
    // getting a qr code of user entered value using qrserver
    //api and passing the api returned img src to qr img
    qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    qrimg.addEventListener("load", () => //once qr img loaded
        {
            wrapper.classList.add("active");
            generatebtn.innerText = "Generate QR Code ";
        });
})
qrinput.addEventListener("keyup", () => {
    if (!qrinput.value) {
        wrapper.classList.remove("active");
    }
})