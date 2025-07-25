import Benefits from "@/components/LandingPage/Benefits";
import CallToAction from "@/components/LandingPage/CallToAction";
import FAQ from "@/components/LandingPage/FAQ";
import Feature from "@/components/LandingPage/Feature";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header"
import HeroHeader from "@/components/LandingPage/HeroSection";
import HowItWork from "@/components/LandingPage/Howitwork";
import Price from "@/components/LandingPage/Price";
import Testimonials from "@/components/LandingPage/Testimonials";

const LandingPage = () => {
  return (
    <>
      <div className='bg-[url("/bg-hero.svg")] bg-center bg-cover rounded-[0px_0px_36px_36px]'>
        <Header />
        <HeroHeader />
      </div>
      <div className="bg-white">
        <Benefits/>
        <HowItWork/>
        <div className='bg-[url("/bg-feature.svg")] lg:rounded-[36px] overflow-hidden bg-center bg-cover'>
          <Feature/>
          <Price/>
        </div>
        <Testimonials/>
        <FAQ/>
        <div className="bg-[url('/bg-footer.svg')] lg:pt-0 pt-[40px] mt-[120px] bg-center bg-cover rounded-[0px_0px_36px_36px]">
          <CallToAction />
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default LandingPage;