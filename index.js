const rateLi = document.querySelectorAll('li');
const submit = document.getElementById('submit');
const ratingState = document.querySelector('.rating-state');
const rateResult = document.querySelector('.rate-result');
const result = document.querySelector('h4')

rateLi.forEach(rate => {
    rate.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'hsl(25, 97%, 53%)'
        e.target.style.color = '#fff'

    result.innerHTML = `You Selected ${e.target.innerText} out of ${rateLi.length}`


    })
})



submit.addEventListener('click', () => {
    ratingState.style.transform = 'scale(0)'
    rateResult.style.transform =  'scale(1)'
})


