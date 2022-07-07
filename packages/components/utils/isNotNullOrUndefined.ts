function isNotNullOrUndefined<Item extends any>(
  item: Item | undefined
): item is Item {
  return item !== undefined && item !== null;
}

export default isNotNullOrUndefined;
