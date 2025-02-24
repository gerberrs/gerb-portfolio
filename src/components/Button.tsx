
import { useNavigate } from 'react-router-dom';

interface IButtonProps {
    buttonText: string;
    pageLink: string;
}
const Button = ({ buttonText, pageLink }: IButtonProps) => {
    const navigate = useNavigate();
    return (
        <div>
        <button
        className="mt-6 px-6 py-3 text-xl text-white bg-slate-900 rounded-full hover:bg-slate-800 transition"
        onClick={() => navigate(pageLink)}
         >
        {buttonText}
        </button>
        </div>
    );
};

export default Button;
