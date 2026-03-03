"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Heart, Leaf, Star, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSmallSizeLargeTitles"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "Visit Us", id: "contact" }
          ]}
          brandName="Lotus Food Market"
          button={{ text: "Get Directions", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Your Neighborhood Market with Flavors from Around the World"
          description="Discover authentic international groceries, fresh produce, halal meats, exotic spices, and homemade delights at Lotus Food Market. Experience a warm, welcoming atmosphere where quality meets community."
          background={{ variant: "sparkles-gradient" }}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/photo-vegetables-supermarket-photo-your-advertising_185193-110549.jpg", alt: "Fresh international produce display" },
            { src: "http://img.b2bpic.net/free-photo/couple-shopping-zero-waste-food-store_482257-91042.jpg", alt: "Welcoming grocery store interior" },
            { src: "http://img.b2bpic.net/free-photo/exotic-fruits-berries-spanish-market_1398-2235.jpg", alt: "Vibrant fresh vegetables and fruits" }
          ]}
          avatarText="Trusted by 142+ satisfied customers • 5.0 stars"
          buttons={[
            { text: "Visit Us Today", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Hero section for Lotus Food Market"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About Us"
          tagIcon={Leaf}
          title="A Hidden Gem Offering Authentic Flavors & Community Connection"
          description="Founded on values of quality, authenticity, and care"
          subdescription="Lotus Food Market • Lake Worth Beach, FL"
          icon={Heart}
          imageSrc="http://img.b2bpic.net/free-photo/couple-shopping-zero-waste-food-store_482257-91042.jpg"
          imageAlt="Lotus Food Market welcoming interior and community atmosphere"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Premium Offerings"
          description="From fresh international produce to homemade specialties, discover the finest quality products curated with care for your family."
          tag="Products"
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              name: "Fresh International Produce",              price: "Farm-Fresh Daily",              imageSrc: "http://img.b2bpic.net/free-photo/exotic-fruits-berries-spanish-market_1398-2235.jpg",              imageAlt: "Fresh vegetables and exotic fruits"
            },
            {
              id: "2",              name: "Halal Meats & Poultry",              price: "Premium Quality",              imageSrc: "http://img.b2bpic.net/free-photo/shop-workers-posing-counter_7502-4771.jpg",              imageAlt: "High-quality halal meat selection"
            },
            {
              id: "3",              name: "Exotic Spices & Seasonings",              price: "Authentic Flavors",              imageSrc: "http://img.b2bpic.net/free-photo/local-turkish-delices-tea-grand-bazar-market_1268-20173.jpg",              imageAlt: "Vibrant collection of international spices"
            },
            {
              id: "4",              name: "Homemade Foods & Baklava",              price: "Made with Love",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-traditional-azerbaijan-holiday-cookies-baklava-rustic-with-nuts_140725-10317.jpg",              imageAlt: "Delicious homemade baklava and prepared meals"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "Visit Store", href: "contact" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real stories from families who've discovered their favorite place to shop."
          tag="Customer Reviews"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Sarah M.",              role: "Regular Customer",              company: "Lake Worth Family",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/satisfied-female-customer-making-like-gesture-with-both-hands_74855-3666.jpg",              imageAlt: "Happy customer Sarah M."
            },
            {
              id: "2",              name: "Ahmed K.",              role: "Loyal Customer",              company: "Local Community",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg",              imageAlt: "Satisfied customer Ahmed K."
            },
            {
              id: "3",              name: "Maria G.",              role: "Family Shopper",              company: "Neighborhood Regular",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",              imageAlt: "Happy customer Maria G."
            },
            {
              id: "4",              name: "David L.",              role: "Food Enthusiast",              company: "Community Member",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/positive-customer-approving-new-offer_1262-17151.jpg",              imageAlt: "Satisfied customer David L."
            },
            {
              id: "5",              name: "Priya P.",              role: "Chef & Customer",              company: "Local Business Owner",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",              imageAlt: "Happy customer Priya P."
            },
            {
              id: "6",              name: "Miguel R.",              role: "Regular Shopper",              company: "Family of Four",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/satisfied-happy-female-customer-making-like-gesture_74855-3668.jpg",              imageAlt: "Satisfied customer Miguel R."
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Why Choose Lotus Food Market"
          description="Experience the difference of authentic, quality-focused service."
          tag="Our Commitment"
          tagIcon={Star}
          features={[
            {
              id: 1,
              title: "Authentic International Selection",              description: "Carefully curated products from around the world, ensuring authenticity and quality in every item we stock.",              imageSrc: "http://img.b2bpic.net/free-photo/exotic-fruits-berries-spanish-market_1398-2235.jpg",              imageAlt: "International produce selection"
            },
            {
              id: 2,
              title: "Friendly & Knowledgeable Staff",              description: "Our passionate team speaks multiple languages and loves helping customers discover new flavors and find exactly what they need.",              imageSrc: "http://img.b2bpic.net/free-photo/couple-shopping-zero-waste-food-store_482257-91042.jpg",              imageAlt: "Welcoming store staff"
            },
            {
              id: 3,
              title: "Quality You Can Trust",              description: "Every product is handpicked with care. We prioritize freshness, authenticity, and quality in everything we offer.",              imageSrc: "http://img.b2bpic.net/free-photo/shop-workers-posing-counter_7502-4771.jpg",              imageAlt: "Premium quality products"
            },
            {
              id: 4,
              title: "Convenient Services",              description: "Shop in-store, order for curbside pickup, or have items delivered to your door. Shopping at Lotus has never been easier.",              imageSrc: "http://img.b2bpic.net/free-photo/local-turkish-delices-tea-grand-bazar-market_1268-20173.jpg",              imageAlt: "Convenient shopping options"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Contact Us", href: "contact" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Find Us at Lotus Food Market"
          description="Located in the heart of Lake Worth Beach, we're your neighborhood market with global flavors. Stop by and experience the difference authentic service makes."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-vector/coloured-business-card-design_1043-322.jpg"
          imageAlt="Lotus Food Market location and directions"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email for updates"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Lotus Food Market",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Products", href: "#products" },
                { label: "Reviews", href: "#testimonials" }
              ]
            },
            {
              title: "Connect With Us",              items: [
                { label: "Phone: (561) 247-7618", href: "tel:(561)247-7618" },
                { label: "Email Us", href: "mailto:info@lotusfoodmarket.com" },
                { label: "Get Directions", href: "#contact" }
              ]
            },
            {
              title: "Store Hours",              items: [
                { label: "Opens at 10:00 AM", href: "#" },
                { label: "6338 Lantana Rd, Suite 52-53", href: "#" },
                { label: "Lake Worth Beach, FL 33463", href: "#" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "In-Store Shopping", href: "#" },
                { label: "Curbside Pickup", href: "#" },
                { label: "Delivery Available", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Lotus Food Market. All rights reserved."
          bottomRightText="A World of Flavor, Right Around the Corner"
        />
      </div>
    </ThemeProvider>
  );
}