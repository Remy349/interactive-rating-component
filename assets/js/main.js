document.addEventListener('DOMContentLoaded', () => {
  const btnSubmit = document.getElementById('btnSubmit')
  const btnsRating = document.querySelectorAll('.rating__card-rate_btn')
  const number = document.getElementById('number')

  btnSubmit.addEventListener('click', () => {
    const ratingCard = document.getElementById('ratingCard')
    const ratingAnswer = document.getElementById('ratingAnswer')

    ratingCard.style.display = 'none'
    ratingAnswer.style.display = 'block'
  })

  btnsRating.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('change-rating-btn')

      number.innerHTML = btn.innerHTML
    })
  })
})

