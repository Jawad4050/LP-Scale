import Image from "next/image";

const HowItWork = () => {
    return (
        <div className="lg:w-[65%] mx-auto lg:mt-[80px] my-[40px] lg:px-0 px-[20px]">
            <div className="block p-[5px] mx-auto font-[600] text-[15px] bg-transparent border border-[rgb(17,17,17,10%)] w-fit rounded-full overflow-hidden"><span className="shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_13%)] bg-white px-[16px] py-[6px] block text-[#5E5F6E] rounded-full">How it Works</span></div>
            <h4 className="text-[46px] font-bold-GilroySemiBold tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] text-center my-[24px]">How it Works</h4>
            <p className="text-[18px] text-[#999999] text-center mb-[40px] lg:w-[50%] mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <div className="lg:flex items-center mb-[40px] w-full">
                <div className="w-full lg:mb-0 mb-[40px]">
                    <span className="text-[#0DB870] mb-[16px]">Step 1</span>
                    <h5 className="text-black text-[32px] mb-[16px] font-bold-GilroySemiBold">Connexion du compte</h5>
                    <p className="text-[#999999] text-[18px] mb-0">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
                </div>
                <div className="w-full">
                    <Image alt="" src="/how-it-work/img-1.svg" width={450} height={450} className="w-full" />
                </div>
            </div>
            <div className="lg:flex inline-grid items-center mb-[40px] w-full">
                <div className="w-full lg:order-1 order-2">
                    <Image alt="" src="/how-it-work/img-2.svg" width={450} height={450} className="w-full" />
                </div>
                <div className="w-full lg:mb-0 mb-[40px] lg:order-2 order-1">
                    <div className="lg:ps-9">
                        <span className="text-[#0DB870] mb-[16px]">Step 2</span>
                        <h5 className="text-black text-[32px] mb-[16px] font-bold-GilroySemiBold">Configuration des cibles</h5>
                        <p className="text-[#999999] text-[18px] mb-0">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-center w-full">
                <div className="w-full lg:mb-0 mb-[40px]">
                    <span className="text-[#0DB870] mb-[16px]">Step 3</span>
                    <h5 className="text-black text-[32px] mb-[16px] font-bold-GilroySemiBold">Lancement du compte</h5>
                    <p className="text-[#999999] text-[18px] mb-0">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
                </div>
                <div className="w-full">
                    <Image alt="" src="/how-it-work/img-3.svg" width={450} height={450} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default HowItWork;