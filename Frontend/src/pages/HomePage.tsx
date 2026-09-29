
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="home-page">
            <Header />

            <main>
                <Hero />
                <Categories />
                <BestSellers />
                <WhyChooseUs />
                <Testimonials />
                <NewsLetter />
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;