import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { navLinks } from "@/constants";
import Link from "next/link";

type FooterLinks = {
    id: number;
    content: string;
  };
  
  const footerLinks: FooterLinks[] = [
    {
      id: 1,
      content:"Account"
    },
  
    {
      id: 2,
      content:"Feedback"
    },
  
    {
      id: 3,
      content:"Privacy/Security"
    },
  
    {
      id: 4,
      content:"Terms & Conditions"
    },
  ];
  

export default function Footer() {
    return (
        <section className='flex flex-col place-content-center justify-between py-10'>
            <div className='flex flex-row border-b border-gray-400 justify-between pb-8'>
                    <div className='text-sm space-y-4'>
                            <h1 className='font-bold'>Dent<span className='text-[#07C589]'>Clack</span></h1>
                            <p className='w-60 h-fit text-wrap overflow-hidden'>Thank you for trusting us
                            with your dental treatments.</p>
                        <div className='flex flex-row text-white space-x-2'>
                            <div className='w-8 h-8 overflow-hidden place-content-center text-center rounded-full bg-[#07C589]'> <GitHubIcon className='w-5 h-5'/> </div>
                            <div className='w-8 h-8 overflow-hidden place-content-center text-center rounded-full bg-[#07C589]'> <LinkedInIcon className='w-5 h-5'/> </div>
                            <div className='w-8 h-8 overflow-hidden place-content-center text-center rounded-full bg-[#07C589]'> <XIcon className='w-5 h-5'/> </div>
                        </div>
                    </div>
        
                    <div className='flex flex-row text-sm space-x-16'>
                            <ul className='flex flex-col space-y-4'>
                                <h1 className='font-bold'>Quick Links</h1>
                                {navLinks.map((nav, index) => (
                                <li
                                    key={index}
                                    className={`${nav.title !== "home" ? "flex font-poppins hover:text-[#07C589] cursor-pointer" : "hidden" }`}
                                >
                                    <Link
                                    href={`#${nav.title}`}
                                    className="!capitalize text-sm font-poppins"
                                    >
                                    {nav.title}
                                    </Link>
                                </li>
                                ))}
                            </ul>

                            <ul className='flex flex-col space-y-4'>
                                <h1 className='font-bold'>Support</h1>
                                    {footerLinks.map((nav, index) => (
                                    <li
                                    key={index}
                                    className="ss:flex hidden font-poppins hover:text-[#07C589] cursor-pointer"
                                    >
                                    <Link
                                    href={`#`}
                                    className="!capitalize text-sm font-poppins"
                                    >
                                    {nav.content}
                                    </Link>
                                    </li>
                                    ))}
                            </ul>
                
            </div>
            </div>
            <p className='w-full text-xs text-center space-x-6 mt-10'> <span> &copy;2022</span>  <Link href={`#`}>DentClark.com</Link> </p>
        </section>
    )
}