let number = 0;
let data = []; // Variable to store data retrieved from ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // AJAX request to fetch data from ajax.json
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        data = JSON.parse(xhr.responseText);
        changeVideo();
    }
  };
  xhr.open('GET', 'ajax.json');
  xhr.send();
}

function changeVideo() {
  // Check if data has been fetched
  if (data.length === 0) {
    getData();
    return;
  }
  
  // Change video content based on the retrieved data
  const currentData = data[number];
  titleArea.textContent = currentData.title;
  contentArea.textContent = currentData.content;
  videoArea.src = currentData.url;
}

button.addEventListener('click', function() {
  number++; 
  changeVideo(); 
});

window.onload = changeVideo; 
