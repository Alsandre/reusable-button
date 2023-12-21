function buttonClick(e) {
  let btnClassList = e.target.classList;
  let btnFrontClassList = document.getElementById("btn-front").classList;
  let btnLeftClassList = document.getElementById("btn-left").classList;

  btnClassList.contains("pushedFace")
    ? btnClassList.remove("pushedFace")
    : btnClassList.add("pushedFace");

  btnFrontClassList.contains("pushedFront")
    ? btnFrontClassList.remove("pushedFront")
    : btnFrontClassList.add("pushedFront");

  btnLeftClassList.contains("pushedLeft")
    ? btnLeftClassList.remove("pushedLeft")
    : btnLeftClassList.add("pushedLeft");

    new Audio('assets/click.wav').play()
}
