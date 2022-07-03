import { useMediaQuery } from "react-responsive";
import { ResponsiveSize } from "./responsive.types";

export function useIsXSmallDevice() {
  return useMediaQuery({
    maxWidth: 576,
  });
}

export function useIsSmallDevice() {
  return useMediaQuery({
    minWidth: 576,
  });
}

export function useIsMediumDevice() {
  return useMediaQuery({
    minWidth: 768,
  });
}

export function useIsLargeDevice() {
  return useMediaQuery({
    minWidth: 992,
  });
}

export function useIsXLargeDevice() {
  return useMediaQuery({
    minWidth: 1200,
  });
}

export function useIsXXLargeDevice() {
  return useMediaQuery({
    minWidth: 1600,
  });
}

export function useResponsiveSize(): Record<ResponsiveSize, boolean>{
    const isXSmallDevice = useIsXSmallDevice();
    const isSmallDevice = useIsSmallDevice();
    const isMediumDevice = useIsMediumDevice();
    const isLargeDevice = useIsLargeDevice();
    const isXLargeDevice = useIsXLargeDevice();
    const isXXLargeDevice = useIsXXLargeDevice();

    return {
        xs: isXSmallDevice,
        s: isSmallDevice,
        m: isMediumDevice,
        lg: isLargeDevice,
        xl: isXLargeDevice,
        xxl: isXXLargeDevice,
    }
}