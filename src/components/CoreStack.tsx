import TechStackItem, { TechStackItemProps } from "./TechStackItem";


export interface TechStackProps{
  frontend:TechStackItemProps[],
  backend:TechStackItemProps[],
  mobile:TechStackItemProps[],
  devops:TechStackItemProps[],
}
const CoreStack = ({techStackList}:{techStackList:TechStackProps}) => {
  return (
    <div id='skill' className="py-24 px-40  w-full max-w-[1400px] h-full">
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight  text-stone-200 sm:text-3xl">
        <span className="text-green-700">Cor</span>e tech stack
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <div className="grid-cols-[max-content_1fr] place-content-start gap-2 grid sm:hidden">
          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Frontend
          </h3>
          {techStackList.frontend.map(item => <TechStackItem language={item.language} color={item.color}/>)}

          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Mobile
          </h3>
          {techStackList.mobile.map(item => <TechStackItem language={item.language} color={item.color}/>)}

          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Backend
          </h3>
          {techStackList.backend.map(item => <TechStackItem language={item.language} color={item.color}/>)}
          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Infrastructure
          </h3>
          {techStackList.devops.map(item => <TechStackItem language={item.language} color={item.color}/>)}
        </div>

        <div className="grid-cols-[max-content_1fr] place-content-start gap-2 hidden sm:grid">
          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Frontend
          </h3>
          {techStackList.frontend.map(item => <TechStackItem language={item.language} color={item.color}/>)}

          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Mobile
          </h3>
          {techStackList.mobile.map(item => <TechStackItem language={item.language} color={item.color}/>)}
        </div>
    
        <div className="grid-cols-[max-content_1fr] place-content-start gap-2 hidden sm:grid">
          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Backend
          </h3>
          {techStackList.backend.map(item => <TechStackItem language={item.language} color={item.color}/>)}
          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Devops
          </h3>
          {techStackList.devops.map(item => <TechStackItem language={item.language} color={item.color}/>)}
        </div>
      </div>
    </div>
  );
};
export default CoreStack;
