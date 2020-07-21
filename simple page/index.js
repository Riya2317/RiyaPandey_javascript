document.querySelector("button").addEventListener("click",function(){
  var text = document.getElementById("mail").value;
  var number=document.getElementById("phone").value;
  var no = /^\d{10}$/;
  var e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(!number.match(no))
    alert("Invalid phone number  !! check carefully!!");
  if(!e.test(text))
    alert("You have entered an invalid email address!");
});
