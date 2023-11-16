document.getElementById("buttons").onmousemove = (e) => {
  for (const button of document.getElementsByClassName("button")) {
    const rect = button.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  }
};

setTimeout(function () {
  for (const loader of document.getElementsByClassName("loader")) {
    loader.style.setProperty("--toggle", "grid");
    setTimeout(function () {
      loader.style.setProperty("--toggle", "none");
    }, 3500);
  }
}, 0);

var searchBar = document.getElementById("searchbar");
var inputBar = document.getElementById("input");

// Add event handlers
inputBar.addEventListener("click", function () {
    // Change the border color when the input is clicked
    searchBar.style.borderColor = "var(--blue)";
  });
  
  inputBar.addEventListener("blur", function () {
    // Restore the original border color when the input is deselected
    searchBar.style.borderColor = "";
  });