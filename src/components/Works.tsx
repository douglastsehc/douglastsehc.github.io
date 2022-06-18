import WorkItem, { workItemProp } from './WorkItem';
//import WorkImg from '../assets/workImg.jpeg';
//import realEstate from '../assets/realestate.jpg';

//const workItemList: workItemProp[] = [
//  { title: 'crawler project',bgImage:'aa', link: 'click to see' },
//  { title: 'hi',bgImage:'aa',  link: 'click to see' },
//  { title: 'mobile app project', bgImage:'aa',  link: 'click to see' },
//];

const Work = ({workItemList}: {workItemList:workItemProp[]}) => {
  return (
    <div id='work' className='w-full h-screen text-gray-300 '>
      <div className='max-w-[1200px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        { workItemList.map(object => <WorkItem title={object.title} bgImage={object.bgImage} link={object.link}/>) }
        </div>
      </div>
    </div>
  );
};

export default Work;
