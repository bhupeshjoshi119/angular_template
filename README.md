# Product Management System - Angular Frontend

A modern, feature-rich Angular application with multiple UI components including e-commerce product management and Meta Quest VR showcase.

## 🚀 Features

### 1. E-commerce Product Management (CRUD)
- **Product List View** - Browse all products with search and filtering
- **Add/Edit Products** - Complete form with validation and image preview
- **Categories Management** - Organize products by categories
- **Real-time Search** - Filter products instantly
- **Responsive Design** - Mobile-first approach

### 2. Meta Quest VR Showcase
- **Hero Section** - Stunning gradient background with featured product
- **Product Grid** - Display 5 VR products with all asset images
- **Interactive Gallery** - Image carousel with thumbnails
- **Product Details Modal** - Full product information with features
- **Ratings & Reviews** - Star ratings and review counts
- **Responsive Layout** - Optimized for all screen sizes

### 3. Authentication Components
- **Login Component** - User authentication with validation
- **Signup Component** - User registration with form validation
- **Responsive Design** - Mobile and desktop optimized

## 📁 Project Structure

```
pms-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── card-details/
│   │   │   │   ├── card-details-ecom/     # E-commerce CRUD component
│   │   │   │   └── meta-quest/            # Meta Quest VR showcase
│   │   │   ├── login/                     # Login component
│   │   │   └── signup/                    # Signup component
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.routes.ts
│   └── assets/
│       ├── meta.webp                      # Meta Quest images
│       ├── meta1.jpg
│       ├── meta4.jpg
│       ├── meta_4.jpg
│       └── meta7.jpg
├── ECOMMERCE_COMPONENT_README.md          # E-commerce docs
└── README.md                              # This file
```

## 🛠️ Technologies Used

- **Angular 18+** - Latest Angular with standalone components
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling with variables and mixins
- **RxJS** - Reactive programming
- **FormsModule** - Template-driven forms
- **CommonModule** - Angular common directives

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Setup Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd pms-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
ng serve
```

4. **Open in browser**
```
http://localhost:4200
```

## 🎨 Components Overview

### E-commerce Component (`card-details-ecom`)

**Features:**
- Product CRUD operations
- Search and filter functionality
- Category management
- Image preview
- Form validation
- Pagination
- Bottom navigation

**Usage:**
```typescript
import { CardDetailsEcomComponent } from './components/card-details/card-details-ecom/card-details-ecom.component';

// In template
<app-card-details-ecom></app-card-details-ecom>
```

### Meta Quest Component (`meta-quest`)

**Features:**
- Hero section with gradient background
- Product grid with 5 VR products
- Image gallery with carousel
- Product details modal
- Star ratings
- Features list
- Add to cart functionality
- Responsive design

**Usage:**
```typescript
import { MetaQuestComponent } from './components/card-details/meta-quest/meta-quest.component';

// In template
<app-meta-quest></app-meta-quest>
```

**Products Included:**
1. Meta Quest 3 - $499.99
2. Meta Quest Pro - $999.99
3. Meta Quest 2 - $299.99
4. Meta Quest Elite Strap - $79.99
5. Meta Quest Bundle - $649.99

### Toggle Between Components

The app includes toggle buttons in the top-right corner to switch between:
- Meta Quest VR Showcase
- E-commerce Product Management

## 🎯 Key Features

### E-commerce Component
- ✅ Create new products
- ✅ Read/View all products
- ✅ Update existing products
- ✅ Delete products with confirmation
- ✅ Search by product name
- ✅ Filter by category
- ✅ Image URL with live preview
- ✅ Form validation
- ✅ Responsive mobile design

### Meta Quest Component
- ✅ All 5 asset images utilized
- ✅ Interactive image carousel
- ✅ Product details modal
- ✅ Star rating system
- ✅ Features showcase
- ✅ Add to cart functionality
- ✅ Gradient backgrounds
- ✅ Smooth animations
- ✅ Hover effects
- ✅ Responsive grid layout

## 🎨 Design Highlights

### Color Schemes

**E-commerce:**
- Primary: `#5b7cff` (Blue)
- Background: `#f5f7fa` (Light Gray)
- Cards: White
- Accent: Various category colors

**Meta Quest:**
- Primary Gradient: `#667eea` to `#764ba2`
- Accent: Gold `#ffd700` for ratings
- Background: Purple gradient with overlay
- Cards: White with shadows

### Animations
- Fade in/out effects
- Slide up animations
- Hover transformations
- Smooth transitions
- Scale effects on images

## 📱 Responsive Design

Both components are fully responsive:
- **Desktop**: Full-width layouts with grid systems
- **Tablet**: Adjusted columns and spacing
- **Mobile**: Single column, optimized touch targets

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Generate New Component
```bash
ng generate component components/your-component-name
```

### Build for Production
```bash
ng build --configuration production
```

### Run Tests
```bash
ng test
```

### Lint Code
```bash
ng lint
```

## 📝 Sample Data

### E-commerce Products
- Wireless Headphones (Electronics) - $99.99
- Classic Cotton T-Shirt (Apparel) - $24.50
- Smart Fitness Watch (Electronics) - $149.00

### Categories
- Electronics (📺)
- Apparel (👕)
- Groceries (🛒)
- Home Goods (🛋️)

## 🚀 Deployment

### Build
```bash
ng build --configuration production
```

### Deploy to GitHub Pages
```bash
ng deploy --base-href=/your-repo-name/
```

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `ng build --configuration production`
3. Set publish directory: `dist/pms-frontend`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Unsplash for royalty-free images
- Meta for VR inspiration

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

## 🔗 Links

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation)

---

**Built with ❤️ using Angular**
