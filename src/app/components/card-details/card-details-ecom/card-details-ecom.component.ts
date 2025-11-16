import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { Product, allProducts, getProductsByCategory, searchProducts } from '../../../data/sample-products';

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-card-details-ecom',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
  templateUrl: './card-details-ecom.component.html',
  styleUrl: './card-details-ecom.component.scss'
})
export class CardDetailsEcomComponent implements OnInit {
  // View states
  currentView: 'products' | 'categories' | 'add-product' = 'products';

  // Products data
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  selectedCategory: string = 'all';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  // Categories data
  categories: Category[] = [
    { id: 'CTG-001', name: 'Electronics', icon: '📺', color: '#E8EEFF' },
    { id: 'CTG-002', name: 'Apparel', icon: '👕', color: '#E8F5FF' },
    { id: 'CTG-003', name: 'Groceries', icon: '🛒', color: '#F0E8FF' },
    { id: 'CTG-004', name: 'Home Goods', icon: '🛋️', color: '#E8F0FF' }
  ];

  // Form data
  productForm = {
    name: '',
    category: '',
    price: 0,
    imageUrl: ''
  };

  editingProductId: string | null = null;
  imagePreview: string = '';

  // Computed properties
  get totalItems(): number {
    return this.filteredProducts.length;
  }

  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredProducts.slice(start, end);
  }

  ngOnInit() {
    this.loadSampleProducts();
    this.filteredProducts = [...this.products];
  }

  loadSampleProducts() {
    // Load all products from centralized data
    this.products = [...allProducts];
    this.filteredProducts = [...this.products];
  }

  // Navigation
  showView(view: 'products' | 'categories' | 'add-product') {
    this.currentView = view;
    if (view === 'add-product') {
      this.resetForm();
    }
  }

  // Pagination event handlers
  onPageChange(page: number): void {
    this.currentPage = page;
    // Optionally scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onPageSizeChange(size: number): void {
    this.itemsPerPage = size;
    this.currentPage = 1; // Reset to first page
  }

  // Search and Filter
  onSearch() {
    this.currentPage = 1; // Reset pagination
    this.filterProducts();
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1; // Reset pagination
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || product.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  // Product CRUD
  addProduct() {
    if (this.editingProductId) {
      this.updateProduct();
    } else {
      const newProduct: Product = {
        id: 'P' + (this.products.length + 1).toString().padStart(3, '0'),
        name: this.productForm.name,
        category: this.productForm.category,
        price: this.productForm.price,
        imageUrl: this.productForm.imageUrl
      };
      this.products.push(newProduct);
    }
    this.filterProducts();
    this.showView('products');
  }

  editProduct(product: Product) {
    this.editingProductId = product.id;
    this.productForm = {
      name: product.name,
      category: product.category,
      price: product.price,
      imageUrl: product.imageUrl
    };
    this.imagePreview = product.imageUrl;
    this.showView('add-product');
  }

  updateProduct() {
    const index = this.products.findIndex(p => p.id === this.editingProductId);
    if (index !== -1) {
      this.products[index] = {
        ...this.products[index],
        name: this.productForm.name,
        category: this.productForm.category,
        price: this.productForm.price,
        imageUrl: this.productForm.imageUrl
      };
    }
    this.editingProductId = null;
  }

  deleteProduct(productId: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.products = this.products.filter(p => p.id !== productId);
      this.filterProducts();
    }
  }

  // Form helpers
  resetForm() {
    this.productForm = { name: '', category: '', price: 0, imageUrl: '' };
    this.imagePreview = '';
    this.editingProductId = null;
  }

  onImageUrlChange() {
    this.imagePreview = this.productForm.imageUrl;
  }

  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  // Category management
  deleteCategory(categoryId: string) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categories = this.categories.filter(c => c.id !== categoryId);
    }
  }

  getCategoryColor(categoryName: string): string {
    const category = this.categories.find(c => c.name === categoryName);
    return category ? category.color : '#E8EEFF';
  }
}
