export interface NavigationProviderProps {
    documentTitle?: {
        enabled?: boolean;
        formatter: () => string;
    };
    /** Web Only - Use MemoryRouter */
    memoryRouter?: boolean;
}