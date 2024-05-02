'use strict';


const elementContainer = document.querySelector('.list');

for (let i=1; i<=100; i++) {
    
    const liElement = document.createElement('li');

    if (i%15===0){
        liElement.append('FizzBuzz');
    }
    else if (i%5===0){
        liElement.append('Buzz');
    }
    else if (i%3===0){
        liElement.append('Fizz');
    }
    else liElement.append(i);

    elementContainer.append(liElement);
    console.log(liElement);
}
