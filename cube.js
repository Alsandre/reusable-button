function buttonClick(e) {
  let button = e.target.parentElement;
  let classList = button.classList;
  classList.contains("clickOdd") || classList.contains("clickEven") || classList.add("clickOdd")
  classList.contains("clickOdd")
    ? classList.replace("clickOdd", 'clickEven')
    : classList.replace("clickEven", 'clickOdd');
  console.log(button);
  new Audio("assets/click.wav").play();
}
