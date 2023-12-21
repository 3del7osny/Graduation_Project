import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  OnSignInClick(title : string){
    // alert("Thank you for Sign In " + title + " :)" )
   // successful message
const messageBox = document.createElement("div");
messageBox.innerHTML = "Successful Sign In as a "+ title + "! :)";
messageBox.style.backgroundColor = "#4CAF50";
messageBox.style.color = "white";
messageBox.style.padding = "10px";
messageBox.style.position = "fixed";
messageBox.style.top = "50%";
messageBox.style.left = "50%";
messageBox.style.transform = "translate(-50%, -50%)";
messageBox.style.zIndex = "9999";
document.body.appendChild(messageBox);

// hide the message box after 3 seconds
setTimeout(function() {
messageBox.style.display = "none";
}, 3000);
  }
}
