export type ButtonContent = {
  text: string;
  icon: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  // Add other properties if needed based on the API response
  images: string[];
  category: string;
};

export type PdpId = {
  id: string;
};
