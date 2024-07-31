import styles from "@/style";
import Button from "../atoms/button";



export default function Hero() {
    

    return (
        <section className={`${styles.paddingY} `}>
            <div>
                
            <h1 className="text-[4.3rem] font-bold leading-[6rem] mb-4">We Make Your <br/>
             <span className="text-[#07C589]">Smile</span> Our Priority.
            </h1>

            <p className="text-[1.40rem]">
            At DentClack, we are dedicated to one thing - your smile. With <br />
            over 10 years of professional experience and more than 100  <br/>
            carefully selected dental practices, we are uniquely equipped to <br/>
            provide personalized treatment and restore your desired smile.
            </p>

            </div>

            <Button>Click</Button>

        </section>

    )
}