
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Socials from '../components/Socials';

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar 
      firstlinkName = "About Me"
      seclinkName = "Skills"
      thirdlinkName = "Projects"
      fourthlinkName = "Blog"
      />
      <div className="flex flex-grow items-center justify-center uppercase font-anton bg-slate">
        <Outlet />
      </div>
      <div>
        <Socials 
        Furl='https://www.facebook.com/gerbinguio.victorino.3/'
        Iurl=''
        Eurl='mailto:gerbinguio@gmail.com/'
        />
      </div>
    </div>
  );
};
export default RootLayout;
