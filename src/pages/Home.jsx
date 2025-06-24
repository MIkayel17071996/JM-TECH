import HeroSection from '../components/HeroSection.jsx';
import Intro from '../components/Intro.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import ConsultationSection from '../components/ConsultationSection.jsx';
import WhyChooseUsSection from '../components/WhyChooseUsSection.jsx';
import ContactProcessSection from '../components/ContactProcessSection.jsx';
import image1 from '../assets/phone&laptopImg.png';

const Home = () => {
  return (
    <>
      <title>Home | JM TECH</title>

      <HeroSection
        title="JM Tech: From Concept to Launch — Seamlessly!"
        subtitle="Startups, enterprises, and bold ideas — JM Tech helps turn concepts into launch-ready products. We build software that’s fast, stable, and ready to scale."
        ctaText="Discover Our Solutions"
        ctaLink="/services"
        titleColor="#FBBF24"
        backgroundImage="/images/hero-bg.jpg"
      />
      <Intro
        heading="Custom Web & Mobile Development Solutions"
        paragraph1="JM Tech is a modern software development company focused on delivering high-quality web and mobile applications. We bring together skilled developers, QA engineers, and project managers to turn ideas into reliable, scalable digital products."
        buttonText="Get Started"
        buttonLink="/contact"
        imageSrc={image1}
        imageAlt="Phone and laptop showcasing JM Tech solutions"
      />
      <ServicesSection />
      <ConsultationSection />
      <WhyChooseUsSection />
      <ContactProcessSection />
    </>
  );
};

export default Home;