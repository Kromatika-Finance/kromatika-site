import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../constants/images";

const { audit, charts, coinKromatika } = images;

const CoreStrength = () => {
  // Core features data
  const coreFeatures = [
    {
      text: "the <strong>best value for your swaps</strong> by comparing multiple Dexs, picking the best rates for you."
    },
    {
      text: "<strong>reduced slippage</strong> using multiple pools in our MetaDEX Aggregator, to execute your trade."
    },
    {
      text: "<strong>automatically processed, decentralized limit orders.</strong>"
    },
    {
      text: "<strong>additional LP fees</strong> on your filled limit orders (FELO). Up to 9% depending on volatility of trading pair."
    },
    {
      text: "Combined, <strong>Kromatika's dApp provides you more</strong>, if not the best value for every trade you make !"
    }
  ];

  // Cards data
  const cardsData = [
    {
      image: audit,
      title: "Secure audited smart contracts",
      content: (
        <>
          The dapp was audited in multiple iterations in both internal and
          external testing environments. The external testing was performed
          by CertiK, Mythx and OpenZeppelin.
          <br />
          <br />
          Kromatika ranked in top 10% on the CertiK leaderboard, with an
          overall score of 87/100, security scored 88/100 and market &
          community 82/100. See full report &nbsp;
          <Link
            passHref={true}
            href="https://www.certik.com/projects/kromatika"
          >
            <a target="_blank" rel="noopener noreferrer">
              here.
            </a>
          </Link>
        </>
      )
    },
    {
      image: charts,
      title: "Off-chain keepers at work",
      content: (
        <>
          The Kromatika protocol utilizes the Chainlink Keepers to make sure
          orders are collected as soon as the price target of the limit
          order is reached. This service is provided off-chain, fully
          decentralized.
          <br />
          <br />
          You can read more about Chainlink Keeper and Kromatika's full
          scale integration in &nbsp;
          <Link href="https://blog.kromatika.finance/kromatikas-new-generation-dex-now-supported-by-chainlink-keepers-e0b560e14e72">
            <a target="_blank" rel="noopener noreferrer">
              this Medium article.
            </a>
          </Link>
        </>
      )
    },
    {
      image: coinKromatika,
      title: "High utility $KROM token",
      content: (
        <>
          $KROM is a utility token which is used for paying limit order fees
          and end-to-end usage of gasless mode (optional feature, coming
          very soon).
          <br />
          <br />
          For every limit order, the Kromatika protocol user only pays a
          service fee in $KROM, of the amount traded.
        </>
      )
    }
  ];

  return (
    <section
      id="section-core-strength"
      className="section-padding section-core-strength"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Core Strength</h2>
      </motion.div>

      <div className="hero__content">
        <p>Our innovative dApp brings you:</p>
        <ul>
          {coreFeatures.map((feature, index) => (
            <li key={index}>
              <figure>
                <Image
                  src={coinKromatika}
                  alt=""
                  layout="fixed"
                  width="32px"
                  height="32px"
                />
              </figure>
              <p dangerouslySetInnerHTML={{ __html: feature.text }} />
            </li>
          ))}
        </ul>
      </div>

      <h3 className="subtitle">These are our core building blocks</h3>
      <div className="cards-wrapper">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <div className="card__header">
              <figure>
                <Image src={card.image} alt="" />
              </figure>
            </div>
            <div className="card__body">
              <span className="card__title">{card.title}</span>
              <span className="card__content">{card.content}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreStrength;