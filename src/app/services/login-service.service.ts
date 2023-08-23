import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loginDataUrl = 'http://localhost:3000/userDetails'; 

  addLoginData(data: unknown) {
    return axios.post(this.loginDataUrl, data);
  }

}
