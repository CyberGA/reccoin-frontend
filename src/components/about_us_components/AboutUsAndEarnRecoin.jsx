import { useState } from "react"
import About from "../homepage_components/about";
import { EarnReccoinReward } from "../homepage_components/earnReccoin";
import aboutUsWhiteIcon from '../../assets/aboutUsWhiteIcon.svg'
import aboutUsBlackIcon from '../../assets/aboutUsBlackIcon.svg'
import earnReccoinWhiteIcon from '../../assets/earnReccoinWhiteIcon.svg'
import earnReccoinBlackIcon from '../../assets/earnReccoinBlackIcon.svg'

const AboutUsAndEarnRecoin = () => {


  return  <section className="container mx-auto w-full">
        
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between">
            <div className="w-[50%]">
                <button  className= 'font-montserrat font-black text-lg flex flex-row items-center border rounded-[10px] px-12 py-2 mr-8 bg-primary40 text-white'>
                    <img src={ aboutUsWhiteIcon} alt=" about us icon" className="mr-4"/>About Us
                </button>
                < About/>
            </div>
           <div className="w-[50%]">
            <button className={ ` ml-6 font-montserrat font-black text-lg flex flex-row items-center  border rounded-[10px] px-12 py-2 bg-primary40 text-white`  }>
                    <img src={earnReccoinWhiteIcon} alt="earn recylox icon" className="mr-4" />Earn Recylox
                </button>
                <EarnReccoinReward/>
           </div>
        </div>


        
    </section>
  
}

export default AboutUsAndEarnRecoin