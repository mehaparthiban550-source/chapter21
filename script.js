// ---------- Elements ----------

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

const cardContainer = document.getElementById("cardContainer");

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupName = document.getElementById("popupName");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");

const progress = document.getElementById("progress");
const progressText = document.getElementById("progressText");

const finalSection = document.getElementById("finalSection");

let unlocked = 0;

const opened = [];

// -----------------------------

startBtn.addEventListener("click", () => {
    
    intro.classList.add("hidden");
    main.classList.remove("hidden");
});

    characters.forEach((person, index) => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <h3>${person.name}</h3>
    `;

    card.onclick = () => openCard(person, card, index);

    cardContainer.appendChild(card);

});



function openCard(person,card,index){

    popup.classList.remove("hidden");

    popupImage.src=person.image;

    popupName.innerText=person.name;

    popupMessage.innerText=person.message;
    popupMessage.style.fontFamily = person.font;

    if(!opened.includes(index)){

        opened.push(index);

        unlocked++;

        progress.style.width=(unlocked/characters.length)*100+"%";

        progressText.innerText=unlocked+" / "+characters.length+" Unlocked";

        card.style.border="3px solid #c084fc";

        card.style.boxShadow="0 0 30px #c084fc";

        // Optional confetti
        if(typeof confetti === "function"){
            confetti({
                particleCount:100,
                spread:70,
                origin:{y:0.6}
            });
        }

        if(unlocked===characters.length){

            setTimeout(()=>{

                main.classList.add("hidden");

                finalSection.classList.remove("hidden");

            },1000);

        }

    }

}

// -----------------------------

closePopup.onclick=()=>{

    popup.classList.add("hidden");

}