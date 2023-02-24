
function makediv(tag) {
  let root =document.getElementById("root")
  root.innerHTML="<"+ "div" + ">"+tag+"</"+"div"+">"
  root.children[0].innerHTML="<"+ "div" + ">"+"자식"+"</"+"div"+">"
  console.dir(root);
  
  
}
makediv("부모")

