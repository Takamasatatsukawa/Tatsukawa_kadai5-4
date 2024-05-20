let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status == 200) {
                data = JSON.parse(request.responseText); 
                displayData(); 
            }
        }
    };
    request.open("GET", "ajax.json");
    request.send();
}

function displayData() {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number == 2 ? number = 0 : number++;
}

function changeVideo() {
    if (data.length === 0) { 
        getData(); 
    } else { 
        displayData(); 
    }
}

window.onload = changeVideo;
button.addEventListener('click', changeVideo); 
