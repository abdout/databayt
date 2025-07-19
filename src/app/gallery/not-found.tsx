import Link from 'next/link';
import "./globals.css";

export default function NotFound() {
  return (
    <div className="work-layout font-neue-haas-display">
      <main className="main">
        <div className="error-state">
          <h2>404 - Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <Link href="/gallery">Return to Gallery</Link>
        </div>
      </main>
    </div>
  );
} 