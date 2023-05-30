const wrapper = document.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () =>{
	let qrValue = qrInput.value;
	if(!qrValue) return; //if the input is empty then return form here
	generateBtn.innerText = "Generating QR Code...";
	// getting a QR Code of user entered value using the qrserver
	// API and passing the  API returned img to qrImg
	qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data= ${qrValue}`;
	qrImg.addEventListener("load", () => {
		wrapper.classList.add("active");
		generateBtn.innerText = "Generate QR Code";
	});
});

qrInput.addEventListener("keyup", () => {
	if(qrInput.value){
		wrapper.classList.remove("active");
	}
});
