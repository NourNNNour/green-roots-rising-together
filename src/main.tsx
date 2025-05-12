
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById("root");

// Check if we're hydrating from SSR
if (container?.hasAttribute('data-ssr')) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container!).render(<App />);
}
