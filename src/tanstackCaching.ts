import { useQuery } from '@tanstack/react-query';
import { getVagons } from './api';

export function vagonsQuery() {
    return useQuery({ queryKey: ["vagons"], queryFn: getVagons })
}
