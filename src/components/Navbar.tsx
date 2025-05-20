import { useEffect, useState } from "react";
import { navLinks } from "@utils/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className='inner'>
        <a className='logo flex items-center gap-2' href='#hero'>
          <img src='/images/logo.png' alt='logo' className='w-20' />
        </a>
        <div className='flex items-center gap-8'>
          <nav className='desktop'>
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className='group'>
                  <a href={link}>
                    <span className='uppercase'>{name}</span>
                    <span className='underline' />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className='contact-btn group' href='#contact'>
            <div className='inner'>
              <span className='uppercase'>Contact</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
