// Function to encode the input text
function encodeBase64() {
  const input = document.getElementById("inputText").value;
  const encodedText = btoa(input);
  document.getElementById("outputText").innerText = `Encoded: ${encodedText}`;
}

// Function to decode the input text
function decodeBase64() {
  const input = document.getElementById("inputText").value;
  try {
    const decodedText = atob(input);
    document.getElementById("outputText").innerText = `Decoded: ${decodedText}`;
  } catch (error) {
    document.getElementById("outputText").innerText = "Invalid Base64 string";
  }
}

// Function to handle file input for encoding or decoding
function handleFile() {
  const file = document.getElementById("fileInput").files[0];
  const reader = new FileReader();
  
  reader.onload = function() {
    const result = reader.result;
    const isTextFile = file.type.startsWith("text/");
    
    if (isTextFile) {
      const encodedText = btoa(result);
      document.getElementById("outputText").innerText = `Encoded: ${encodedText}`;
    } else {
      document.getElementById("outputText").innerText = "Unsupported file type for text encoding";
    }
  };

  if (file) {
    reader.readAsText(file);
  }
}

