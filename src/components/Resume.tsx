import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";
import EducationItem, { EducationItemProps } from "./EducationItem";

export interface ResumeProps {
    experienceItemList: ExperienceItemProps[],
    educationItemList: EducationItemProps[],
}
const Resume = ({resume}:{resume:ResumeProps}) => {
    return (
        <div id='background' className="md:m-32 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 h-full p-4 bg-[#0a192f] min-w-fit">
            <div className="col-span-1 bg-[#0a192f] h-full w-full min-w-full min-h-full">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl" >
                    <span className="text-green-700">Edu</span>cation
                </h2>
                <ul className="block">
                {resume.educationItemList.map(object => <EducationItem year={object.year} school={object.school} degree={object.degree} description={object.description} />)}
                </ul>
            </div>
            <div className="col-span-1 bg-[#0a192f]">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl" >
                    <span className="text-green-700">
                    Exp</span>erience
                </h2>
                <ul>
                {resume.experienceItemList.map(object => <ExperienceItem year={object.year} company={object.company} position={object.position} description={object.description} experienceItemList={object.experienceItemList} />)}
                </ul>
            </div>
        </div>
    );
};

export default Resume