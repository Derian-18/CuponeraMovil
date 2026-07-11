import { Injectable } from '@angular/core';
import { Coupon, ICouponData } from '../models/coupon.model';

@Injectable({
  providedIn: 'root',
})
export class CouponService {

  processCoupon(couponsData: ICouponData[]){
    const  coupons: Coupon[] = [];
    for(const couponData of couponsData){
      const coupon = new Coupon(couponData);
      coupons.push(coupon);
    }
    return coupons;
  }
  getCoupons(){
    return fetch('./assets/data/coupons.json')
    .then( async (res: Response)=>{
      const couponData: ICouponData[] = await res.json();
      const coupons: Coupon[] = this.processCoupon(couponData);
      coupons.forEach(coupon => coupon.active = false);
      return coupons;
    })
    .catch(err => {
      return [];
    })
  }
}