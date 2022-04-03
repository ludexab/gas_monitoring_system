const commonStyles =
  "text-white min-h-[120px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-2xl font-bold text-white";

const volume = "100kg";
const level = "10%";
const last_full = "11-03-2022";
const temperature = "28 *C";
const pressure = "10 pa";
const location = "kuje";
const Content = () => {
  return (
    <div className="flex-col bg-gradient-to-r from-gray-900 via-gray-500 to-black flex w-full justify-center items-center">
      <h1 className="text-center text-3xl mt-5 text-white py-1 font-bold md:w-9/12 w-full  justify-center items-center">
        GAS MONITORING SYSTEM
      </h1>
      <div className="flex w-2/3 my-10 mt-0 md:col ">
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full h-3/4 mt-10">
          <div className={`rounded-tl-2xl ${commonStyles}`}>
            {`VOLUME: ${volume}`}
          </div>
          <div className={commonStyles}>{`LEVEL: ${level}`}</div>
          <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
            {`LAST FULL: ${last_full}`}
          </div>
          <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
            {`TEMPERATURE: ${temperature}`}
          </div>
          <div className={commonStyles}>{`PRESSURE: ${pressure}`}</div>
          <div className={`rounded-br-2xl ${commonStyles}`}>
            {`LOCATION: ${location}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
