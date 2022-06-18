export interface experienceTechItemProp {
    techType: string;
    techDescription: string;
}

const ExperienceTechItem = ({techType, techDescription }: experienceTechItemProp) => {
    return (
        <li className="px-0 text-stone-400">
            <strong className="text-stone-200">{techType}:</strong>
            {techDescription}
        </li>
    )
}
export default ExperienceTechItem;