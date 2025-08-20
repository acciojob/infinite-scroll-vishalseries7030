//your code here!
const list = document.getElementById("infi-list");

let itemCount = 1;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + itemCount++;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Add scroll event listener
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // Add 2 more items at the bottom
  }
});

