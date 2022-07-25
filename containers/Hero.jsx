import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="section-hero" className="hero">
      <h1 className="hero__title">The complete MetaDex Aggregator</h1>
      <p className="hero__subtitle">
        Makes DEX trading simple, accessible, and affordable on Ethereum L1 and
        L2’s.
      </p>
      <div className="btn-group">
        <Link passHref={true} href="https://app.kromatika.finance/#/pool">
          <motion.a
            className="btn btn-solid"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            Launch Dapp
          </motion.a>
        </Link>
        <Link passHref={true} href="#section-token">
          <motion.a
            className="btn btn-outline"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            Discover $KROM
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
