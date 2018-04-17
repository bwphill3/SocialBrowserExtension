//javascript must be in separate file for chrome to allow it
//onclicks must be in here and not in the html file


var url = null;

//UNCOMMENT WHEN UPLOADING TO CHROME.
//This works in chrome but not browser debugging because it is specific to extensions.  Gets current tab
//When browser debugging it just returns null for url
/*chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    url = tabs[0].url;
}); */

//displays keyword form
function keyword() {
    document.getElementById("keyword_text").style.display = "list-item";
}

document.getElementById("like_button").onclick = keyword;

//displays url and keyword together
function submit_key() {

    var keyword = document.getElementById("keyword").value;

    document.getElementById("keyword_text").style.display = "none";

    document.getElementById("result").innerHTML = "You liked " + url + " with a keyword of " + keyword;

    document.getElementById("submit_test").style.display = "block";
}

document.getElementById("key_button").onclick = submit_key;

