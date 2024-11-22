
const key = document.querySelector('#key')
document.addEventListener('keydown', function(event){

    if(event.key === 'a'){

        key.style.backgroundColor = '#e91e63';
    } else if(event.key === 's'){
        key.style.backgroundColor = '#ff5722';

    }else if(event.key === 'd'){
        key.style.backgroundColor = '#03a9f4';

    } else if(event.key === 'q'){
        const nuevoDiv = document.createElement('div')
        nuevoDiv.style.backgroundColor = '#1976d2';
        nuevoDiv.classList.add('nuevo-div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        key.appendChild(nuevoDiv)

    }else if(event.key === 'w'){
        const nuevoDiv2 = document.createElement('div')
        nuevoDiv2.style.backgroundColor = '#e040fb';
        nuevoDiv2.classList.add('nuevo-div2');
        nuevoDiv2.style.width = '200px';
        nuevoDiv2.style.height = '200px';
        key.appendChild(nuevoDiv2)

    }else if(event.key === 'e'){
        const nuevoDiv3 = document.createElement('div')
        nuevoDiv3.style.backgroundColor = '#ffa000';
        nuevoDiv3.classList.add('nuevo-div3');
        nuevoDiv3.style.width = '200px';
        nuevoDiv3.style.height = '200px';
        key.appendChild(nuevoDiv3)
    }
})