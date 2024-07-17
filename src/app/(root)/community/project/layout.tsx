import { Inter } from "next/font/google"; // Step 1: Import Inter
import "../../../globals.css";

const inter = Inter({ subsets: ["latin"] }); // Step 2: Initialize Inter

export default function ContributeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} dir="ltr"> {/* Step 3: Apply both classNames */}
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}