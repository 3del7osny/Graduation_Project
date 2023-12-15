import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  OnSignInClick(title : string){
    alert("Thank you for Sign In " + title + " :)" )
    // <div class="modal-dialog modal-sm">...</div>
  }
}
