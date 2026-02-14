export const metadata = {
  title: "Prosthesis App",
  description: "Prosthesis marketplace"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto", margin: 0 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
