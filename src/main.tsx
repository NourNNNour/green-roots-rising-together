
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById("root");

// Simple client-side rendering without hydration
if (container) {
  createRoot(container).render(<App />);
}
