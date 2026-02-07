const start_btn = document.getElementById("start_btn");
const welcome_screen = document.getElementById("welcome_screen");
const second_screen = document.getElementById("second_screen");
const correct_club_btn = document.getElementById("correct_club_btn");
const driver_btn = document.getElementById("driver_btn");
const club_row = document.getElementById("club_row");
const woods_btn = document.getElementById("woods_btn");
const irons_btn = document.getElementById("irons_btn");
const wedges_btn = document.getElementById("wedges_btn");
const woods_row = document.getElementById("woods_row");
const w3_btn = document.getElementById("3w_btn");
const w5_btn = document.getElementById("5w_btn");
const irons_row_1 = document.getElementById("irons_row_1");
const h4_btn = document.getElementById("4h_btn");
const h5_btn= document.getElementById("5h_btn");
const i3_btn = document.getElementById("3i_btn");
const irons_row_2 = document.getElementById("irons_row_2");
const i4_btn= document.getElementById("4i_btn");
const i5_btn= document.getElementById("5i_btn");
const i6_btn= document.getElementById("6i_btn");
const irons_row_3 = document.getElementById("irons_row_3");
const i7_btn= document.getElementById("7i_btn");
const i8_btn= document.getElementById("8i_btn");
const i9_btn= document.getElementById("9i_btn");
const wedges_row_1= document.getElementById("wedges_row_1");
const P_btn = document.getElementById("P_btn");
const A_btn = document.getElementById("A_btn");
const G_btn = document.getElementById("G_btn");
const wedges_row_2= document.getElementById("wedges_row_2");
const S_btn = document.getElementById("S_btn");
const L_btn = document.getElementById("L_btn");



second_screen.style.display = "none";
woods_row.style.display = "none"
irons_row_1.style.display ="none"
irons_row_2.style.display ="none"
irons_row_3.style.display ="none"
wedges_row_1.style.display ="none"
wedges_row_2.style.display ="none"



start_btn.addEventListener("click", () => {
  welcome_screen.style.display = "none";
  second_screen.style.display = "flex";
});


woods_btn.addEventListener("click", () =>{
    club_row.style.display="none"
    woods_row.style.display="flex"
})
irons_btn.addEventListener("click", () =>{
    club_row.style.display="none"
    irons_row_1.style.display="flex"
    irons_row_2.style.display="flex"
    irons_row_3.style.display="flex"
})
wedges_btn.addEventListener("click", () =>{
    club_row.style.display="none"
    wedges_row_1.style.display="flex"
    wedges_row_2.style.display="flex"
})

correct_club_btn.addEventListener("click", () =>{
    club_row.style.display="flex"
    woods_row.style.display="none"
    irons_row_1.style.display="none"
    irons_row_2.style.display="none"
    irons_row_3.style.display="none"
    wedges_row_1.style.display="none"
    wedges_row_2.style.display="none"
})

function toggle_btn(button){
    button.classList.toggle("changed-color")
}

driver_btn.addEventListener("click",() =>{
    toggle_btn(driver_btn)
})

w3_btn.addEventListener("click",() =>{
    toggle_btn(w3_btn)
})

w5_btn.addEventListener("click",() =>{
    toggle_btn(w5_btn)
})

h4_btn.addEventListener("click",() =>{
    toggle_btn(h4_btn)
})

h5_btn.addEventListener("click",() =>{
    toggle_btn(h5_btn)
})

i3_btn.addEventListener("click",() =>{
    toggle_btn(i3_btn)
})

i4_btn.addEventListener("click",() =>{
    toggle_btn(i4_btn)
})

i5_btn.addEventListener("click",() =>{
    toggle_btn(i5_btn)
})

i6_btn.addEventListener("click",() =>{
    toggle_btn(i6_btn)
})

i7_btn.addEventListener("click",() =>{
    toggle_btn(i7_btn)
})

i8_btn.addEventListener("click",() =>{
    toggle_btn(i8_btn)
})

i9_btn.addEventListener("click",() =>{
    toggle_btn(i9_btn)
})

P_btn.addEventListener("click",() =>{
    toggle_btn(P_btn)
})

A_btn.addEventListener("click",() =>{
    toggle_btn(A_btn)
})

G_btn.addEventListener("click",() =>{
    toggle_btn(G_btn)
})

S_btn.addEventListener("click",() =>{
    toggle_btn(S_btn)
})

L_btn.addEventListener("click",() =>{
    toggle_btn(L_btn)
})

