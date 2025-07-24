export default function Hero() {
  return (
    <div
      id="hero"
      className=" w-[100%] max-md:pt-[50px]  bg-[url('images/mbappe.jpg')] bg-center bg-cover bg-no-repeat pt-[200px] max-md:px-[20px]"
    >
      <div className="w-[70%] h-[100vh] mx-auto flex justify-between items-start max-md:w-[100%] max-md:flex-col-reverse max-md:justify-center max-md:gap-y-[40px]">
        <div className="w-[50%] space-y-[30px] max-md:w-[100%] ">
          <h1 className="font-[700] text-[50px] text-[#0F2943] w-[80%] max-md:w-[100%] max-md:text-[30px] max-md:text-center ">
            Adeniyi Tomiwa
          </h1>

          <p className=" text-[20px] w-[80%] max-md:w-[100%] max-md:text-center text-[#0F2943] font-bold  ">
            Transforming ideas into elegant solutions through creative design
            and innovative development
          </p>
          <div className=" w-[68%]  flex justify-between items-center   max-md:w-[100%] max-md:flex-col max-md:gap-y-[20px] gap-x-[10px]">
            <button className="w-[200px]  bg-[#2B7FFF] text-white rounded-full p-[15px] font-bold  cursor-pointer max-md:w-[100%]">
              View My Work
            </button>

            <button className="w-[200px]  hover:text-white text-white cursor-pointer max-md:w-[100%] border border-[#2B7FFF] rounded-full p-[15px] font-bold">
              Let's Connect
            </button>
          </div>
        </div>
        {/* <div className="w-[50%] max-md:w-[100%]">
          <img
            src="/images/muhammad.jpg"
            alt=""
            className="w-[100%] rounded-[20px]"
          />
        </div> */}
      </div>
    </div>
  );
}
