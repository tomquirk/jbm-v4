import { defineConfig } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import dotenv from "dotenv";
import { sepolia } from "wagmi/chains";
import addresses from "./addresses.json";
dotenv.config();

const juiceboxContracts = Object.keys(addresses).map((name) => {
  return {
    name,
    address: {
      [sepolia.id]: (addresses as any)[name].sepolia as `0x${string}`,
    },
  };
});

export default defineConfig([
  {
    out: "src/lib/juicebox/hooks/contract.ts",
    plugins: [
      etherscan({
        apiKey: process.env.ETHERSCAN_API_KEY!,
        chainId: sepolia.id,
        contracts: [...juiceboxContracts],
      }),
      react(),
    ],
  },
]);