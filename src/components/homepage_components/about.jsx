// import aboutUsImage from '../../assets/aboutUs.svg'
import settingsIcon from '../../assets/settingsIc.svg'
import innovationIcon from '../../assets/innovationIc.svg'
import environmentIcon from '../../assets/environmentIc.svg'
import rewardIcon from '../../assets/rewardIc.svg'
import trustIcon from '../../assets/trustIc.svg'
import { Link } from 'react-router-dom'

const About = () => {

  const aboutData = [
    {
      'title': "Our Expertise",
      'icon': settingsIcon
    },
    {
      'title': "Innovative Recycling Approach",
      'icon': innovationIcon
    },
    {
      'title': "Environmental Impact",
      'icon': environmentIcon
    },
    {
      'title': "Rewards & Incentives",
      'icon': rewardIcon
    },
    {
      'title': "Trust & Transparency",
      'icon': trustIcon
    }
  ]

  return  <div className="w-full h-[500px] border-r border-[#97CC8C]">

      {/* title */}
      {/* <p className='text-center text-[2rem] font-bold text-primary60 font-openSans'>Empowering Change through Recycling:</p> */}

      {/* description and image */}
      <div className='items-center relative h-[400px] mt-16 mb-20 font-montserrat text-[16px] text-[#005232] font-[700] '>
        {/* <div className='max-w-[640px]'> */}
        {/* description */}
          {/* {
            aboutData.map((item, index) => 
              <p key={index} className='py-4  flex flex-row font-black font-montserrat'> <img src={item.icon} alt={`${item.title} icon`} className='mr-4 w-8 h-8' /> {item.title}</p>
            )
          } */}
          <p className='mb-8'>We are passionate about making a difference in 
            the world by revolutionizing waste management and 
            promoting sustainability. Our mission is to empower 
            individuals to turn their waste into wealth while making 
            a positive impact on the planet.
          </p>

          <p>Through innovative solutions and cutting-edge technology, 
          we have developed a comprehensive rewards-based system that 
          incentivizes recycling and encourages responsible waste disposal. 
          By participating in our program, individuals can earn valuable 
          rewards for their recycling efforts, ranging from discounts at 
          local businesses to vouchers for eco-friendly products.
          </p>
          
          {/* learn more button */}
          <br />
          <Link to={'/about-us'} className='absolute top-[280px] py-2 px-8 bg-primary40 rounded-sm text-white font-black'> Learn More</Link>
        </div>
        {/* image */}
        {/* <img src={aboutUsImage} alt="reccoin box" className="w-[450px] h-[500px]" /> */}
      </div>  
  // </div>
}

export default About