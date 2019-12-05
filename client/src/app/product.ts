export interface Product {
    id: number;
    name: string;
}

export interface Qty {
    id: number;
    qty: number;
}

export const ProductList: Product[] = [
    { id: 1, name: 'Star Anise, Whole' },
    { id: 2, name: 'Flour - Masa De Harina Mexican' },
    { id: 3, name: 'Mop Head - Cotton, 24 Oz' },
    { id: 4, name: 'Tomatoes - Orange' },
    { id: 5, name: 'Pumpkin - Seed' },
    { id: 6, name: 'Beef Dry Aged Tenderloin Aaa' },
    { id: 7, name: 'Wine - Shiraz South Eastern' },
    { id: 8, name: 'Bagel - Whole White Sesame' },
    { id: 9, name: 'Mushroom Morel Fresh' },
    { id: 10, name: 'Buffalo - Short Rib Fresh' }
];
