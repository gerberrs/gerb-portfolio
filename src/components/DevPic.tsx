interface IDevPicProps{
  imageUrl: string;
  alternative:string;
}


const DevPic = ({imageUrl, alternative}:IDevPicProps) => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <img 
          src={imageUrl} 
          alt={alternative} 
          className="w-full h-full object-cover"/>
      </div>
    );
};

export default DevPic;
