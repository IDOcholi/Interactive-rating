let card = document.querySelector('.card');

let ratings = document.querySelectorAll('.circle'); 

let btn = document.getElementById('btn'); 
 
let thankyou = document.querySelector('.thankyou'); 

let span = document.getElementById('rating');

// Looping through all the number divs//
for (let i = 0; i < ratings.length; i++) {
          
          ratings[i].addEventListener('click', () => {

                    let rating = ratings[i].innerHTML;

                    for (let i = 0; i < ratings.length; i++) {
                              ratings[i].classList.contains('selected');
                              ratings[i].classList.remove('selected');
                    }

                    // highlights the selected rating //
                    ratings[i].classList.add('selected');

                    btn.addEventListener('click', () => {
                              card.style.display = 'none';
                              thankyou.style.display = 'block';
                              span.innerHTML = rating;
                    })
          })
}
