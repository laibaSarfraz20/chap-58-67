//------------------------------------------Ques#1--------------------------------------------

// i. 
var mainContent = document.getElementById("main-content");

// ii. 
for (var i = 0; i < mainContent.children.length; i++) {
    console.log(mainContent.children[i]);
}

// iii.
var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
    alert(renderElements[i].innerHTML);
}

// iv. 
document.getElementById("first-name").value = "Alex";

// v. 
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

//------------------------------------------Ques#2--------------------------------------------

  // i. 
  var formContent = document.getElementById("form-content");
  console.log("Node type of 'form-content':", formContent.nodeType);

  // ii. 
  var lastName = document.getElementById("lastName");
  console.log("Node type of 'lastName':", lastName.nodeType); 
  console.log("Node type of child node of 'lastName':", lastName.firstChild.nodeType); 

  // iii. 
  lastName.firstChild.nodeValue = "Last Name: Smith";
  console.log("Updated 'lastName' element:", lastName.innerHTML);

  // iv.
  var mainContent = document.getElementById("main-content");
  console.log("First child of 'main-content':", mainContent.firstChild); 
  console.log("Last child of 'main-content':", mainContent.lastChild); 
  console.log("First element child of 'main-content':", mainContent.firstElementChild);
  console.log("Last element child of 'main-content':", mainContent.lastElementChild);

  // v. 
  console.log("Next sibling of 'lastName':", lastName.nextSibling);
  console.log("Previous sibling of 'lastName':", lastName.previousSibling); 
  console.log("Next element sibling of 'lastName':", lastName.nextElementSibling);
  console.log("Previous element sibling of 'lastName':", lastName.previousElementSibling);

  // vi. 
  var email = document.getElementById("email");
  console.log("Parent node of 'email':", email.parentNode);
  console.log("Node type of 'email':", email.nodeType);

  //------------------------------------------Ques#3--------------------------------------------