// function handleOnClick() {
//         console.log("Left clicked");
//         let element = document.getElementById("1");
//         element.classList.add("checked");
//         if (element.innerHTML == "!") {
//           console.log("YOU LOSE!");
//           return;
//         }
//       }
//       function handleRightClick() {
//         console.log("Right clicked");
//         document.getElementById("1").innerHTML = "!";
//       }

//("")
//onclick="handleOnClick()"

const parentBox = document.getElementsByClassName("container")[0];
 let show = document.getElementById("result");

parentBox.addEventListener("click", (event) => {
    const childBox = event.target;
//    console.log(childBox);
    childBox.classList.add("checked");
    
//      function handleRightClick() {
////        console.log("Right clicked");
////        document.getElementById("1").innerHTML = "!";
//          childBox.innerHTML =  "!";
//          childBox.classList.add("flag");
//      }
//     
    
    if(childBox.classList.contains("bomb"))
        {
           
            show.innerHTML = "YOU LOSE...";
            return;
        }
    else
    {
//        childBox.getAttribute("data").value;
        
    }
    
})
