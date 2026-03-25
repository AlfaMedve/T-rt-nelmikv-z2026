
let sz=""
for (let index = 0; index < 3; index++) {
    for (let j = 0; j < 4; j++) {
        sz+=`
        <img src="a0.png" alt="kep" class="kisKep">
        `
        
    }
    sz+="<br>"
}
document.getElementById("kepekHelye").innerHTML=sz
