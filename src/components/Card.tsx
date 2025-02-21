import { useNavigate } from "react-router-dom";


interface ICustomCardProps {
  name: string;
  role: string;
  welcomeMessage: string;
  buttonText: string;
}

const Card = ({ name, role, welcomeMessage, buttonText }: ICustomCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-20 rounded-2xl text-left">
      <p className="text-lg font-anton drop-shadow-lg opacity-75">
        Hi, I am {name}
      </p>
      <div className="relative w-fit">
        <p className="text-5xl font-anton text-gray-900 drop-shadow-2xl mt-2 relative overflow-hidden ">
          {role}
          <span className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></span>
        </p>
      </div>
      <p className="text-lg mt-4 opacity-75 drop-shadow-md">
        {welcomeMessage}</p>
      <button
        className="mt-6 px-6 py-3 text-xl text-white bg-slate-900 rounded-full hover:bg-slate-800 transition"
        onClick={() => navigate("/Projectss")}
      >
        {buttonText}
      </button>
    </div>
  );
};
export default Card;
