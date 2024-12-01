export type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock_quantity: number;
    category: { _id: string; name: string };
    images: string[];
    user: string;
    ratings: {
        _id: string;
        product: string;
        rating: number;
        comments: string;
        user: string;
        createdAt: string;
        updatedAt: string;
    }[];
    avgRating: number;
    totalRatings: number;
};

export type ProductResponse = {
    products: Product[];
    metadata: {
        total: number;
        page: number;
        pages: number;
    };
    success: boolean;
};

export type Category = {
    _id: string;
    name: string;
};

export type UserResponse = {
    _id: string;
    email: string;
    name: string;
    isLocked: boolean;
    lastLogin: string | null;
    isVerified: boolean;
    role: string;
    createdAt: string;
    updatedAt: string;
    refreshToken: string;
    failedAttempts: number;
    lockUntil: string | null;
};



