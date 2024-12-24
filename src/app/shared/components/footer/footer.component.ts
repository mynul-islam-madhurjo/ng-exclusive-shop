import { Component, OnInit } from '@angular/core';
import { FooterLink } from '../../../core/models/footer-link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerLinks: FooterLink[] = [
    {
      title: 'Support',
      links: [
        { text: 'Stockholm, Sweden', url: '' },
        { text: 'email@gmail.com', url: '' },
        { text: '+46 123 456 78', url: '' },
        { text: '+46 72 345 67', url: '' },
      ],
    },
    {
      title: 'Account',
      links: [
        { text: 'My Account', url: '' },
        { text: 'Login / Register', url: '/auth/login' },
        { text: 'Cart', url: '/cart' },
        { text: 'Shop', url: '' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Privacy Policy', url: '' },
        { text: 'Terms of Use', url: '' },
        { text: 'FAQ', url: '' },
        { text: 'Contact', url: '' },
      ],
    },
  ];

  currentYear: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
