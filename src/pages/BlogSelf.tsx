import BlogCard from "../components/BlogCard"
import Title from "../components/Title"


const BlogSelf = () => {
  return (
    <div className="flex flex-col items-center shadow-lg p-10 h-[80%] w-[90%] rounded-xl text-slate-900 bg-slate-100 relative overflow-hidden">
      <div className="w-full text-center">
        <Title title="Blog" />
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-full">
      <BlogCard
      imageUrl="profilePic.jpg"
      description=" I am Gerbinguio Victorino, a fourth year student taking bachelor's degree in information technology,
          I like building and designing websites. i love playing around codes and be creative with it. I practice coding 
          in just being creative and try anything i can put into my program. as of now, I am enhancing my skills in 
          html, css, JavaScript, as well as using react to make my codes resuable. I am also interested in database management
        , I know a bit in php and sql and use it to my websites."
      />
      <BlogCard
      imageUrl="gameIcon.jpg"
      description="I do like playing games a lot in my free-time, especially when im done doing a task in school or in coding,
      it is my way to entertain my self and to regain my energy, i play a lot of valorant, and also starting red dead redemption recently,
      as an IT, creating a game is also one of my goals, so im looking forward also to learn game development"
      />
      </div>
      
    </div>
  );
};

export default BlogSelf;
