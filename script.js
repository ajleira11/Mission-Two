document.addEventListener("DOMContentLoaded", function () {
  const contentContainer = document.getElementById("container");
  const loadButton = document.getElementById("rockGame");
  const loadCalculator = document.getElementById("Calculation");

  loadButton.addEventListener("click", function () {
    contentContainer.innerHTML = null;
    // Create an XMLHttpRequest object to fetch the new HTML file
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "game1.html", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Replace the content of the div with the loaded HTML content
        contentContainer.innerHTML = xhr.responseText;
      }
    };

    xhr.send();
  });

  loadCalculator.addEventListener("click", function () {
    contentContainer.innerHTML = null;
    // Create an XMLHttpRequest object to fetch the new HTML file
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "calc.html", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Replace the content of the div with the loaded HTML content
        contentContainer.innerHTML = xhr.responseText;
      }
    };

    xhr.send();
  });
});
