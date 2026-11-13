import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Yash Otwal | Full Stack Developer",
  description: "Personal portfolio of Yash Otwal — Full Stack Developer & MERN Architect based in Indore, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className="antialiased bg-bg text-text-primary font-body overflow-x-hidden">
        {children}
        <ToastContainer position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
