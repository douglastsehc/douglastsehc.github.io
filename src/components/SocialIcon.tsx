
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export interface SocialIconProps {
    color: string,
    link : string,
    title: String,
}
const SocialIcon = ({color, link, title}:SocialIconProps) => { 
    return (
          <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  ${color}`}>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href={link}
          >
            {title} {title === 'Github' ? <FaGithub size={30}/> : <FaLinkedin size={30}/>}
          </a>
        </li>
)};
export default SocialIcon