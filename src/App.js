import BenefitsSection from "./components/Index/BenefitsSection";
import HeroSection from "./components/Index/HeroSection";
import PopularProductsSection from "./components//Index/PopularProductsSection";
import ProductInfoSection from "./components/Index/ProductInfoSection";
import TestimonialsSection from "./components/Index/TestimonialsSection";
import ArticlesSection from "./components/Index/ArticlesSection";
import DiscountSection from "./components/Index/DiscountSection";

function App() {
  return (
    <main>
      <HeroSection></HeroSection>
      <BenefitsSection></BenefitsSection>
      <PopularProductsSection></PopularProductsSection>
      <ProductInfoSection></ProductInfoSection>
      <TestimonialsSection></TestimonialsSection>
      <ArticlesSection></ArticlesSection>
      <DiscountSection></DiscountSection>
    </main>
  );
}

export default App;
