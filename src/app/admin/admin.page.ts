import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminPage implements OnInit {

  adminInfoReceived: UserModel | undefined;

  constructor(private router: Router) {
    this.adminInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
   }

  ngOnInit() {
  }

  goHomeadmin(){
    
    this.router.navigate(['/login'])

  }

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nueva Contraseña',
    },
    
  ];
}