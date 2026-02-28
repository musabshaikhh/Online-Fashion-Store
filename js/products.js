// products.js — Central product data store
// All Unsplash images are real fashion/clothing/accessories photos

const PRODUCTS = {

  men: [
    {
      id: 'm1',
      name: 'Classic White Tee',
      category: 'Men · T-Shirts',
      price: 45,
      oldPrice: null,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'm2',
      name: 'Minimal Graphic Tee',
      category: 'Men · T-Shirts',
      price: 52,
      oldPrice: 70,
      badge: null,
      img: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'm3',
      name: 'Oversized Premium Hoodie',
      category: 'Men · Hoodies',
      price: 75,
      oldPrice: 110,
      badge: 'Sale',
      img: 'https://images.unsplash.com/photo-1688111421205-a0a85415b224?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'product.html'
    },
    {
      id: 'm4',
      name: 'Zip-Up Track Hoodie',
      category: 'Men · Hoodies',
      price: 89,
      oldPrice: null,
      badge: null,
      img: 'https://plus.unsplash.com/premium_photo-1727967189498-fb2c7d0a1e30?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'product.html'
    },
    {
      id: 'm5',
      name: 'Leather Biker Jacket',
      category: 'Men · Jackets',
      price: 179,
      oldPrice: 240,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'm6',
      name: 'Washed Denim Jacket',
      category: 'Men · Jackets',
      price: 115,
      oldPrice: null,
      badge: null,
      img: 'https://images.unsplash.com/photo-1537465978529-d23b17165b3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'product.html'
    },
    {
      id: 'm7',
      name: 'Slim Fit Dark Denim',
      category: 'Men · Jeans',
      price: 89,
      oldPrice: 120,
      badge: 'Sale',
      img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'm8',
      name: 'Classic White Sneakers',
      category: 'Men · Sneakers',
      price: 99,
      oldPrice: 130,
      badge: null,
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'm9',
      name: 'Tapered Chino Pants',
      category: 'Men · Pants',
      price: 79,
      oldPrice: null,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'm10',
      name: 'Bomber Jacket',
      category: 'Men · Jackets',
      price: 139,
      oldPrice: 180,
      badge: 'Sale',
      img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
      link: 'product.html'
    }
  ],

  women: [
    {
      id: 'w1',
      name: 'Floral Midi Dress',
      category: 'Women · Dresses',
      price: 89,
      oldPrice: null,
      badge: 'New',
      img: 'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'product.html'
    },
    {
      id: 'w2',
      name: 'Silk Evening Dress',
      category: 'Women · Dresses',
      price: 145,
      oldPrice: 190,
      badge: null,
      img: 'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'product.html'
    },
    {
      id: 'w3',
      name: 'Tailored Linen Blazer',
      category: 'Women · Tops',
      price: 119,
      oldPrice: 155,
      badge: 'Sale',
      img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'w4',
      name: 'Ribbed Crop Top',
      category: 'Women · Tops',
      price: 38,
      oldPrice: null,
      badge: null,
      img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'w5',
      name: 'Pleated Midi Skirt',
      category: 'Women · Skirts',
      price: 69,
      oldPrice: null,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'w6',
      name: 'Wide-Leg Linen Pants',
      category: 'Women · Pants',
      price: 85,
      oldPrice: 110,
      badge: 'Sale',
      img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'w7',
      name: 'Tan Leather Tote',
      category: 'Women · Bags',
      price: 149,
      oldPrice: null,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'w8',
      name: 'Mini Crossbody Bag',
      category: 'Women · Bags',
      price: 95,
      oldPrice: 130,
      badge: 'Sale',
      img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'w9',
      name: 'Block Heel Mules',
      category: 'Women · Heels',
      price: 125,
      oldPrice: null,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'w10',
      name: 'Knit Oversized Sweater',
      category: 'Women · Tops',
      price: 92,
      oldPrice: 120,
      badge: null,
      img: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=600&q=80',
      link: 'product.html'
    }
  ],

  accessories: [
    {
      id: 'a1',
      name: 'Minimalist Watch',
      category: 'Accessories · Watches',
      price: 129,
      oldPrice: 180,
      badge: 'Sale',
      img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'a2',
      name: 'Classic Chronograph',
      category: 'Accessories · Watches',
      price: 249,
      oldPrice: null,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'a3',
      name: 'Aviator Sunglasses',
      category: 'Accessories · Sunglasses',
      price: 65,
      oldPrice: null,
      badge: null,
      img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'a4',
      name: 'Round Tinted Frames',
      category: 'Accessories · Sunglasses',
      price: 48,
      oldPrice: 70,
      badge: 'Sale',
      img: 'https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'a5',
      name: 'Premium Baseball Cap',
      category: 'Accessories · Hats',
      price: 42,
      oldPrice: null,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'a6',
      name: 'Ribbed Knit Beanie',
      category: 'Accessories · Hats',
      price: 28,
      oldPrice: null,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'a7',
      name: 'Urban Leather Backpack',
      category: 'Accessories · Backpacks',
      price: 185,
      oldPrice: 230,
      badge: null,
      img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'a8',
      name: 'Gold Chain Necklace',
      category: 'Accessories · Jewelry',
      price: 78,
      oldPrice: null,
      badge: 'New',
      img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
      link: 'product.html'
    },
    {
      id: 'a9',
      name: 'Minimal Cuff Bracelet',
      category: 'Accessories · Jewelry',
      price: 45,
      oldPrice: 65,
      badge: 'Sale',
      img: 'https://plus.unsplash.com/premium_photo-1681276168324-a6f1958aa191?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'product.html'
    },
    {
      id: 'a10',
      name: 'Canvas Tote Bag',
      category: 'Accessories · Bags',
      price: 35,
      oldPrice: null,
      badge: null,
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80',
      link: 'product.html'
    }
  ]
};

// Featured / Trending — 8 hand-picked items across all categories
PRODUCTS.featured = [
  PRODUCTS.women[0],  // Floral Midi Dress
  PRODUCTS.men[4],    // Leather Biker Jacket
  PRODUCTS.accessories[0], // Minimalist Watch
  PRODUCTS.women[6],  // Tan Leather Tote
  PRODUCTS.men[7],    // Classic White Sneakers
  PRODUCTS.men[2],    // Oversized Hoodie
  PRODUCTS.women[2],  // Linen Blazer
  PRODUCTS.accessories[2]  // Aviator Sunglasses
];

// All products combined (for shop page)
PRODUCTS.all = [
  ...PRODUCTS.men,
  ...PRODUCTS.women,
  ...PRODUCTS.accessories
];
