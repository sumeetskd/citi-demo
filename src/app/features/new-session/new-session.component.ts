import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef,MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss']
})
export class NewSessionComponent {

  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private popup: MatDialogRef<NewSessionComponent>, private fb:FormBuilder,private sessionservice:SessionService) {}


  
  createSessionForm
  =this.fb.group({
    customerId: ['', [Validators.required]],
    customerName:['', [Validators.required]],
    sessionName:['', [Validators.required]],
    remarks:['',[Validators.required]]
  });
  

    get customerName() { return this.createSessionForm.get("customerName") }
    get sessionName() { return this.createSessionForm.get("sessionName") }
    get remarks() {
       return this.createSessionForm.get("remarks") 
      }
    get customerId(){return this.createSessionForm.get("customerId")}


    createSession() {
   
      this.isLoading = true; 
  
      const sessionData = this.createSessionForm.value;
  
      this.sessionservice.createSession(sessionData).subscribe(
        (next) => {
          alert('Added Sucessfully')
          this.closeModal();
        },
        (error) => {
          this.errorMessage = 'Failed to create the session!';
          this.isLoading = false;
        }
      );
    }

  closeModal() {
    this.popup.close();
  }

  onClose(){

    this.popup.close();

  }

}
