import Image from "next/image";
import { useAccount } from "wagmi";
import { CreateGiftPack } from "~/components/CreateGiftPack";
import { PackContents } from "~/components/PackContents";
import { PackValue } from "~/components/PackValue";
import { WalletBalances } from "~/components/WalletBalances";
import { WalletComponents } from "~/components/utils/WalletComponents";
import { useGiftItems } from "~/contexts/GiftItemsContext";

export default function Home() {
  const { address } = useAccount();
  const { selectedAssets } = useGiftItems();

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Create a Gift Pack</h1>
      <PackValue />
      <PackContents />
      <CreateGiftPack 
        erc20s={selectedAssets.erc20} 
        erc721s={selectedAssets.erc721} 
        erc1155s={selectedAssets.erc1155} 
        ethAmount={selectedAssets.ethAmount} 
      />
      {address && <WalletBalances address={address} />}
    </>
  );
}
