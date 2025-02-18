import RootLayout from "./Components/RootLayout";
export const metadata = {
  title: "Eagle Global Exim House",
  description: "Eagle Global Exim House",
  icons: {
    icon: ["/images/eagle-global-logo-og.jpg"],
  },
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}

