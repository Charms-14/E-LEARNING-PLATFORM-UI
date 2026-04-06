function markComplete() {
  localStorage.setItem("progress", 100);
  alert("Lesson Completed!");
}

window.onload = function() {
  let progress = localStorage.getItem("progress") || 0;
  let fill = document.getElementById("progress-fill");
  let text = document.getElementById("progress-text");

  if (fill) {
    fill.style.width = progress + "%";
    text.innerText = progress + "% Completed";
  }
};
