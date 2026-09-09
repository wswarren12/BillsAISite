import Header from "@/components/layout/Header";
import Cover from "@/components/sections/Cover";
import Steps from "@/components/sections/Steps";
import Sets from "@/components/sections/Sets";
import Extras from "@/components/sections/Extras";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Cover />
        <Steps />
        <Sets />
        <Extras />
        <Contact />
      </main>
    </>
  );
}
