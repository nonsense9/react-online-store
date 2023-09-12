export interface Filter {
  label: string;
  items: { text: string | number; id: number }[];
}

export interface Item {
  id: string;
  title: string;
  brand: string;
  memory: string;
  color: string;
  display: string;
  camera: string;
  ram: string;
  sim: string;
  imageSrc: string;
  price: string;
}

