import React from "react";

const Setting = () => {
  return (
    <div className="rounded-[32px] bg-white px-5 py-9 h-[834px]">
      <h4 className="font-bold text-[20px] text-[#393939] text-center">
        Settings
      </h4>
      <div className="flex items-center mt-6 gap-3 py-[10px] px-[14px] rounded-[10px] bg-[#F7F8FA] mb-[15px]">
        <span className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#E8F0F5;]  ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5H15H3ZM9 3V5V3ZM10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9L10.048 14.5ZM12.5 18H19.5H12.5ZM11 21L16 11L21 21H11Z"
              stroke="#868686"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span className="text-[16px] font-400 text-[#868686]">
          Language Settings
        </span>
      </div>
      <div className="flex items-center mt-6 gap-3 py-[10px] px-[14px] rounded-[10px] bg-[#F7F8FA] mb-[15px]">
        <span className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#E8F0F5;]  ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5H15H3ZM9 3V5V3ZM10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9L10.048 14.5ZM12.5 18H19.5H12.5ZM11 21L16 11L21 21H11Z"
              stroke="#868686"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span className="text-[16px] font-400 text-[#868686]">
          General Settings
        </span>
      </div>
      <div className="flex items-center mt-6 gap-3 py-[10px] px-[14px] rounded-[10px] bg-[#F7F8FA] mb-[15px]">
        <span className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#E8F0F5;]  ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5H15H3ZM9 3V5V3ZM10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9L10.048 14.5ZM12.5 18H19.5H12.5ZM11 21L16 11L21 21H11Z"
              stroke="#868686"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span className="text-[16px] font-400 text-[#868686]">
          Font Settings
        </span>
      </div>
      <div className="flex items-center mt-6 gap-3 py-[10px] px-[14px] rounded-[10px] bg-[#F7F8FA] mb-[15px] border-l-4 transition-all border-[#F7F8FA] duration-250 hover:border-[#1FA45B] group">
        <span className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#E8F0F5;]  ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5H15H3ZM9 3V5V3ZM10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9L10.048 14.5ZM12.5 18H19.5H12.5ZM11 21L16 11L21 21H11Z"
              stroke="#868686"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span className="text-[16px] font-500 text-[#868686] group-hover:text-[#1FA45B] transition-all duration-240">
        Appearance Settings
        </span>
      </div>
    </div>
  );
};

export default Setting;
