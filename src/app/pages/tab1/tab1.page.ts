import { NgTemplateOutlet } from '@angular/common';
import { CouponService } from './../../services/coupon.service';
import { Component, inject } from '@angular/core';

import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, 
  IonSegmentButton, IonSegmentContent, IonSegmentView, IonCard, 
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonCol, 
  IonGrid, IonRow, IonIcon, IonItem, IonButtons, IonButton
} from '@ionic/angular/standalone';

import { Coupon } from 'src/app/models/coupon.model';
import { FilterCouponCategoryPipe } from 'src/app/pipes/filter-coupon-category-pipe';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, 
    IonSegmentButton, IonSegmentContent, IonSegmentView, FilterCouponCategoryPipe, 
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonCol, 
    IonGrid, IonRow, NgTemplateOutlet, IonIcon, IonItem, IonButtons, IonButton
  ],
})
export class Tab1Page {
  
  private couponService: CouponService = inject(CouponService);
  coupons: Coupon[] = [];

  constructor() {
    // Registramos el icono para poder usarlo en standalone
    addIcons({ cameraOutline });
  }

  async ionViewWillEnter() {
    this.coupons = await this.couponService.getCoupons();
    console.log(this.coupons);
  }

  changeActive(coupon: Coupon) {
    coupon.active = !coupon.active;
    this.couponService.saveCoupons(this.coupons);
  }

  startCamera() {
    console.log('Abriendo cámara para escanear...');
    // Aquí irá tu lógica para abrir la cámara de la cuponera más adelante
  }
}