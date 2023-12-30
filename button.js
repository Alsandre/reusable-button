function handleClick(e) {
    let classList = e.target.classList;

    if (classList[0] === "preClick") {
      classList.remove("preClick");
      classList.add("clicked");
      console.log("pre");
    } else {
      console.log("!pre");
      classList.remove("clicked");
      classList.add("preClick");
    }
  }