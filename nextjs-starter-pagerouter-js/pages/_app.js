import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function App({ Component, pageProps }) {
  const screenLayout = "flex flex-col min-h-screen justify-between";
  return (
    <div className={screenLayout}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
