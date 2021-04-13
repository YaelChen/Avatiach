//alert("היי אבטיחים!\nכאן תוכלו ליצור אבטיחים משלכם");

var chosencolor = document.getElementById("main");

function changeColor(event) {
    chosencolor.src = event.src;
};


//console.log(document.getElementsByClassName("demo")[0].style.fontSize)

//var chosensize = document.getElementsByClassName("song_block")[0];
//var chosensize = getComputedStyle(document.querySelector('.song_block')).fontSize;

//var t2 = getComputedStyle(document.querySelector('.song_block')).fontSize;
//var t3 = getComputedStyle(t2);
//console.log(t3.fontSize);

//---//
const song_ele = document.getElementById('song_block');
const name_ele = document.getElementById('song_name');
// Get the placeholders attribute
const song_placeholder = song_ele.getAttribute('data-placeholder');
const name_placeholder = name_ele.getAttribute('data-placeholder');

// Set the placeholders as initial content if it's empty
(song_ele.innerHTML === '') && (song_ele.innerHTML = song_placeholder);
(name_ele.innerHTML === '') && (name_ele.innerHTML = name_placeholder);

//makes the placeholders disappear when the text field is clicked
song_ele.addEventListener('focus', function(e) {
    const value = e.target.innerHTML;
    value === song_placeholder && (e.target.innerHTML = '');
});
name_ele.addEventListener('focus', function(e) {
    const value = e.target.innerHTML;
    value === name_placeholder && (e.target.innerHTML = '()');
});

//if the text field is empty, placeholders is showing again
song_ele.addEventListener('blur', function(e) {
    const value = e.target.innerHTML;
    value === '' && (e.target.innerHTML = song_placeholder);
});
name_ele.addEventListener('blur', function(e) {
    const value = e.target.innerHTML;
    //value === '' ||
    value === '()' && (e.target.innerHTML = name_placeholder);
});

//---//

var chosensize = document.getElementById("song_block");

function changeSize(event) {
    chosensize.style.fontSize = getComputedStyle(event).fontSize;
};

//redimg.addEventListener("click", changeColor);
//yellowimg.addEventListener("click", changeColor);
//greenimg.addEventListener("click", changeColor);

//.innerHTML = '<img src="avatiach\images\1Red.bmp" width=700px alt="(Red)">'