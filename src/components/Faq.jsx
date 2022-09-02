import ConnectUs from "./ConnectUs";
import FaqText from "./FaqText";

const Faq = () => {
  return (
    <>
      <div className="mt-24 normal-case">
        <div className="md:text-[32px] lg:text-[40px] text-2xl uppercase">Faq</div>

        <div className="flex flex-col lg:hidden">
          <FaqText
            text={true}
            margin="md:mt-6 mt-5"
            header='I am a holder of "G3NTPANDAS", what do I get?'
            answer={`You have allowlist for all future IP Labs projects, including WL’s and airdrops. \u000AYou’ll receive limited edition designer art toys, hoodies and accessories.`}
          />
          <FaqText
            text={true}
            margin="md:mt-6 mt-5"
            header="When is the mint?"
            answer="Public mint is LIVE! "
          />
          <FaqText
                text={true}
                margin="md:mt-6 mt-5"
                header="What are secondary royalties and how will they be used?"
                answer={`IP Labs will receive 7.5% of all secondary sales. The proceeds will be used to empower the community and core team. \u000AWe will use the fund to hire more full-time team members, fund operations, and deliver even more value to our community!`}
              />
              <FaqText
                text={true}
                margin="md:mt-6 mt-5"
                header="What about PANDAO?"
                answer={"These NFTs entitle their owner to participate in the governance of the PANDAO, as well as granting additional benefits relating to ventures created by the DAO. \u000AFull details coming soon."}
              />
              <FaqText
                text={true}
                margin="md:mt-6 mt-5"
                header="What intellectual property rights do THE G3NTPANDA  hodlers receive?"
                answer={
                  "Owners of ”IP” have full commercial art rights for the G3NTPANDA NFT they own. \u000AFull details coming soon."
                }
              />
          <FaqText
            text={false}
            margin="mt-0"
            header="How much is the mint?"
            answer="You can have it for free, and you gotta pay for gas"
          />
        </div>




        <div className="lg:flex flex-row hidden">
          <div className="flex flex-col">
            <div className="absolute left-[82px] w-[42%] mb-32">
              <FaqText
                text={true}
                margin="mt-6"
                header='I am a holder of "G3NTPANDAS", what do I get?'
                answer={`You have allowlist for all future IP Labs projects, including WL’s and airdrops. \u000AYou’ll receive limited edition designer art toys, hoodies and accessories.`}
              />
              <FaqText
                text={true}
                margin="mt-8"
                header="When is the mint?"
                answer="Public mint is LIVE! "
              />
              <FaqText
                text={false}
                margin="mt-0"
                header="How much is the mint?"
                answer="You can have it for free, and you gotta pay for gas"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="absolute right-[82px] w-[43%] mb-32">
              <FaqText
                text={true}
                margin="mt-6"
                header="What are secondary royalties and how will they be used?"
                answer={`IP Labs will receive 7.5% of all secondary sales. The proceeds will be used to empower the community and core team. \u000AWe will use the fund to hire more full-time team members, fund operations, and deliver even more value to our community!`}
              />
              <FaqText
                text={true}
                margin="mt-8"
                header="What about PANDAO?"
                answer={"These NFTs entitle their owner to participate in the governance of the PANDAO, as well as granting additional benefits relating to ventures created by the DAO. \u000AFull details coming soon."}
              />
              <FaqText
                text={false}
                margin="mt-0"
                header="What intellectual property rights do THE G3NTPANDA  hodlers receive?"
                answer={
                  "Owners of ”IP” have full commercial art rights for the G3NTPANDA NFT they own. \u000AFull details coming soon."
                }
              />
              <div className="lg:block hidden">
              <ConnectUs />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
