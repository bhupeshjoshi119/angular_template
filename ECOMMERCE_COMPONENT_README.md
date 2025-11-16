# E-commerce Product Management Component

## Overview
A fully functional CRUD (Create, Read, Update, Delete) component for managing products in an e-commerce system, built with Angular standalone components.

## Features

### 1. Product List View
- Display all products with images, names, categories, and prices
- Search functionality to filter products by name
- Category filtering (All Categories, Electronics, Apparel, etc.)
- Edit and delete actions for each product
- Pagination support
- Responsive card layout

### 2. Categories View
- List all product categories with icons
- Category ID display
- Edit and delete category actions
- Color-coded category badges

### 3. Add/Edit Product Form
- Product name input
- Category dropdown selection
- Price input with currency symbol
- Image URL input with live preview
- Form validation
- Cancel and Save buttons
- Supports both creating new products and editing existing ones

## Component Structure

```
card-details-ecom/
├── card-details-ecom.component.ts    # Component logic
├── card-details-ecom.component.html  # Template
└── card-details-ecom.component.scss  # Styles
```

## Data Models

### Product Interface
```typescript
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}
```

### Category Interface
```typescript
interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}
```

## Key Functionality

### Navigation
- Switch between Products, Categories, and Add Product views
- Bottom navigation bar with icons
- Floating Action Button (FAB) for quick product addition

### Product Operations
- **Create**: Add new products with form validation
- **Read**: View all products with search and filter
- **Update**: Edit existing product details
- **Delete**: Remove products with confirmation

### Search & Filter
- Real-time search by product name
- Filter by category
- Combined search and filter functionality

### Image Handling
- URL-based image input
- Live image preview
- URL validation
- Fallback for invalid URLs
- Uses Unsplash royalty-free images by default

## Sample Data

The component comes pre-loaded with sample products:
1. Wireless Headphones (Electronics) - $99.99
2. Classic Cotton T-Shirt (Apparel) - $24.50
3. Smart Fitness Watch (Electronics) - $149.00

Sample categories:
- Electronics (📺)
- Apparel (👕)
- Groceries (🛒)
- Home Goods (🛋️)

## Styling

### Design Features
- Mobile-first responsive design
- Maximum width: 480px (mobile optimized)
- Card-based layout
- Smooth transitions and hover effects
- Color-coded category badges
- Professional shadows and spacing
- Bottom navigation bar
- Floating action button

### Color Scheme
- Primary: #5b7cff (Blue)
- Background: #f5f7fa (Light Gray)
- Cards: White
- Text: #1a1a1a (Dark)
- Secondary Text: #999 (Gray)

## Usage

### In App Component
```typescript
import { CardDetailsEcomComponent } from './components/card-details/card-details-ecom/card-details-ecom.component';

@Component({
  imports: [CardDetailsEcomComponent],
  // ...
})
```

### In Template
```html
<app-card-details-ecom></app-card-details-ecom>
```

## Running the Application

1. Navigate to the project directory:
```bash
cd pms-frontend
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser to `http://localhost:4200`

## Future Enhancements

- Backend API integration
- File upload for images
- Bulk operations
- Advanced filtering (price range, date added)
- Sorting options
- Export/Import functionality
- User authentication
- Role-based permissions
- Product variants (size, color)
- Inventory management
- Analytics dashboard

## Dependencies

- Angular 18+ (Standalone Components)
- CommonModule (for *ngIf, *ngFor)
- FormsModule (for [(ngModel)])

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All images use Unsplash URLs for royalty-free stock photos
- Component is fully standalone (no module required)
- Uses Angular's new control flow syntax where applicable
- Mobile-optimized with responsive design
- Form validation prevents saving incomplete products
