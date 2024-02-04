import Node from './node';

const isDivisibleByX = (n: number, x: number) => n % x === 0;

const makeFactorTree = (root: Node<number>, max?: number): Node<number> => {
  let m = max ?? root.data;

  if (m === 1) {
    return root;
  }

  for (let i = 2; i <= m / 2; i++) {
    if (isDivisibleByX(m, i)) {
      root.left = new Node(i);
      root.right = new Node(m / i);
      makeFactorTree(root.right, m / i);
      return root;
    }
  }
  return root;
};

export const display = <T>(node: Node<T> | null, level: number = 0) => {
  if (node === null) return;
  console.log(`Level: ${level}, Root Data: `, node.data);
  let l = ++level;
  if (node.left) {
    console.log('L:');
    display(node.left, l);
  }
  if (node.right) {
    console.log('R:');
    display(node.right, l);
  }
};

export const getPrimeFactors = <T>(node: Node<T>, primes: T[] = []): T[] => {
  if (node === null) return primes;
  if (node.left === null && node.right === null) {
    primes.push(node.data);
  }
  getPrimeFactors(node.left, primes);
  getPrimeFactors(node.right, primes);
  return primes;
};

export default makeFactorTree;
