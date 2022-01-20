function handleOnClick() {
        console.log("Left clicked");
        let element = document.getElementById("1");
        element.classList.add("checked");
        if (element.innerHTML == "!") {
          console.log("YOU LOSE!");
          return;
        }
      }
      function handleRightClick() {
        console.log("Right clicked");
        document.getElementById("1").innerHTML = "!";
      }