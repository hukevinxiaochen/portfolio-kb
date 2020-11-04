console.log("Client JavaScript starts here");
let mode = "read";
document.getElementById("pulltab").addEventListener("click", (e) => {
  mode = mode === "read" ? "edit" : "read";
  console.log("Edit mode toggled --> ", mode);
});
