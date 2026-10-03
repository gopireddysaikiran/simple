// ===== API Call Handler =====
const apiBtn = document.getElementById("api-btn");
const responseBox = document.getElementById("api-response");
const responseText = document.getElementById("response-text");

apiBtn.addEventListener("click", async () => {
  apiBtn.disabled = true;
  apiBtn.textContent = "Loading...";

  try {
    const res = await fetch("/api/hello");
    const data = await res.json();

    responseText.textContent = JSON.stringify(data, null, 2);
    responseBox.classList.remove("hidden");
  } catch (err) {
    responseText.textContent = JSON.stringify(
      { error: "Failed to fetch", message: err.message },
      null,
      2
    );
    responseBox.classList.remove("hidden");
  } finally {
    apiBtn.disabled = false;
    apiBtn.textContent = "Fetch from API";
  }
});
