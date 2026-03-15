
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Portfolio App",
  description: "Next.js MongoDB Vercel App"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{fontFamily:"Arial", margin:0}}>
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
