export interface Meal {
  id: string;
  created_at: string; // ISO 8601 date string
  name: string;
  price: number;
  description: string;
  image: string; // URL
  category: string;
  second_category: string;
}
