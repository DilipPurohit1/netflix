/* ==========================================
        MY LIST.JS
========================================== */


/* ==========================================
        GET MY LIST
========================================== */

let myList =
    JSON.parse(
        localStorage.getItem("myList")
    ) || [];


const movieGrid =
    document.getElementById(
        "movieGrid"
    );


const emptyList =
    document.getElementById(
        "emptyList"
    );


/* ==========================================
        MODAL ELEMENTS
========================================== */

const modal =
    document.getElementById(
        "movieModal"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalGenre =
    document.getElementById(
        "modalGenre"
    );


const modalYear =
    document.getElementById(
        "modalYear"
    );


const modalDuration =
    document.getElementById(
        "modalDuration"
    );


const modalRating =
    document.getElementById(
        "modalRating"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


const removeBtn =
    document.getElementById(
        "removeMovie"
    );


let selectedMovie = null;


/* ==========================================
        IMAGE FALLBACK
========================================== */

function getMovieImage(movie){

    /*
        New Browse.js structure:
        movie.backdrop
        movie.poster

        Older My List entries may contain:
        movie.image
    */

    return (
        movie.backdrop ||
        movie.poster ||
        movie.image ||
        "https://placehold.co/780x440/181818/FFFFFF?text=" +
        encodeURIComponent(
            movie.title || "Movie"
        )
    );

}


/* ==========================================
        GET GENRE
========================================== */

function getMovieGenre(movie){

    return (
        movie.genres ||
        movie.genre ||
        "Movie"
    );

}


/* ==========================================
        GET DURATION / SEASONS
========================================== */

function getMovieDuration(movie){

    return (
        movie.seasons ||
        movie.duration ||
        "Movie"
    );

}


/* ==========================================
        GET RATING
========================================== */

function getMovieRating(movie){

    return (
        movie.age ||
        movie.rating ||
        "U/A 13+"
    );

}


/* ==========================================
        LOAD MOVIES
========================================== */

function loadMovies(){

    movieGrid.innerHTML = "";


    if(myList.length === 0){

        movieGrid.style.display =
            "none";

        emptyList.style.display =
            "block";

        return;
    }


    movieGrid.style.display =
        "grid";

    emptyList.style.display =
        "none";


    myList.forEach(
        movie => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "movie-card";


            card.dataset.id =
                movie.id;


            /*
                IMPORTANT:
                Use backdrop first.

                This gives My List the same
                landscape image used by the
                Netflix-style cards.
            */

            const image =
                getMovieImage(
                    movie
                );


            card.innerHTML = `

                <img
                    src="${image}"
                    alt="${movie.title || "Movie"}"
                    loading="lazy"
                >

                <div class="movie-info">

                    <h3>
                        ${movie.title || "Untitled"}
                    </h3>

                    <p>
                        ${getMovieGenre(movie)}
                        •
                        ${movie.year || ""}
                    </p>

                </div>

            `;


            /*
                IMAGE FALLBACK
            */

            const cardImage =
                card.querySelector(
                    "img"
                );


            cardImage.addEventListener(
                "error",
                function(){

                    /*
                        If backdrop fails,
                        try poster.
                    */

                    if(
                        movie.poster &&
                        this.src !== movie.poster
                    ){

                        this.src =
                            movie.poster;

                        return;
                    }


                    /*
                        Final fallback
                    */

                    this.onerror =
                        null;

                    this.src =
                        "https://placehold.co/780x440/181818/FFFFFF?text=" +
                        encodeURIComponent(
                            movie.title ||
                            "Movie"
                        );

                }
            );


            movieGrid.appendChild(
                card
            );

        }
    );

}


/* ==========================================
        LOAD
========================================== */

loadMovies();


/* ==========================================
        OPEN MOVIE MODAL
========================================== */

document.addEventListener(
    "click",
    function(event){

        const card =
            event.target.closest(
                ".movie-card"
            );


        if(!card){
            return;
        }


        const id =
            card.dataset.id;


        /*
            IMPORTANT:
            Don't force Number().
            Your Browse.js IDs are strings:

            stranger
            squidgame
            vikings
            etc.
        */

        selectedMovie =
            myList.find(
                movie =>
                    String(movie.id) ===
                    String(id)
            );


        if(!selectedMovie){
            return;
        }


        /* --------------------------------
            IMAGE
        -------------------------------- */

        modalImage.src =
            getMovieImage(
                selectedMovie
            );


        modalImage.onerror =
            function(){

                if(
                    selectedMovie.poster &&
                    this.src !== selectedMovie.poster
                ){

                    this.src =
                        selectedMovie.poster;

                    return;
                }


                this.onerror =
                    null;

                this.src =
                    "https://placehold.co/1200x600/181818/FFFFFF?text=" +
                    encodeURIComponent(
                        selectedMovie.title ||
                        "Movie"
                    );

            };


        /* --------------------------------
            TEXT
        -------------------------------- */

        modalTitle.textContent =
            selectedMovie.title ||
            "Movie Title";


        modalGenre.textContent =
            getMovieGenre(
                selectedMovie
            );


        modalYear.textContent =
            selectedMovie.year ||
            "2026";


        modalDuration.textContent =
            getMovieDuration(
                selectedMovie
            );


        modalRating.textContent =
            getMovieRating(
                selectedMovie
            );


        modalDescription.textContent =
            selectedMovie.description ||
            "No description available.";


        /* --------------------------------
            SHOW MODAL
        -------------------------------- */

        modal.style.display =
            "flex";

        document.body.style.overflow =
            "hidden";

    }
);


/* ==========================================
        CLOSE MODAL
========================================== */

function closeMovieModal(){

    modal.style.display =
        "none";

    document.body.style.overflow =
        "";

    selectedMovie =
        null;
}


if(closeModal){

    closeModal.addEventListener(
        "click",
        closeMovieModal
    );

}


/* ==========================================
        CLICK OUTSIDE MODAL
========================================== */

window.addEventListener(
    "click",
    function(event){

        if(
            event.target === modal
        ){

            closeMovieModal();

        }

    }
);


/* ==========================================
        REMOVE FROM MY LIST
========================================== */

if(removeBtn){

    removeBtn.addEventListener(
        "click",
        function(){

            if(!selectedMovie){
                return;
            }


            myList =
                myList.filter(
                    movie =>
                        String(movie.id) !==
                        String(
                            selectedMovie.id
                        )
                );


            localStorage.setItem(
                "myList",
                JSON.stringify(
                    myList
                )
            );


            closeMovieModal();


            loadMovies();

        }
    );

}


/* ==========================================
        SEARCH
========================================== */

const search =
    document.getElementById(
        "searchMovie"
    );


if(search){

    search.addEventListener(
        "input",
        function(){

            const keyword =
                this.value
                    .trim()
                    .toLowerCase();


            const cards =
                document.querySelectorAll(
                    ".movie-card"
                );


            cards.forEach(
                card => {

                    const titleElement =
                        card.querySelector(
                            "h3"
                        );


                    const title =
                        titleElement
                            ? titleElement.textContent
                                .toLowerCase()
                            : "";


                    card.style.display =
                        title.includes(
                            keyword
                        )
                            ? ""
                            : "none";

                }
            );

        }
    );

}


/* ==========================================
        LOGOUT
========================================== */

const logout =
    document.getElementById(
        "logout"
    );


if(logout){

    logout.addEventListener(
        "click",
        function(event){

            event.preventDefault();


            localStorage.removeItem(
                "currentUser"
            );


            window.location.href =
                "index.html";

        }
    );

}


/* ==========================================
        PLAY BUTTON
========================================== */

const play =
    document.querySelector(
        ".play-btn"
    );


if(play){

    play.addEventListener(
        "click",
        function(){

            if(!selectedMovie){
                return;
            }


            /*
                If you have a trailer URL
                stored from browse.js,
                open it here.

                Otherwise show a message.
            */

            if(
                selectedMovie.videoId
            ){

                const trailerUrl =
                    "https://www.youtube.com/embed/" +
                    selectedMovie.videoId +
                    "?autoplay=1&controls=1&rel=0";


                window.open(
                    trailerUrl,
                    "_blank"
                );

            }else{

                alert(
                    "▶ Playing " +
                    selectedMovie.title
                );

            }

        }
    );

}


/* ==========================================
        NOTIFICATIONS
========================================== */

const bell =
    document.querySelector(
        ".notification"
    );


if(bell){

    bell.addEventListener(
        "click",
        function(){

            alert(
`🔔 Notifications

• New movies added

• Continue Watching available

• Your membership is active

• New season released`
            );

        }
    );

}


/* ==========================================
        PROFILE
========================================== */

const profile =
    document.querySelector(
        ".profile"
    );


if(profile){

    profile.addEventListener(
        "mouseenter",
        function(){

            this.classList.add(
                "profile-open"
            );

        }
    );


    profile.addEventListener(
        "mouseleave",
        function(){

            this.classList.remove(
                "profile-open"
            );

        }
    );

}


/* ==========================================
        PAGE ANIMATION
========================================== */

window.addEventListener(
    "load",
    function(){

        document.body.style.opacity =
            "0";


        setTimeout(
            function(){

                document.body.style.transition =
                    "opacity .6s";

                document.body.style.opacity =
                    "1";

            },
            100
        );

    }
);


/* ==========================================
        SCROLL TO TOP
========================================== */

const topBtn =
    document.createElement(
        "button"
    );


topBtn.innerHTML =
    "↑";


topBtn.style.position =
    "fixed";


topBtn.style.bottom =
    "20px";


topBtn.style.right =
    "20px";


topBtn.style.width =
    "50px";


topBtn.style.height =
    "50px";


topBtn.style.border =
    "none";


topBtn.style.borderRadius =
    "50%";


topBtn.style.background =
    "#E50914";


topBtn.style.color =
    "#fff";


topBtn.style.cursor =
    "pointer";


topBtn.style.display =
    "none";


topBtn.style.zIndex =
    "999";


document.body.appendChild(
    topBtn
);


window.addEventListener(
    "scroll",
    function(){

        topBtn.style.display =
            window.scrollY > 300
                ? "block"
                : "none";

    }
);


topBtn.onclick =
    function(){

        window.scrollTo({

            top:
                0,

            behavior:
                "smooth"

        });

    };


/* ==========================================
        KEYBOARD SHORTCUT
========================================== */

document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key ===
            "Home"
        ){

            window.scrollTo({

                top:
                    0,

                behavior:
                    "smooth"

            });

        }


        if(
            event.key ===
            "Escape"
        ){

            closeMovieModal();

        }

    }
);


/* ==========================================
        DEBUG
========================================== */

console.log(
    "My List Loaded Successfully",
    myList
);