function buttonClick(e) {
  let btnClassList = e.target.parentElement.classList;

  if (
    !btnClassList.contains("btn-click_initial") &&
    !btnClassList.contains("btn-click_subsequent")
  )
    btnClassList.add("btn-click_initial");
  else {
    btnClassList.contains("btn-click_initial")
      ? btnClassList.replace("btn-click_initial", "btn-click_subsequent")
      : btnClassList.replace("btn-click_subsequent", "btn-click_initial");
  }

  new Audio("assets/click.wav").play();
}
