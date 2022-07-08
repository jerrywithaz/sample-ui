export interface NavigationContainerProps {
    documentTitle?: {
        enabled?: boolean;
        formatter: () => string;
    };
    /** Web Only - Use MemoryRouter */
    memoryRouter?: boolean;
    hashRouter?: boolean;
    basename?: string;
}