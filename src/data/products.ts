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
    name: "Daisy Bloom Frock",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop",
    category: "Dresses",
    description: "Adorable floral frock with puffed sleeves. Perfect for park playdates and birthday parties.",
    sizes: ["6M", "12M", "18M", "2T"],
    age: "6-24 months",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Cloud Bunny Romper",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&h=800&fit=crop",
    category: "Rompers",
    description: "Ultra-soft cotton romper with bunny ears hood. Snuggly and cute beyond words.",
    sizes: ["3M", "6M", "12M", "18M"],
    age: "3-18 months",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Pastel Rainbow Set",
    price: 38.00,
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=800&fit=crop",
    category: "Sets",
    description: "Matching top and bottom in dreamy pastel stripes. Mix-and-match magic.",
    sizes: ["12M", "18M", "2T", "3T"],
    age: "12-36 months",
    isFeatured: true,
  },
  {
    id: "4",
    name: "Teddy Bear Onesie",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=800&fit=crop",
    category: "Onesies",
    description: "Cozy fleece onesie with teddy bear ears. Made for nap time and cuddles.",
    sizes: ["NB", "3M", "6M", "12M"],
    age: "0-12 months",
    isFeatured: true,
  },
  {
    id: "5",
    name: "Little Star Dungarees",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop",
    category: "Bottoms",
    description: "Denim dungarees with star embroidery. Tough enough for tiny adventurers.",
    sizes: ["12M", "18M", "2T", "3T"],
    age: "12-36 months",
  },
  {
    id: "6",
    name: "Honey Bee Cardigan",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=600&h=800&fit=crop",
    category: "Knitwear",
    description: "Hand-knit cardigan with buzzy bee buttons. Warm, soft, and impossibly sweet.",
    sizes: ["6M", "12M", "18M", "2T"],
    age: "6-24 months",
  },
  {
    id: "7",
    name: "Peach Petal Tutu",
    price: 29.00,
    image: "https://images.unsplash.com/photo-1543263251-f936c7c15296?w=600&h=800&fit=crop",
    category: "Skirts",
    description: "Fluffy tulle tutu in soft peach. Every little princess needs one.",
    sizes: ["12M", "18M", "2T", "3T"],
    age: "12-36 months",
  },
  {
    id: "8",
    name: "Sleepy Moon PJs",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c757?w=600&h=800&fit=crop",
    category: "Sleepwear",
    description: "Buttery-soft pajama set with moon and stars print. Sweet dreams guaranteed.",
    sizes: ["6M", "12M", "18M", "2T"],
    age: "6-24 months",
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
