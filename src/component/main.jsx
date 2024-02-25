import github from '../../public/github.svg'
import linkedin from '../../public/linked-in.svg'
import insta from '../../public/instagram.svg'
import mail from '../../public/mail.svg'
import GitHubCalendar from 'github-calendar'
GitHubCalendar(".calendar", "constayush", { responsive: true });
export default () => {

    return (<>



        <div className='w-screen h-screen px-[1.5rem] py-[5rem] lg:py-[8rem]  flex flex-col justify-between items-center'>




            <div>
                <h1 className='nameH1 text-[3rem] lg:text-[4rem]'>Hi, I am Ayush Srivastava</h1>
                <p className='subH1   text-[1.5rem] lg:text-[2rem]'>a developer hailing from India<span className='greeting'>.</span></p>
                <p className='subH1   text-[.8rem] lg:text-[1rem] mt-[2rem] mb-[.7rem] '>Dreaming in HTML, crafting elegance with CSS, and sculpting experiences with JavaScript</p>
                <p className='subH1   text-[.8rem] lg:text-[1rem]  mb-[.7rem]'>Currently, pursuing a Diploma in Computer Science and Engineering<br/> and learning MERN stack</p>
                <p className='myr   text-[.8rem] lg:text-[1rem]  '>My Resume (pdf 108kb)</p>
            </div>

            <div className="calendar"></div>
<div className='networks'><div className='netbox rounded-lg w-[15rem] lg:w-[20rem]'>
    <a class="w-[5rem] lg:w-[4rem] icon " href="#"  ><img src={github}/></a>
    <a class="w-[5rem] lg:w-[4rem] icon "  href="#"  ><img src={linkedin}/></a>
    <a class="w-[5rem] lg:w-[4rem] icon "   href="#" ><img src={insta}/></a>
    <a class="w-[5rem] lg:w-[4rem] icon "  href="#" ><img src={mail} /></a>
    </div>
    </div>

    
    



        </div>




















    </>)
}


