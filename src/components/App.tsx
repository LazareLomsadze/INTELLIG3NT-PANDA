import { useEffect, useState } from "react";
import React from "react";

const App: React.FC = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] =
    useState<boolean>(false);
  const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

  useEffect(() => {
    if ((window as any).ethereum) {
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  }, []);

  //Does the User have an Ethereum wallet/account?
  async function connectMetamaskWallet(): Promise<void> {
    //to get around type checking
    (window as any).ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: string[]) => {
        setEthereumAccount(accounts[0]);
      })
      .catch((error: any) => {
        console.log(`Something went wrong: ${error}`);
      });
  }

  if (ethereumAccount === null) {
    return (
      <div className="App App-header ">
        {isMetamaskInstalled ? (
          <div
            className="bg-[rgba(255,255,255,0.1)] md:w-[232px] small:w-[180px] small:h-[50px] small:p-[18px_16px] w-[208px] h-[58px] lg:w-[268px] md:h-[61px] rounded-rou gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-[20px_26px] lg:p-[20px_40px]  hover:bg-[rgba(255,255,255,0.5)] cursor-pointer"
            onClick={connectMetamaskWallet}
          >
            <button onClick={connectMetamaskWallet}>CONNECT WALLET</button>
          </div>
        ) : (
					<a href="https://metamask.io/download/" target='blank' className="linki">
          <div 
            className="bg-[rgba(255,255,255,0.1)] md:w-[232px] small:w-[180px] small:h-[50px] small:p-[18px_16px] w-[208px] h-[58px] lg:w-[268px] md:h-[61px] rounded-rou gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-[20px_26px] lg:p-[20px_40px]  hover:bg-[rgba(255,255,255,0.5)] cursor-pointer"
          >
            <p>CONNECT WALLET </p>
          </div>
					</a>
        )}
      </div>
    );
  }

  return (
    <div className="font-termina">
      <header className="bg-[rgba(255,255,255,0.1)] md:w-[232px] small:w-[180px] small:h-[50px] small:p-[18px_18px] w-[208px] h-[58px] lg:w-[268px] md:h-[61px] rounded-rou gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-[20px_32px] lg:p-[20px_40px]  hover:bg-[rgba(255,255,255,0.5)] ">
        <p className="overflow-hidden whitespace-nowrap text-ellipsis capitalize">
          {ethereumAccount}
        </p>
      </header>
    </div>
  );
};

export default App;
