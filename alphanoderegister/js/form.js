function validate(e){
    if(e.value != ''){
        e.classList.add('full');
    }else{
        e.classList.remove('full');
    }
}