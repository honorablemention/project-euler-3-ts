class Node<T> {
  data: T;
  left: Node<T>;
  right: Node<T>;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default Node;
