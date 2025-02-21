import Card from "../components/Card";
import DevPic from "../components/DevPic";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center shadow-lg p-10 w-[90%] h-[80%] gap-16 rounded-xl bg-slate-100">
      <Card
       name="Gerbinguio Victorino"
       role="FRONTEND DEVELOPER"
       welcomeMessage="Welcome to my space"
       buttonText="Projects"
/>
      <DevPic 
      imageUrl="devPicture.png"
      alternative="Developer Picture"
      />
    </div>
  );
};
export default AboutMe;
