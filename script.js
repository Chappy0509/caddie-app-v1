document.addEventListener("DOMContentLoaded", () => {
    const SCALE = 1.5; // pixels per yard for distance shot dots

    // ---------------- DOM ELEMENTS ----------------
    const homeScreen = document.getElementById("home_screen");
    const clubsScreen = document.getElementById("clubs_screen");
    const distanceScreen = document.getElementById("distance_screen");
    const golfScreen = document.getElementById("golf_screen");
    const settingsScreen = document.getElementById("settings_screen");

    const clubRow = document.getElementById("club_row");
    const woodsRow = document.getElementById("woods_row");
    const ironsRow1 = document.getElementById("irons_row_1");
    const ironsRow2 = document.getElementById("irons_row_2");
    const ironsRow3 = document.getElementById("irons_row_3");
    const wedgesRow1 = document.getElementById("wedges_row_1");
    const wedgesRow2 = document.getElementById("wedges_row_2");
    const goBackBtn = document.getElementById("go_back_btn");

    const mapDiv = document.getElementById("map");
    const popup = document.getElementById("popup");
    const bagButtonsDiv = document.getElementById("bag_buttons");
    const distanceInput = document.getElementById("distance_input");
    const submitDistanceShotBtn = document.getElementById("submit_shot");
    const closePopupBtn = document.getElementById("close_popup");

    const homeBtn = document.getElementById("home_btn");
    const golfBtn = document.getElementById("golf_btn");
    const distancesBtn = document.getElementById("distances_btn");
    const settingsBtn = document.getElementById("settings_btn");
    const clubsBtn = document.getElementById("clubs_btn");

    // Golf GPS elements
    const golfMapDiv = document.getElementById("golf_map");
    const golfPopup = document.getElementById("golf_popup");
    const golfBagButtonsDiv = document.getElementById("golf_bag_buttons");
    const shotNoteInput = document.getElementById("shot_note_input");
    const golfSubmitShotBtn = document.getElementById("golf_submit_shot");
    const golfClosePopupBtn = document.getElementById("golf_close_popup");

    // ---------------- STATE ----------------
    let selectedClub = null;

    // Bag structure
    let bag = {
        woods: [],
        irons: [],
        wedges: []
    };

    let distanceShots = []; // distance-based shots
    let gpsShots = []; // GPS-based shots

    // ---------------- LOCAL STORAGE ----------------
    function saveBag() {
        localStorage.setItem("my_bag", JSON.stringify(bag));
    }

    function loadBag() {
        const saved = localStorage.getItem("my_bag");
        if (saved) {
            bag = JSON.parse(saved);
            restoreBagButtons();
        }
    }

    function saveDistanceShots() {
        localStorage.setItem("my_distance_shots", JSON.stringify(distanceShots));
    }

    function loadDistanceShots() {
        const saved = localStorage.getItem("my_distance_shots");
        if (saved) {
            distanceShots = JSON.parse(saved);
            distanceShots.forEach(renderDistanceDot);
        }
    }

    function saveGPSShots() {
        localStorage.setItem("gpsShots", JSON.stringify(gpsShots));
    }

    function loadGPSShots() {
        const saved = localStorage.getItem("gpsShots");
        if (saved) {
            gpsShots = JSON.parse(saved);
            gpsShots.forEach(renderGPSMarker);
        }
    }

    // ---------------- CLUB SELECTION ----------------
    function selectClub(category, clubName, button) {
        if (!bag[category].includes(clubName)) {
            bag[category].push(clubName);
            button.classList.add("change-color");
        } else {
            bag[category] = bag[category].filter(c => c !== clubName);
            button.classList.remove("change-color");
        }
        saveBag();
    }

    function restoreBagButtons() {
        Object.keys(bag).forEach(category => {
            bag[category].forEach(club => {
                const btn = document.getElementById(`${club.toLowerCase()}_btn`);
                if (btn) btn.classList.add("change-color");
            });
        });
    }

    function populateBagButtons(container) {
        container.innerHTML = "";
        Object.keys(bag).forEach(category => {
            bag[category].forEach(club => {
                const btn = document.createElement("button");
                btn.textContent = club.toUpperCase();
                btn.addEventListener("click", () => {
                    selectedClub = club;
                    Array.from(container.children).forEach(b => b.classList.remove("change-color"));
                    btn.classList.add("change-color");
                });
                container.appendChild(btn);
            });
        });
    }

    // ---------------- SCREEN NAVIGATION ----------------
    function showScreen(screen) {
        [homeScreen, clubsScreen, distanceScreen, golfScreen, settingsScreen].forEach(s => s.style.display = "none");
        screen.style.display = "flex";
    }

    homeBtn.addEventListener("click", () => showScreen(homeScreen));
    clubsBtn.addEventListener("click", () => showScreen(clubsScreen));
    distancesBtn.addEventListener("click", () => showScreen(distanceScreen));
    golfBtn.addEventListener("click", () => showScreen(golfScreen));
    settingsBtn.addEventListener("click", () => showScreen(settingsScreen));

    // ---------------- CLUB MENU NAV ----------------
    function setupClubMenu() {
        woodsRow.style.display = "none";
        ironsRow1.style.display = "none";
        ironsRow2.style.display = "none";
        ironsRow3.style.display = "none";
        wedgesRow1.style.display = "none";
        wedgesRow2.style.display = "none";
        goBackBtn.style.display = "none";

        const woodsBtn = document.getElementById("woods_btn");
        const ironsBtn = document.getElementById("irons_btn");
        const wedgesBtn = document.getElementById("wedges_btn");

        woodsBtn.addEventListener("click", () => {
            clubRow.style.display = "none";
            woodsRow.style.display = "flex";
            goBackBtn.style.display = "flex";
        });

        ironsBtn.addEventListener("click", () => {
            clubRow.style.display = "none";
            ironsRow1.style.display = "flex";
            ironsRow2.style.display = "flex";
            ironsRow3.style.display = "flex";
            goBackBtn.style.display = "flex";
        });

        wedgesBtn.addEventListener("click", () => {
            clubRow.style.display = "none";
            wedgesRow1.style.display = "flex";
            wedgesRow2.style.display = "flex";
            goBackBtn.style.display = "flex";
        });

        goBackBtn.addEventListener("click", () => {
            clubRow.style.display = "flex";
            woodsRow.style.display = "none";
            ironsRow1.style.display = "none";
            ironsRow2.style.display = "none";
            ironsRow3.style.display = "none";
            wedgesRow1.style.display = "none";
            wedgesRow2.style.display = "none";
            goBackBtn.style.display = "none";
        });

        // Add event listeners to all club buttons
        ["driver","w3","w5","h4","h5","i3","i4","i5","i6","i7","i8","i9","p","a","g","s","l"].forEach(id => {
            const btn = document.getElementById(`${id}_btn`);
            let category = id.match(/[higpw]/i) ? "irons" : (id.match(/[plsa]/i) ? "wedges" : "woods");
            btn.addEventListener("click", () => selectClub(category, id, btn));
        });
    }

    // ---------------- DISTANCE SHOTS ----------------
    function getRandomColor() {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    }

    function renderDistanceDot(shot) {
        const dot = document.createElement("div");
        dot.className = "shot-dot";
        dot.textContent = shot.club.toUpperCase();
        dot.style.bottom = `${shot.distance * SCALE}px`;
        dot.style.backgroundColor = getRandomColor();

        dot.addEventListener("click", () => {
            distanceInput.value = shot.distance;
            selectedClub = shot.club;
            popup.style.display = "block";

            dot.remove();
            distanceShots = distanceShots.filter(s => s !== shot);
            saveDistanceShots();
        });

        mapDiv.appendChild(dot);
    }

    mapDiv.addEventListener("click", () => {
        populateBagButtons(bagButtonsDiv);
        distanceInput.value = "";
        selectedClub = null;
        popup.style.display = "block";
    });

    submitDistanceShotBtn.addEventListener("click", () => {
        const distance = Number(distanceInput.value);
        if (!selectedClub || !distance) return;

        const shot = { club: selectedClub, distance };
        distanceShots.push(shot);
        saveDistanceShots();
        renderDistanceDot(shot);

        popup.style.display = "none";
    });

    closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none";
        selectedClub = null;
    });

    // ---------------- GPS SHOTS ----------------
    const golfMap = L.map('golf_map').setView([43.85, -79.33], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(golfMap);

    function addGPSShotMarker(shot) {
        const marker = L.marker([shot.lat, shot.lng]).addTo(golfMap)
            .bindPopup(`${shot.club.toUpperCase()}<br>${shot.note}`);

        marker.on('click', () => {
            selectedClub = shot.club;
            golfPopup.dataset.lat = shot.lat;
            golfPopup.dataset.lng = shot.lng;
            shotNoteInput.value = shot.note;
            golfPopup.style.display = 'block';

            marker.remove();
            gpsShots = gpsShots.filter(s => s !== shot);
            saveGPSShots();
        });
    }

    golfMap.on('click', e => {
        populateBagButtons(golfBagButtonsDiv);
        shotNoteInput.value = '';
        selectedClub = null;
        golfPopup.dataset.lat = e.latlng.lat;
        golfPopup.dataset.lng = e.latlng.lng;
        golfPopup.style.display = 'block';
    });

    golfSubmitShotBtn.addEventListener('click', () => {
        if (!selectedClub) return;
        const lat = parseFloat(golfPopup.dataset.lat);
        const lng = parseFloat(golfPopup.dataset.lng);
        const note = shotNoteInput.value;

        const shot = { club: selectedClub, lat, lng, note };
        gpsShots.push(shot);
        saveGPSShots();
        addGPSShotMarker(shot);

        golfPopup.style.display = 'none';
    });

    golfClosePopupBtn.addEventListener('click', () => {
        golfPopup.style.display = 'none';
        selectedClub = null;
    });

    // ---------------- INIT ----------------
    function init() {
        showScreen(homeScreen);
        setupClubMenu();
        loadBag();
        loadDistanceShots();
        loadGPSShots();
    }

    init();
});
