async function computeDigest() {
  const input = document.getElementById("inputText").value;
  const algorithm = document.getElementById("algorithm").value;

  try {
    let hashBuffer;
    if (algorithm.startsWith("SHA")) {
      hashBuffer = await crypto.subtle.digest(algorithm, new TextEncoder().encode(input));
    } else if (algorithm === "MD5") {
      hashBuffer = await computeMD5(input); // Custom MD5 function
    } else {
      throw new Error("Algorithm not supported");
    }

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
    document.getElementById("outputText").innerText = `Digest (${algorithm}): ${hashHex}`;
  } catch (error) {
    document.getElementById("outputText").innerText = `Error: ${error.message}`;
  }
}

// Custom MD5 implementation (uses a library if you prefer)
async function computeMD5(message) {
  // Simple implementation using third-party libraries like SparkMD5 or CryptoJS
  // Include your MD5 implementation or library here if required.
  throw new Error("MD5 algorithm not implemented in Web Crypto API. Use a library for MD5.");
}

