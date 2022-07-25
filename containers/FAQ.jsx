import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { Accordion } from "../components";

const faqs = [
  {
    label: "What are $KROM tokenomics?",
    content: (
      <>
        Initially 100M KROM tokens were in existence. Liquidity has been
        deployed to the Uniswap protocol (original Uniswap LP token is&nbsp;
        <Link href="https://etherscan.io/tx/0x26c782eb49c42979c259dda936f28b77ae8dbeef16da3ec341d06cb437034ac4">
          <a target="_blank" rel="noopener noreferrer">
            burned
          </a>
        </Link>
        ), to Arbitrum, Optimism and Polygon to provide layer 2 liquidity. 20M
        (20%) is added on Gnosis, a multi-signature wallet.
      </>
    ),
  },
  {
    label: "Is $KROM token a utility token?",
    content: [
      "Yes! $KROM is a utility token as it is used to pay the fee for all Kromatika DEX limit orders and end-to-end usage of gasless mode (optional feature, coming very soon).",
      "You can also use our swap aggregator, for this you only need to hold ETH in your wallet to cover gasfees. Again use normal or pro-mode to fill out your swap and click swap. Your swap is executed in a heartbeat!",
    ],
  },
  {
    label: "How do I use Kromatika DEX?",
    content: [
      "Connect your wallet. Depending on whether you wish to use the swap or the limit order feature, you will need $ETH and $KROM in your wallet. The interface is just as straightforward as using Uniswap for example, but with our limit order feature. Use normal or pro-mode to set your limit order and click trade. When the market conditions match your order, Kromatika DEX will execute the trade automatically.",
    ],
  },
  {
    label: "Why and how much $KROM do I have to pay a fee for limit orders?",
    content: (
      <>
        The fee is dependent on the current gas fee. The maximum fee is
        calculated as follows: base fee * gas fee * protocol fee. As you can
        see, we don’t take the amount that is being traded into consideration.
        This offers you the opportunity to trade at a very interesting, fixed
        price. Fixed, as in not depending on your amount traded. We refer to
        our&nbsp;
        <Link href="https://docs.kromatika.finance/fundamentals/how-it-works/maximum-service-fee">
          <a target="_blank" rel="noopener noreferrer">
            docs
          </a>
        </Link>
        &nbsp; for more details on the exact calculation.
      </>
    ),
  },
  {
    label: "Is the KROM token code audited?",
    content: [
      "Yes! KROM token is a non-mintable ERC 20 token audited by OpenZeppelin, MythX and CertiK.",
    ],
  },
  {
    label: "Do I have to own $KROM tokens to use Kromatika DEX?",
    content: [
      "Yes and no :) If you wish to use only the swap aggregator, you don’t need to own $KROM. However, if you wish to use our limit order feature, you will need $KROM to cover the service fee.",
    ],
  },
  {
    label: "Why do I have to pay a fee for limit orders?",
    content: [
      "Kromatika requires a fee to cover the cost of the trade processor (ChainLink Keepers). When a trade is processed $KROM is deducted from the protocol user’s balance on the dapp and sent to the trade processor to cover the gas cost. Hence, the $KROM tokens are circulating: DEX Liquidity Pool -> User -> Kromatika Protocol -> DEX Liquidity Pool.",
    ],
  },
  {
    label: "Is Kromatika code open-source?",
    content: (
      <>
        Yes! Kromatikas entire codebase is open-sourced and published on&nbsp;
        <Link href="https://github.com/Kromatika-Finance/">
          <a target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </Link>
        &nbsp; under the MIT and GPL-3.0 license. Anybody can see how it was
        developed, built and who are the code contributors. Developers are
        encouraged to submit a PR if they are willing to contribute.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <section id="section-faq" className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">FAQ</h2>
      </motion.div>
      <div className="container faqs">
        {faqs.map(({ label, content }, i) => (
          <Accordion label={label} content={content} key={i} id={i} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
