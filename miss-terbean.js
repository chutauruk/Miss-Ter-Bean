let quotes = [
    `Nothing says six in the morning like coffee. -Gilmore Girls`,
    `I judge a restaurant by the bread and the coffee. -Burt Lancaster`,
    `Once you wake up and smell the coffee, it's hard to go back to sleep. -Fran Drescher`,
    `Coffee is the great incentivizer in the office. -Michael Scott, The Office`,
    `Television is not real life. In real life, people actually have to leave the coffee shop and go to jobs. -Charles J. Sykes`,
    `Science may never come up with a better office communication system than the coffee break. -Earl Wilson`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#buttonQuote').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
  
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
//   document.querySelector('#main-title').textContent = 'Something Shorter'
  
    // Part 2
  document.querySelector('body').style.backgroundColor = 'white'
  
    // Part 3
//   const calOfEvents = document.querySelectorAll('#cal-Of-Events > li')
  
//   document.querySelector('#cal-Of-Events').removeChild(calOfEvents[calOfEvents.length - 1])
  
    // Part 4
//   document.querySelectorAll('.special-title').forEach((item) => {
//     item.style.fontSize = '2rem'
//   })
  
    // Part 5
//   document.querySelectorAll('#order-Here > li').forEach((item) => {
//     if(item.textContent.trim() === 'Chicago'){
//       document.querySelector('#order-Here').removeChild(item)
//     }
//   })
  
    // Part 6
//   const li = document.createElement('li')
//   li.textContent = 'Laurelton'
//   document.querySelector('#order-Here').appendChild(li)
  
    // Part 7
//   const blogPost = document.createElement('div')
//   blogPost.classList.add('blog-post')
//   const heading = document.createElement('h2')
//   heading.textContent = 'Laurelton'
//   const pEl = document.createElement('p')
//   pEl.textContent = 'My hometown in Queens, NY'
  
//   document.querySelector('.main').appendChild(blogPost)
  
//   blogPost.appendChild(heading)
//   blogPost.appendChild(pEl)
  
    // Part 8
  document.querySelector('#buttonQuote').addEventListener('click', (evt) => {
    randomQuote()
  })
  
    // Part 9
  
//   document.querySelectorAll('.blog-post').forEach((item) => {
//     item.addEventListener('mouseout', (evt) => {
//       evt.currentTarget.classList.toggle('purple')
//     })
//     item.addEventListener('mouseenter', (evt) => {
//     evt.stopPropagation()
//     evt.currentTarget.classList.toggle('red')
//     })
//   })
  
  
  
  });