// Example: src/app/layout.js
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
