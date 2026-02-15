import Providers from "./providers";

export const metadata = {
  title: "Prosthesis Marketplace",
  description: "Prosthesis marketplace app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto", margin: 0 }}>
        <Providers>
          <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
            <h2 style={{ margin: "10px 0 16px" }}>Prosthesis Marketplace</h2>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
