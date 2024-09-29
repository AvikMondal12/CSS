const target =document.getElementById('target');
let yes = document.getElementById('yes');
yes.addEventListener('click',()=> {
    alert("I love you too babu 😘😌🥹♥️");
})
function moveTarget(){
    const maxwidth=400;
    const maxheight=400;

    const ranomX = Math.floor(Math.random() * maxwidth);
    const ranomy = Math.floor(Math.random() * maxheight);
    target.style.left =ranomX + 'PX';
    target.style.top = ranomy + 'PX';
}

target.addEventListener('mouseenter',function(){
    moveTarget();
})