import Layout from "@/components/layouts/Layout";
import Container from "@/components/Container";
import HeroSection from "@/components/herosection/HeroSection";

export default function Home() {
  return (
    <div>
      <Layout>
        <section className="mt-4">
          <HeroSection />
        </section>
      </Layout>
    </div>
  );
}
