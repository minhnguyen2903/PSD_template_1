
let data;
let toggleNum = 0;

const targetBody = document.querySelector("body");
const targetMain = document.querySelector("main");

const bodyResize = bodyEvent();
const category = chooseCategory();
const navCaregory = navMenuActive();
const navFillter = bookFillter();

function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
                // console.log(xhr.responseText);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

makeRequest("GET", "./header.html").then((data) => {
    let header = document.createElement("header");
    targetBody.prepend(header);
    header.innerHTML = data;
    return makeRequest("GET", "./footer.html");
}).then((data) => {
    let footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    footer.innerHTML = data;
    targetMain.after(footer);
});


function chooseCategory() {
    let selectedClass = document.querySelector(".selected-category");
    let passedClass = document.querySelector(".nav__menu");
    selectedClass.addEventListener("click", () => {
        if(toggleNum == 0) {
            passedClass.style.display = "block";
            passedClass.style.border = "solid 1px #d8dce0";
            toggleNum = 1;
        }
        else {
            passedClass.style.display = "none";
            passedClass.style.border = "none";
            toggleNum = 0;
        }
    });
}

function selectedCategory() {
    let innerSelectedClass = document.querySelector(".category");
    innerSelectedClass.innerHTML = "";
    document.querySelectorAll(".selected").forEach(item => {
        if(innerSelectedClass.innerHTML != "") {
            innerSelectedClass.innerHTML += ", " + item.innerHTML;
        }
        else {
            innerSelectedClass.innerHTML = item.innerHTML;
        }
    })
}

function navMenuActive() {
    let selectedClass = document.querySelectorAll(".nav--row ul a");
    
    let passedClass = document.querySelector(".nav__menu");
    selectedClass.forEach(element => {
        element.addEventListener("click", event => {

            //check if element contain .selected => add .selected
            if(!element.classList.contains("selected")) {
                element.className += "selected";
            }

            //check if element contain .selected => remove
            else {
                element.classList.remove("selected");
            }

            if(targetBody.offsetWidth <= 600) {
                passedClass.style.display = "none";
                passedClass.style.border = "none";
                toggleNum = 0;
            }



            selectedCategory();
        });
    });
}

function bookFillter() {
    let fillterItem = ["best seller", "new arrivals", "used book", "special offer"];
    let fillterNum = 0;
    let fillterDisplay = document.querySelector(".fillter-item-res span");

    document.getElementById("fillter-next").addEventListener("click", () => {
        fillterDisplay.innerHTML = fillterItem[fillterNum];
        fillterNum++;
        if(fillterNum > 3) fillterNum = 0;
    });
    document.getElementById("fillter-prev").addEventListener("click", () => {
        fillterDisplay.innerHTML = fillterItem[fillterNum];
        fillterNum--;
        if(fillterNum < 0) fillterNum = 3;
    });
}

function bodyEvent() {
    let passedClass = document.querySelector(".nav__menu");
    window.addEventListener("resize", () => {
        if(targetBody.offsetWidth > 600) {
            passedClass.style.display = "block";
        }
        else {
            passedClass.style.display = "none";
        }
    })
}