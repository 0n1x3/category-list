export interface Category {
    id: string | number;
    name: string;
  }
  
  export interface CategoryListProps {
    categories: Category[];
    selectedId?: string | number;
    onSelect: (id: string | number) => void;
  }