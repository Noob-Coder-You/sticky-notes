const form = document.querySelector('.addForm')
const ul = document.querySelector('ul')



 let todos =(data)=>{
 let html =` <li> ${data}<i class="fas fa-times cut"</li>`

 ul.innerHTML+= html
 form.reset()



 }








form.addEventListener('submit',e=>{
e.preventDefault()

let data = e.target.add.value

todos(data)

})


// delete todos

ul.addEventListener('click',e=>{

if (e.target.classList.contains('cut')) {
    e.target.parentElement.remove()
}



})