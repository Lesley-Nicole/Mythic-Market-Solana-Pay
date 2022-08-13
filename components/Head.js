import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Mythic Market</title>
      <meta name="title" content="Mythic Market" />
      <meta name="description" content="Get mythical merchandise using Solana Pay!" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mythic-market-solana-pay.vercel.app" />
      <meta property="og:title" content="Mythic Market" />
      <meta property="og:description" content="Get mythical merchandise using Solana Pay!" />
      <meta property="og:image" content="/public/demo.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mythic-market-solana-pay.vercel.app" />
      <meta property="twitter:title" content="Mythic Market" />
      <meta property="twitter:description" content="Get mythical merchandise using Solana Pay!" />
      <meta property="twitter:image" content="/public/demo.jpg" />
    </Head>
  );
}
