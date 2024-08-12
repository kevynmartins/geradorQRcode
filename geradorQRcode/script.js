const container = document.querySelector('.container'),
qrinput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrimg = container.querySelector('.qr-code .img');
 
generateBtn.addEventListener('click', () =>{
    let qrValue = qrinput.value;
    if(!qrValue){
        alert('Insira um texto ou uma URL para gerar o QRcode.')
        return;
    }
    generateBtn.innerText = "Gerando um QRcode...";
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrimg.addEventListener('load', () => {
        generateBtn.innerText = "Gerar QRcode";
        container.classList.add('active');
    });
})

qrinput.addEventListener('keyup', () => {
    if(!qrinput.value){
        container.classList.remove('active');
    }
});