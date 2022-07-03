export interface NavigationProviderProps {
    documentTitle?: {
        enabled?: boolean;
        formatter: () => string;
    };
}