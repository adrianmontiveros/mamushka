fetch ("https://kea-alt-del.dk/t5/api/productlist")
.then(function (response) {
      return response.json()
      })
.then(function (data) {
    showData(data)
})

function showData(jsonData) {
    //1console.log(jsonData)
}

jsonData.forEach(getDish);

function getDish(theDish) {
    console.log(`${theDish} is delicious`);
}



