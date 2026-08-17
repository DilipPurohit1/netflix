// =====================================================
// MOVIE DATABASE
// =====================================================

// =====================================================
// VERIFIED MOVIE / SHOW DATA
// =====================================================

const movies = {

    stranger: {
        title: "STRANGER THINGS",
        label: "NETFLIX ORIGINAL",
        year: "2016",
        seasons: "5 Seasons",
        type: "Series",
        poster:
            "https://image.tmdb.org/t/p/w500/oqkld2D0qcnSNRm15rYV2883JE3.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/w1280/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg",
        description:
            "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        videoId: "ncn84cMWgRA"
    },

    squidgame: {
        title: "SQUID GAME",
        label: "NETFLIX SERIES",
        year: "2021",
        seasons: "3 Seasons",
        type: "Series",
        poster:
            "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/w1280/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg",
        description:
            "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a life-changing prize.",
        videoId: "oqxAJKy0ii4"
    },

    vikings: {
    title: "VIKINGS",
    label: "HISTORY SERIES",
    year: "2013",
    seasons: "6 Seasons",
    type: "Series",
    description:
        "The adventures of legendary Norse warriors as they battle, conquer and build their own world.",
    videoId: "ncn84cMWgRA"
},

    blackmirror: {
        title: "BLACK MIRROR",
        label: "NETFLIX SERIES",
        year: "2011",
        seasons: "7 Seasons",
        type: "Series",
        poster:
            "https://image.tmdb.org/t/p/w500/7PRddO7z7mcPi21nZTCMGShAyy1.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/w1280/A30ZqEoDbchvE7mCZcSp6TEwB1Q.jpg",
        description:
            "An anthology series exploring a twisted, high-tech world where humanity's greatest innovations collide with its darkest instincts.",
        videoId: "ncn84cMWgRA"
    },

    onepiece: {
        title: "ONE PIECE",
        label: "NETFLIX SERIES",
        year: "2023",
        seasons: "2 Seasons",
        type: "Series",
        poster:
            "https://image.tmdb.org/t/p/w500/rVX05xRKS5JhEYQFObCi4lAnrEi.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/w1280/9n2tjbWsX1y0LxQd5H8vQ9zF2eW.jpg",
        description:
            "Monkey D. Luffy and his crew set out on an epic adventure to find the legendary One Piece treasure.",
        videoId: "ncn84cMWgRA"
    },

    spiderman: {
        title: "SPIDER-MAN: FAR FROM HOME",
        label: "MARVEL",
        year: "2019",
        seasons: "Movie",
        type: "Movie",
        poster:
            "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        description:
            "Peter Parker heads to Europe for a school trip and gets pulled into an unexpected superhero mission.",
        videoId: "ncn84cMWgRA"
    },

   inception: {
    title: "INCEPTION",
    label: "WARNER BROS.",
    year: "2010",
    seasons: "Movie",
    type: "Movie",
    poster:
        "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnTn2pL5k7aD8R3.jpg",
    description:
        "A skilled thief who steals secrets through dream-sharing technology is given a chance to erase his past by performing the impossible: inception.",
    videoId: "YoHD_xQdUXU"
},

    interstellar: {
        title: "INTERSTELLAR",
        label: "SCI-FI",
        year: "2014",
        seasons: "Movie",
        type: "Movie",
        poster:
            "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        description:
            "A team of explorers travel through a wormhole in space in search of a new home for humanity.",
        videoId: "zSWdZVtXT7E"
    },

    stranger2: {
        title: "STRANGER THINGS",
        label: "TOP 10 IN INDIA",
        year: "2016",
        seasons: "5 Seasons",
        type: "Series",
        poster:
            "https://image.tmdb.org/t/p/w500/oqkld2D0qcnSNRm15rYV2883JE3.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/w1280/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg",
        description:
            "A group of friends uncover dark secrets and supernatural mysteries in the town of Hawkins.",
        videoId: "ncn84cMWgRA"
    },

    moneyheist: {
        title: "MONEY HEIST",
        label: "NETFLIX SERIES",
        year: "2017",
        seasons: "5 Parts",
        type: "Series",
        poster:
            "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/w1280/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg",
        description:
            "A criminal mastermind recruits a group of skilled thieves for an ambitious plan to rob the Royal Mint of Spain.",
        videoId: "ncn84cMWgRA"
    },

    peaky: {
        title: "PEAKY BLINDERS",
        label: "NETFLIX SERIES",
        year: "2013",
        seasons: "6 Seasons",
        type: "Series",
        poster:
            "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
        backdrop:
            "https://image.tmdb.org/t/p/w1280/6V7Z3O9M0V1X5H2Y8K4R7Q6P.jpg",
        description:
            "A gangster family fights for power and survival in post-war Birmingham.",
        videoId: "ncn84cMWgRA"
    }

};


