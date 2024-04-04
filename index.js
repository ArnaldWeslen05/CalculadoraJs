const t =  document.getElementById('tela')

const wipe = () =>{
    t.value = '';
}

const show = (n) =>{
    t.value += n;
}
const calc = () =>{
    t.value = eval(t.value)
}






