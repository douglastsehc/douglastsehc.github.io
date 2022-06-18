import Navbar from "./components/Navbar";
import About, { PersonalInfoProps } from "./components/About";
import Home, { IntroductionProps } from "./components/Home";
import Works from "./components/Works";
import Resume, { ResumeProps } from "./components/Resume";
import CoreStack, { TechStackProps } from "./components/CoreStack";
import { SocialIconProps } from "./components/SocialIcon";
import data from "./data.json";
import { workItemProp } from "./components/WorkItem";


function App() {
  const socialIconProps:SocialIconProps[] =  data.social;
  const homeProps:IntroductionProps = data.home;
  const aboutProps:PersonalInfoProps = data.about;
  const worksProps:workItemProp[] = data.works;
  const skillsProps:TechStackProps = data.skills;
  const resumeProps:ResumeProps = data.resume;


  return (
    <div className='bg-[#0a192f] overflow-hidden'>
      <Navbar socialIconList={socialIconProps}/>
      <Home name={homeProps.name} selfIntro={homeProps.selfIntro} currentAim={homeProps.currentAim}/>
      <About intro={aboutProps.intro} description={aboutProps.description} />
      <Works workItemList={worksProps}/>
      <CoreStack techStackList={skillsProps} />
      <Resume resume={resumeProps} />
    </div>
  );
}

export default App;
