

interface ITitle{ 
    title:string;
}

const Title = ({title}: ITitle) => {
  return (
    <div>
        <h1 className="text-3xl font-bold uppercase mb-6 text-center w-full relative overflow-hidden">
        <span className="relative">{title}</span>
        <span className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></span>
      </h1>
    </div>
  )
}

export default Title