import { httpClient } from '@/lib/fetcher';
import { type Example, exampleListSchema, exampleSchema } from '../schemas/example.schema';

export const exampleService = {
  getAll: async (): Promise<Example[]> => {
    const data = await httpClient.get<unknown>('/examples');
    return exampleListSchema.parse(data);
  },

  getById: async (id: string): Promise<Example> => {
    const data = await httpClient.get<unknown>(`/examples/${id}`);
    return exampleSchema.parse(data);
  },

  create: async (payload: Omit<Example, 'id' | 'createdAt'>): Promise<Example> => {
    const data = await httpClient.post<unknown>('/examples', payload);
    return exampleSchema.parse(data);
  },

  update: async (id: string, payload: Partial<Example>): Promise<Example> => {
    const data = await httpClient.patch<unknown>(`/examples/${id}`, payload);
    return exampleSchema.parse(data);
  },

  delete: async (id: string): Promise<void> => {
    await httpClient.delete(`/examples/${id}`);
  },
};
