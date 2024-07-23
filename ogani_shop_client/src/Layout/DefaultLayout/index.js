import Header from '~/Layout/components/Header'
import Hero from '~/Layout/components/Hero';
import Footer from '~/Layout/components/Footer';

function DefaultLayout({children}) {
    return (
        <>
            <Header />
            <Hero />
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;