

fetch("https://kea-alt-del.dk/t5/api/productlist")

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        showData(data);
    })

function showData(jsonData) {
    console.log(jsonData)

    jsonData.forEach(getDish);
    //2console.log(jsonData)

}

function getDish(theDish) {
    //3console.log(theDish);
    const template = document.querySelector("template").content;
    const startersTemplate = template.cloneNode(true);
    console.log(startersTemplate)

    startersTemplate.querySelector(".products img").src = "img/small/" + theDish.image +"-sm.jpg";
    startersTemplate.querySelector("h3").textContent =theDish.name;
    startersTemplate.querySelector(".starters span.elemid").textContent = theDish.id;
    startersTemplate.querySelector(".starters span.description").textContent = theDish.shortdescription;
    startersTemplate.querySelector(".starters span.price").textContent = theDish.price;
    startersTemplate.querySelector(".starters span.soldout").textContent = theDish.soldout;
    startersTemplate.querySelector(".starters span.discount").textContent = theDish.discount;
    startersTemplate.querySelector(".starters span.vegetarian").textContent = theDish.vegetarian;
    startersTemplate.querySelector(".starters span.alcohol").textContent = theDish.alcohol;

    if(theDish.category==="starter"){
        const dishes = document.querySelector("main .starterscontainer");
        dishes.appendChild(startersTemplate)
    } else if(theDish.category==="main"){
        const dishes = document.querySelector("main .mainscontainer");
        dishes.appendChild(startersTemplate)
    } else if(theDish.category==="dessert") {
        const dishes = document.querySelector("main .dessertscontainer");
        dishes.appendChild(startersTemplate)
    }

    /*console.log(dishes)*/
}
/*


    else if (theDish.category === "main") {
    aCopiedTemplate.querySelector(".maindish img").src=theDish.image;
    aCopiedTemplate.querySelector(".maindish h3").textContent=theDish.name;
    aCopiedTemplate.querySelector(".mains span.elemid").textContent=theDish.id;
    aCopiedTemplate.querySelector(".mains span.description").textContent=theDish.shortdescription;
    aCopiedTemplate.querySelector(".mains span.price").textContent=theDish.price;
    aCopiedTemplate.querySelector(".mains span.soldout").textContent=theDish.soldout;
    aCopiedTemplate.querySelector(".mains span.discount").textContent=theDish.discount;
    aCopiedTemplate.querySelector(".mains span.vegetarian").textContent=theDish.vegetarian;
    aCopiedTemplate.querySelector(".mains span.alcohol").textContent=theDish.alcohol;
    }
 /*
    ]


}

*/
