import Hero from "@/components/public/hero";
import Header from "@/components/public/header";
import Footer from "@/components/public/footer";
import Cta from "@/components/public/cta";
import Announcements from "@/components/public/announcements";
import Articles from "@/components/public/articles";
import Carousel from "@/components/customUI/carousel";
import Contact from "@/components/public/contact";
import Testimonial from "@/components/public/testimonial";
import testimonial from "@/components/public/testimonial";
import PatnerLogo from "@/components/public/patner-logo";


export default function HomePage() {
    return (
        <main className={'relative scroll-smooth'}>
            {/*<Announcements />*/}
            <div className={'top-0 sticky z-50'}>
                <Header/>
            </div>
            <Carousel/>
            <PatnerLogo />
            <div className={'w-full md:contain-none 2xl:container -z-50 overflow-hidden'}>
                <Articles/>
                <Cta/>
                <Testimonial />
                <Contact/>
            </div>
                <Footer/>
        </main>
    );
}
