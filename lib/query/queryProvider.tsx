'use client'

import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './react-query-client';

const queryProvider = ({children}: { children: React.ReactNode}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default queryProvider