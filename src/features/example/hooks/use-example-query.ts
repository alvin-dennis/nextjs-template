import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { Example } from '../schemas/example.schema';
import { exampleService } from '../services/example.service';

export const exampleKeys = {
  all: ['examples'] as const,
  lists: () => [...exampleKeys.all, 'list'] as const,
  list: (filters: string) => [...exampleKeys.lists(), { filters }] as const,
  details: () => [...exampleKeys.all, 'detail'] as const,
  detail: (id: string) => [...exampleKeys.details(), id] as const,
};

export function useExamples() {
  return useQuery({
    queryKey: exampleKeys.lists(),
    queryFn: () => exampleService.getAll(),
  });
}

export function useExample(id: string) {
  return useQuery({
    queryKey: exampleKeys.detail(id),
    queryFn: () => exampleService.getById(id),
    enabled: !!id,
  });
}

export function useCreateExample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<Example, 'id' | 'createdAt'>) => exampleService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: exampleKeys.lists() });
    },
  });
}

export function useUpdateExample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Example> }) =>
      exampleService.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: exampleKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: exampleKeys.lists() });
    },
  });
}

export function useDeleteExample() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => exampleService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: exampleKeys.lists() });
    },
  });
}
