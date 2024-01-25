# Buildfolio

![Buildfolio Thumbnail](https://matt-pereira.vercel.app/readme/showcase.png)

A portfolio page starter template that make it quick and easy for builders to deploy their own showcase. See the example demo at https://matt-pereira.vercel.app/

## Features

- Landing showcase data pulled from ENS records with ensjs
- Display all projects submitted to the BuidlGuidl app
- Display additional projects added to buildfolio.config file
- Display of acheivement NFTs grouped by contract

## Getting Started

1. Clone repo

```
git clone https://github.com/MattPereira/Buildfolio.git
```

2. Install dependencies

```
   yarn install
```

3. Set env vars as instructed by `packages/nextjs/.env.example`
4. Edit the `packages/nextjs/buildfolio.config.js` file with your own personal information
   1. `ensName` is used to fetch ens records that are used for content of the `Landing` component
   2. `buidlGuidlWalletAddress` is used to send request to BuidlGuidl server that responds with all published builds
   3. `achievementNftsInfo` is used to send request to alchemy nft API endpoint that retrieves collection data
5. Deploy to Vercel

```
yarn vercel
```

6. Set environment variables on vercel
   1. Set the `NEXT_PUBLIC_VERCEL_URL` key to a value that looks like `matt-pereira.vercel.app`
   2. Set the `ALCHEMY_API_KEY` key to your alchemy api key

## Technology Stack

- Scaffold ETH-2
- Alchemy
- ENSjs
