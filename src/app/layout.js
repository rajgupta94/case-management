import "./globals.css";
import { CaseProvider } from "@/context/CaseContext";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Case Management System - Professional Legal Case Tracking",
  description: "Manage legal cases efficiently with our comprehensive case management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <CaseProvider>
            {children}
          </CaseProvider>
        </AuthProvider>
      </body>
    </html>
  );
} 