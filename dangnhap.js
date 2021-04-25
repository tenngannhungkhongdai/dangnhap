let a = getElementById('em')
let b = getElementById('pw')
document.getElementById('c').addEventListener('click',submit(a,b))
function submit(a,b){
    if(
        a=='example@gmail.com'&&
        b=='123'
    ){document.body.style.backgroundColor='red'}
}