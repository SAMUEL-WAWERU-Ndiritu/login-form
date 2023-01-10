const name = document.querySelector('#name');
const lname = document.querySelector('#lname');
const msg = document.querySelector('#msg');
const ul = document.querySelector('#ul');
const btn = document.querySelector('button');


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(name.value === '' || lname.value === ''){
        msg.classList.add('msg');
        msg.innerHTML= "Kindly input all the fields";

        setTimeout(()=>{
            msg.remove()
        },2000)
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value}  ${lname.value}`));
        ul.appendChild(li);


        //clear all the fields

       name.value = '';
       lname.value= '';
    }
})

