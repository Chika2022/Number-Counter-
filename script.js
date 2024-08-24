var decrease = document.getElementById("decreaseBtn");
var rest = document.getElementById("restBtn");
var increase = document.getElementById("increaseBtn");
var countLabel = document.getElementById("countLabel");
count = 0;

increase.addEventListener("click", function () {
  count++;
  countLabel.innerHTML = count++;
});
decrease.addEventListener("click", function () {
  count--;
  countLabel.innerHTML = count--;
});
rest.addEventListener("click", function () {
  count = 0;
  countLabel.innerHTML = count;
});
