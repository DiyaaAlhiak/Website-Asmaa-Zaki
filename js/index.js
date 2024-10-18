

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



