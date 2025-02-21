
interface IProjCard {
    descript :string;
    projImage :string;
}
const ProjCard = ({descript, projImage}:IProjCard) => {
  return (
    <div className='flex flex-col justify-center border-black bg-slate-900 text-white shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-sm'>
      <div>
      <img src={projImage} alt="" className="w-96"/>     
      </div>
      <div className="flex justify-center">
      {descript}
      </div>
    </div>
  )
}

export default ProjCard