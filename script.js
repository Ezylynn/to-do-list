
// add task
function addTask(){
    let database = JSON.parse(localStorage.getItem('to-do-list'))
    database.forEach(task => {
     
        var taskParent = document.querySelector('.show-task-box')
        let taskBox = document.createElement('div') 
        let taskContent = document.createElement('p') 
        let taskCheck = document.createElement('button') 

        taskContent.innerHTML = task

        taskCheck.innerHTML = 'X'
        taskCheck.className =  `${task} delete`
        taskCheck.addEventListener('click', (event)=>{
      
            let buttonName = event.target.className
            let cleanedButtonName = buttonName.replace('delete','').trim()
            
            let button = event.target
            let buttonParent = button.parentElement
            console.log(buttonParent)
            buttonParent.style.display = 'none'

            deleteTask(cleanedButtonName) 
        })

        taskBox.appendChild(taskContent)
        taskBox.appendChild(taskCheck)

        taskParent.append(taskBox)
        
    });
    

}


function storeTask(userInput){
    let database = JSON.parse(localStorage.getItem('to-do-list')) || []
    database.push(userInput)
    let databaseJSON =  JSON.stringify(database)
    localStorage.setItem('to-do-list', databaseJSON)

}



const formInput = document.querySelector('#submit')
formInput.addEventListener('click', ()=>{

    let userInput = document.getElementById('user-input').value
    if (!userInput){
        alert('ENTER SOMETHING')
    }

    else{
        storeTask(userInput)

    }

})

addTask() //runs automatically

// delete task 

function deleteTask(elementName){
    let database = JSON.parse(localStorage.getItem('to-do-list')) || []
    newDatabase = database.filter((task)=> {
        return task !== elementName
    } )

    //remove the task from local storage 
    let databaseJSON =  JSON.stringify(newDatabase)
    localStorage.setItem('to-do-list', databaseJSON)

}



