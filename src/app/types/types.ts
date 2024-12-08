// --- feature product type ---
export interface FeatureProduct {
    src: string;
    productName: string;
    productCode: string;
    price: number;
  }
  
  // --- latest product ---
  export interface LatestProduct {
    img: string;
    productName: string;
    price: number;
    discountPrice: number;
    filterKey: string[];
  }
  
  // --- shopex offer card ---
  export interface ShopexOfferItem {
    img: string;
    title: string;
    description: string;
  }
  
  // --- trending product ---
  export interface TrendingProduct {
    img: string;
    productName: string;
    price: number;
    discountPrice: number;
  }