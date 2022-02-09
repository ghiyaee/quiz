const correctAnswer = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
const form = document.querySelector('.quiz_form');
const show = document.querySelector('#show__res');
const span = document.querySelector('#score');
const resl = document.querySelector('#score');
const timer = document.querySelector('.timer');
const start = document.querySelector('#start');
const _p = document.querySelector('.container');
const rest = document.querySelector('#rest');

// window.addEventListener('DOMContentLoaded', e => {
//     onscroll = () => {
//         let i = 0;
//         const conter = setInterval(() => {
//             timer.innerHTML = `timer${i}`;
//             timer.classList.remove('hiden');
//             if (i >= 5) {
//                 clearInterval(conter);
//             }
//             else {
//                 i++;
//             }
//         }, 1000);
//     }
// });


rest.addEventListener('click', e => {
    location.reload();
})


let container;
start.addEventListener('click', e => {
    let i = 30;
    timer.classList.remove('hiden');
    conterTimer = setInterval(() => {
        timer.innerHTML = `Timer : ${i}`;
        if (i <= 0) {
            clearInterval(conterTimer);
            scrollTo(0, 0);
            // const p = document.createElement('p');
            // p.style.color = 'white';
            // p.style.fontSize = '1.5rem';
            // p.innerHTML = `Time End ....`;
            // _p.appendChild(p);
            timer.innerHTML=`Timer End `
        } else {
            i--
        }
    }, 1000); 
});
    
    
form.addEventListener('submit', e => {
    e.preventDefault();
    clearInterval(conterTimer);
    // debugger
    let score = 0;
    const userAnsewers = [form.q1.value, form.q2.value, form.q3.value,
    form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];
    userAnsewers.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            span.innerHTML = score +=10;
        }
        show.classList.remove('hiden');
        scrollTo(0, 0); 
        let conter = 0;
        const checkout = setInterval(() => {
            resl.textContent = `${conter}`;
            if (score == conter) {
                clearInterval(checkout);
            }
            else {
                conter++;
            }
        }, 10);
    });
});
    
  