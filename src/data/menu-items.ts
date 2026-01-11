export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'classic' | 'premium' | 'fusion' | 'sides';
    spiceLevel: 1 | 2 | 3 | 4 | 5;
    image: string;
    ingredients: string[];
    isNew?: boolean;
    isPopular?: boolean;
  }
  
  export const menuItems: MenuItem[] = [
    {
      id: 'classic-sisig',
      name: 'Classic Pork Sisig',
      description: 'Traditional sizzling pork sisig with onions, chili peppers, and calamansi',
      price: 250,
      category: 'classic',
      spiceLevel: 2,
      image: '/images/menu/classic-sisig.jpg',
      ingredients: ['Pork belly', 'Pork cheeks', 'Onions', 'Chili', 'Calamansi'],
      isPopular: true,
    },
    // ... more items
  ];