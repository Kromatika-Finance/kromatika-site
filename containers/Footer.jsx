import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { Socials } from "../components";
import { Divider, Logo } from "../components/";
import { motion } from "framer-motion";

const menuItems = [
  { icon: "", label: "Token", to: "section-token", isExternal: false },
  { icon: "", label: "Roadmap", to: "section-roadmap", isExternal: false },
  { icon: "", label: "About", to: "section-fundamentals", isExternal: false },
  { icon: "", label: "FAQ", to: "section-faq", isExternal: false },
  {
    icon: "",
    label: "News",
    to: "https://blog.kromatika.finance/",
    isExternal: true,
  },
];

const secondaryLinks = [
  { label: "Github", to: "https://github.com/Kromatika-Finance/" },
  { label: "Docs", to: "https://docs.kromatika.finance/" },
  {
    label: "Bug Bounty",
    to: "https://docs.google.com/forms/d/e/1FAIpQLSfdqLrw6xovV95Vr1AbSp5kmcpF41xunCN2VbRXTUj6g6PjIQ/viewform",
  },
  {
    label: "Terms Of Use",
    to: "terms-of-use.html",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wide-screen">
        <Logo path="/" />
        <div className="links">
          <nav className="navbar__nav">
            <ul className="navbar__list">
              {menuItems.map(({ icon, label, to, isExternal }, i) =>
                isExternal ? (
                  <li className="navbar__item" key={i}>
                    <Link href={to}>
                      <a
                        href="https://blog.kromatika.finance/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icon}
                        {label}
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li className="navbar__item" key={i}>
                    <Scroll
                      activeClass="active"
                      to={to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={50}
                    >
                      {icon}
                      {label}
                    </Scroll>
                  </li>
                )
              )}
            </ul>
          </nav>
          <Socials />
          <nav className="navbar__nav">
            <ul className="navbar__list">
              {secondaryLinks.map(({ label, to }, i) => (
                <li className="navbar__item" key={i}>
                  <Link href={to}>
                    <a href={to} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Divider type="horizontal" w="188px" />
        <div className="copyright">
          <h3>Copyright &copy; {currentYear} All rights reserved.</h3>
          <p>
            Kromatika.Finance is brought to you by{" "}
            <Link href="https://ipfs.fleek.co/ipfs/QmVkBaizhwHoCEfhFRGFCepuFq6KnyP7LFxeVVKxPXaDLa?filename=CERTIFICATE%20OF%20INCORPORATION.pdf">
              <a target="_blank" rel="noopener noreferrer">
                <span>RadiantBlue Limited</span>
              </a>
            </Link>
          </p>
          <a href="mailto: contact@kromatika.finance">
            contact@kromatika.finance
          </a>
        </div>
      </div>
      <div className="footer-mobile-screen">
        <nav className="navbar__nav">
          <ul className="navbar__list">
            {menuItems.map(({ icon, label, to, isExternal }, i) =>
              isExternal ? (
                <li className="navbar__item" key={i}>
                  <Link href={to}>
                    <a
                      href="https://blog.kromatika.finance/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                      {label}
                    </a>
                  </Link>
                </li>
              ) : (
                <li className="navbar__item" key={i}>
                  <Scroll
                    activeClass="active"
                    to={to}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {icon}
                    {label}
                  </Scroll>
                </li>
              )
            )}
            {secondaryLinks.map(({ label, to }, i) => (
              <li className="navbar__item" key={i}>
                <Link href={to}>
                  <a href={to} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Logo path="/" />
        <Socials />
        <Divider type="horizontal" w="188px" />
        <div className="copyright">
          <h3>Copyright &copy; {currentYear} All rights reserved.</h3>
          <p>
            Kromatika.Finance is brought to you by{" "}
            <Link href="https://ipfs.fleek.co/ipfs/QmVkBaizhwHoCEfhFRGFCepuFq6KnyP7LFxeVVKxPXaDLa?filename=CERTIFICATE%20OF%20INCORPORATION.pdf">
              <a target="_blank" rel="noopener noreferrer">
                <span>RadiantBlue Limited</span>
              </a>
            </Link>
          </p>
          <a href="mailto: contact@kromatika.finance">
            contact@kromatika.finance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
