export function sumCart(cart) {
  return cart?.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
}
