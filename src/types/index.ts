export interface StatCard {
  title: string;
  value: string;
  description: string;
  icon: string;
  color: string;
}

export interface ActivityData {
  name: string;
  screenTime: number;
  educational: number;
  entertainment: number;
}

export interface RecommendationItem {
  title: string;
  description: string;
  icon: string;
  category: "safety" | "educational" | "health";
}
