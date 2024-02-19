import SmallComp from "./ui/smallComp"
import LongComp from "./ui/longComp"

export default () => {

    return (

        <div className="w-[98vw] h-fit pt-[12vmax] md:pt-[10vmax] flex justify-center items-center flex-col ">

            <h1 className="projectsH1 text-[2rem] md:text-[4rem] mb-[3vmax]">Projects<span className="text-[#ffbe47]">.</span></h1>

            <div className="projectParas  w-[80%] md:w-[50%] lg:w-[57vmax] mt-4">


                <p className="projectPara mb-[1rem]">Step into the world of my projects, where creativity meets functionality! This is the place where I pour my heart and soul into turning ideas into reality. Explore a mix of projects that capture the essence of my journey—a journey filled with challenges, triumphs, and a lot of learning.</p>

                <p className="projectPara mb-[1rem]">From sleek web applications to user-friendly mobile experiences, each project is a testament to my love for finding innovative solutions. Think of it as a collection of digital stories that reflect not just my technical skills, but also the joy I find in crafting beautiful and user-centric designs.</p>

                <p className="projectPara  mb-[4vmax]">Whether it's cracking the code for efficiency, weaving together seamless user interfaces, or diving into the latest tech trends, these projects are my way of showing you the human side of technology.</p>

            </div>

            <div className="majorProjects flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col ">
                    <LongComp name='Spotify' description=' sddddddddddd'  link = 'https://google.com'/>
                    <SmallComp name='Spotify' description=' sddddddddddd' link = 'https://google.com'/>
                </div>
                <div className="flex flex-col ">
                    <SmallComp name='Spotify' description=' sddddddddddd' link = 'https://google.com'/>
                    <LongComp name='Spotify' description=' sddddddddddd'  link = 'https://google.com'/>
                </div>
            </div>

            <div className="minnorProjectsWapper w-[36vmax] md:w-[57vmax] mt-[5rem] mb-[5rem]">
                <h3 className="minnorH1 mb-[1rem]">Minnor Projects.</h3>
                <p className="projectPara mb-[1rem]">Discover a collection of my minor projects — small yet impactful endeavors that reveal the essence of my ongoing learning and creative exploration. Each minor project serves as a pixel, contributing to the larger canvas of my journey.</p>

                <div className="minnorProjects w-full h-[20vmax] rounded-lg">

                    <ul>
                        <li className="minnorprojectsLinks mb-[.75rem]"><a href="https://goboxin.vercel.app/" target="blank"> <span className="orange">•</span> GO BOXIN!</a></li>
                        <li className="minnorprojectsLinks mb-[.75rem]"><a href="https://weather-app-constayush.vercel.app/" target="blank"> <span className="orange">•</span> Weather App</a></li>
                        <li className="minnorprojectsLinks mb-[.75rem]"><a href="#" target="blank"> <span className="orange">•</span> project</a></li>
                        <li className="minnorprojectsLinks mb-[.75rem]"><a href="#" target="blank"> <span className="orange">•</span> project</a></li>
                        <li className="minnorprojectsLinks mb-[.75rem] "><a href="#" target="blank"> <span className="orange">•</span> project</a></li>
                    </ul>
                </div>

            </div>

        </div>

    )

}
