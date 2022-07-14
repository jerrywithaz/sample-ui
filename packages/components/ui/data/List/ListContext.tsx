import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { LayoutChangeEvent } from "react-native";
import { FlexBox } from "../../layout/Box";
import { ListContextValue, ListContextProps } from "./List.types";

const Context = createContext<ListContextValue | undefined>(undefined);

function ListContextProvider<Data extends any>({
  children: List,
  itemHeight,
  listRef,
}: ListContextProps<Data>) {
  const sizeMap = useRef<Record<number, number>>({});
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setDimensions({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height,
    });
  }, []);

  const setSize = useCallback((index: number, height: number) => {
    sizeMap.current = { ...sizeMap.current, [index]: height };
    listRef?.current?.resetAfterIndex(index);
    console.log(sizeMap.current);
  }, []);

  const getSize = useCallback(
    (index: number) => {
      return sizeMap.current[index] || itemHeight || 50;
    },
    [itemHeight]
  );

  const value = useMemo(() => {
    return {
      setSize,
      getSize,
      containerWidth: dimensions.width,
    };
  }, [dimensions, getSize]);

  return (
    <Context.Provider value={value}>
      <FlexBox vertical flex={1} onLayout={handleLayout}>
        {dimensions.width !== 0 && dimensions.height !== 0 && <List {...dimensions} getSize={getSize} />}
      </FlexBox>
    </Context.Provider>
  );
}

export function useListContext() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error(
      `useListContext must be used inside of a ListContextProvider`
    );
  }

  return context;
}

export default ListContextProvider;
