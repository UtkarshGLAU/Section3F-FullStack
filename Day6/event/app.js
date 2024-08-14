
const pa=document.getElementById('q')
const b=document.getElementById('Cl')
b.addEventListener('click',()=>{
    if (pa.style.display == 'none') {
        pa.style.display='inline'
        b.innerText='see less'
    }
    else{
        pa.style.display= 'none'
        b.innerText='see more'
    }
})