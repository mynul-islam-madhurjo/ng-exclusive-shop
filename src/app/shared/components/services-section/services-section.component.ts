import { Component, OnInit } from '@angular/core';
import { ServiceItem } from '../../../core/models/service.model';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
})
export class ServicesSectionComponent implements OnInit {
  services: ServiceItem[] = [
    {
      icon: 'fa-solid fa-truck-fast',
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
    },
    {
      icon: 'fa-solid fa-headset',
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      icon: 'fa-solid fa-shield',
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
