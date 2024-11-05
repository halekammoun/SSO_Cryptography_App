// Function to encode the input text
function encodeURL() {
  const input = document.getElementById("inputText").value;
  const encodedText = encodeURIComponent(input);
  document.getElementById("outputText").innerText = `Encoded: ${encodedText}`;
}

// Function to decode the input text
function decodeURL() {
  const input = document.getElementById("inputText").value;
  const decodedText = decodeURIComponent(input);
  document.getElementById("outputText").innerText = `Decoded: ${decodedText}`;
}

