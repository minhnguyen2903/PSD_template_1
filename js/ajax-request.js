
const targetBody = document.querySelector("body");
const targetMain = document.querySelector("main");
let data;
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