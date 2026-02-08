export interface Item {
    id: number;
    name: string;
    location: string;
    date: string;
    status: 'lost' | 'found';
    image: string | null;
}

// Global in-memory store for demo purposes
export const items: Item[] = [];

export function addItem(item: Omit<Item, 'id'>) {
    const newItem = {
        ...item,
        id: items.length + 1
    };
    items.push(newItem);
    return newItem; // Return the new item
}
