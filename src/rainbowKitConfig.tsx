"use client"

import {getDefaultConfig} from "@rainbow-me/rainbowkit";
import {anvil, zksync} from 'wagmi/chains';

export default getDefaultConfig ({
  appName: "TSender",
  projectId: "6e252f7eaf8bf89566cae8d912ab360f",
  chains: [anvil, zksync],
  ssr: false,
});
