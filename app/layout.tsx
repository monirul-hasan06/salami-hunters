import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/layout/ParticleBackground';
import Ticker from '@/components/ui/Ticker';
export const metadata={title:'Salami Hunters',description:'Transparent Eid salami mini-games'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><ParticleBackground/><Ticker/><Navbar/><main className="relative z-10 mx-auto max-w-6xl px-4 py-8">{children}</main><Footer/></body></html>}
