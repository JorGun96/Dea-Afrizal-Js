let todo = [];
let action;

do{
    action = prompt('What would you like to do Today? add, view, delete, exit').toLowerCase();

    switch(action){
        case "add":
            let newTask = prompt('Please add new Task here');
            todo.push(newTask);
            alert('Task has been added');
            break;
        case "view":
            if(todo.length === 0){
                alert ('there is no to do list here')
            }else{
                let list = "Your to-do list \n";
                for (let i = 0; i < todo.length; i++){
                    list += `${i + 1}: ${todo[i]}\n`
                }
                alert(list);
            }
            break;
        case "delete":
            let taskNumber = prompt("Enter the Number of Task");
            let index = Number(taskNumber) - 1;
            if (index >= 0 && index < todo.length){
                todo.splice(index, 1);
                alert("Task Deleted!")
            }else{
                alert("Invalid Number");
            }
            break;
        case "exit":
            alert('GoodBye!')
            break;
        default:
            alert("Invalid option. Please choose add, view, delete, or exit.");
            break;
    }
}while(action !== "exit")