// =====================================================
// CURRENT USER
// =====================================================

const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));


if (!currentUser) {

    window.location.href = "login.html";

}


// =====================================================
// SHOW USER NAME
// =====================================================

if (currentUser) {

    const profileName =
        document.getElementById("profileName");

    if (profileName) {

        profileName.textContent =
            currentUser.name;

    }

    const continueTitle =
        document.getElementById("continueTitle");

    if (continueTitle) {

        continueTitle.textContent =
            `Continue Watching for ${currentUser.name}`;

    }

}


// =====================================================
// HERO ELEMENTS
// =====================================================

const heroVideo =
    document.getElementById("heroVideo");

const heroTitle =
    document.getElementById("heroTitle");

const heroLabel =
    document.getElementById("heroLabel");

const heroYear =
    document.getElementById("heroYear");

const heroSeasons =
    document.getElementById("heroSeasons");

const heroDescription =
    document.getElementById("heroDescription");

const heroListButton =
    document.getElementById("heroListButton");

const heroListIcon =
    document.getElementById("heroListIcon");

const heroListText =
    document.getElementById("heroListText");


// =====================================================
// SELECT MOVIE
// =====================================================

let currentMovieId = "stranger";


function selectMovie(movieId) {

    const movie =
        movies[movieId];

    if (!movie) return;

    currentMovieId =
        movieId;


    // Change title

    heroTitle.textContent =
        movie.title;


    // Change label

    heroLabel.textContent =
        movie.label;


    // Change year

    heroYear.textContent =
        movie.year;


    // Change seasons

    heroSeasons.textContent =
        movie.seasons;


    // Change description

    heroDescription.textContent =
        movie.description;


    // Change trailer

    heroVideo.src =
        `https://www.youtube.com/embed/${movie.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.videoId}&modestbranding=1&rel=0`;


    updateMyListButton();

    // Scroll smoothly to hero

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =====================================================
// MY LIST
// =====================================================

function getMyList() {

    return JSON.parse(
        localStorage.getItem("myList")
    ) || [];

}


function addCurrentToList() {

    addToMyList(currentMovieId);

}


function addToMyList(movieId) {

    const movie =
        movies[movieId];

    if (!movie) return;


    let myList =
        getMyList();


    // Check duplicate

    const alreadyExists =
        myList.some(
            item => item.id === movieId
        );


    if (alreadyExists) {

        removeFromMyList(movieId);

        updateMyListButton();

        return;
    }


    // Save movie

    myList.push({
        id: movieId,
        title: movie.title,
        label: movie.label,
        year: movie.year,
        seasons: movie.seasons,
        description: movie.description,
        videoId: movie.videoId
    });


    localStorage.setItem(
        "myList",
        JSON.stringify(myList)
    );


    updateMyListButton();

    showToast(
        `${movie.title} added to My List`
    );

}


// =====================================================
// REMOVE FROM MY LIST
// =====================================================

function removeFromMyList(movieId) {

    let myList =
        getMyList();

    myList =
        myList.filter(
            item => item.id !== movieId
        );

    localStorage.setItem(
        "myList",
        JSON.stringify(myList)
    );

    showToast(
        "Removed from My List"
    );

}


// =====================================================
// UPDATE MY LIST BUTTON
// =====================================================

function updateMyListButton() {

    const myList =
        getMyList();

    const exists =
        myList.some(
            item => item.id === currentMovieId
        );


    if (exists) {

        heroListIcon.className =
            "fa-solid fa-check";

        heroListText.textContent =
            "My List";

    } else {

        heroListIcon.className =
            "fa-solid fa-plus";

        heroListText.textContent =
            "My List";

    }

}


// =====================================================
// SCROLL ROW
// =====================================================

function scrollRow(rowId, amount) {

    const row =
        document.getElementById(rowId);

    if (!row) return;

    row.scrollBy({
        left: amount,
        behavior: "smooth"
    });

}


// =====================================================
// SEARCH
// =====================================================

function toggleSearch() {

    const search =
        document.querySelector(
            ".search-container"
        );

    search.classList.toggle("open");

    if (
        search.classList.contains("open")
    ) {

        document
            .getElementById("searchInput")
            .focus();

    }

}


const searchInput =
    document.getElementById(
        "searchInput"
    );


searchInput.addEventListener(
    "input",
    function () {

        const query =
            this.value
                .trim()
                .toLowerCase();


        document
            .querySelectorAll(".movie-item")
            .forEach(card => {

                const title =
                    (
                        card.dataset.title || ""
                    ).toLowerCase();


                if (
                    query === "" ||
                    title.includes(query)
                ) {

                    card.style.display =
                        "";

                } else {

                    card.style.display =
                        "none";

                }

            });

    }
);


// =====================================================
// PROFILE
// =====================================================

function toggleProfile() {

    const menu =
        document.getElementById(
            "profileMenu"
        );

    menu.classList.toggle("show");

}


document.addEventListener(
    "click",
    function (event) {

        const wrapper =
            document.querySelector(
                ".profile-wrapper"
            );

        const menu =
            document.getElementById(
                "profileMenu"
            );


        if (
            wrapper &&
            !wrapper.contains(event.target)
        ) {

            menu.classList.remove("show");

        }

    }
);


// =====================================================
// LOGOUT
// =====================================================

function logoutUser() {

    localStorage.removeItem(
        "currentUser"
    );

    window.location.href =
        "index.html";

}


// =====================================================
// OPEN TRAILER
// =====================================================

function openTrailer() {

    const movie =
        movies[currentMovieId];

    if (!movie) return;


    const modal =
        document.getElementById(
            "trailerModal"
        );

    const modalVideo =
        document.getElementById(
            "modalVideo"
        );


    modalVideo.src =
        `https://www.youtube.com/embed/${movie.videoId}?autoplay=1&controls=1&rel=0`;


    modal.classList.add("show");

}


// =====================================================
// CLOSE TRAILER
// =====================================================

function closeTrailer() {

    const modal =
        document.getElementById(
            "trailerModal"
        );

    const modalVideo =
        document.getElementById(
            "modalVideo"
        );


    modal.classList.remove(
        "show"
    );

    modalVideo.src =
        "";

}


// =====================================================
// MORE INFO
// =====================================================

function showMovieInfo() {

    const movie =
        movies[currentMovieId];

    alert(
        `${movie.title}\n\n` +
        `${movie.year} • ${movie.seasons}\n\n` +
        `${movie.description}`
    );

}


// =====================================================
// MUTE BUTTON
// =====================================================

let muted = true;


function toggleMute() {

    const movie =
        movies[currentMovieId];

    const button =
        document.getElementById(
            "muteButton"
        );


    if (!movie) return;


    muted = !muted;


    heroVideo.src =
        `https://www.youtube.com/embed/${movie.videoId}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${movie.videoId}&modestbranding=1&rel=0`;


    button.innerHTML =
        muted
            ? '<i class="fa-solid fa-volume-xmark"></i>'
            : '<i class="fa-solid fa-volume-high"></i>';

}


// =====================================================
// TOAST
// =====================================================

function showToast(message) {

    let toast =
        document.getElementById(
            "toastMessage"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "toastMessage";

        toast.style.position =
            "fixed";

        toast.style.bottom =
            "30px";

        toast.style.left =
            "50%";

        toast.style.transform =
            "translateX(-50%)";

        toast.style.background =
            "#fff";

        toast.style.color =
            "#111";

        toast.style.padding =
            "13px 22px";

        toast.style.borderRadius =
            "4px";

        toast.style.fontWeight =
            "600";

        toast.style.zIndex =
            "9999";

        toast.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.5)";

        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        message;


    toast.style.display =
        "block";


    clearTimeout(
        toast.timeout
    );


    toast.timeout =
        setTimeout(
            () => {

                toast.style.display =
                    "none";

            },
            2500
        );

}


// =====================================================
// INITIAL STATE
// =====================================================

updateMyListButton();