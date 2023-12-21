function buttonClick(e) {
  let button = e.target.parentElement;
  let classList = button.classList;
  classList.contains("click")
    ? classList.remove("click")
    : classList.add("click");
  console.log(button);
  new Audio("assets/click.wav").play();
}
