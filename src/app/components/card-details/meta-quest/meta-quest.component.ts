import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { Product, metaQuestProducts } from '../../../data/sample-products';

interface MetaQuestProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  rating?: number;
  reviews?: number;
}

@Component({
  selector: 'app-meta-quest',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './meta-quest.component.html',
  styleUrl: './meta-quest.component.scss'
})
export class MetaQuestComponent implements OnInit {
  products: MetaQuestProduct[] = [];
  selectedProduct: MetaQuestProduct | null = null;
  currentImageIndex: number = 0;

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;
  pageSizeOptions: number[] = [5, 10, 15];

  allImages: string[] = [
    'assets/meta.webp',
    'assets/meta1.jpg',
    'assets/meta4.jpg',
    'assets/meta_4.jpg',
    'assets/meta7.jpg'
  ];

  // Computed properties
  get totalItems(): number {
    return this.products.length;
  }

  get paginatedProducts(): MetaQuestProduct[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.products.slice(start, end);
  }

  ngOnInit() {
    this.loadProducts();
    this.selectedProduct = this.products[0];
  }

  // Pagination event handlers
  onPageChange(page: number): void {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onPageSizeChange(size: number): void {
    this.itemsPerPage = size;
    this.currentPage = 1;
  }

  loadProducts() {
    // Convert Product[] to MetaQuestProduct[] format
    this.products = metaQuestProducts.map((p, index) => ({
      id: p.id,
      name: p.name,
      description: p.description || 'Premium Meta Quest product',
      price: p.price,
      image: this.allImages[index % this.allImages.length],
      features: this.getDefaultFeatures(p.name),
      rating: 4.5 + Math.random() * 0.5,
      reviews: Math.floor(Math.random() * 3000) + 500
    }));
  }

  getDefaultFeatures(productName: string): string[] {
    if (productName.includes('Quest 3')) {
      return ['Mixed Reality', '4K+ Display', 'Snapdragon XR2 Gen 2', 'Touch Plus Controllers'];
    } else if (productName.includes('Quest Pro')) {
      return ['Pancake Optics', 'Eye & Face Tracking', 'Self-Tracking Controllers', 'Premium Audio'];
    } else if (productName.includes('Quest 2')) {
      return ['All-in-One VR', '1832 x 1920 per eye', 'Wireless Freedom', 'Extensive Game Library'];
    } else if (productName.includes('Controller')) {
      return ['Precision Tracking', 'Ergonomic Design', 'Long Battery Life', 'Easy Pairing'];
    } else if (productName.includes('Strap')) {
      return ['Enhanced Comfort', 'Adjustable Fit', 'Better Weight Distribution', 'Premium Materials'];
    } else {
      return ['High Quality', 'Durable Design', 'Easy to Use', 'Great Value'];
    }
  }

  selectProduct(product: MetaQuestProduct) {
    this.selectedProduct = product;
    this.currentImageIndex = 0;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.allImages.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.allImages.length) % this.allImages.length;
  }

  addToCart(product: MetaQuestProduct) {
    alert(`Added ${product.name} to cart!`);
  }

  getStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    while (stars.length < 5) {
      stars.push('☆');
    }
    return stars;
  }
}
