let toogleBtn = document.getElementById('toogle-container');

let front = document.getElementById('front-container');
let test = document.getElementById('test-container');

toogleBtn.onclick = function() {

    front.classList.toggle('not-visible');
    test.classList.toggle('not-visible');
}