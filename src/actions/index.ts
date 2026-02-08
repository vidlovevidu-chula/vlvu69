import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

export const server = {
    reportItem: defineAction({
        accept: 'form',
        input: z.object({
            type: z.enum(['lost', 'found']),
            title: z.string().min(1),
            // Accept empty strings as undefined or optional
            category: z.string().optional().or(z.literal('')),
            time: z.string().optional().or(z.literal('')),
            location: z.string().min(1),
            description: z.string().optional().or(z.literal('')),
            image: z.any().optional(),
        }),
        handler: async (input) => {
            const { addItem } = await import('../data/items');

            addItem({
                name: input.title,
                location: input.location,
                date: input.time || new Date().toISOString().split('T')[0],
                status: input.type,
                image: null, // Image handling would go here
            });

            return { success: true };
        },
    }),
};
