import { Link } from 'react-router-dom'

interface INavbarProps{
  firstlinkName:string;
  seclinkName:string;
  thirdlinkName:string;
  fourthlinkName:string;
}

const navbar = ({firstlinkName, seclinkName,thirdlinkName,fourthlinkName}:INavbarProps) => {
  return (
    <div className=' bg-slate-900 p-4 flex justify-center items-center h-16 font-anton mb-2 shadow-lg'>
    <ul className='flex space-x-8 items-center uppercase p-5 mt-2 text-white'>
      <Link to='/'><li>{firstlinkName}</li></Link>
      <Link to='/skills'><li>{seclinkName}</li></Link>
      <Link to='/projectss'><li>{thirdlinkName}</li></Link>
      <Link to='/blogSelf'><li>{fourthlinkName}</li></Link>
    </ul>
  </div>
  )
}
export default navbar