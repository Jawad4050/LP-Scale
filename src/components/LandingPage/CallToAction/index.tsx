import Image from "next/image";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


const CallToAction = () => {
    return (
        <div className="lg:w-[65%] w-[90%] mx-auto relative lg:top-[-75px]">
            <div className="bg-gradient-to-r rounded-[12px] z-10 relative flex p-[5px] from-[#BBFCE9] via-[#7DA7FA] to-[#F6CCEB] w-full">
                <div className="rounded-[12px] bg-black w-full lg:p-[73px] p-5 bg-center bg-cover overflow-hidden">
                    <h3 className="lg:text-[66px] text-[36px] mb-[24px]  font-bold-GilroySemiBold tracking-[-0.5px] lg:leading-[52.9px] text-[#ffffff] text-center">Call to Action</h3>
                    <p className="text-[18px] text-[rgb(255,255,255,75%)] text-center mt-[24px] mb-[40px]">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor</p>
                    <Link href="" className="text-[16px]  font-AeonikProMedium font-[500] tracking-[-0.1px] rounded-full bg-white text-black block w-fit mx-auto mt-4 px-[20px] py-[10px] hover:bg-[#FFF2F2] flex items-center justify-center" >Start 7 Day Free Trial <FaAnglesRight className="ms-[6px]" /></Link>
                    <div className="mx-auto flex items-center justify-center my-[35px]">
                        <div className='flex items-center'>
                            <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover' />
                            <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-15px]' />
                            <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-15px]' />
                            <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-15px]' />
                            <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-15px]' />
                        </div>
                        <div className="ms-4">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                            <IoStar className="text-[#34B57F]" />
                            <IoStar className="text-[#34B57F]" />
                            <IoStar className="text-[#34B57F]" />
                            <IoStar className="text-[#34B57F]" />
                            <IoStar className="text-[#34B57F]" />
                            </div>
                            <span className='text-[16px] font-[500] text-white block text-start'>+25’000 users</span>
                        </div>
                    </div>
                    <div className="lg:flex items-center gap-[24px]">
                        <div className="w-full bg-[#0F1013] rounded-[24px] py-[29px] px-[24px]">
                            <span className="text-[10px] text-[#79797A]">Your Instagram</span>
                            <h5 className="text-[19px] text-[#BFBFBF] mt-[9px] mb-[5px]">Before Using Scalezen</h5>
                            <span className="text-[14px] text-[#79797A]">Less followers, less engagement, less growth</span>
                            <div className="flex items-center mx-auto justify-center mt-[30px]">
                                <span className="text-[16px] block">benjamin.kdot</span>
                                <Image alt="" src="/verified.svg" height={15} width={15} className="ms-[4px]" />
                            </div>
                            <div className="flex items-center mt-[12px]">
                                <div className="me-[18px] w-[120px]">
                                    <Image alt="" src="/Avatar.svg" height={88} width={88} className="w-[88px] h-[88px] rounded-full object-fit" />
                                </div>
                                <div className="w-full flex items-center lg:gap-[34px] gap-[20px]">
                                    <div className="w-full text-center">
                                        <span className="block mb-[5px] text-[16px] text-[#BFBFBF]">792</span>
                                        <span className="block text-[16px] text-[#BFBFBF]">Posts</span>
                                    </div>
                                    <div className="w-full text-center">
                                        <span className="block mb-[5px] text-[16px] text-[#BFBFBF]">6,443</span>
                                        <span className="block text-[16px] text-[#BFBFBF]">Followers</span>
                                    </div>
                                    <div className="w-full text-center">
                                        <span className="block mb-[5px] text-[16px] text-[#BFBFBF]">2,836</span>
                                        <span className="block text-[16px] text-[#BFBFBF]">Following</span>
                                    </div>
                                </div>
                            </div>
                            <span className="block text-[16px] text-[#BFBFBF] mb-[4px] mt-[10px]">Benjamin K.</span>
                            <span className="block text-[16px] text-[#79797A] mb-[2px]">Entrepreneur</span>
                            <span className="block text-[16px] text-[#79797A] mb-[4px]">Based in Switzerland</span>
                            <span className="block text-[16px] text-[#BFBFBF]">https://www.benjamink.com/</span>
                            <div>
                                <span className="block text-[16px] text-[#BFBFBF] text-center mt-[8px]">Message</span>
                            </div>
                            <div className="flex items-center mt-[22px]">
                                <div className="w-full text-center">
                                    <Image alt="" src="/call-to-action/icon-1.svg" className="mx-auto" height={23} width={23} />
                                </div>
                                <div className="w-full text-center">
                                    <Image alt="" src="/call-to-action/icon-2.svg" className="mx-auto" height={23} width={23} />
                                </div>
                                <div className="w-full text-center">
                                    <Image alt="" src="/call-to-action/icon-3.svg" className="mx-auto" height={23} width={23} />
                                </div>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <span className='block bg-gradient-to-r lg:rotate-0 rotate-[90deg] from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] mx-auto w-[32px] h-[32px] text-white text-[9px] flex items-center justify-center rounded-full'>
                                <span className="block bg-[#000000] w-full h-full rounded-full text-white text-[18px] flex items-center justify-center"><FaArrowRight /></span>
                            </span>
                        </div>
                        <div className="w-full bg-gradient-to-r relative from-[#FFE2F2] via-[#0067FF] p-[3px] to-[#D5FFF1] rounded-[24px] flex items-center justify-center">
                            <div className="w-full bg-[#0F1013] rounded-[24px] py-[29px] px-[24px] ">
                                <span className="text-[10px] text-[#79797A]">Your Instagram</span>
                                <h5 className="text-[19px] text-[#BFBFBF] mt-[9px] mb-[5px]">Before Using Scalezen</h5>
                                <span className="text-[14px] text-[#79797A]">Less followers, less engagement, less growth</span>
                                <div className="flex items-center mx-auto justify-center mt-[30px]">
                                    <span className="text-[16px] block">benjamin.kdot</span>
                                    <Image alt="" src="/verified.svg" height={15} width={15} className="ms-[4px]" />
                                </div>
                                <div className="flex items-center mt-[12px]">
                                    <div className="me-[18px] w-[120px]">
                                        <Image alt="" src="/Avatar.svg" height={88} width={88} className="w-[88px] h-[88px] rounded-full object-cover" />
                                    </div>
                                    <div className="w-full flex items-center lg:gap-[34px] gap-[20px]">
                                        <div className="w-full text-center">
                                            <span className="block mb-[5px] text-[16px] text-[#BFBFBF]">792</span>
                                            <span className="block text-[16px] text-[#BFBFBF]">Posts</span>
                                        </div>
                                        <div className="w-full text-center">
                                            <span className="block mb-[5px] text-[16px] text-[#BFBFBF]">6,443</span>
                                            <span className="block text-[16px] text-[#BFBFBF]">Followers</span>
                                        </div>
                                        <div className="w-full text-center">
                                            <span className="block mb-[5px] text-[16px] text-[#BFBFBF]">2,836</span>
                                            <span className="block text-[16px] text-[#BFBFBF]">Following</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="block text-[16px] text-[#BFBFBF] mb-[4px] mt-[10px]">Benjamin K.</span>
                                <span className="block text-[16px] text-[#79797A] mb-[2px]">Entrepreneur</span>
                                <span className="block text-[16px] text-[#79797A] mb-[4px]">Based in Switzerland</span>
                                <span className="block text-[16px] text-[#BFBFBF]">https://www.benjamink.com/</span>
                                <div>
                                    <span className="block text-[16px] text-[#BFBFBF] text-center mt-[8px]">Message</span>
                                </div>
                                <div className="flex items-center mt-[22px]">
                                    <div className="w-full text-center">
                                        <Image alt="" src="/call-to-action/icon-1.svg" className="mx-auto" height={23} width={23} />
                                    </div>
                                    <div className="w-full text-center">
                                        <Image alt="" src="/call-to-action/icon-2.svg" className="mx-auto" height={23} width={23} />
                                    </div>
                                    <div className="w-full text-center">
                                        <Image alt="" src="/call-to-action/icon-3.svg" className="mx-auto" height={23} width={23} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="absolute inset-0 bg-gradient-to-r from-[#BBFCE9] via-[#7DA7FA] to-[#F6CCEB] z-1 blur-2xl opacity-50"></span>
        </div>
    );
};

export default CallToAction;