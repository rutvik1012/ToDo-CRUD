let addData = document.getElementById("add")
let userName = document.getElementById("username")
let userID = document.getElementById("userID")
let userData = document.getElementById("record")
let btntext=addData.innerText
record.appendChild
let userArray = []
// let Edit = document.getElementsByClassName("edit")


addData.addEventListener("click", () => {
    let name = userName.value;
    let id = userID.value;
    // console.log(name)
    if (name != ``) {
        let newTask = document.createElement("tr")
        newTask.innerHTML = `
        <p class="updated class="mt-2 ">
        <input type="number" class=" to-do-id" value='${id}' disabled>
        <input type="tetx" class=" to-do" value='${name}' disabled>
        <span class="action">
        <i class="edit btn text-white fa fa-edit btn-info mx-1" id="edit-todo" title="Edit"></i>
        <span class="update btn btn-danger text-white "style="display:none" title="Update">Update</span>
        <i class="delete btn btn-danger text-white fa fa-trash " id="delet-todo" title="Delete"></i>
        
        </span>
        <hr>
        </p>
        `
        userData.appendChild(newTask)
        userName.value = ""
        userID.value=""
        let Edit = newTask.querySelector(".edit")
        let ToDo = newTask.querySelector(".to-do")
        let ToDoId = newTask.querySelector(".to-do-id")
        let Update = newTask.querySelector(".update")
        let Delete = newTask.querySelector(".delete")
        Edit.addEventListener("click", () => {
            ToDoId.disabled=false;
            ToDo.disabled = false;
            ToDo.focus();
            ToDoId.focus();
            Update.style.display = "inline-block";
            Edit.style.display = "none";
            ToDo.style.border="1px solid red"
            ToDoId.style.border="1px solid red"
            ToDoId.style.borderRadius="5px"
            ToDo.style.borderRadius="5px"
        })
        Update.addEventListener("click", () => {
            ToDo.disabled = true;
            ToDoId.disabled=true;
            Update.style.display = "none";
            Edit.style.display = "inline-block";
            ToDo.style.border="none"
            ToDoId.style.border="none"
        })
        Delete.addEventListener("click", () => {
            // newTask.style.display="none"
            newTask.remove();
        })
    }
  
})

