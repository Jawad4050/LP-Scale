import Image from "next/image";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const HeroHeader = () => {
    return (
      <div>
        <div className="relative ">
          <div className="py-[47px] pt-[70px] lg:px-0 px-[20px] text-center mx-auto lg:w-[65%] bg-[url('/bg-herosection.svg')] bg-cover bg-center relative">
            <h1 className="lg:text-[66px] text-[30px] mb-0 font-bold-GilroySemiBold tracking-[-2%] font-[400] tracking-[1px] lg:leading-[80px]">Obtenez <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#A6FFE1,#B7D4FF,#FFBCE2)]">15x plus</span> de<br/><span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#A6FFE1,#B7D4FF,#FFBCE2)]">vrais</span> abonnés Instagram</h1>
            <p className="lg:text-[18px] text-[14px] font-[300] font-[400] mt-[16px] text-[#AEAFB3]">Aucun bot, ni spam, pas de faux followers.<br/><span className="text-white">Uniquement des abonnés actifs</span></p>
            <div className="flex items-center w-fit border border-[#1B1A1B] my-[25px] rounded-full mx-auto">
              <div>
                <Link href="" className="text-[16px] font-AeonikProMedium font-[500] tracking-[-0.1px] rounded-full bg-white text-black block w-fit lg:px-[20px] px-[16px] py-[10px] hover:bg-[#FFF2F2] flex items-center justify-center" >Start 7 Day Free Trial <FaAnglesRight className="ms-[6px]" /></Link>
              </div>
              <div className="my-auto">
                <Link href="" className="flex items-center my-auto lg:px-[20px] px-[16px] py-[10px] ">Watch Demo<Image src="/play-circle.svg" alt="" className="ms-[5px]" width={20} height={20}/></Link>
              </div>
            </div>
            <div className="mx-auto flex items-center justify-center mb-[35px]">
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
          </div>
        </div>
        
        <div className="relative">
          <div className="lg:w-[65%] mx-auto lg:mb-[-120px] p-[24px] ">
            <div className="lg:h-[540px] relative h-[240px] bg-gradient-to-r rounded-[24px] flex items-center justify-center p-[5px] from-[#BBFCE9] via-[#7DA7FA] to-[#F6CCEB] w-full">
              <div className="bg-black w-full h-full rounded-[22px] z-10 relative"></div>
              <span className="absolute inset-0 bg-gradient-to-r from-[#BBFCE9] via-[#7DA7FA] to-[#F6CCEB] z-1 blur-2xl opacity-50"></span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroHeader;