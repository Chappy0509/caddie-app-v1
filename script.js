document.addEventListener("DOMContentLoaded", () => {
    const start_btn = document.getElementById("start_btn");
    const clubs_screen = document.getElementById("clubs_screen");
    const go_back_btn = document.getElementById("go_back_btn")
    const driver_btn = document.getElementById("driver_btn");
    const club_row = document.getElementById("club_row");
    const woods_btn = document.getElementById("woods_btn");
    const irons_btn = document.getElementById("irons_btn");
    const wedges_btn = document.getElementById("wedges_btn");
    const woods_row = document.getElementById("woods_row");
    const w3_btn = document.getElementById("w3_btn");
    const w5_btn = document.getElementById("w5_btn");
    const irons_row_1 = document.getElementById("irons_row_1");
    const h4_btn = document.getElementById("h4_btn");
    const h5_btn= document.getElementById("h5_btn");
    const i3_btn = document.getElementById("i3_btn");
    const irons_row_2 = document.getElementById("irons_row_2");
    const i4_btn= document.getElementById("i4_btn");
    const i5_btn= document.getElementById("i5_btn");
    const i6_btn= document.getElementById("i6_btn");
    const irons_row_3 = document.getElementById("irons_row_3");
    const i7_btn= document.getElementById("i7_btn");
    const i8_btn= document.getElementById("i8_btn");
    const i9_btn= document.getElementById("i9_btn");
    const wedges_row_1= document.getElementById("wedges_row_1");
    const p_btn = document.getElementById("p_btn");
    const a_btn = document.getElementById("a_btn");
    const g_btn = document.getElementById("g_btn");
    const wedges_row_2= document.getElementById("wedges_row_2");
    const s_btn = document.getElementById("s_btn");
    const l_btn = document.getElementById("l_btn");
    const map = document.getElementById("map");
    const popup = document.getElementById("popup");
    const bag_buttons_div = document.getElementById("bag_buttons");
    const distance_input = document.getElementById("distance_input");
    const submit_shot_btn = document.getElementById("submit_shot");
    const close_popup_btn = document.getElementById("close_popup");
    const home_screen = document.getElementById("home_screen")
    const distance_screen = document.getElementById("distance_screen")
    const home_btn = document.getElementById("home_btn")
    const golf_btn = document.getElementById("golf_btn")
    const distances_btn = document.getElementById("distances_btn")
    const data_btn = document.getElementById("data_btn")
    const settings_btn = document.getElementById("settings_btn")
    const clubs_btn = document.getElementById("clubs_btn")
    const settings_screen = document.getElementById("settings_screen")


    let bag ={
        woods:[],
        irons:[],
        wedges:[]
        
    }

    function save_bag() {
        localStorage.setItem("my_bag", JSON.stringify(bag));
    }

    function select_club(category, club_name, button){
        if (!bag[category].includes(club_name)) {
            bag[category].push(club_name);   // add if not there
            button.classList.add("change-color")
        } else {
            // Optional: allow deselect
            bag[category] = bag[category].filter(c => c !== club_name);
            button.classList.remove('change-color');
        }

        save_bag(); // save updated bag
    }

    function restore_buttons() {
    bag.woods.forEach(name => {
        const btn = document.querySelector(`#${name.toLowerCase().replace(/\s/g,'_')}_btn`);
        if (btn) btn.classList.add('change-color');
    });

    bag.irons.forEach(name => {
        const btn = document.querySelector(`#${name.toLowerCase().replace(/\s/g,'_')}_btn`);
        if (btn) btn.classList.add('change-color');
    });

    bag.wedges.forEach(name => {
        const btn = document.querySelector(`#${name.toLowerCase().replace(/\s/g,'_')}_btn`);
        if (btn) btn.classList.add('change-color');
    });
    }


    home_screen.style.display = "flex";
    clubs_screen.style.display = "none";
    distance_screen.style.display = "none";
    woods_row.style.display = "none"
    irons_row_1.style.display ="none"
    irons_row_2.style.display ="none"
    irons_row_3.style.display ="none"
    wedges_row_1.style.display ="none"
    wedges_row_2.style.display ="none"
    go_back_btn.style.display="none"
    settings_screen.style.display="none"


    woods_btn.addEventListener("click", () =>{
        club_row.style.display="none"
        woods_row.style.display="flex"
        go_back_btn.style.display="flex"
    })
    irons_btn.addEventListener("click", () =>{
        club_row.style.display="none"
        irons_row_1.style.display="flex"
        irons_row_2.style.display="flex"
        irons_row_3.style.display="flex"
        go_back_btn.style.display="flex"
    })
    wedges_btn.addEventListener("click", () =>{
        club_row.style.display="none"
        wedges_row_1.style.display="flex"
        wedges_row_2.style.display="flex"
        go_back_btn.style.display="flex"
    })


    go_back_btn.addEventListener("click",()=>{
        club_row.style.display="flex"
        woods_row.style.display="none"
        irons_row_1.style.display="none"
        irons_row_2.style.display="none"
        irons_row_3.style.display="none"
        wedges_row_1.style.display="none"
        wedges_row_2.style.display="none"  
        go_back_btn.style.display="none"
        
    })


    driver_btn.addEventListener("click",() =>{
        select_club("woods","Driver",driver_btn)
    })

    w3_btn.addEventListener("click",() =>{
        select_club("woods", "w3",w3_btn)
    })

    w5_btn.addEventListener("click",() =>{
        select_club("woods","w5",w5_btn)
    })

    h4_btn.addEventListener("click",() =>{
        select_club("irons", "h4",h4_btn)
    })

    h5_btn.addEventListener("click",() =>{
        select_club("irons","h5",h5_btn)
    })

    i3_btn.addEventListener("click",() =>{
        select_club("irons","i3",i3_btn)
    })

    i4_btn.addEventListener("click",() =>{
        select_club("irons","i4",i4_btn)
    })

    i5_btn.addEventListener("click",() =>{
        select_club("irons","i5",i5_btn)
    })

    i6_btn.addEventListener("click",() =>{
        select_club("irons","i6",i6_btn)
    })

    i7_btn.addEventListener("click",() =>{
        select_club("irons","i7",i7_btn)
    })

    i8_btn.addEventListener("click",() =>{
        select_club("irons","i8",i8_btn)
    })

    i9_btn.addEventListener("click",() =>{
        select_club("irons","i9",i9_btn)
    })

    p_btn.addEventListener("click",() =>{
        select_club("wedges","p",p_btn)
    })

    a_btn.addEventListener("click",() =>{
        select_club("wedges","a",a_btn)
    })

    g_btn.addEventListener("click",() =>{
        select_club("wedges","g",g_btn)
    })

    s_btn.addEventListener("click",() =>{
        select_club("wedges","s",s_btn)
    })

    l_btn.addEventListener("click",() =>{
        select_club("wedges","l",l_btn)
    })

    window.addEventListener('load', () => {
    const saved_bag = localStorage.getItem("my_bag");
    if (saved_bag) {
            bag = JSON.parse(saved_bag);
            restore_buttons();
        }
    });

    let selectedClub = null;
    let clickX = 0;
    let clickY = 0;

    // Populate bag buttons dynamically
    function populateBag() {
    bag_buttons_div.innerHTML = '';
    Object.keys(bag).forEach(category => {
        bag[category].forEach(club => {
        const btn = document.createElement('button');
        btn.textContent = club.toUpperCase();
        btn.addEventListener('click', () => {
            selectedClub = club;
            Array.from(bag_buttons_div.children).forEach(b => b.classList.remove('change-color'));
            btn.classList.add('change-color');
        });
        bag_buttons_div.appendChild(btn);
        });
    });
    }

    // Open popup when clicking on map
    map.addEventListener('click', (e) => {
    clickY = 0;
    populateBag();
    popup.style.display = 'block';
    });

    // Close popup
    close_popup_btn.addEventListener('click', () => {
    popup.style.display = 'none';
    selectedClub = null;
    });

    // Submit shot
    submit_shot_btn.addEventListener("click", () => {
    const distance = Number(distance_input.value);
    if (!selectedClub || !distance) return;
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256); // 0-255
        const g = Math.floor(Math.random() * 256); // 0-255
        const b = Math.floor(Math.random() * 256); // 0-255
        return `rgb(${r}, ${g}, ${b})`;
    }
    const dot = document.createElement("div");
    dot.className = "shot-dot";
    dot.style.backgroundColor=getRandomColor();
    dot.textContent = selectedClub.toUpperCase();

    const SCALE = 1.5; // pixels per yard
    dot.style.bottom = `${distance * SCALE}px`;

    map.appendChild(dot);

    popup.style.display = "none";
    });



    function showscreen(shownscreen) {

        home_screen.style.display="none";
        clubs_screen.style.display="none";
        distance_screen.style.display="none";
        settings_screen.style.display="none";
        shownscreen.style.display="flex";
    }


    home_btn.addEventListener("click", () => {
        showscreen(home_screen);
    })

    distances_btn.addEventListener("click", () => {
        showscreen(distance_screen);

    });

    settings_btn.addEventListener("click", () => {
        showscreen(settings_screen);
    })

    clubs_btn.addEventListener("click", () => {
        showscreen(clubs_screen);
    })
})