import BarGraph from "../components/BarGraph";
import Title from "../components/Title";

const Skills = () => {
  return (
    <div className="flex flex-col items-center shadow-lg p-10 w-[90%] h-[80%] rounded-xl text-slate-900 bg-slate-100 relative overflow-hidden">
      <Title
      title="My Skills"
      />
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <BarGraph label="Html" level="Beginner" imageUrl="htmlLogo.png" />
        <BarGraph label="Css" level="Beginner" imageUrl="cssLogo.png" />
        <BarGraph label="JavaScript" level="Beginner" imageUrl="jsLogo.png" />
        <BarGraph label="React JS" level="Beginner" imageUrl="reactLogo.png" />
        <BarGraph label="PHP" level="Beginner" imageUrl="phpLogo.png"/>
        <BarGraph label="SQL" level="Beginner" imageUrl="sqlLogo.png"/>
        <BarGraph label="c++" level="Beginner" imageUrl="c++Logo.png"/>
      </div>
    </div>
  );
};

export default Skills;
