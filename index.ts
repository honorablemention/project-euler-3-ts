// Import stylesheets
import Node from './node';
import './style.css';
import makeFactorTree, { display, getPrimeFactors } from './factor-tree';

const t = makeFactorTree(new Node(600851475143));
const primeFactors = getPrimeFactors(t);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<p>The prime factors of 13195 are 5, 7, 13 and $29.<br>
What is the largest prime factor of the number 600851475143?</p>

Answer: ${Math.max(...primeFactors)}
`;
