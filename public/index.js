function pageSetup(userTypes) {
    var dropdownContentContainer = document.getElementsByClassName("dropdown-content")[0];
    console.log(dropdownContentContainer);
    for (let userType of userTypes){
        let dropdownMemberNode = document.createElement("a");
        let dropdownText = document.createTextNode(userType);
        dropdownMemberNode.appendChild(dropdownText);
        dropdownMemberNode.addEventListener("click",(event) => {
            let selected = event.target.innerHTML;
            console.log(event);
            let target = document.getElementsByClassName("dropbtn")[0];
            target.innerText = selected;
            setMainPage(selected);
        });
        dropdownContentContainer.appendChild(dropdownMemberNode);
    }
}


/*

setMainPage

@param




*/

function setMainPage(selected){
    // if nothing has been selected, leave the main page
    if (selected == undefined) { return };
    // get data for selected
    console.log(`${selected}`);
    fetch("http://localhost:8080/data/"+selected)
        .then(data => data.json())
        .then(data => {
            // if the list is empty, do nothing
            if (data.length < 1) return;
            
            var page = document.getElementsByClassName("infoContainer")[0];
            let mainText = document.createTextNode("Main page for " + selected + "!\n\n");
            //let mainData = document.createTextNode(JSON.stringify(data));
            page.innerHTML = "";
            document.getElementsByClassName("pageContent")[0].appendChild(mainText);
            //page.appendChild(mainText);
            for (let obj of data) {
                let newCard = document.createElement("div");
                newCard.className = "card";
                let cardContainer = document.createElement("div");
                cardContainer.className = "cardContainer";
                cardImage = document.createElement("img");
                cardImage.src = "/homer.png";
                cardImage.alt = "Avatar";
                cardName = document.createElement("h4");
                cardName.appendChild(document.createTextNode(obj.type));
                cardDesc = document.createElement("ul");
                for (let prop in obj){
                    if (prop != "type" & obj.hasOwnProperty(prop)) {
                        let li = document.createElement("li");
                        li.appendChild(document.createTextNode(prop + ": " + obj[prop]));
                        cardDesc.appendChild(li);
                    }
                }
                cardContainer.append(cardImage);
                cardContainer.appendChild(cardName);
                cardContainer.appendChild(cardDesc);
                newCard.appendChild(cardContainer);
                newCard.addEventListener("click",(event)=>{
                    console.log("Mouse clicked!");
                    console.log(obj);
                });
                page.appendChild(newCard);
            }
        });
}

//var selected = "None";
fetch("http://localhost:8080/datatypes")
    .then(data => data.json())
    .then(data => {
        console.log(data);
        pageSetup(data);
    })
    .catch(e => console.log(e));
