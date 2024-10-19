

const auxiliary_tools = document.querySelectorAll('.auxiliary-tools')

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
function chinge(TextID1){
    if(TextID1){
        TextID1.classList.remove("hide")
        TextID1.classList.add("show")
        console.log("fffff")
    } 
}