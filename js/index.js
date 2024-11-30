

const auxiliary_tools = document.querySelectorAll('.auxiliary-tools')


window.addEventListener("scroll", function(){

})


const options = {
    root: null,
    threshold: 1.0 // عندما يظهر 100% من القسم
};
window.addEventListener('scroll', function() {

    const targetSection = document.getElementById('Contact');
    const rect = targetSection.getBoundingClientRect();
    const elements = document.querySelectorAll('.imges-auxiliary-tools');
    // تحقق مما إذا كان القسم مرئيًا
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        console.log(true)
        elements.forEach(itme =>{
            itme.classList.add("active")
        })
    }
});

let TextCardID = document.querySelectorAll("#text-card1, #text-card2, #text-card3,#text-card4")

let TextID1 = TextCardID[0]
let TextID2 = TextCardID[1]
let TextID3 = TextCardID[2]
let TextID4 = TextCardID[3]

let ImgesCardID = document.querySelectorAll("#imges-card1, #imges-card2, #imges-card3, #imges-card4") ;

let ImgesCard1 =ImgesCardID[0]
let ImgesCard2 =ImgesCardID[1]
let ImgesCard3 =ImgesCardID[2]
let ImgesCard4 =ImgesCardID[3]

function chinge(TextID1, ImgesCard1){
    if(TextID1){
        TextID1.classList.remove("hide")
        TextID1.classList.add("show")
        ImgesCard1.classList.remove("img-card")
        ImgesCard1.classList.add("img-card1")
    } 
}




window.onload = function() {
    const whoAmDiv = document.getElementById("whoAm");
    whoAmDiv.style.display = "block";
    setTimeout(() => {
        whoAmDiv.style.opacity = 1; 
    }, 10); 
};