let sena = document.querySelector('.sena');
window.onscroll = function(){
    let value = scrollY;
    sena.style.fontsize = value + 'px';
    is(scrollY >= 67);{
        sena.style.fontsize = 67 + 'px';
        sena.style.position = 'fixed';
    }
    if(scrollY >=478){
        sena.style.display = 'none';
    }else{
        sena.style.display = 'block';
    }
    if(scrollY >= 127){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
    }
}