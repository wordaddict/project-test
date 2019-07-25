class DropDown {
    /**
     * main function call that calls all elements of the drop down
     */
    init(){
        const parentElement = document.createElement("drop-down");
        const innerDiv = document.createElement("div");
        const listElement = document.createElement('ul');
        this.createParentElement(parentElement);
        this.getInnerDisplay(innerDiv, parentElement);
        this.createButtonLink(innerDiv);
        this.createProfileDiv(parentElement, listElement);
        this.createChildElement(listElement);
        this.addEventlistener()
    }

    /**
     * 
     * @param {covers the whole div, a container} parentElement 
     */
    createParentElement(parentElement){
        // set id and css of both body and parent element
        document.body.appendChild(parentElement);
        document.body.style.cssText = "display: flex; align-items: center;"
        parentElement.id = "presentation"
        parentElement.style.cssText = "display: flex; flex-direction: column; height: 200px; width: 100%; align-items: center;";
    };

    /**
     * 
     * @param {Takes the innerdiv as parameter so the inner can be reusesable} innerDiv 
     * @param {Binds the innerdiv as a child element} parentElement 
     */
    getInnerDisplay(innerDiv, parentElement){
        innerDiv.id = "div-check";
        innerDiv.style.cssText = "display: flex; width: 45%; flex-direction: row; justify-content: flex-end; align-items: center;";
        parentElement.appendChild(innerDiv);
    }

    /**
     * 
     * @param {binds the innerdiv as a parent to the button link} innerDiv 
     */
    createButtonLink(innerDiv){
        // add button div
        const buttonDiv = document.createElement("div");
        buttonDiv.style.cssText = "color: rgb(136, 210, 15); width: 80px; font-size: 42px; text-align: right;"

        // create button text
        const buttonText = document.createTextNode("More");
        // add button text to button div

        buttonDiv.appendChild(buttonText);
        // create arrow icon
        const arrowImage = document.createElement("img");
        arrowImage.src = "arrow.jpeg";
        arrowImage.style.cssText = "height: 30px; width: 30px; margin-left: 20px; margin-top: 5px;";

        // append the text and img src to the inner div
        innerDiv.appendChild(arrowImage);
        innerDiv.appendChild(buttonDiv);
    }

    /**
     * 
     * @param {appends with the profile div that is the container for the emails} parentElement 
     * @param {shows all unordered list} listElement 
     */
    createProfileDiv(parentElement, listElement){
        let profileDiv = document.createElement("div");
        profileDiv.style.cssText = "width: 45%;"
        listElement.className = "list-emails";
        listElement.style.cssText = "list-style-type: none;  background: #D8D8D8; box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.1); padding: 2px; border-radius: 5px;"
    
        // append ul to profile div
        profileDiv.appendChild(listElement);
    
        // append profile div to parent element
        parentElement.appendChild(profileDiv);
    }

    /**
     * 
     * @param {creates list element for each emails} listElement 
     */
    createChildElement(listElement){
        const emails = [];
        emails.push('samanthailham@gmail.com');
        emails.push('samanthailham@gmail.com');
        emails.push('samanthailham@gmail.com');
        for (let email of emails) {
            // create the display div
            let displayDiv = document.createElement("div");
            displayDiv.style.cssText = "display: flex; flex-direction: row; align-items: center;  background: white; height: 70px; padding-left: 25px;";
            // create image avatar
            let avatarImage = document.createElement("img");
            avatarImage.src = "avatar.png";
            avatarImage.style.cssText = "height: 50px; width: 50px; margin-right: 30px; margin-top: 3px;";
            // append image avatar
            displayDiv.appendChild(avatarImage);
    
            // create list div
            let listDiv = document.createElement("div");
            listDiv.style.cssText = "width: 90%; padding-left: 30px;"
    
            // append listdiv to displaydiv 
            displayDiv.appendChild(listDiv);
            let childElementList = document.createElement('li');
            childElementList.style.cssText = "font-size: 1.5vw;  line-height: 55px; letter-spacing: 0.04em;  font-family: Gibson;"
             // add each emails to it
            childElementList.innerHTML = email;
            listDiv.appendChild(childElementList);
    
            // add a line for the divs
            let lineDiv = document.createElement("div");
            lineDiv.style.cssText = "background: gray; height: 2px; width: 70%; border-radius: 2px;"
            listDiv.appendChild(lineDiv);
    
            listElement.appendChild(displayDiv);
        }
    }

    /**
     * Adds an onclick event to the more
     */
    addEventlistener(){
        const button = document.getElementById('div-check');
        const menu = document.querySelector(".list-emails");
        button.addEventListener("click", function() {
        if(menu.style.display == 'none')
            menu.style.display = 'block';
        else
            menu.style.display = 'none';
        });
    }
};

new DropDown().init();