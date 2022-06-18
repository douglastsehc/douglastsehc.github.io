
export interface TechStackItemProps {
  language:String;
  color:number;
};
const TechStackItem = ({language,color}:TechStackItemProps) => {
  let techStackList = [];
  for (let i=0; i<color; i++){
    techStackList.push("bg-green-700");
  }
  let brownColor = 10 - color;
  while(brownColor >0){
    techStackList.push("bg-stone-700");
    brownColor-=1
  }
  return(
    <><div className="grid grid-flow-col justify-start">
      <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
        {language}
      </span>
    </div><div className="flex w-full items-center justify-start space-x-2">
      {techStackList.map(item =>
          <span className={`flex h-1/4 flex-grow rounded-md ${item}`}></span>
      )}
      </div></>
  );
};

export default TechStackItem;