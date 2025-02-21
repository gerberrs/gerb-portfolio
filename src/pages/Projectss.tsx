import ProjCard from "../components/ProjCard"
import Title from "../components/Title"

const Projectss = () => {
  return (
    <div className="flex flex-col items-center shadow-lg p-10 w-[90%] h-[80%] rounded-xl text-slate-900 bg-slate-100 relative overflow-hidden">
      <Title
      title="Projects"
      />
      <div className="flex flex-row space-x-5">
      <ProjCard
      projImage="./snvhoa.jpg"
      descript="Calendar View"/>
       <ProjCard
      projImage="./snvLogin.jpg"
      descript="Login View"/>
       <ProjCard
      projImage="./reservation.jpg"
      descript="Pending Reservation View"/>
      </div>
      <div className="flex flex-row justify-center mt-10">
        <h1 className="text-2xl">sto nino village booking system for facilities with feedbacks and ratings</h1>
      </div>
      <p className="text-slate-500 text-center w-2/3 mt-2">
          a capstone project for sto nino village in muntinlupa to switch from manual booking system to an online reservation system.
          html, JavaScript, php, sql, and css bootstrap are the language that was used to make this project working.
        </p>  
        <a href="http://snvhoa.42web.io/" className="text-orange-500 underline">CLICK HERE TO VISIT IT NOW</a>
    </div>
  )
}

export default Projectss