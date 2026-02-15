import { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-dark-900/95 backdrop-blur-md border-neutral-800 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded"
          aria-label="YKD Home"
        >
          <svg 
            className="opacity-90 group-hover:opacity-100 transition-opacity" 
            width="120" 
            height="48" 
            viewBox="0 0 3840 1540"
            aria-hidden="true"
          >
            <path 
              fill="currentColor" 
              className="text-white"
              d="M1596.131,100.266l-702.332,702.272l-175.787,483.228l-439.61,253.842c81.002,-222.552 164.129,-454.987 264.657,-727.14l-126.798,-571.95l-416.26,-240.508l715.919,0.015l105.63,476.552l476.525,-476.552l334.551,-0.018l345.87,-0.006l-467.99,1285.791c-116.015,0.25 -345.87,0 -345.896,-0.026l431.521,-1185.5Zm834.719,-100.256l836.252,-0.01c328.207,0 479.89,138.002 538.334,298.463c122.409,336.082 -110.435,687.355 -230.272,792.784c-119.837,105.429 -347.18,194.559 -649.658,194.544l-510.719,-0.026l338.388,-929.648l307.555,0l-231.207,635.237c200.193,2.033 449.646,8.103 594.995,-178.887c90.287,-116.153 186.63,-316.793 72.616,-444.82c-75.168,-84.406 -299.767,-69.185 -395.435,-69.185l-595.967,0l-406.863,341.398l302.896,645.93l-317.625,0l-210.983,-456.535l-193.194,162.129l189.298,-520.157l561.589,-471.218Z"
            />
          </svg>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#analytics">Analytics</NavLink>
          <NavLink href="#ecosystem">Ecosystem</NavLink>
          <NavLink href="https://github.com/pr0m3theuz/workout-app" external>
            GitHub
          </NavLink>
          <a 
            href="#download" 
            className="group relative px-6 py-2 bg-lime-400 text-black font-tech font-bold text-base uppercase tracking-wider overflow-hidden transition-all [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
          >
            <div className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ease-out" />
            <span className="relative z-10">Download</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-lime-400 transition-colors p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 bg-dark-800 border-b border-neutral-800 p-6 flex flex-col gap-4 shadow-2xl animate-slide-up"
          role="menu"
        >
          <MobileNavLink href="#features" onClick={closeMenu}>
            Features
          </MobileNavLink>
          <MobileNavLink href="#analytics" onClick={closeMenu}>
            Analytics
          </MobileNavLink>
          <MobileNavLink href="#ecosystem" onClick={closeMenu}>
            Ecosystem
          </MobileNavLink>
          <MobileNavLink 
            href="https://github.com/pr0m3theuz/workout-app" 
            onClick={closeMenu}
          >
            GitHub
          </MobileNavLink>
          <a 
            href="#download" 
            onClick={closeMenu} 
            className="group relative mt-4 w-full bg-lime-400 text-black font-tech font-bold py-3 text-center uppercase tracking-widest overflow-hidden transition-all [clip-path:polygon(5%_0,100%_0,95%_100%,0_100%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            role="menuitem"
          >
            <div className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ease-out" />
            <span className="relative z-10">Download</span>
          </a>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = 'Navbar';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const NavLink = memo(({ href, children, external }: NavLinkProps) => (
  <a 
    href={href} 
    className="text-sm font-mono text-neutral-400 hover:text-lime-400 transition-colors uppercase tracking-widest relative group focus:outline-none focus-visible:text-lime-400"
    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-lime-400 transition-all group-hover:w-full" />
  </a>
));

NavLink.displayName = 'NavLink';

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = memo(({ href, onClick, children }: MobileNavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-lg font-tech font-medium text-white hover:text-lime-400 border-l-2 border-transparent hover:border-lime-400 pl-4 transition-all focus:outline-none focus-visible:text-lime-400 focus-visible:border-lime-400"
    role="menuitem"
  >
    {children}
  </a>
));

MobileNavLink.displayName = 'MobileNavLink';

export default Navbar;
