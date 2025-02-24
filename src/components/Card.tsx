import Button from "./Button";
interface ICustomCardProps {
  name: string;
  role: string;
  welcomeMessage: string;
}

const Card = ({ name, role, welcomeMessage}: ICustomCardProps) => {
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
      <Button
      buttonText="Projects"
      pageLink="Projectss"
      />
    </div>
  );
};
export default Card;
