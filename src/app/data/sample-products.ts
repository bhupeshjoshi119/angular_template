export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description?: string;
}

// Electronics Category Products (50+)
export const electronicsProducts: Product[] = [
  // Headphones
  { id: 'E001', name: 'Sony WH-1000XM5 Wireless Headphones', category: 'Electronics', price: 399.99, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', description: 'Premium noise-cancelling headphones' },
  { id: 'E002', name: 'Bose QuietComfort 45', category: 'Electronics', price: 329.99, imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400', description: 'Wireless noise-cancelling headphones' },
  { id: 'E003', name: 'Apple AirPods Pro 2nd Gen', category: 'Electronics', price: 249.99, imageUrl: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400', description: 'Active noise cancellation' },
  { id: 'E004', name: 'Sennheiser HD 660S', category: 'Electronics', price: 499.99, imageUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400', description: 'Open-back audiophile headphones' },
  { id: 'E005', name: 'JBL Tune 760NC', category: 'Electronics', price: 129.99, imageUrl: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400', description: 'Wireless over-ear headphones' },
  { id: 'E006', name: 'Beats Studio3 Wireless', category: 'Electronics', price: 349.99, imageUrl: 'https://images.unsplash.com/photo-1577174881658-0f30157f72c4?w=400', description: 'Pure adaptive noise cancelling' },
  { id: 'E007', name: 'Audio-Technica ATH-M50x', category: 'Electronics', price: 169.99, imageUrl: 'https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400', description: 'Professional studio monitor headphones' },
  { id: 'E008', name: 'HyperX Cloud II Gaming Headset', category: 'Electronics', price: 99.99, imageUrl: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400', description: '7.1 surround sound gaming headset' },

  // Smartphones
  { id: 'E009', name: 'iPhone 15 Pro Max', category: 'Electronics', price: 1199.99, imageUrl: 'https://images.unsplash.com/photo-1592286927505-b0c2e0a13e60?w=400', description: 'Latest Apple flagship' },
  { id: 'E010', name: 'Samsung Galaxy S24 Ultra', category: 'Electronics', price: 1299.99, imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400', description: 'Premium Android smartphone' },
  { id: 'E011', name: 'Google Pixel 8 Pro', category: 'Electronics', price: 999.99, imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400', description: 'AI-powered photography' },
  { id: 'E012', name: 'OnePlus 12', category: 'Electronics', price: 799.99, imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', description: 'Flagship killer smartphone' },
  { id: 'E013', name: 'Xiaomi 14 Pro', category: 'Electronics', price: 899.99, imageUrl: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400', description: 'Leica camera system' },
  { id: 'E014', name: 'iPhone 14', category: 'Electronics', price: 799.99, imageUrl: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400', description: 'Previous gen iPhone' },
  { id: 'E015', name: 'Samsung Galaxy A54', category: 'Electronics', price: 449.99, imageUrl: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400', description: 'Mid-range Samsung phone' },

  // Laptops
  { id: 'E016', name: 'MacBook Pro 16" M3 Max', category: 'Electronics', price: 3499.99, imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', description: 'Professional laptop for creators' },
  { id: 'E017', name: 'Dell XPS 15', category: 'Electronics', price: 1899.99, imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400', description: 'Premium Windows laptop' },
  { id: 'E018', name: 'ASUS ROG Zephyrus G14', category: 'Electronics', price: 1649.99, imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400', description: 'Gaming laptop' },
  { id: 'E019', name: 'Lenovo ThinkPad X1 Carbon', category: 'Electronics', price: 1799.99, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', description: 'Business ultrabook' },
  { id: 'E020', name: 'HP Spectre x360', category: 'Electronics', price: 1499.99, imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400', description: '2-in-1 convertible laptop' },
  { id: 'E021', name: 'Microsoft Surface Laptop 5', category: 'Electronics', price: 1299.99, imageUrl: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400', description: 'Elegant Windows laptop' },
  { id: 'E022', name: 'Acer Predator Helios 300', category: 'Electronics', price: 1399.99, imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400', description: 'Affordable gaming laptop' },
  { id: 'E023', name: 'MacBook Air M2', category: 'Electronics', price: 1199.99, imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400', description: 'Thin and light laptop' },

  // Tablets
  { id: 'E024', name: 'iPad Pro 12.9"', category: 'Electronics', price: 1099.99, imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400', description: 'Professional tablet' },
  { id: 'E025', name: 'Samsung Galaxy Tab S9', category: 'Electronics', price: 799.99, imageUrl: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400', description: 'Android tablet' },
  { id: 'E026', name: 'iPad Air', category: 'Electronics', price: 599.99, imageUrl: 'https://images.unsplash.com/photo-1585790050230-5dd28404f1b4?w=400', description: 'Versatile iPad' },
  { id: 'E027', name: 'Microsoft Surface Pro 9', category: 'Electronics', price: 999.99, imageUrl: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=400', description: '2-in-1 tablet PC' },

  // Smart Watches
  { id: 'E028', name: 'Apple Watch Series 9', category: 'Electronics', price: 429.99, imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400', description: 'Latest Apple Watch' },
  { id: 'E029', name: 'Samsung Galaxy Watch 6', category: 'Electronics', price: 349.99, imageUrl: 'https://images.unsplash.com/photo-1617625802912-cde586faf331?w=400', description: 'Android smartwatch' },
  { id: 'E030', name: 'Garmin Fenix 7', category: 'Electronics', price: 699.99, imageUrl: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400', description: 'Multisport GPS watch' },
  { id: 'E031', name: 'Fitbit Sense 2', category: 'Electronics', price: 299.99, imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400', description: 'Health & fitness smartwatch' },

  // Cameras
  { id: 'E032', name: 'Sony A7 IV', category: 'Electronics', price: 2499.99, imageUrl: 'https://images.unsplash.com/photo-1606980707986-e1e7f0c0b249?w=400', description: 'Full-frame mirrorless camera' },
  { id: 'E033', name: 'Canon EOS R6 Mark II', category: 'Electronics', price: 2399.99, imageUrl: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400', description: 'Professional mirrorless' },
  { id: 'E034', name: 'Nikon Z6 III', category: 'Electronics', price: 2199.99, imageUrl: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400', description: 'Hybrid camera' },
  { id: 'E035', name: 'GoPro Hero 12 Black', category: 'Electronics', price: 399.99, imageUrl: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400', description: 'Action camera' },

  // Gaming Consoles
  { id: 'E036', name: 'PlayStation 5', category: 'Electronics', price: 499.99, imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400', description: 'Next-gen gaming console' },
  { id: 'E037', name: 'Xbox Series X', category: 'Electronics', price: 499.99, imageUrl: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400', description: 'Microsoft gaming console' },
  { id: 'E038', name: 'Nintendo Switch OLED', category: 'Electronics', price: 349.99, imageUrl: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400', description: 'Hybrid gaming console' },
  { id: 'E039', name: 'Steam Deck', category: 'Electronics', price: 399.99, imageUrl: 'https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=400', description: 'Handheld gaming PC' },

  // Computer Accessories
  { id: 'E040', name: 'Logitech MX Master 3S', category: 'Electronics', price: 99.99, imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', description: 'Wireless mouse' },
  { id: 'E041', name: 'Keychron K8 Pro', category: 'Electronics', price: 109.99, imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400', description: 'Mechanical keyboard' },
  { id: 'E042', name: 'LG 27" 4K Monitor', category: 'Electronics', price: 449.99, imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400', description: 'UHD display' },
  { id: 'E043', name: 'Samsung Odyssey G7', category: 'Electronics', price: 699.99, imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400', description: 'Curved gaming monitor' },
  { id: 'E044', name: 'Razer DeathAdder V3', category: 'Electronics', price: 69.99, imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400', description: 'Gaming mouse' },

  // Smart Home Devices
  { id: 'E045', name: 'Amazon Echo Dot 5th Gen', category: 'Electronics', price: 49.99, imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=400', description: 'Smart speaker' },
  { id: 'E046', name: 'Google Nest Hub Max', category: 'Electronics', price: 229.99, imageUrl: 'https://images.unsplash.com/photo-1558089687-e1c6e5c8e8e8?w=400', description: 'Smart display' },
  { id: 'E047', name: 'Philips Hue Starter Kit', category: 'Electronics', price: 199.99, imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', description: 'Smart lighting' },
  { id: 'E048', name: 'Ring Video Doorbell Pro', category: 'Electronics', price: 249.99, imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400', description: 'Smart doorbell' },
  { id: 'E049', name: 'Nest Learning Thermostat', category: 'Electronics', price: 249.99, imageUrl: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400', description: 'Smart thermostat' },
  { id: 'E050', name: 'Arlo Pro 4', category: 'Electronics', price: 199.99, imageUrl: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400', description: 'Wireless security camera' },
];

// Apparel Category Products (30+)
export const apparelProducts: Product[] = [
  // T-Shirts
  { id: 'A001', name: 'Classic Cotton T-Shirt White', category: 'Apparel', price: 24.50, imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', description: 'Comfortable cotton tee' },
  { id: 'A002', name: 'Graphic Print T-Shirt Black', category: 'Apparel', price: 29.99, imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400', description: 'Trendy graphic design' },
  { id: 'A003', name: 'V-Neck T-Shirt Navy', category: 'Apparel', price: 22.99, imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400', description: 'Classic v-neck style' },
  { id: 'A004', name: 'Polo Shirt Blue', category: 'Apparel', price: 39.99, imageUrl: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400', description: 'Smart casual polo' },
  { id: 'A005', name: 'Long Sleeve Henley Gray', category: 'Apparel', price: 34.99, imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', description: 'Comfortable henley' },

  // Jeans & Pants
  { id: 'A006', name: 'Slim Fit Jeans Dark Blue', category: 'Apparel', price: 69.99, imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400', description: 'Modern slim fit' },
  { id: 'A007', name: 'Straight Leg Jeans Black', category: 'Apparel', price: 64.99, imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400', description: 'Classic straight cut' },
  { id: 'A008', name: 'Chino Pants Khaki', category: 'Apparel', price: 54.99, imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', description: 'Versatile chinos' },
  { id: 'A009', name: 'Cargo Pants Olive', category: 'Apparel', price: 59.99, imageUrl: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', description: 'Utility cargo style' },
  { id: 'A010', name: 'Jogger Pants Gray', category: 'Apparel', price: 49.99, imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', description: 'Comfortable joggers' },

  // Dresses
  { id: 'A011', name: 'Summer Floral Dress', category: 'Apparel', price: 79.99, imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', description: 'Light summer dress' },
  { id: 'A012', name: 'Cocktail Dress Black', category: 'Apparel', price: 129.99, imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400', description: 'Elegant evening dress' },
  { id: 'A013', name: 'Maxi Dress Bohemian', category: 'Apparel', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400', description: 'Flowing maxi dress' },
  { id: 'A014', name: 'Casual Shirt Dress', category: 'Apparel', price: 64.99, imageUrl: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400', description: 'Versatile shirt dress' },

  // Jackets & Coats
  { id: 'A015', name: 'Leather Jacket Black', category: 'Apparel', price: 299.99, imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', description: 'Classic leather jacket' },
  { id: 'A016', name: 'Denim Jacket Blue', category: 'Apparel', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400', description: 'Timeless denim' },
  { id: 'A017', name: 'Puffer Jacket Navy', category: 'Apparel', price: 149.99, imageUrl: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', description: 'Warm winter jacket' },
  { id: 'A018', name: 'Trench Coat Beige', category: 'Apparel', price: 199.99, imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', description: 'Classic trench coat' },
  { id: 'A019', name: 'Bomber Jacket Green', category: 'Apparel', price: 119.99, imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', description: 'Military style bomber' },

  // Shoes
  { id: 'A020', name: 'Running Shoes White', category: 'Apparel', price: 129.99, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', description: 'Performance running shoes' },
  { id: 'A021', name: 'Casual Sneakers Black', category: 'Apparel', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', description: 'Everyday sneakers' },
  { id: 'A022', name: 'Leather Boots Brown', category: 'Apparel', price: 179.99, imageUrl: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400', description: 'Durable leather boots' },
  { id: 'A023', name: 'Formal Dress Shoes', category: 'Apparel', price: 149.99, imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400', description: 'Classic oxford shoes' },
  { id: 'A024', name: 'Canvas Slip-Ons', category: 'Apparel', price: 54.99, imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400', description: 'Comfortable slip-ons' },

  // Accessories
  { id: 'A025', name: 'Leather Belt Brown', category: 'Apparel', price: 39.99, imageUrl: 'https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=400', description: 'Genuine leather belt' },
  { id: 'A026', name: 'Baseball Cap Black', category: 'Apparel', price: 24.99, imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400', description: 'Classic baseball cap' },
  { id: 'A027', name: 'Wool Scarf Gray', category: 'Apparel', price: 34.99, imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400', description: 'Warm wool scarf' },
  { id: 'A028', name: 'Sunglasses Aviator', category: 'Apparel', price: 149.99, imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400', description: 'Classic aviator style' },

  // Activewear
  { id: 'A029', name: 'Yoga Pants Black', category: 'Apparel', price: 59.99, imageUrl: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', description: 'Stretchy yoga pants' },
  { id: 'A030', name: 'Sports Bra Pink', category: 'Apparel', price: 39.99, imageUrl: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=400', description: 'High-support sports bra' },
  { id: 'A031', name: 'Athletic Shorts Navy', category: 'Apparel', price: 34.99, imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400', description: 'Breathable athletic shorts' },
  { id: 'A032', name: 'Compression Shirt', category: 'Apparel', price: 44.99, imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', description: 'Performance compression wear' },
];

// Groceries Category Products (20+)
export const groceriesProducts: Product[] = [
  // Fresh Produce
  { id: 'G001', name: 'Organic Bananas (1 lb)', category: 'Groceries', price: 2.99, imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', description: 'Fresh organic bananas' },
  { id: 'G002', name: 'Red Apples (2 lbs)', category: 'Groceries', price: 4.99, imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400', description: 'Crisp red apples' },
  { id: 'G003', name: 'Fresh Strawberries', category: 'Groceries', price: 5.99, imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400', description: 'Sweet strawberries' },
  { id: 'G004', name: 'Organic Spinach', category: 'Groceries', price: 3.49, imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400', description: 'Fresh spinach leaves' },
  { id: 'G005', name: 'Cherry Tomatoes', category: 'Groceries', price: 4.49, imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400', description: 'Sweet cherry tomatoes' },

  // Dairy Products
  { id: 'G006', name: 'Whole Milk (1 Gallon)', category: 'Groceries', price: 4.99, imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400', description: 'Fresh whole milk' },
  { id: 'G007', name: 'Greek Yogurt (32 oz)', category: 'Groceries', price: 6.99, imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400', description: 'Creamy Greek yogurt' },
  { id: 'G008', name: 'Cheddar Cheese Block', category: 'Groceries', price: 7.99, imageUrl: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400', description: 'Sharp cheddar cheese' },
  { id: 'G009', name: 'Butter (1 lb)', category: 'Groceries', price: 5.49, imageUrl: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400', description: 'Salted butter' },
  { id: 'G010', name: 'Eggs (Dozen)', category: 'Groceries', price: 4.99, imageUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400', description: 'Farm fresh eggs' },

  // Snacks
  { id: 'G011', name: 'Potato Chips Family Size', category: 'Groceries', price: 4.99, imageUrl: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400', description: 'Crispy potato chips' },
  { id: 'G012', name: 'Mixed Nuts (16 oz)', category: 'Groceries', price: 12.99, imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400', description: 'Roasted mixed nuts' },
  { id: 'G013', name: 'Granola Bars (12 pack)', category: 'Groceries', price: 6.99, imageUrl: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400', description: 'Healthy granola bars' },
  { id: 'G014', name: 'Chocolate Cookies', category: 'Groceries', price: 4.49, imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400', description: 'Delicious cookies' },

  // Beverages
  { id: 'G015', name: 'Orange Juice (64 oz)', category: 'Groceries', price: 5.99, imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400', description: 'Fresh squeezed OJ' },
  { id: 'G016', name: 'Coffee Beans (12 oz)', category: 'Groceries', price: 14.99, imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', description: 'Premium coffee beans' },
  { id: 'G017', name: 'Green Tea (20 bags)', category: 'Groceries', price: 5.49, imageUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400', description: 'Organic green tea' },
  { id: 'G018', name: 'Sparkling Water (12 pack)', category: 'Groceries', price: 6.99, imageUrl: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400', description: 'Flavored sparkling water' },

  // Canned & Packaged
  { id: 'G019', name: 'Pasta (1 lb)', category: 'Groceries', price: 2.99, imageUrl: 'https://images.unsplash.com/photo-1551462147-37e8e6084e6d?w=400', description: 'Italian pasta' },
  { id: 'G020', name: 'Tomato Sauce (24 oz)', category: 'Groceries', price: 3.49, imageUrl: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400', description: 'Marinara sauce' },
  { id: 'G021', name: 'Canned Tuna (4 pack)', category: 'Groceries', price: 7.99, imageUrl: 'https://images.unsplash.com/photo-1520961880-4b8a8145e0e0?w=400', description: 'Chunk light tuna' },
  { id: 'G022', name: 'Rice (5 lbs)', category: 'Groceries', price: 8.99, imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', description: 'Long grain white rice' },
  { id: 'G023', name: 'Peanut Butter (16 oz)', category: 'Groceries', price: 5.99, imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400', description: 'Creamy peanut butter' },
];

// Home Goods Category Products (20+)
export const homeGoodsProducts: Product[] = [
  // Furniture
  { id: 'H001', name: 'Modern Sofa Gray', category: 'Home Goods', price: 899.99, imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', description: '3-seater sofa' },
  { id: 'H002', name: 'Dining Table Set', category: 'Home Goods', price: 699.99, imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400', description: 'Table with 4 chairs' },
  { id: 'H003', name: 'Office Chair Ergonomic', category: 'Home Goods', price: 299.99, imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400', description: 'Comfortable office chair' },
  { id: 'H004', name: 'Bookshelf 5-Tier', category: 'Home Goods', price: 149.99, imageUrl: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400', description: 'Wooden bookshelf' },
  { id: 'H005', name: 'Coffee Table Wood', category: 'Home Goods', price: 249.99, imageUrl: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400', description: 'Rustic coffee table' },
  { id: 'H006', name: 'Bed Frame Queen', category: 'Home Goods', price: 499.99, imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400', description: 'Modern bed frame' },

  // Kitchen Appliances
  { id: 'H007', name: 'Coffee Maker', category: 'Home Goods', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400', description: 'Programmable coffee maker' },
  { id: 'H008', name: 'Blender High-Speed', category: 'Home Goods', price: 129.99, imageUrl: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400', description: 'Professional blender' },
  { id: 'H009', name: 'Toaster 4-Slice', category: 'Home Goods', price: 59.99, imageUrl: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400', description: 'Stainless steel toaster' },
  { id: 'H010', name: 'Air Fryer', category: 'Home Goods', price: 119.99, imageUrl: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400', description: 'Digital air fryer' },
  { id: 'H011', name: 'Stand Mixer', category: 'Home Goods', price: 299.99, imageUrl: 'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=400', description: 'Professional stand mixer' },

  // Bedding
  { id: 'H012', name: 'Comforter Set Queen', category: 'Home Goods', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400', description: 'Soft comforter set' },
  { id: 'H013', name: 'Memory Foam Pillow', category: 'Home Goods', price: 49.99, imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400', description: 'Ergonomic pillow' },
  { id: 'H014', name: 'Sheet Set Egyptian Cotton', category: 'Home Goods', price: 79.99, imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400', description: 'Luxury bed sheets' },

  // Decorative Items
  { id: 'H015', name: 'Wall Art Canvas Set', category: 'Home Goods', price: 129.99, imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400', description: '3-piece wall art' },
  { id: 'H016', name: 'Table Lamp Modern', category: 'Home Goods', price: 69.99, imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', description: 'Contemporary lamp' },
  { id: 'H017', name: 'Area Rug 5x7', category: 'Home Goods', price: 199.99, imageUrl: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400', description: 'Modern area rug' },
  { id: 'H018', name: 'Throw Pillows Set', category: 'Home Goods', price: 39.99, imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400', description: 'Decorative pillows' },

  // Storage Solutions
  { id: 'H019', name: 'Storage Bins Set', category: 'Home Goods', price: 34.99, imageUrl: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400', description: 'Fabric storage bins' },
  { id: 'H020', name: 'Closet Organizer', category: 'Home Goods', price: 79.99, imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400', description: 'Hanging organizer' },
  { id: 'H021', name: 'Vacuum Cleaner Robot', category: 'Home Goods', price: 299.99, imageUrl: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400', description: 'Smart robot vacuum' },
  { id: 'H022', name: 'Bathroom Towel Set', category: 'Home Goods', price: 49.99, imageUrl: 'https://images.unsplash.com/photo-1620912189213-d7e0bc7c5c2e?w=400', description: 'Soft towel set' },
];

// Meta Quest Category Products (15+)
export const metaQuestProducts: Product[] = [
  // VR Headsets
  { id: 'M001', name: 'Meta Quest 3 128GB', category: 'Meta Quest', price: 499.99, imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400', description: 'Next-gen mixed reality headset' },
  { id: 'M002', name: 'Meta Quest 3 512GB', category: 'Meta Quest', price: 649.99, imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400', description: 'High storage VR headset' },
  { id: 'M003', name: 'Meta Quest Pro', category: 'Meta Quest', price: 999.99, imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400', description: 'Professional VR headset' },
  { id: 'M004', name: 'Meta Quest 2 128GB', category: 'Meta Quest', price: 299.99, imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400', description: 'All-in-one VR gaming' },
  { id: 'M005', name: 'Meta Quest 2 256GB', category: 'Meta Quest', price: 349.99, imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400', description: 'Extended storage VR' },

  // Controllers & Accessories
  { id: 'M006', name: 'Quest 3 Touch Plus Controllers', category: 'Meta Quest', price: 149.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'Replacement controllers' },
  { id: 'M007', name: 'Quest Pro Controllers', category: 'Meta Quest', price: 299.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'Self-tracking controllers' },
  { id: 'M008', name: 'Elite Strap with Battery', category: 'Meta Quest', price: 129.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'Enhanced comfort strap' },
  { id: 'M009', name: 'Active Strap', category: 'Meta Quest', price: 69.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'Fitness-focused strap' },
  { id: 'M010', name: 'Carrying Case', category: 'Meta Quest', price: 59.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'Protective travel case' },

  // Charging & Power
  { id: 'M011', name: 'Charging Dock', category: 'Meta Quest', price: 79.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'Dual charging station' },
  { id: 'M012', name: 'Link Cable 5m', category: 'Meta Quest', price: 79.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'High-speed PC connection' },

  // Protection & Comfort
  { id: 'M013', name: 'Lens Protector Set', category: 'Meta Quest', price: 29.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'Scratch protection' },
  { id: 'M014', name: 'Facial Interface Set', category: 'Meta Quest', price: 49.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'Comfortable face cushions' },
  { id: 'M015', name: 'Controller Grips', category: 'Meta Quest', price: 24.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: 'Enhanced grip covers' },
  { id: 'M016', name: 'VR Game Bundle Pack', category: 'Meta Quest', price: 149.99, imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', description: '10 popular VR games' },
];

// Combined all products
export const allProducts: Product[] = [
  ...electronicsProducts,
  ...apparelProducts,
  ...groceriesProducts,
  ...homeGoodsProducts,
  ...metaQuestProducts
];

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  if (category === 'all' || category === '') {
    return allProducts;
  }
  return allProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

// Helper function to search products
export function searchProducts(query: string, category?: string): Product[] {
  let products = category && category !== 'all' ? getProductsByCategory(category) : allProducts;

  if (!query) {
    return products;
  }

  const lowerQuery = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    (p.description && p.description.toLowerCase().includes(lowerQuery))
  );
}
