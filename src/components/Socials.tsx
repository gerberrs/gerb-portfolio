import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

interface ISocialPops{

    Furl: string;
    Iurl: string;
    Eurl: string;

}

const Socials = ({Furl, Iurl,Eurl}:ISocialPops) => {
  return (
    <div className='flex flex-end align-bottom justify-center space-x-2 mb-3'>
        <a href={Furl}>
        <FaFacebook/>
        </a>
        <a href={Iurl}>
        <FaInstagram/>
        </a>
        <a href={Eurl}>
        <FaEnvelope/>
        </a>
    </div>
  )
}

export default Socials