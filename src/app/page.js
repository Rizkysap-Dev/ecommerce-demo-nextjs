import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/ui/HeroSection";
import HighlightSection from "@/components/ui/HighlightSection";
import UnderlineButton from "@/components/ui/UnderlineButton";

export default function Home() {
  return (
    <div>
      <Layout>
        <section className="pt-26">
          <HeroSection />
        </section>
        <div className="h-screen">

        <section className="pt-10">
          <HighlightSection />
        </section>
        </div>
      </Layout>
    </div>
  );
}
