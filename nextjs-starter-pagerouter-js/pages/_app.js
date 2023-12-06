import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const screenLayout = "flex flex-col min-h-screen justify-between";
  return (
    <div className={screenLayout}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
