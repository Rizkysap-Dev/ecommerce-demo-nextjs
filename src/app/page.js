import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/ui/HeroSection";
import UnderlineButton from "@/components/ui/UnderlineButton";

export default function Home() {
  return (
    <div>
      <Layout>
        <section className="mt-4">
          <HeroSection />
        </section>
        <section className="grid grid-cols-2 h-85 bg-gray-100 my-30 rounded-lg px-10 pt-12">
          <div className="w-[60%]">
            <h2 className=" font-sans font-semibold text-lg text-gray-900">
              Explore a variety of shirts crafted for comfort and style. Whether
              you prefer timeless classics or modern designs.
            </h2>
            <div className="mt-4 pl-1">
              <UnderlineButton
                className={"font-light text-sm text-gray-500 font-serif"}
                href={"/shop/shirts"}>
                Shop Now
              </UnderlineButton>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              <span className="font-playfair text-2xl font-semibold">
                — Giorgio Armani,{" "}
              </span>
              The difference between style and fashion is quality. A well-chosen
              shirt can elevate your confidence and express your personality
              without saying a word.
            </h1>
          </div>
        </section>
      </Layout>
    </div>
  );
}
