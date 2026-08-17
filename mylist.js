/* ==========================================
            MYLIST.JS
========================================== */

// Get movies from localStorage
let myList = JSON.parse(localStorage.getItem("myList")) || [];

const movieGrid = document.getElementById("movieGrid");
const emptyList = document.getElementById("emptyList");

const modal = document.getElementById("movieModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalGenre = document.getElementById("modalGenre");
const modalYear = document.getElementById("modalYear");
const modalDuration = document.getElementById("modalDuration");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");

const removeBtn = document.getElementById("removeMovie");

let selectedMovie = null;


/* ==========================================
            LOAD MOVIES
========================================== */

function loadMovies(){

    movieGrid.innerHTML="";

    if(myList.length===0){

        movieGrid.style.display="none";
        emptyList.style.display="block";
        return;
    }

    movieGrid.style.display="grid";
    emptyList.style.display="none";

    myList.forEach(movie=>{

        movieGrid.innerHTML+=`

        <div class="movie-card" data-id="${movie.id}">

            <img src="${movie.image}" alt="${movie.title}">

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>${movie.genre} • ${movie.year}</p>

            </div>

        </div>

        `;

    });

}

loadMovies();


/* ==========================================
            OPEN MODAL
========================================== */

document.addEventListener("click",(e)=>{

    const card=e.target.closest(".movie-card");

    if(!card) return;

    const id=Number(card.dataset.id);

    selectedMovie=myList.find(movie=>movie.id===id);

    if(!selectedMovie) return;

    modal.style.display="flex";

    modalImage.src=selectedMovie.image;
    modalTitle.textContent=selectedMovie.title;
    modalGenre.textContent=selectedMovie.genre;
    modalYear.textContent=selectedMovie.year;
    modalDuration.textContent=selectedMovie.duration;
    modalRating.textContent=selectedMovie.rating;
    modalDescription.textContent=selectedMovie.description;

});


/* ==========================================
            CLOSE MODAL
========================================== */

closeModal.onclick=()=>{

    modal.style.display="none";

}

window.onclick=(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

}


/* ==========================================
        REMOVE FROM MY LIST
========================================== */

removeBtn.onclick=()=>{

    if(!selectedMovie) return;

    myList=myList.filter(movie=>movie.id!==selectedMovie.id);

    localStorage.setItem("myList",JSON.stringify(myList));

    modal.style.display="none";

    loadMovies();

}


/* ==========================================
            SEARCH
========================================== */

const search=document.getElementById("searchMovie");

if(search){

search.addEventListener("keyup",()=>{

const keyword=search.value.toLowerCase();

const cards=document.querySelectorAll(".movie-card");

cards.forEach(card=>{

const title=card.querySelector("h3").textContent.toLowerCase();

card.style.display=title.includes(keyword)?"block":"none";

});

});

}


/* ==========================================
            LOGOUT
========================================== */

const logout=document.getElementById("logout");

if(logout){

logout.addEventListener("click",(e)=>{

e.preventDefault();

localStorage.removeItem("currentUser");

window.location.href="index.html";

});

}


/* ==========================================
            PLAY BUTTON
========================================== */

const play=document.querySelector(".play-btn");

if(play){

play.addEventListener("click",()=>{

if(selectedMovie){

alert("▶ Playing " + selectedMovie.title);

}

});

}


/* ==========================================
            NOTIFICATIONS
========================================== */

const bell=document.querySelector(".notification");

if(bell){

bell.addEventListener("click",()=>{

alert(`🔔 Notifications

• New movies added

• Continue Watching available

• Your membership is active

• New season released`);

});

}


/* ==========================================
            PAGE ANIMATION
========================================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .6s";

document.body.style.opacity="1";

},100);

});


/* ==========================================
            SCROLL TO TOP
========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#E50914";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>300?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ==========================================
            KEYBOARD SHORTCUT
========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

console.log("My List Loaded Successfully");