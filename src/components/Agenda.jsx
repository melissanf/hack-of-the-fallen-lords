import agenda_bg from '../assets/agenda_bg.svg';
import '../index.css';

const day1 = [
    { time: '. 08:00 - 10:00', activity: 'Opening ceremony and event presentation' },
    { time: '. 10:00 - 12:00', activity: 'First theme announcement' },
    { time: '. 12:00 - 13:00', activity: 'Lunch pause' },
    { time: '. 13:00 - 17:00', activity: 'Developing time' },
    { time: '. 17:00 - 18:30', activity: 'Snacks pause and fun activities' },
    { time: '. 20:30', activity: 'Dinner' }
];
const day2 = [
  { time: '07:00 - 07:30', activity: 'Breakfast time' },
  { time: '10:00', activity: 'Second theme announcement' },
  { time: '10:00 - 12:00', activity: 'Developing time' },
  { time: '12:00 - 13:00', activity: 'Lunch pause' },
  { time: '13:00 - 17:00', activity: 'Developing time' },
  { time: '17:00 - 18:30', activity: 'Snacks and fun activities' },
  { time: '18:30 - 19:30', activity: 'Dinner' },
  { time: '19:30', activity: 'End of the event' }
];

function Agenda_item({title,day,activities}){
    return(
        <div className='flex flex-col items-start justify-center text-white
                    bg-[#44424A] w-full p-4 border-l-4 border-l-[#BBA760]'>
            <p>{title}</p>
            <p className='font-bold'>{day}</p>
            <ul className='list-disc'>
                {activities.map((activity,index)=>(
                    <li key={index} className='ml-8'>
                        {activity}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Day({day}){
    return(
        <table className='border-separate border-spacing-x-4'>
            <tbody>
                {day.map((item, index) => (
                <tr key={index} className='bg-black text-white'>
                    <td className='text-2xsm md:text-sm '>
                        {item.time}
                    </td>
                    <td className="text-2xsm md:text-sm">
                        {item.activity}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

function Agenda(){
    return(
        <section id="agenda"className="flex flex-col justify-center items-center 
                    min-h-screen max-w-screen p-0 m-0 bg-black gap-12">
            <h1 className='bg-linear-to-b from-[#594E28] to-[#DEBD52] 
                    bg-clip-text text-transparent text-3xl sm:text-5xl'>
                AGENDA
            </h1>
            <div id="agenda-part" className='flex flex-col justify-center items-center w-[90%] gap-12'>
                <div className='relative w-full'>
                    <img src={agenda_bg} alt="background" className='absolute inset-0 
                                    w-full h-full object-cover opacity-80 z-20'>
                    </img>
                    <div className='flex flex-col w-full gap-4 items-center
                                        relative z-10'>
                        <Agenda_item title="Before the Event"
                            day="December 1 - 18, 2025"
                            activities={["Free game development workshops", 
                            "Introduction to game design & coding",
                            "Team formation and preparation",
                            "Marketing campaign launch"]}/>
                        <Agenda_item title="Day 1 - Friday"
                            day="December 19, 2025"
                            activities={["08:00 - 10:00: Opening ceremony",
                            "10:00: First theme announcement",
                            "Development begins",
                            "Programming quizzes throughout",
                            "Meals and breaks provided"]}/>          
                        <Agenda_item title="Day 2 - Saturday"
                            day="December 20, 2025"
                            activities={["10:00: Second theme announcement",
                            "Continued development",
                            "Final sprint to completion",
                            "19:30: Project submission",
                            "Judging and award ceremony"]}/> 
                    </div>
                </div>
                <div className='border-l-4 border-l-[#A08D4A] w-full h:30 sm:h-24  flex justify-center'>
                    <div className='border-2 border-[#A08D4A] rounded-2xl w-[99%] h-full
                                flex flex-col justify-center items-start pl-4'>
                        <h1 className='text-[#BBA760] font-bold text-xl'>Additional Activities</h1>
                        <p className='text-white text-base'> 
                            During the event, short quizzes on cybersecurity ,AI , and web development will be held, with winners earning snacks and extra points.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-start w-100% sm:w-160 
                        border-2 border-[#D6BC61] md:h-50 gap-8'>
                <div className='h-full'>
                    <div className='bg-[#D6BC61] text-black h-30 md:h-[60%] 
                                w-15 md:w-20 rounded-b-full font-bold text-center' >
                        1st day<br/><br/>Friday
                    </div>
                </div>
                <div className='flex justify-center items-center h-full'>
                    <Day day={day1}/>
                </div>
            </div>
            <div className='flex flex-row justify-center items-start w-full sm:w-160 
                        border-2 border-[#D6BC61] md:h-50 gap-8'>
                <div className='flex justify-center items-center h-full'>
                    <Day day={day2}/>
                </div>
                <div className='h-full'>
                    <div className='bg-[#D6BC61] text-black h-30 md:h-[60%] 
                                w-20 md:w-25 rounded-b-full font-bold text-center' >
                        2st day<br/><br/>Saturday
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agenda