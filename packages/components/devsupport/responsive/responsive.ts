import { useMediaQuery } from "react-responsive";
import { ResponsiveSize } from "./responsive.types";

/** Returns true for devices with a `width <= 576px` */
export function useIsXSmallDevice() {
  return useMediaQuery({
    maxWidth: 576,
  });
}

/** Returns true for devices with a `width >= 576px` */
export function useIsMinSmallDevice() {
  return useMediaQuery({
    minWidth: 576,
  });
}

/** Returns true for devices with a `width >= 768px` */
export function useIsMinMediumDevice() {
  return useMediaQuery({
    minWidth: 768,
  });
}

/** Returns true for devices with a `width >= 992px` */
export function useIsMinLargeDevice() {
  return useMediaQuery({
    minWidth: 992,
  });
}

/** Returns true for devices with a `width >= 1200px` */
export function useIsMinXLargeDevice() {
  return useMediaQuery({
    minWidth: 1200,
  });
}

/** Returns true for devices with a `width >= 1600px` */
export function useIsMinXXLargeDevice() {
  return useMediaQuery({
    minWidth: 1600,
  });
}

/** Returns a record of current device sizes. */
export function useResponsiveSize(): Record<ResponsiveSize, boolean>{
    const isXSmallDevice = useIsXSmallDevice();
    const isSmallDevice = useIsMinSmallDevice();
    const isMediumDevice = useIsMinMediumDevice();
    const isLargeDevice = useIsMinLargeDevice();
    const isXLargeDevice = useIsMinXLargeDevice();
    const isXXLargeDevice = useIsMinXXLargeDevice();

    return {
        xs: isXSmallDevice,
        s: isSmallDevice,
        m: isMediumDevice,
        lg: isLargeDevice,
        xl: isXLargeDevice,
        xxl: isXXLargeDevice,
    }
}