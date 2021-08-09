


function parseData() {

    let parsedData = [];

    for(let index = 0; index < 25; index++) {
        let temp = {
            "gender" : data.results[index].gender,
            "name" : data.results[index].name.first + " " +  data.results[index].name.last,
            "photo" : data.results[index].picture.large,
            "country" : data.results[index].country,
            "email" : data.results[index].email
  
        }
        parsedData.push(temp);

    }

    return parsedData;
}


// Gender buttons and selections
let maleButton = document.querySelector("#males");
let femaleButton = document.querySelector("#females");
let usersDiv = document.querySelector("#people");

window.onload = function() {
    console.log("fun");
    addUser(parseData());

}

maleButton.onclick = function() {

    usersDiv.innerHTML = "";

    let genderData = removeGender("male");

    

    addUser(genderData);

    console.log("male button");


    

}

femaleButton.onclick = function() {

    usersDiv.innerHTML = "";


    let genderData = removeGender("female");
    
    addUser(genderData);

    console.log("female button");

}

function removeGender(sex) {
    
    let genderData = [];

    for(let index = 0; index < 25; index++) {

        if(data.results[index].gender == sex)
        {
            let temp = {
                "gender" : data.results[index].gender,
                "name" : data.results[index].name.first + " " +  data.results[index].name.last,
                "photo" : data.results[index].picture.large,
                "country" : data.results[index].country,
                "email" : data.results[index].email
      
            }
            genderData.push(temp);
        }

    }

    return genderData;
}



function addUser(arr) {


    for(let user = 0; user < arr.length; user++) {
        let tempImg = document.createElement("img");
        let tempName = document.createElement("p");
        let tempGender = document.createElement("p");
        let tempEmail = document.createElement("p");
        let linebreak = document.createElement("br");
        let myDiv = document.createElement("div");

        myDiv.classList.add("profile");

        tempImg.src = arr[user].photo;
        tempName.innerHTML = arr[user].name;
        tempGender = arr[user].gender;
        tempEmail = arr[user].email;

        myDiv.append(tempImg);
        myDiv.append(tempName);
        myDiv.append(tempEmail);


        usersDiv.append(myDiv);

        // usersDiv.append(tempImg);
        // usersDiv.append(tempName);
        // // usersDiv.append(tempGender);
        // usersDiv.appendChild(linebreak);
        // usersDiv.append(tempEmail);
        
    }
    function countrySelector(country) {
    
        let countryData = [];
    
        for(let index = 0; index < 25; index++) {
    
            if(country.value == data.results[index].country)
            {
                let temp = {
                    "gender" : data.results[index].gender,
                    "name" : data.results[index].name.first + " " +  data.results[index].name.last,
                    "photo" : data.results[index].picture.large,
                    "country" : data.results[index].country,
                    "email" : data.results[index].email
          
                }
                countryData.push(temp);
            }
    
        }
    
        return countryData;
    }
}


// if(femaleButton.onclick())


