interface IBlogCardProps {
  imageUrl:string;
  description : string;
}
const BlogCard = ({imageUrl, description}:IBlogCardProps) => {
  return (
    <div className="flex flex-row">
    <div className="flex items-center text-sm shadow-md p-4">
        <img src={imageUrl} alt="" className="w-32 h-32 me-2 rounded-lg shadow-lg"/>
        <p className="text-start text-xs">
          {description}
        </p>
    </div>
</div>
  )
}
export default BlogCard