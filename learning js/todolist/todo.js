let todolist=[
    {item:'focus',
      dueDate:'21/11/2023'
    },
       {
        item:'desciline',
        dueDate:'21/11/2023'
    },
    {
        item:'consistency',
        dueDate:'21/11/2023'
    }
];
displayItems();




function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    // console.log(todoItem);
    todolist.push({item:todoItem, dueDate:todoDate});
    inputElement.value ='';
    dateElement.value ='';

    displayItems();
}



function displayItems(){
    let containerElement = document.querySelector('.todo-conatiner');

     let newHtml='';
    



    // displayElement.innerText ='';
    for ( let i=0; i<todolist.length; i++)
    {
        // let item=todolist[i].item;
        // let dueDate = todolist[i].dueDate;
        let {item,dueDate} =todolist[i];
        newHtml +=`
           
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick ="todolist.splice(${i}, 1); displayItems();">Delete</button>
            
            `;

    }       

                   




    containerElement.innerHTML = newHtml;
    
}