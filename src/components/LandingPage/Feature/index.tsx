import Image from "next/image";
const Feature = () => {
    return (
        
        <div className="lg:px-0 px-[20px] lg:py-[0px] py-[40px] lg:mt-[80px] mt-[20px]">
            <div className="lg:w-[65%] mx-auto">
                <span className="block px-[16px] py-[10px] mx-auto  text[15px] bg-[rgb(255,255,255,10%)] w-fit rounded-full">Features</span>
                <h4 className="lg:text-[46px] text-[38px] font-bold-GilroySemiBold tracking-[-0.5px] lg:leading-[52.9px] text-center my-[24px] text-white">All our Features</h4>
                <p className="text-[20px] text-[#8B8B8B] text-center font-[inter] font-[500] lg:w-[50%] mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                <div className="lg:flex gap-[8px] mb-[8px] mt-[40px]">
                    <div className="w-full lg:mb-0 mb-[24px] p-[24px] rounded-[16px] border border-[#202021]">
                        <Image alt="" src="../features/img-1.svg" width={433} height={187} className="w-full"/>
                        <h5 className="mb-[8px] text-white text-[18px] pt-[24px]">Voir les stories en masse</h5>
                        <p className="mb-0 text-[18px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor re  iste natus error sit dowod</p>
                    </div>
                    <div className="w-full lg:mb-0 mb-[24px] p-[24px] rounded-[16px] border border-[#202021]">
                        <Image alt="" src="../features/img-2.svg" width={433} height={187} className="w-full"/>
                        <h5 className="mb-[8px] text-white text-[18px] pt-[24px]">Likes de story</h5>
                        <p className="mb-0 text-[18px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor re  iste natus error sit dowod</p>
                    </div>
                </div>
                <div className="lg:flex gap-[8px] mb-[8px]">
                    <div className="lg:w-[63%] w-full lg:mb-0 mb-[24px] p-[24px] pt-0 rounded-[16px] border border-[#202021]">
                        <Image alt="" src="../features/img-3.svg" width={433} height={187} className="w-full"/>
                        <h5 className="mb-[8px] text-white text-[18px] pt-[24px]">Follow / Unfollow</h5>
                        <p className="mb-0 text-[18px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor re  iste natus error sit dowod</p>
                    </div>
                    <div className="lg:w-[37%] w-full lg:mb-0 mb-[24px] p-[24px] pe-0 rounded-[16px] border border-[#202021]">
                        <Image alt="" src="../features/img-4.svg" width={433} height={187} className="w-full"/>
                        <div className="pe-[24px]">
                            <h5 className="mb-[8px] text-white text-[18px] pt-[24px]">Flows de DMs</h5>
                            <p className="mb-0 text-[18px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor re </p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex gap-[8px] mb-[8px]">
                    <div className="lg:w-[37%] w-full lg:mb-0 mb-[24px] p-[24px] pe-0 rounded-[16px] border border-[#202021]">
                        <Image alt="" src="/features/img-5.png" width={433} height={187} className="w-full"/>
                        <div className="pe-[24px]">
                            <h5 className="mb-[8px] text-white text-[18px] pt-[24px]">Réactions aux Stories</h5>
                            <p className="mb-0 text-[18px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste<br/>natus error sit voluptatem in dolor re </p>
                        </div>
                    </div>
                    <div className="lg:w-[63%] w-full lg:mb-0 mb-[24px] p-[24px] pt-0 rounded-[16px] border border-[#202021]">
                        <Image alt="" src="../features/img-6.svg" width={433} height={187} className="w-full"/>
                        <h5 className="mb-[8px] text-white text-[18px] pt-[24px]">Interactions avec Sondage</h5>
                        <p className="mb-0 text-[18px] text-[#AEAFB3]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor re  iste natus error sit dowod </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;