const pulltab = document.getElementById("pulltab");
pulltab.addEventListener("click", function (e) {
  // this - takes the value of the DOM node upon which the event listener
  // is registered
  const editButton = this.children.item(0);
  editButton.style.visibility =
    editButton.style.visibility !== "visible" ? "visible" : "hidden";
});
