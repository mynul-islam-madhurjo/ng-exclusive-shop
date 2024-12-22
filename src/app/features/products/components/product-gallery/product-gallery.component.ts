import { Component } from '@angular/core';

interface GalleryProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  gridClass: string;
}

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css'],
})
export class ProductGalleryComponent {
  galleryProducts: GalleryProduct[] = [
    {
      id: 1,
      image: 'assets/image/gallery/gallery-1.png',
      title: 'PlayStation 5',
      description: 'Experience next-gen gaming with revolutionary features',
      link: '/products/ps5',
      gridClass: 'gallery_item_1',
    },
    {
      id: 2,
      image: 'assets/image/gallery/gallery-2.png',
      title: 'Women Collections',
      description: 'Featured woman collections that give you another vibe.',
      link: '/products/womens',
      gridClass: 'gallery_item_2',
    },
    {
      id: 3,
      image: 'assets/image/gallery/gallery-3.png',
      title: 'Speakers',
      description: 'Amazon wireless speakers.',
      link: '/products/speakers',
      gridClass: 'gallery_item_3',
    },
    {
      id: 4,
      image: 'assets/image/gallery/gallery-4.png',
      title: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP.',
      link: '/products/perfume',
      gridClass: 'gallery_item_4',
    },
  ];
}
