//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach((item)=>{
    // console.log(item);
    const btn = item.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", ()=>{
        questions.forEach((current)=>{
            if(current != item){
                current.classList.remove("show-text");
            }
        });
        item.classList.toggle("show-text");
    });
});



// traversing the dom
// const questionbtn = document.querySelectorAll(".question-btn");

// questionbtn.forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         const parentelement = e.currentTarget.parentElement.parentElement;
//         parentelement.classList.toggle("show-text");
//     });
// });