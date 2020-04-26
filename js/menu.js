// const togg1 = document.getElementById('togg1')
// const togg2 = document.getElementById('togg2')

const d1 = document.getElementById('d1')
const d2 = document.getElementById('d2')

// togg10.addEventListener('click', () => {
//   if (getComputedStyle(d1).display != 'none') {
//     d1.style.display = 'none'
//   } else {
//     d1.style.display = 'block'
//   }
// })

function togg() {
  if (getComputedStyle(d2).display != 'none') {
    d2.style.display = 'none'
  } else {
    d2.style.display = 'block'
  }
}

// togg20.onclick = togg

d1.style.display = 'none'
d2.style.display = 'none'
