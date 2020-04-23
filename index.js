var myObject = {};//object country name as key : details as value {india:{details}}

var myarray = [];//country names [india, china ,us]

//async function to create myobj and myarr
async function restCountries(endpoint, findelement) {

    const res = await fetch(endpoint);
    // console.log(res)
    let data = await res.json();
    // console.log(data)
    data.map(function (elements) {
        // console.log(elements)
        var key = elements[findelement];
        // console.log(key)
        myObject[key] = elements;

    })

    // console.log(myObject);

    myarray = Object.keys(myObject);

    // console.log(myarray);

    for (let i = 0; i < myarray.length; i++) {

        var x = document.createElement("li");

        var y = document.createElement("button");

        var z = document.createTextNode(myarray[i]);

        y.appendChild(z);

        y.setAttribute("onclick", "myfun(" + i + ")");

        y.setAttribute("class", "btn btn-light btn-block");

        x.appendChild(y);

        document.getElementById("countrylist").appendChild(x);
    }


}

//onclick function for each country
function myfun(index) {

    var resultCountry = myObject[myarray[index]];
    // console.log(resultCountry)
    document.getElementById(" name").innerHTML = resultCountry.name;
    document.getElementById("domain").innerHTML = resultCountry.topLevelDomain;
    document.getElementById("capital").innerHTML = resultCountry.capital;
    document.getElementById("region").innerHTML = resultCountry.region;
    document.getElementById("subregion").innerHTML = resultCountry.subregion;
    document.getElementById("population").innerHTML = resultCountry.population;
    document.getElementById("latlong").innerHTML = resultCountry.latlng;
    document.getElementById("area").innerHTML = resultCountry.area;
    document.getElementById("timezones").innerHTML = resultCountry.timezones;
    document.getElementById("borders").innerHTML = resultCountry.borders;
    var flags = document.getElementById("flag");
    flags.setAttribute("src", resultCountry.flag);
    var table=document.getElementById("table")
    document.getElementById("con").style.backgroundImage = "url('"+resultCountry.flag+"')";
    // document.body.style.backgroundRepeat = "no-repeat";
    table.style.opacity="0.8"
    flags.style.opacity="1"
    flags.style.backgroundColor="white"
    // table.style.color="white"

}