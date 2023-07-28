const text =document.getElementById('text');
const sizes = document.getElementById('size');
const genbtn = document.getElementById('genBtn');
const downbtn = document.getElementById('downBtn');

const qrcontainer = document.querySelector('.scanner');
let size = sizes.value;

genbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    emptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    emptyInput();
});

downbtn.addEventListener('click',()=>{
    let img = document.querySelector('.scanner img');
    if(img !==null){
        let imgAtr = img.getAttribute('src');
        downbtn.setAttribute("href",imgAtr);
    }
    else{
        downbtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function emptyInput(){
    if(text.value.length>0){
        generateQRCode();
    }
    else{
        alert("enter the text or url");
    }
}

function generateQRCode (){
    qrcontainer.innerHTML= "";
    new QRCode(qrcontainer, {
        text: text.value,
        height: size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000"

    });
   
}

