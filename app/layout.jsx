import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import Script from 'next/script';
import NetlifyIdentityHandler from '../components/NetlifyIdentityHandler';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
                <NetlifyIdentityHandler />
            </body>
        </html>
    );
}