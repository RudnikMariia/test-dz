export interface Order {
    name: string;
    id: number;
    products_count: number;
    date: string;
    price_usd: string;
    price_uah: string;
    status: string;
}

export interface Product {
    name: string;
    serial_number: string;
    status: string;
    status_indicator: string;
    orderId: number;
    start_date: string;
    end_date: string;
    condition: string;
    price: string;
    price_uah: string;
    group_name: string;
    arrival_name: string;
    arrival_date_max?: string;
    arrival_date: string;
    delete_icon: string;
    author: string | null;
}

export interface StateOrders {
    orders: Order[];
}

export interface StateProducts {
    products: Product[];
    selectedProducts: Product[];
}
