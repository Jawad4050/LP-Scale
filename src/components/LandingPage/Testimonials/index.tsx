import Image from "next/image";
import { IoStar } from "react-icons/io5";
const Testimonials = () => {
    const data = [
        {
          id: 1,
          followers: '+9’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Benjamin B.',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 2,
          followers: '+8’500 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'John Doe',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 4,
        },
        {
          id: 3,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 4,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 5,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 6,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 7,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 8,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 9,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 10,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 11,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        },
        {
          id: 12,
          followers: '+7’000 Followers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          name: 'Jane Smith',
          title: 'CEO @ Courchevel',
          imageSrc: 'Avatar.svg',
          stars: 5,
        }
      ];
    return (
        
        <div className="rounded-[36px] lg:px-0 px-[20px]  lg:mt-[80px] mt-[40px]">
            <div className="lg:w-[65%] mx-auto">
            <div className="block p-[5px] mx-auto font-[600] text-[15px] bg-transparent border border-[rgb(17,17,17,10%)] w-fit rounded-full overflow-hidden"><span className="shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_13%)] bg-white px-[16px] py-[6px] block text-[#5E5F6E] rounded-full">Testimonials</span></div>
            <h4 className="text-[46px] font-bold-GilroySemiBold tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] text-center my-[24px]">Our clients love us</h4>
            <p className="text-[#999999] text-[18px] mb-0 text-center mb-[40px] lg:w-[50%] mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <div className="lg:grid grid-cols-3 gap-[8px] mt-[40px] lg:overflow-hidden overflow-auto">
                {data.map((item) => (
                    <div key={item.id} className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px]">
                        <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                            {Array.from({ length: item.stars }).map((_, index) => (
                            <IoStar key={index} className="text-[#34B57F]" />
                            ))}
                        </div>
                        <span className="block text-[24px] my-[16px] text-black font-bold-GilroySemiBold">{item.followers}</span>
                        <p className="text-[#999999] text-[18px] mb-[16px]">{item.description}</p>
                        <div className="flex">
                            <div>
                                <Image
                                    src={item.imageSrc}
                                    alt="Profile Image"
                                    width={54}
                                    height={54}
                                    className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                />
                            </div>
                            <div className="ms-[8px]">
                                <span className="text-[18px] block text-black">{item.name}</span>
                                <span className="text-[18px] block text-[#999999]">{item.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Testimonials;