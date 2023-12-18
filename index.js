let sentence = "The quick brown fox jumps over the lazy dog.";
//
document.addEventListener("DOMContentLoaded", function() {
    
   
  
    // Call the function on page load
    displayRandomKeyValuePair();
  
    // Optionally, you can add an event listener to trigger the function on a button click or any other event
    // For example:
    // const button = document.getElementById("randomizeButton");
    // button.addEventListener("click", displayRandomKeyValuePair);
  });
  


// Function to get a random key-value pair from the JavaScript object
function getRandomKeyValuePair(jsonObj) {
    const keys = Object.keys(jsonObj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return [randomKey, jsonObj[randomKey]];
  }



 // Function to display the result in the specified div
 function displayRandomKeyValuePair() {
    fetch("dictionary.json")
      .then(response => response.json())
      .then(data => {
        const divDisplay = document.getElementById("sentence");
        const [key, value] = getRandomKeyValuePair(data);
        // const resultString = `${key}: ${value}`;
        sentence = `${key}: ${value}`;
        // divDisplay.textContent = resultString;
        divDisplay.textContent = sentence;
      })
      .catch(error => console.error("Error fetching JSON:", error));
  }












// 
// 
// 








        let currentIndex = 0;

        document.addEventListener('keydown', handleKeyDown);

        function handleKeyDown(event) {
          const key = event.key;
          const sentenceElement = document.getElementById('sentence');
          const currentChar = sentence[currentIndex];

          if (key === currentChar) {
            sentenceElement.innerHTML = replaceCharAtIndex(sentenceElement.innerText, currentIndex, currentChar, 'green');
            currentIndex++;

            if (currentIndex === sentence.length) {
              // Typing completed, do something (e.g., show a success message)
              alert('Congratulations! You typed the sentence correctly.');
              resetTyping();
            }
          } else {
            sentenceElement.innerHTML = replaceCharAtIndex(sentenceElement.innerText, currentIndex, currentChar, 'red');
          }
        }

        function replaceCharAtIndex(str, index, char, color) {
          return  `<span class="${"darkGreen"}">${str.substring(0, index)}</span>` + `<span class="${color}">${char}</span>` + str.substring(index + 1);
        }
      

        function resetTyping() {
          currentIndex = 0;
          displayRandomKeyValuePair();
        //   const sentenceElement = document.getElementById('sentence');
        //   sentenceElement.innerHTML = sentence;
        }