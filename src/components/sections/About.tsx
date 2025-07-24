export default function About() {
  return (
    <div className="w-[100%] flex flex-col items-center gap-y-[50px] bg-[#0A0A0A] py-[50px] max-md:px-[20px]">
      <div className="w-[70%] mx-auto max-md:w-[100%]">
        <h1 className="text-[#2B7FFF] text-center font-[700] text-[50px]">
          About
        </h1>

        <p className=" font-[300] text-center w-[70%] mx-auto text-[17px] max-md:w-[100%] text-white">
          Hi, I'm a Full-Stack Web Developer with a passion for crafting clean
          code, building scalable apps, and occasionally transmitting from the
          agbado mainframe.
        </p>
      </div>

      <div
        id="about"
        className="w-[70%] mx-auto flex justify-between items-start max-md:flex-col max-md:w-[100%]"
      >
        <div className="w-[49%] max-md:hidden">
          <img
            className="w-[100%] rounded-[50px]"
            src="/images/mb.jpg"
            alt="image"
          />
        </div>
        <div className="w-[49%] space-y-[30px] max-md:w-[100%]">
          <div className="w-[100%] max-md:space-y-[20px] space-y-[30px]">
            <h4 className="text-[#2B7FFF] font-[700] text-[15px]">About Me</h4>
            <h1 className="text-[40px] text-white font-[700]">
              FullStack Web Developer
            </h1>
            <p className="italic text-[20px] max-md:text-[15px] text-white max-md:w-[100%]">
              Whether it's React, Node.js, or launching full-stack projects into
              the cloud, I'm on a mission to recruit innovation and transmit
              value—one symbol at a time.
            </p>
          </div>

          <div className=" flex justify-between items-start p-[20px]  rounded-[20px] border border-gray-100 max-md:flex-col max-md:w-[100%] max-md:mx-auto">
            <div className="w-[49%]  space-y-[30px]">
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">Name</p>
                <p className="text-[20px] text-[#2B7FFF] font-bold">
                  Eliot Johnson
                </p>
              </div>
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">
                  Nationality
                </p>
                <p className="text-[20px] text-[#2B7FFF] font-bold">Nigerian</p>
              </div>
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">
                  Occupation
                </p>
                <p className="text-[20px] text-[#2B7FFF] font-bold">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="w-[49%]  space-y-[30px]">
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">
                  Phone Number
                </p>
                <p className="text-[20px] text-[#2B7FFF] font-bold">
                  +234 704 611 5232
                </p>
              </div>
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">Email</p>
                <p className="text-[20px] text-[#2B7FFF] font-bold">
                  Adeniyiyomiwa4@gmail.com
                </p>
              </div>
              {/* <div>
                <p className="text-gray-400 font-[500] text-[15px]">
                  Occupation
                </p>
                <p className="text-[20px] text-[#0F2943] font-bold">
                  Full Stack Developer
                </p>
              </div> */}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
