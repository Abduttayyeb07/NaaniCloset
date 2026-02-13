export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  age: string;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Zardozi Silk Lehenga",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1617627141513-8874f686c6b4?w=600&h=800&fit=crop",
    category: "Lehengas",
    description: "Elegant silk lehenga with intricate gold Zardozi embroidery. A traditional masterpiece for festive celebrations.",
    sizes: ["12M", "18M", "2T", "3T"],
    age: "1-3 years",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Embroidered Kurta Set",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1621259182978-f09e5e2ca846?w=600&h=800&fit=crop",
    category: "Kurtas",
    description: "Soft cotton kurta with delicate hand-embroidery. Comfortable yet festive for little ones.",
    sizes: ["6M", "12M", "18M", "2T"],
    age: "6-24 months",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Pastel Gota Anarkali",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1597933534024-1647466c0d80?w=600&h=800&fit=crop",
    category: "Anarkalis",
    description: "Flowy pastel anarkali adorned with Gota Patti work. Dreamy and traditional.",
    sizes: ["2T", "3T", "4T", "5T"],
    age: "2-5 years",
    isFeatured: true,
  },
  {
    id: "4",
    name: "Royal Sherwani Vest",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1502035618526-642f1f3b8c3d?w=600&h=800&fit=crop",
    category: "Vests",
    description: "Rich velvet vest with ethnic patterns. Adds a royal touch to any outfit.",
    sizes: ["18M", "2T", "3T"],
    age: "18M - 3 years",
    isFeatured: true,
  },
];

export const featuredProducts = products.filter((p) => p.isFeatured);

export const instagramPosts = [
  { id: "ig1", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop", likes: 2431 },
  { id: "ig2", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop", likes: 1892 },
  { id: "ig3", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop", likes: 3104 },
  { id: "ig4", image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=400&h=400&fit=crop", likes: 1756 },
  { id: "ig5", image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&h=400&fit=crop", likes: 2567 },
  { id: "ig6", image: "https://images.unsplash.com/photo-1543263251-f936c7c15296?w=400&h=400&fit=crop", likes: 1989 },
];
