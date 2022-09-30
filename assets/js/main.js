document.addEventListener('DOMContentLoaded', () => {
  const btnSubmit = document.getElementById('btnSubmit')
  const btnsRating = document.querySelectorAll('.rating__card-rate_btn')
  const number = document.getElementById('number')

  let value = '0'

  btnsRating.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('change-rating-btn')

      value = btn.innerHTML

      number.innerHTML = value

    })
  })

  btnSubmit.addEventListener('click', () => {
    const ratingCard = document.getElementById('ratingCard')
    const ratingAnswer = document.getElementById('ratingAnswer')

    if (value == '0') {
      alert('Please, choose one value!')
    } else {
      ratingCard.style.display = 'none'
      ratingAnswer.style.display = 'block'
    }
  })
})

