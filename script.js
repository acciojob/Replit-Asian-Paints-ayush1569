//your JS code here. If required.
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

function resetGridColors() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
}

changeButton.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  resetGridColors();

  if (blockId >= 1 && blockId <= 9) {
    const block = document.getElementById(blockId);
    block.style.backgroundColor = color;
  } else {
    alert("Please enter a valid block ID between 1 and 9.");
  }
});

resetButton.addEventListener("click", resetGridColors);