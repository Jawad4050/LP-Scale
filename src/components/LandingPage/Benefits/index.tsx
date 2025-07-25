import Image from "next/image";
import { FaAnglesRight } from "react-icons/fa6";


const Benefits = () => {
    return (
        <div className="lg:w-[65%] lg:px-0 lg:pt-[180px] pt-[40px] px-[20px] mx-auto">
            <div className="block p-[5px] mx-auto font-[600] text-[15px] bg-transparent border border-[rgb(17,17,17,10%)] w-fit rounded-full overflow-hidden"><span className="shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_13%)] bg-white px-[16px] py-[6px] block text-[#5E5F6E] rounded-full">Benefits</span></div>
            <h4 className="lg:text-[48px] text-[36px] font-bold-GilroySemiBold tracking-[-0.5px] lg:leading-[52.9px] leading-[42.9px] text-[#161518] text-center mt-[32px]">Setup and Track<br/>your Instagram Growth</h4>
            <p className="text-[18px] font-[500] text-[#686868] text-center mt-[24px] lg:w-[50%] mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <button className="bg-[#000000] px-[18px] mx-auto block mt-[24px] py-[14px] text-white text-[16px] rounded-full flex items-center">Get Started for Free <FaAnglesRight className="ms-[6px]" /></button>
            <div className="mt-[40px] lg:flex gap-[8px]">
                <div className="border border-[#EDF0F3] shadow-[0px_4px_18px_0px_rgba(42,_51,_70,_4%)] lg:w-[63%] lg:mb-0 mb-[8px] w-full rounded-[18px] bg-white">
                    <Image alt="" src="../benefits/img-1.svg" width={800} height={158} className="w-full"/>
                    <div className="p-[24px] pt-[15px]">
                        <h4 className="mb-0 text-[#000000]">Ciblez des comptes</h4>
                        <p className="text-[#999999] mt-[10px] mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor re natus error sit voluptatem in dolor re natus error sit</p>
                    </div>
                </div>
                <div className="border border-[#EDF0F3] shadow-[0px_4px_18px_0px_rgba(42,_51,_70,_4%)] lg:w-[37%] w-full rounded-[18px] bg-white">
                    <Image alt="" src="../benefits/img-2.svg" width={500} height={158} className="w-full"/>
                    <div className="p-[24px] pt-[15px]">
                        <h4 className="mb-0 text-[#000000]">Votre progression en live</h4>
                        <p className="text-[#999999] mt-[10px] mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor re</p>
                    </div>
                </div>
            </div>
            <div className="mt-[8px] lg:flex gap-[8px]">
                <div className="border border-[#EDF0F3] shadow-[0px_4px_18px_0px_rgba(42,_51,_70,_4%)] lg:w-[37%] lg:mb-0 mb-[8px] w-full rounded-[18px] bg-white">
                    <Image alt="" src="../benefits/img-3.svg" width={500} height={158} className="w-full"/>
                    <div className="p-[24px] pt-0">
                        <h4 className="mb-0 text-[#000000]">Gérez les actions</h4>
                        <p className="text-[#999999] mt-[10px] mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor re</p>
                    </div>
                </div>
                <div className="border border-[#EDF0F3] shadow-[0px_4px_18px_0px_rgba(42,_51,_70,_4%)] lg:w-[63%] w-full rounded-[18px] bg-white">
                    <Image alt="" src="../benefits/img-4.svg" width={800} height={158} className="w-full"/>
                    <div className="p-[24px] pt-0">
                        <h4 className="mb-0 text-[#000000]">Votre progression en live</h4>
                        <p className="text-[#999999] mt-[10px] mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem in dolor re</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;