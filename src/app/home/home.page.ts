import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardHeader,
  IonCardContent,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonLabel,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';

import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardHeader,
    IonCardContent,
    IonInput,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonButton,
  ],
})
export class HomePage {
  constructor(private router: Router) {}

  goToListe() {
    this.router.navigate(['liste']);
  }
  addUser() {
    console.log('addUser');
  }
}
