export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedItems = new Map();

  for (const [key, value] of items.entries()) {
    if (value === 1) {
      updatedItems.set(key, 100);
    } else {
      updatedItems.set(key, value);
    }
  }

  return updatedItems;
}
