import { ethers } from 'ethers';
import { abi, address } from '../library/contract';

export const connectToMetamask = async () => {
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const accounts = await provider.send('eth_requestAccounts', []);
  return { provider, signer, accounts };
};

export const getWallet = async () => {
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_accounts', []);
  const signer = provider.getSigner()
  return { provider, signer };
};

const getContract = async () => {
  const { signer } = await getWallet();
  const contract = new ethers.Contract(address, abi, signer);
  return contract;
}

export const safeMintToken = async (address: string, name: string) => {
  const contract = await getContract();
  try {
    const tx = await contract.safeMint(address, name);
    const result = await tx.wait();
    if (result.status === 1) {
      return true;
    } else {
      return false;
    }
  } catch (err: any) {
    return false;
  }
}

export const getTokenURI = async (address: string) => {
  const contract = await getContract();
  try {
    const tokenURIString: string = await contract.getTokenURIByAddress(address);
    // remove data:application/json;base64, prefix from tokenURIString
    const tokenURIBase64 = tokenURIString.substring(tokenURIString.indexOf(',') + 1);
    // decode tokenURIBase64 from base64 to JSON object
    const tokenURI = JSON.parse(window.atob(tokenURIBase64));
    console.log(tokenURI);
    return tokenURI;
  } catch (err) {
    console.log(err);
    return null;
  }
}