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
        { text: 'Stockholm, Sweden', url: '#' },
        { text: 'email@gmail.com', url: 'mailto:email@gmail.com' },
        { text: '+46 123 456 78', url: 'tel:+46123456789' },
        { text: '+46 72 345 67', url: 'tel:+46723456789' },
      ],
    },
    {
      title: 'Account',
      links: [
        { text: 'My Account', url: '/account' },
        { text: 'Login / Register', url: '/auth' },
        { text: 'Cart', url: '/cart' },
        { text: 'Shop', url: '/shop' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Privacy Policy', url: '/privacy' },
        { text: 'Terms of Use', url: '/terms' },
        { text: 'FAQ', url: '/faq' },
        { text: 'Contact', url: '/contact' },
      ],
    },
  ];

  currentYear: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
