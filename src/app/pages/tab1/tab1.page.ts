import { NgTemplateOutlet } from '@angular/common';
import { CouponService } from './../../services/coupon.service';
import { Component, inject } from '@angular/core';


import { IonHeader, IonToolbar, 
  IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton,
  IonSegmentContent, IonSegmentView, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonImg, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

import { Coupon } from 'src/app/models/coupon.model';
import { FilterCouponCategoryPipe} from 'src/app/pipes/filter-coupon-category-pipe';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, 
    IonSegmentView, FilterCouponCategoryPipe, IonCard,
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonCol, 
    IonGrid, IonRow, NgTemplateOutlet
  ],
})
export class Tab1Page {
  
  private couponService: CouponService = inject(CouponService);
  coupons:Coupon[]=[];

  async ionViewWillEnter(){
    this.coupons = await this.couponService.getCoupons();
    console.log(this.coupons)
  }
}