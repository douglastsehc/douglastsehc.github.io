import ExperienceTechItem from './ExperienceTechItem';
import { experienceTechItemProp } from './ExperienceTechItem';

export interface ExperienceItemProps {
  year: String;
  company: String;
  position: String;
  description: String;
  experienceItemList: experienceTechItemProp[];
}

const ExperienceItem = ({year, company, position, description, experienceItemList}: ExperienceItemProps) => {
  return (
    <li className="relative border-l border-b border-stone-700 py-4 pl-4 last:border-b-0 ">
      <div className=" absolute left-4 top-3 flex items-center space-x-2 md:left-2">
        <span className="whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
          {year}
        </span>
        <span className="text-xs font-medium text-stone-400">
          {company}
        </span>
      </div>
      <div className="flex flex-col pt-10 prose-ul:list-none">
        <h2 className="font-bold text-stone-200">{position}</h2>
        <p className="text-stone-400">
            {description}
        </p>
        <ul className='h-full w-full'>
        {experienceItemList.map(object => <ExperienceTechItem techType={object.techType} techDescription={object.techDescription} />)}
        </ul>
      </div>
    </li>
  );
};
export default ExperienceItem;
