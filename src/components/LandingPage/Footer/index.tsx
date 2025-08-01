import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="lg:w-[65%] pt-5 mx-auto lg:px-0 px-10">
                <div className="lg:flex justify-between lg:pb-[80px] pb-5">
                    <div className="lg:mt-0 mt-5 ">
                        <Image src="/logo.svg" alt="" width={91} height={24} />
                    </div>
                    <div className="lg:mt-0 mt-6 lg:flex">
                        <div>
                            <h5 className="text-white font-[500]">Navigation</h5>
                            <Link href="" className="block text-[#686868] font-[400] text-[15px.25] mt-[16px]">footer-link</Link>
                            <Link href="" className="block text-[#686868] font-[400] text-[15px.25] mt-[16px]">footer-link</Link>
                            <Link href="" className="block text-[#686868] font-[400] text-[15px.25] mt-[16px]">footer-link</Link>
                        </div>
                        <div className="lg:mt-0 mt-5 lg:ms-[80px]">
                            <h5 className="text-white font-[500]">Informations</h5>
                            <Link href="" className="block text-[#686868] font-[400] text-[15px.25] mt-[16px]">footer-link</Link>
                            <Link href="" className="block text-[#686868] font-[400] text-[15px.25] mt-[16px]">footer-link</Link>
                            <Link href="" className="block text-[#686868] font-[400] text-[15px.25] mt-[16px]">footer-link</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-0 mt-5 flex items-center justify-between pb-5 text-[#686868] text-[15.25px]">
                    <span className="lg:block font-[400]">© 2024 Upstar All rights reserved.</span>
                    <span className="lg:block hidden font-[400]">Design by UserSquared.</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;