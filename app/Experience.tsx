const Experience = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h4 className="text-4xl md:text-6xl text-transparent bg-custom-gradient bg-clip-text mb-8 mt-24">
          Experience
        </h4>
      </div>

      <div className=" w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3  gap-4 p-4  ">
        <div className="max-w-xs mx-auto rounded bg-black">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Rebecca Everlene Trust</div>
            <p className="text-white text-base">Software Developer</p>
            <p className="text-white text-base">Sep 2024 - Current</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #NextJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwind
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Storybook
            </span>
          </div>
        </div>

        <div className="max-w-xs mx-auto rounded bg-black">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">CoolR Group Inc</div>
            <p className="text-white text-base">Software Developer, Intern</p>
            <p className="text-white text-base">Jun 2023 - Aug 2023</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #MSSQL
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #ElasticSearch
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Docker
            </span>
          </div>
        </div>

        <div className="max-w-xs mx-auto rounded bg-black">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Avihs Technologies</div>
            <p className="text-white text-base">Software Developer, Intern</p>
            <p className="text-white text-base">Jan 2021 - Dec 2021</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #ReactJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Bootstrap
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #NodeJS
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
