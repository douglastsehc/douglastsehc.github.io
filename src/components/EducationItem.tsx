export interface EducationItemProps {
    year:String,
    school:String,
    degree:String,
    description:String
}

const EducationItem = ({ year, school, degree, description }: EducationItemProps) => {
    return (
        <li className="relative border-l border-b border-stone-700 py-4 pl-4 last:border-b-0">
        <div className=" absolute left-4 top-3 flex items-center space-x-2 md:left-2">
            <span className="whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                {year}
            </span>
            <span className="text-xs font-medium text-stone-400">
                {school}
            </span>
        </div>
        <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
            <h2 className="font-bold text-stone-200">
                {degree}
            </h2>
            <p className=" text-stone-400">
                {description}
            </p>
        </div>
    </li>
    );
};
export default EducationItem;