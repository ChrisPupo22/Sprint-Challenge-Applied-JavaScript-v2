// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const lTimesDate = 'MARCH 28, 2019';
const lTimesTitle = 'Lambda Times';
const lTimesTemp = '98°';

const headerSet = document.querySelector('.header-container')
//console.log(headerSet)

headerSet.appendChild(header())

function header(headerInfo) {
    //creating elements
    const mainHeader = document.createElement('div')

    const date = document.createElement('span')
    

    const title = document.createElement('h1')
  
    const temp = document.createElement('span')
    

    //setting up the structure for the elements
    mainHeader.appendChild(date)
    mainHeader.appendChild(title)
    mainHeader.appendChild(temp)

    //setting the styles up
    mainHeader.classList.add('header')
    date.classList.add('date')
    title.classList.add('h1')
    temp.classList.add('temp')

    //setting the content for the elements
    date.textContent = lTimesDate
    title.textContent = lTimesTitle
    temp.textContent = lTimesTemp

    return mainHeader
}
