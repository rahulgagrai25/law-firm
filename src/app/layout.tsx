
import Commitment from "./components/Commitment";
import Contact from "./components/Contact";
import StatsSection from "./components/Counting";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PracticeAreas from "./components/Practice";
import Preloader from "./components/Preloader";
import Story from "./components/Story";
import Team from "./components/Team";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader/>
        <Header/>
        <NavBar/>
        <Hero/>
        <Commitment/>
        <PracticeAreas/>
        <StatsSection></StatsSection>
        <Story/>
        <Team/>
        <Contact/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}
