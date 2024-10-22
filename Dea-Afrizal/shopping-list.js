let list = [];
let action;

do{

    alert('Welcome to out Shopping List Menu');
    action = prompt('What would you like to do today?\n 1.) Add Item\n 2.) View Item\n 3.)Delete Item\n 4.) Exit')

    switch(action){
        case "add":
            let newItem = prompt('Please Add new Item here')
            list.push(newItem);
            alert('Item has been Added')
            break;
        case "view":
            if(list.length === 0){
                alert ('there is item here')
            }else{
                let view = "Your to-do list \n";
                for (let i = 0; i < list.length; i++){
                    view += `${i + 1}: ${list[i]}\n`
                }
                alert(view);
            }
            break;
        case "delete":
            let number = prompt('Enter Number you wanna delete')
            let index = Number(number) - 1;
            if (index >= 0 && index < list.length){
                list.splice(index, 1);
                alert ('Item Deleted');
            }else{
                alert('Invalid Number');
            }
            break;
        case "exit":
            alert ('Have a nice day!')
            break;
    }

}while(action !== "exit")