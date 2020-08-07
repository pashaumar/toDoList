let input = document.getElementById('input');
let add = document.getElementById('add');
let main = document.querySelector('.main');
add.addEventListener('click', function(){
    let div = document.createElement('div');
    let para = document.createElement('p');
    let button = document.createElement('button');
    div.setAttribute('class', 'added');
    para.setAttribute('class','para');
    button.setAttribute('class','delete-button');
    button.innerText = 'Delete';
    para.innerText = input.value;
    if(input.value != ''){
        main.appendChild(div);
        div.appendChild(para);
        div.appendChild(button);
        button.addEventListener('click', function(){
            main.removeChild(div);
        });
        para.contentEditable = 'true';
        para.style.outline = 'none';
    }
    input.value = '';
});