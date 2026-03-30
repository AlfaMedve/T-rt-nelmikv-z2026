let valaszJo=0
let valaszOsszes=0
let elozo=-1
let sz=""
let sorszam=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        sz+=`
        <img src="kepek/a${sorszam}.jpg" alt="kep" class="kisKep" onclick="nagyit(${sorszam})" onmouseover="szegelyRajzol(${sorszam})" id="${sorszam}" onmouseleave="szegelyLevesz(${sorszam})" style="border:2px solide white">
        `
        sorszam++
    }
    sz+="<br>"
}
document.getElementById("kepekHelye").innerHTML=sz


function nagyit(szam){
    if(elozo!=-1)
    {
        document.getElementById(elozo).style.filter="invert(0%)"   
    }
    elozo=szam
    document.getElementById(szam).style.filter="invert(100%)"
    let sz=""
    sz+=`<img src="kepek/a${szam}.jpg" alt="" style="height:200px">`
    document.getElementById("nagyKep").innerHTML=sz

    document.getElementById("kerdes").innerHTML="Ki ez a személy?"
    //keverés
    let szavakTomb=[]

    szavakTomb.push(nevekTomb[szam].megoldas)
    szavakTomb.push(nevekTomb[szam].tipp1)
    szavakTomb.push(nevekTomb[szam].tipp2)
    szavakTomb.push(nevekTomb[szam].tipp3)    

    for (let i = 0; i < 100; i++) {
        let r1=Math.floor(Math.random()*szavakTomb.length)
        let r2=Math.floor(Math.random()*szavakTomb.length)
        let csere=szavakTomb[r1]
        szavakTomb[r1]=szavakTomb[r2]
        szavakTomb[r2]=csere        
    }
    

    //gombok kiirasa
    let gombok=""
    for (let i = 0; i < 4; i++) {
        gombok+=`
        <button onclick="ertekel('${szavakTomb[i]}',${szam})">${szavakTomb[i]}</button>
        `
        
    }
    document.getElementById("gombokHelye").innerHTML=gombok
}

function ertekel(szemely,szam){
    //alert(szemely)
    //alert(szam)
    valaszOsszes+=1
    if(szemely==nevekTomb[szam].megoldas)
    {
        Swal.fire(
            'Siker!',
            'Az adatok elmentve.',
            'success'
          );
        valaszJo+=1
    }
    else
    {
        Swal.fire(
            'Rossz!',
            'Az adatok elmentve.',
            'error'
          );
    }
    document.getElementById("valasz").innerHTML=`Eredmény: ${valaszJo} jó válasz ${valaszOsszes} kérdésből. Százalékos eredmény: ${Math.round(valaszJo/valaszOsszes*100)}%`
}

function szegelyRajzol(szam){
    //alert(szam)
    document.getElementById(szam).style.border="2px solid cyan"
}

function szegelyLevesz(szam){
    //alert(szam)
    document.getElementById(szam).style.border="2px solid white"
}