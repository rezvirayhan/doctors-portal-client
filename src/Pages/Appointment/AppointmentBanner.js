import appoinmentimg from'../../assets/banner.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";
const AppointmentBanner = ({date,setDate}) => {
  return (
    <div className="hero min-h-screen" style={{background:'white'}}>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={appoinmentimg} className="w-[600px] md-w-[400px] lg-w-sm" alt="appintment-banner" />
      <div className="px-5">
        <DayPicker
         mode="single"
         selected={date}
         onSelect={setDate}
          />
          <p>You Have Selected : <b style={{color:'tomato'}}>{format(date, "PP")}</b></p>
      </div>
    </div>
  </div>
  );
};

export default AppointmentBanner;
