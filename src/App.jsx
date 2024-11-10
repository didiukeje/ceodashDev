import Section1 from './components/Section1';
import Section2 from './components/Section2';

const App = () => {
  return (
    <div className="bg-[#EFF0F6] h-screen w-screen overflow-hidden m-0 p-0 flex flex-col h-full">
      <Section1 className="overflow-hidden"/>
      <Section2 className="overflow-hidden"/>
    </div>
  );
};

export default App;



