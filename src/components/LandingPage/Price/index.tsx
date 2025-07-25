"use client";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";

const Price = () => {
  return (
    <div className="bg-[url('/price-bg.png')] bg-center bg-cover lg:py-[80px] py-[40px] lg:px-0 p-[20px]">
      <div className="lg:w-[65%] mx-auto">
        <span className="block px-[16px] py-[10px] mx-auto text[15px] bg-[rgb(255,255,255,10%)] w-fit rounded-full">
          Pricing
        </span>
        <h4 className="text-[46px] font-bold-GilroySemiBold tracking-[-0.5px] lg:leading-[52.9px] text-white text-center mt-[24px]">Our Pricing</h4>
        <p className="text-[20px] text-[#686868] text-center mt-[24px] lg:w-[50%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        <div className="lg:flex items-center gap-[8px] mt-[40px]">
          <div className="w-full rounded-[24px] lg:mb-0 mb-[14px]  backdrop-blur-xl bg-[rgb(255,255,255,6%)] p-[4px]">
            <div className="px-[24px] pt-[24px]">
              <h5 className="mb-[10px] text-white text-[20px] font-AeonikProMedium font-[500] tracking-[-0.5px]">Expert</h5>
              <p className="text-[#AEAFB3] text-[13px]">
                Découvrez les performances de<br/>notre multitude de services.
              </p>
            </div>
            <div className="p-[24px]">
              <span className="text-[32px] text-white font-AeonikProMedium font-[500] tracking-[-0.5px] leading-[52.9px] ">
              124.99€
              </span>
              <span className="text-[#C6C6C6] text-[13px]"> / mois</span>
              <div className="mt-[24px]">
                <ul>
                  <li className='white1818] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                    1 Compte Instagram
                  </li>
                  <li className='white1818] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                    25000 actions / jour
                  </li>
                  <li className='white1818] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                    Mass vues de stories
                  </li>
                  <li className='white1818] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                    Mass likes de stories
                  </li>
                  <li className='text-white font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                    Interactions avec les sondages
                  </li>
                  <li className='text-white font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                    Ciblage avec IA
                  </li>
                  <li className='text-white font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                    Rapports journaliers
                  </li>
                  <li className='text-white font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                    Conseiller dédié sur whatsapp
                  </li>
                  <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[16px]'>
                    <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                      <IoMdClose />
                    </span>
                    Follow / Unfollow
                  </li>
                  <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[16px]'>
                    <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                      <IoMdClose />
                    </span>
                    Welcome DM
                  </li>
                </ul>
              </div>
              <button className="rounded-full w-full py-[12px] mt-[24px] flex items-center justify-center text-center bg-white hover:bg-[#FFF2F2] text-black">
                Get Started for Free<FaAnglesRight className="ms-[6px]" />
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-r rounded-[12px] flex p-[5px] from-[#BBFCE9] via-[#7DA7FA] to-[#F6CCEB] w-full">
            <div className="w-full rounded-[11px] backdrop-blur-xl bg-[#2d2836] p-[4px]">
              <div className="px-[24px] pt-[24px]">
                <h5 className="mb-[10px] text-white text-[20px] font-AeonikProMedium font-[500] tracking-[-0.5px]">Expert</h5>
                <p className="text-[#AEAFB3] text-[13px]">
                  Découvrez les performances de<br/>notre multitude de services.
                </p>
              </div>
              <div className="p-[24px]">
                <span className="text-[32px] text-[#ffffff] font-AeonikProMedium font-[500] tracking-[-0.5px]">
                124.99€
                </span>
                <span className="text-[#C6C6C6] text-[13px]"> / mois</span>
                <div className="mt-[24px]">
                  <ul>
                    <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                    <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      1 Compte Instagram
                    </li>
                    <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                    <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      25 000 actions / jour
                    </li>
                    <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                    <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Mass vues de stories
                    </li>
                    <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                    <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Mass likes de stories
                    </li>
                    <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                    <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Interactions avec les sondages
                    </li>
                    <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                    <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Ciblage avec IA
                    </li>
                    <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Rapports journaliers
                    </li>
                    <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                      <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                        <FaCheck />
                      </span>
                      Conseiller dédié sur whatsapp
                    </li>
                    <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[16px]'>
                      <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                        <IoMdClose />
                      </span>
                      Follow / Unfollow
                    </li>
                    <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[16px]'>
                      <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                        <IoMdClose />
                      </span>
                      Welcome DM
                    </li>
                  </ul>
                </div>
                <button className="rounded-full w-full py-[12px] mt-[24px] flex items-center justify-center font-AeonikProMedium font-[500] tracking-[0px] text-center bg-[#F4EDFF] hover:bg-[#FFF2F2] text-black">
                Get Started for Free <FaAnglesRight className="ms-[6px]" />

                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[24px] rounded-[24px] backdrop-blur-xl bg-[rgb(255,255,255,6%)] mt-[12px]">
          <span className="text-[20px] block mb-[24px] text-white  font-AeonikProMedium font-[500] tracking-[-0.5px]">Consulting & Campaigns</span>
          <p className="text-[13px] text-white mb-[24px]">Découvrez les performances de notre multitude de services.</p>
          <div className="lg:flex">
            <div>
              <div className="lg:flex items-center mt-[12px]">
                  <li className='text-white font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                  <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Offres multi comptes
                  </li>
                  <li className='text-white lg:ms-2 font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                  <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Stratégies virales
                  </li>
                  <li className='text-white lg:ms-2 font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                  <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Mediace : mass dm
                  </li>
              </div>
              <div className="lg:flex items-center">
                  <li className='text-white font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                  <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Mediace : mother / slave
                  </li>
                  <li className='text-white lg:ms-2 font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                  <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Mediace : scraping
                  </li>
                  <li className='text-white lg:ms-2 font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                  <span className='block bg-gradient-to-r from-[#FFE2F2] via-[#0067FF] p-[1px] to-[#D5FFF1] w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                        <span className="block bg-black w-full h-full rounded-full text-white flex items-center justify-center"><FaCheck /></span>
                      </span>
                      Chatbot
                  </li>
              </div>
            </div>
            <div className="mt-auto ms-auto">
              <Link href="" className="bg-white text-black hover:bg-[#FFF2F2] font-AeonikProMedium font-[500] tracking-[-0.5px] lg:w-fit w-full text-center justify-center flex items-center rounded-full px-[18px] py-[12.5px]">Book a Call<FaAnglesRight className="ms-[6px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
