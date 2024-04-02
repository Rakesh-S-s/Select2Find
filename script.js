 let typingTimer;
const doneTypingInterval = 1000;

document.getElementById("word").addEventListener("input", function() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(Search, doneTypingInterval);
});

function Search() {
    var word = document.getElementById("word").value;
    console.log(word);
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("output").innerHTML = data[0].meanings[0].definitions[0].definition;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById("output").innerHTML = "<p>No definition found for this word.</p>";
        });
}