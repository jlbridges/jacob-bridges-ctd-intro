const BASE_URL = "https://www.swapi.tech/api";
const tabs = document.querySelectorAll('[data-category]')
const tabContents = document.querySelectorAll('.tab')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        const target = tab.dataset.category
        //remove the pound from the tab ID
        const category = target.replace('#', '')
        makeURL(category)
        tabContents.forEach(tabContent => {

            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {

            tab.classList.remove('active')
        })
        tab.classList.add('active')

    })
})



/* 
pass in the category value from the clicked tab
randId creates a random whole number between 1-20
call getData and pass in url and category clicked
*/
function makeURL(category) {
    let randId = Math.floor(Math.random() * 20) + 1;
    const build_url = `${BASE_URL}/${category}/${randId}`;
    console.log(build_url)
    getData(build_url, category)

}

/* 
try to fetch the url passed in
if the response is anything other 'ok', call makeURL again to get a different id
if response message is okay, await the response and call parseResult to get the data properties I want
*/
async function getData(url, category) {
    columns.innerHTML = "Loading..."
    try {
        const response = await fetch(url)
        if (!response.ok) {
            makeURL(category)
        } else {
            const data = await response.json()
            result = data.result.properties
            parseResult(result)
        }

    } catch (error) {
        console.log(error)
    }


}

async function parseResult(result) {
    resultList = []


    for (const [key, value] of Object.entries(result)) {
        if (Array.isArray(value)) {
            hideArray = value
            //getNewResult = await newResult()
        } else if (key === 'homeworld') {
            new_value = await replaceURL(value)
            resultList.push([key, new_value])

        } else resultList.push([key, value]);



    }

    resultList.splice(0, 2);
    resultList.splice(-1)

    displayResult(resultList)
}

function displayResult(newList) {


    const table = document.getElementById("table-results")
    const columns = document.getElementById("columns")
    const rows = document.getElementById("rows")
    columns.innerHTML = ""
    rows.innerHTML = ""




    for (let i = 0; i < newList.length; i++) {






        const column = document.createElement("th")
        const columnData = document.createTextNode(newList[i][0])

        const row = document.createElement("td")
        const rowData = document.createTextNode(newList[i][1])
        row.appendChild(rowData)
        rows.appendChild(row)
        column.appendChild(columnData)
        columns.appendChild(column)




    }

}

async function replaceURL(url) {



    const response = await fetch(url)
    const data = await response.json()




    result = data.result.properties.name
    return result



}