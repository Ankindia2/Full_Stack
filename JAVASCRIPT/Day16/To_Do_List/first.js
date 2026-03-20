const form = document.querySelector('form');

const allTask= document.querySelector('#allTask');
const input =document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = input.value.trim();

    if(text=="")
        return;

    const parent = document.createElement('div');
    const task = document.createElement('span');
    parent.style.marginTop="20px";
    task.textContent = text;
    task.style.marginRight = "20px";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginRight = "20px";

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.style.marginRight = "10px";
    doneButton.style.width = "50px"


    parent.append(task,doneButton,deleteButton);

    allTask.append(parent);

    deleteButton.addEventListener('click',(e)=>{
        console.log(e.target);
        parent.remove();
     })

     doneButton.addEventListener('click',(e)=>{
        task.style.textDecoration = 'line-through';
        task.style.color = 'grey';
     })

     form.reset();


})