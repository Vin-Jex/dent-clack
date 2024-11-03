import Image from "next/image";
import { StaticImageData } from "next/image";
import nakia from "@/public/images/nakia.jpg";
import elisabeth from "@/public/images/elisabeth.jpg";
import margarett from "@/public/images/margarett.jpg";
import john from "@/public/images/john.jpg";

type TestimonialImgLinks = {
  id: number;
  name: StaticImageData;
  staffName: string;
  content:string
};

const testimonialImgLinks: TestimonialImgLinks[] = [
  {
    id: 1,
    name: nakia,
    staffName:"Nakia Adewole",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis aliquet orci.",
  },
  {
    id: 2,
    name: elisabeth,
    staffName:"Elisabeth Olsen",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis aliquet orci.",
  },

  {
    id: 3,
    name: margarett,
    staffName:"Margarett Steve",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis aliquet orci.",
  },
  {
    id: 4,
    name: john,
    staffName:"John Reaves",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis aliquet orci.",
  },
];


export default function Testimonials() {
    return (
      <section className="justify-between justify-items-center py-14">
        <div className="space-x-2 w-full justify-items-center">
          <span className="text-[#07C589] w-full text-center lg:text-left font-bold">
            Testimonials
          </span>
          <h3 className="text-2xl font-semibold text-center lg:text-left dark:text-[#FFFFFF] mb-4">
            What our patients say
          </h3>
        </div>

        <div className="space-y-4 ss:space-y-0 ss:grid ss:grid-cols-2 place-content-center ss:gap-16">
          {testimonialImgLinks.map((link, index) => {
            return (
              <div key={link.id} className="flex flex-row w-[26rem] border pr-3">
                   <div
                    className="aspect-auto h-[10rem] w-[20rem] relative"
                  >
                    <Image
                      src={link.name}
                      className={`w-[10rem] h-[10rem] object-cover rounded-br-3xl -z-[100] bg-cover mr-3`}
                      alt="Picture of the author"
                    >
                    </Image>
                  </div>
                  <div className="flex flex-col mt-12 text-sm font-semibold dark:text-white">{link.staffName} <span className="text-xs font-light mt-1 dark:text-[#FFFFFFCC]">{link.content}</span></div>
              </div>
             
            );
          })}
        </div>
      </section>
    )
}