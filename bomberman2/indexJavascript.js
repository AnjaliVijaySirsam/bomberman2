

//("")
var flagLeft = 10;
var score = 0;
const parentBox = document.getElementsByClassName("container")[0];
let resultElement = document.getElementById("result");
let scoreElement = document.getElementById("score");
let flagElement = document.getElementById("flagsLeft");


//+++++++++++MOUSE -> RIGHT CLICK("BomFlagged")+++++++++++++

parentBox.addEventListener("contextmenu", funct1= (e) => {
  const childBox = e.target;
  if (childBox.classList.contains("bomb")) {
    // a bomb
       
        childBox.innerHTML = "!";
            score++;
         scoreElement.innerHTML = score;
            flagLeft--;
        flagElement.innerHTML = flagLeft;
      }
        
  }
});


//+++++++++++MOUSE -> LEFT CLICK+++++++++++++

parentBox.addEventListener("click",  funct2 = (event) => {
  const childBox = event.target;
  childBox.classList.add("checked");

  
  if (childBox.classList.contains("bomb")) {
    // a bomb
        resultElement.innerHTML = "YOU LOSE!";
        parentBox.removeEventListener("contextmenu",funct1);
        parentBox.removeEventListener("click",funct2);
        return;
    }
    else
    {
    // not a bomb
        let cell = document.getElementById(event.target.id);
        cell.innerHTML = cell.getAttribute("data");
        cell.style.backgroundColor = "green";
        score++;
        scoreElement.innerHTML = score;
  }
    

});

//function showResult()
//{
//if( flagLeft == 0 || score >= 90)
//   {
//      resultElement.innerHTML = "YOU WIN!";
//   }
//    
//}
   
