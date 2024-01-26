# [Buildfolio](https://matt-pereira.vercel.app)

![Buildfolio Thumbnail](https://matt-pereira.vercel.app/thumbnail.jpg)

A portfolio page starter template for web3 developers. The idea is to make it easy for builders to change a few lines of code in a configuration file and then deploy their web3 own portfolio site that they can share with employers or in hackathon group chats when looking to form teams.

See the example demo at https://matt-pereira.vercel.app/

## Features

All content on the page is controlled by the `packages/nextjs/buildfolio.config.js` file

### Landing

- `ensName` is used to fetch ens records that are used for content of the `Landing` component

### About

- `aboutItems` is where you can edit your about section paragraphs

### Projects

- `buidlGuidlWalletAddress` is used to fetch data for your builds published on the BuidlGuidl app
- `web2ProjectsData` is used to display any other projects you want

### Experience

- `experienceItems` array controls the content displayed in this section

### Acheivements

- `achievementNftsInfo` is used to fetch all NFTs for a given NFT collection address and owner wallet address using the Alchemy NFT API

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
4. Edit the `packages/nextjs/buildfolio.config.js` file with your own information
5. Deploy to Vercel

```
yarn vercel
```

6. Set environment variables on vercel
   1. Set the `NEXT_PUBLIC_VERCEL_URL` key to a value that looks like `matt-pereira.vercel.app`
   2. Set the `ALCHEMY_API_KEY` key to your alchemy api key

## Technology Stack

- Scaffold ETH-2
- Alchemy NFT API
- ENSjs
