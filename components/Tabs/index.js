// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//grabbing the array from the axios call
const topics = document.querySelector('.topics')

//grabbing the empty tabs section from the html
const tabSection = document.querySelector('.tabs')

function tabCreator(tabData) {
    const tab
}


axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(res => {
    res.data.topics.forEach(topic => {
        topics.appendChild(tabCreator(topic))
    })
})
.catch(error => {
    console.log('no data was found error!', error)
    
})
