import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { images } from "../constants/images";

const { audit, charts, coinKromatika } = images;

const CoreStrength = () => {
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
          <li>
            <figure>
              <Image
                src={coinKromatika}
                alt=""
                layout="fixed"
                width="32px"
                height="32px"
              />
            </figure>
            <p>
              the <strong>best value for your swaps</strong> by comparing
              multiple Dexs, picking the best rates for you.
            </p>
          </li>
          <li>
            <figure>
              <Image
                src={coinKromatika}
                alt=""
                layout="fixed"
                width="32px"
                height="32px"
              />
            </figure>
            <p>
              <strong>reduced slippage</strong> using multiple pools in our
              MetaDEX Aggregator, to execute your trade.
            </p>
          </li>
          <li>
            <figure>
              <Image
                src={coinKromatika}
                alt=""
                layout="fixed"
                width="32px"
                height="32px"
              />
            </figure>
            <p>
              <strong>
                automatically processed, decentralized limit orders.
              </strong>
            </p>
          </li>
          <li>
            <figure>
              <Image
                src={coinKromatika}
                alt=""
                layout="fixed"
                width="32px"
                height="32px"
              />
            </figure>
            <p>
              <strong>additional LP fees</strong> on every trade. Up to 5% of
              your order size.
            </p>
          </li>
        </ul>
        <p>
          Combined, you get <strong>more value for every trade</strong> you make
          thanks to Kromatika’s dApp!
        </p>
        <p>
          And if that isn’t enough, we took care of slippage, front running bots
          and fees so you no longer have to.
        </p>
      </div>

      <h3 className="subtitle">These are our core building blocks</h3>
      <div className="cards-wrapper">
        <div className="card">
          <div className="card__header">
            <figure>
              <Image src={audit} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Secure audited smart contracts</span>
            <span className="card__content">
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
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <figure>
              <Image src={charts} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Off-chain keepers at work</span>
            <span className="card__content">
              The Kromatika protocol utilizes the Chainlink Keepers to make sure
              orders are collected as soon as the price target of the limit
              order is reached. This service is provided off-chain, fully
              decentralized.
              <br />
              <br />
              You can read more about Chainlink Keeper and Kromatika’s full
              scale integration in &nbsp;
              <Link href="https://blog.kromatika.finance/kromatikas-new-generation-dex-now-supported-by-chainlink-keepers-e0b560e14e72">
                <a target="_blank" rel="noopener noreferrer">
                  this Medium article.
                </a>
              </Link>
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <figure>
              <Image src={coinKromatika} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">High utility $KROM token</span>
            <span className="card__content">
              $KROM is a utility token which is used for paying limit order fees
              and end-to-end usage of gasless mode (optional feature, coming
              very soon).
              <br />
              <br />
              For every limit order, the Kromatika protocol user only pays a
              service fee in $KROM, of the amount traded.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrength;
