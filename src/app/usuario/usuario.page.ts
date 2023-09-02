import { Component, OnInit, ElementRef, ViewChildren, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';
import { UserModel } from '../models/UserModel';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsuarioPage implements OnInit {

  
  userInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;

  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private animationCtrl: AnimationController) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    // Si quiero obtener un valor por URL usando routerLink
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    // Obteniendo el ID podria buscar en algún arreglo o BD el usuario con el id
    console.log("Valor obtenido desde URL: ",this.idUserHtmlRouterLink);
    
   }

   

  ngOnInit() {
  }
  
  //PopUp para Cabmiar Contraseña
  public alertButtons = ['Cambiar'];
  public alertInputs = [
  {
    placeholder: 'Contraseña',
  },
  ];

  //Funcion Ir a Login
  goHome(){
    
    this.router.navigate(['/login'])

  }

 
}
