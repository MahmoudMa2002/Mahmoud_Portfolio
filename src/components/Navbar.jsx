import { useState, useEffect } from 'react';
import { cn } from '../lib/util';
import { Menu, X } from 'lucide-react';
import ThemeToggle from "../components/ThemeToggle";
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { lang, toggleLang, t } = useLanguage();

    const navItems = [
        { name: t.nav.home, href: '#hero' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    const LangToggle = () => (
        <button
            onClick={toggleLang}
            className="text-sm font-medium px-3 py-1 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
        >
            {lang === 'en' ? 'AR' : 'EN'}
        </button>
    );

    return (
        <nav className={cn(
            'fixed w-full z-40 transition-all duration-300',
            isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
        )}>
            <div className='container flex items-center justify-between'>
                {/* logo */}
                <a className='text-xl text-primary flex items-center' href='#hero' aria-label='Homepage'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>Mahmoud</span><span>Portfolio</span>
                    </span>
                </a>

                {/* desktop nav */}
                <div className='hidden md:flex items-center gap-8'>
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle />
                    <LangToggle />
                </div>

                {/* mobile menu toggle */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className='md:hidden p-2 text-foreground z-50'
                >
                    {isMenuOpen ? <X size={24} className='cursor-pointer' /> : <Menu size={24} className='cursor-pointer' />}
                </button>

                {/* mobile nav menu */}
                <div
                    className={cn(
                        'fixed inset-0 w-screen h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
                        'transition-all duration-300 md:hidden',
                        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    )}
                >
                    <div className="flex flex-col items-center gap-3 mb-8">
                        <ThemeToggle />
                        <LangToggle />
                    </div>
                    <div className='flex flex-col space-y-8 text-xl'>
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
