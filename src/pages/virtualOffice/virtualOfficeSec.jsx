import React from 'react'
import Img from '../../assets/Hero-person.png'
import Image1 from '../../assets/Group 1000000930.png'
import Img1 from '../../assets/Group 158.png'
import Img2 from '../../assets/Group 158 (1).png'
import Img3 from '../../assets/Group 158 (2).png'
import Img4 from '../../assets/download (4) 1.png'
import Img5 from '../../assets/Group 1000000947.png'
import VirtualOfficeheader from '../../components/header/virtualOfficeheader'

const VirtualOfficeSec = () => {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';

    return (
        <div className=''>
             <VirtualOfficeheader/>
            <div className=' bg-cover h-screen pb-16' style={{ backgroundImage: `url(${Img})` }}>
                <div className='container max-w-[1000px] pt-40 pl-10'>
                    <h1 className='font-bold text-[42px] font-Poppins leading-[60px] text-[#1F5E7C]'>A Great Agent Makes <br></br> All The Difference</h1>
                    <p className='mt-2 text-[#FFFFFF] font-Poppins text-[16px]'>"Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do eiusmod tempor incididunt <br></br> ut labore et dolore magna aliqua.
                    </p>
                    <button className='text-[#FFFFFF] bg-[#1F5E7C] font-Poppins px-2 py-1 rounded-lg mt-8 ml-14'>Connect with a local agent</button>
                </div>
            </div>
            <div className='flex items-center justify-center w-[100%]'>

                <div className='bg-[#1F5E7C] px-2 py-2 mt-4 w-[95%] rounded-lg mb-10' style={{ boxShadow: shadow }}>
                    <div className='flex justify-center gap-32 items-center'>
                        <div className='ss  px-6'>
                            <p className='font-medium text-[#FFFFFF] text-[16] font-Poppins'>Location</p>
                            <div className='relative'>
                                <input className='bg-[#1F5E7C] w-48 mt-1 px-2 py-2 text-[12px] font-Poppins font-medium text-[#918C8C] border border-[#918C8C] rounded-md' placeholder='Neighbarhood/City/Zip' />
                                <span className='absolute inset-y-2 start-[135px]'><i class="fa fa-search text-[#757575] ml-8" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div className='price  px-6'>
                            <p className='font-medium text-[#FFFFFF] text-[16] font-Poppins '>Name</p>
                            <div className='relative'>

                                <input className=' bg-[#1F5E7C] mt-1 w-48 px-2 py-2 text-[12px] font-Poppins font-medium text-[#918C8C] border border-[#918C8C] rounded-md' placeholder='Agent Name' />
                                <span className='absolute inset-y-2 start-[135px]'><i class="fa fa-search text-[#757575] ml-8" aria-hidden="true"></i></span>
                            </div>
                        </div>
                        <div className='price  px-6'>
                            <p className='font-medium text-[#FFFFFF] text-[16] font-Poppins'>SPECIALTIES</p>
                            <select className='mt-1 px-2 py-2 w-48 bg-[#1F5E7C] text-[12px] font-Poppins font-medium  text-[#918C8C] border border-[#918C8C] rounded-md'>
                                <option>Any</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex gap-10 items-center px-6'>
                <div className=' w-[350px] h-[100px]  flex gap-2 items-center rounded-lg px-2 py-2' style={{ boxShadow: shadow }}>
                    <img src={Img1} className='w-[90px] h-[70px]' alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'>Company Name</h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <div className=' w-[350px] h-[100px]  flex gap-2 items-center rounded-lg px-2 py-2' style={{ boxShadow: shadow }}>
                    <img src={Img2} className='w-[90px] h-[70px]' alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'>Company Name</h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <div className=' w-[350px] h-[100px]  flex gap-2 items-center rounded-lg px-2 py-2' style={{ boxShadow: shadow }}>
                    <img src={Img3} className='w-[90px] h-[70px]' alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'>Company Name</h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <div className=' w-[350px] h-[100px]   flex gap-2 items-center rounded-lg px-2 py-2' style={{ boxShadow: shadow }}>
                    <img src={Img4} className='w-[90px] h-[70px]' alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'>Company Name</h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-80 mt-8 mb-8'>
                <h1 className='font-bold text-[20px] font-Poppins text-[#000000]'>Virtual office </h1>
                <h1 className='font-bold text-[20px] font-Poppins text-[#000000]'>location </h1>
                <h1 className='font-bold text-[20px] font-Poppins text-[#000000]'>client review </h1>
            </div>
            <div className='px-6 mt-4'>
                <div className='flex px-2 py-2 justify-between rounded-lg' style={{ boxShadow: shadow }}>
                <div className=' w-[372px] h-[100px]  flex gap-2 items-center rounded-lg px-2 py-2' >
                    <img src={Img1} className='w-[90px] h-[70px]' alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'>Company Name</h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <img src={Img5} className='w-[90px] h-[40px]' alt='map image'/>
                <div className='flex flex-col gap-4 w-80'>
                <h2 className='font-bold text-[14px] text-center text-[#1F5E7C]'>Review 10/27/2017</h2>
                    <p className=' text-[12px] font-Poppins font-small text-[#0C356A]'>A few weeks later the contract fell through and Kathrin was right on it as soon ...</p>
                </div>
                </div>
            </div>
            <div className='px-6 mt-4'>
                <div className='flex px-2 py-2 justify-between rounded-lg' style={{ boxShadow: shadow }}>
                <div className=' w-[372px]  flex gap-2 items-center rounded-lg px-2 py-2' style={{ boxShadow: shadow }}>
                    <img src={Img1} alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'>Company Name</h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <img src={Img5} alt='map image'/>
                <div className='flex flex-col gap-4 w-80'>
                    <h2 className='font-bold text-[14px] text-center text-[#1F5E7C]'>Review 10/27/2017</h2>
                    <p className='text-[16px] font=semibold'>A few weeks later the contract fell through and Kathrin was right on it as soon ...</p>
                </div>
                </div>

            </div>
            <div className='px-6 mt-4'>
                <div className='flex px-2 py-2 justify-between rounded-lg' style={{ boxShadow: shadow }}>
                <div className=' w-[372px]  flex gap-2 items-center rounded-lg px-2 py-2' style={{ boxShadow: shadow }}>
                    <img src={Img1} alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'>Company Name</h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <img src={Img5} alt='map image'/>
                <div className='flex flex-col gap-4 w-80'>
                <h2 className='font-bold text-[14px] text-center text-[#1F5E7C]'>Review 10/27/2017</h2>
                    <p className='text-[16px] font=semibold'>A few weeks later the contract fell through and Kathrin was right on it as soon ...</p>
                </div>
                </div>

            </div>
            <div className='px-6 mt-4'>
                <div className='flex px-2 py-2 justify-between rounded-lg' style={{ boxShadow: shadow }}>
                <div className=' w-[372px]  flex gap-2 items-center rounded-lg px-2 py-2' style={{ boxShadow: shadow }}>
                    <img src={Img1} alt='company name' />
                    <div className=''>
                        <h2 className='text-[#1F5E7C] text-[16px] font-Poppins font-medium'>Company Name</h2>
                        <p className='text-[12px] font-Poppins font-small text-[#0C356A]'>4.5(415 reviews)</p>
                        <p className='text-[14px] font-Poppins font-small text-[#0C356A]'>+1 (248) 937-2442</p>
                    </div>
                </div>
                <img src={Img5} alt='map image'/>
                <div className='flex flex-col gap-4 w-80'>
                <h2 className='font-bold text-[14px] text-center text-[#1F5E7C]'>Review 10/27/2017</h2>
                    <p className='text-[16px] font=semibold'>A few weeks later the contract fell through and Kathrin was right on it as soon ...</p>
                </div>
                </div>

            </div>
        </div>
    )
}
export default VirtualOfficeSec;