let buttons = document.querySelectorAll(".button");
let expression = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        expression = cal(expression);
      } catch (err) {
        alert("Wrong expression");
      }
      display();
    } else if (e.target.innerHTML === "C") {
      if (typeof expression === "undefined") {
        expression = "";
      } else {
        expression = expression.toString();
        expression = expression.slice(0, -1);
      }
      display();
    } else if (e.target.innerHTML === "AC") {
      expression = "";
      display();
    } else if (e.target.getAttribute("name") === "root") {
      expression = sqrt(expression);
      display();
    } else if (e.target.getAttribute("name") === "/") {
      expression = expression + "/";
      display();
    } else if (e.target.getAttribute("name") === "*") {
      expression = expression + "*";
      display();
    } else {
      expression = expression + e.target.innerHTML;
      display();
    }
  });
});

function cal(expression) {
  let answer = eval(expression);
  return answer;
}
function sqrt(expression) {
  let answersqrt = Math.sqrt(cal(expression));
  return answersqrt;
}
function display() {
  return (document.querySelector("input").value = expression);
}
