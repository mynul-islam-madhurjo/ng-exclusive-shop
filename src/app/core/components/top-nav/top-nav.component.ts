import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  promotionText = 'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!';
  shopNowLink = './products'
}
