import { ActionKind } from "../context/AppProvider";
import { DispatchType } from "../types/Misc";
import { connectToMetamask } from "./ethers";
import notify from "./notify";


export const connectWallet = async (dispatch: React.Dispatch<DispatchType>) => {
  console.log('connecting to metamask');
  const { accounts } = await connectToMetamask()
  if (accounts.length) {
    dispatch({ type: ActionKind.SET_USER, payload: accounts[0] })
  } else {
    notify('Unable to connect to Metamask', 'error')
  }
}