function renderApp () {
    const { log } = console
    let text = ""

    // create to do list
    
        const inputEl = document.querySelector(".input-el")
        const submitBtn = document.querySelector(".submit-btn")
        const inputSubmit = document.querySelector(".input-submit")
    
    function createToDo () {
        submitBtn.addEventListener("click", () => {

            if(inputEl.value.trim() === ""){
                alert(`Task cannot be empty`)
                return
            } 

            const div = document.createElement("div")
            div.classList.add("task-div")
            
            text += `<div  class="to-dos">
                        <span>${inputEl.value.charAt(0).toUpperCase() + inputEl.value.slice(1)}</span>
                        <span class="task-btns">
                            <span class="action-btns done-btn">Done</span>
                            <span class="action-btns edit-btn">Edit</span>
                            <span class="action-btns delete-btn">Delete</span>
                        </span>
                    </div>`

            div.innerHTML += text
            inputSubmit.append(div)
            text = ""
            inputEl.value = ""
        
        //done btn function
        function doneAction () {
           
            const doneList = document.querySelectorAll(".done-btn")                
            doneList.forEach( list => {
                list.addEventListener("click", (e) => {
                    // sort the issue of null innerHTML later
                    e.target.parentNode.innerHTML = `<span>Task Achieved</span>`
                })
            })
        }
        doneAction()

        //delete btn function
        function deleteAction () {
            const deleteList = document.querySelectorAll(".delete-btn")
            deleteList.forEach( deleteBtn => {
                deleteBtn.addEventListener("click", (e) => {
                    e.target.parentNode.parentNode.remove()
                })
            })
        }
        deleteAction()

        //edit btn function
        function editAction () {
            const editList = document.querySelectorAll(".edit-btn")
            editList.forEach( editBtn => {
                editBtn.addEventListener("click", (e) => {
                    const editedMsg = prompt("Edit task here")
                    e.target.parentNode.parentNode.childNodes[1].textContent = editedMsg.charAt(0).toLocaleUpperCase() + editedMsg.slice(1)
                })
            })
        }
        editAction()
            
                    
        })

        
    }
    createToDo()

}

renderApp()