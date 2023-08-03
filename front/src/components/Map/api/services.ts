import { useQuery } from '@tanstack/react-query';
import { repository } from './repository';

export function useMap() {
  return useQuery({
    queryKey: ['map'],
    queryFn: repository().getMapLocations,
  });
}
