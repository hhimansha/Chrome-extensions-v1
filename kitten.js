console.log('Kittens of the world');

let filenames = [
    "cat.jpg"
];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'cat.jpg'; // Use the specified cat image
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    console.log(url);
}
