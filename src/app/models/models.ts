export interface Category{
    id:number;
    category:string;
    subcategory:string;
}

export interface SuggestedProduct{
    banerimage: string;
    category: Category;
}

export interface NavigationItem {
    category:string;
    subcategories: string[];
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    mobile: string;
    password: string;
    createAt: string;
    modifiedAt: string;
  }

export interface Offer{
    id:number;
    title:string;
    discount: number;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    productCategory: Category;
    offer: Offer;
    price:number;
    quantity: number;
    imageName: string;
}

export interface Review {
    id: number;
    user: User;
    userid: string;
    productid: string;
    product: Product;
    reviewText: string;
    createAt: string;
  }

  export interface CartItem {
    id: number;
    product: Product;
  }
  
  export interface Cart {
    id: number;
    user: User;
    cartItems: CartItem[];
    ordered: boolean;
    ordereOn: string;
  }

  export interface PaymentMethod {
    id: number;
    type: string;
    provider: string;
    available: boolean;
    reason: string;
  }
  
  export interface Payment {
    id: number;
    // user: User;
    userId: number;
    paymentMethodId: number;
    // paymentMethod: PaymentMethod;
    totalAmount: number;
    shippingCharges: number;
    amountReduced: number;
    amountPaid: number;
    createAt: string;
  }
  
  export interface Order {
    id: number;
    userId: number,
    cartId: number,
    paymentId: number,
    createAt: string;
  }
  
  
