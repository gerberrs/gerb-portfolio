interface IBarGraphProps {
  level: "Beginner" | "Amateur" | "Intermediate" | "Pro" | "Expert";
  label: string;
  imageUrl : string;
}

const levelToPercentage = {
  Beginner: 20,
  Amateur: 40,
  Intermediate: 60,
  Pro: 80,
  Expert: 100,
};

const BarGraph = ({ level, label, imageUrl }: IBarGraphProps) => {
  const percentage = levelToPercentage[level]; 

  return (
    <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-sm">
      <div className="flex flex-row items-center mb-1">
      <p className="mb-1 font-semibold me-2">{label}</p>
      <div className="flex w-14 h-10">
               <img src={imageUrl} alt="" />
             </div>
      </div>
      <div className="flex items-center w-96 h-10 bg-gray-300 rounded-full overflow-hidden mb-3 shadow-lg">
        <div
          className="bg-slate-950 h-10 transition-all"
          style={{ width: `${percentage}%` }}>
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-900">{level}</span>
    </div>
  );
};

export default BarGraph;
