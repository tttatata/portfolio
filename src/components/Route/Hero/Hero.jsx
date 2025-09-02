import React, { useState, useEffect } from "react";
import avatar from "../../../Assests/avatar.jpg"; // hoặc dùng ảnh từ public

const Hero = () => {
  const fullText = "Software Development, Design & Media Production ";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-purple-700 to-blue-600 text-white min-h-[80vh] flex items-center pt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Ảnh bên trái */}
          <div className="w-53 h-53 rounded-full bg-white/20 backdrop-blur-sm p-2 shadow-lg">
            <img
              src={avatar}
              alt="Trần Hữu Minh Thương"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Nội dung bên phải */}
          <div className="text-center md:text-left max-w-2xl ">
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              Trần Hữu Minh Thương
            </h1>
           <div className="text-lg md:text-2xl text-blue-100 mb-6 font-semibold whitespace-nowrap">
              {displayedText}
              <span className="text-blue-400 animate-blink">|</span>
            </div>
            <p className="text-lg md:text-xl mb-8">
              Tôi tạo ra những trải nghiệm web hiện đại với React.js, Material-UI và Flutter, kết hợp backend bằng Node.js để xây dựng hệ thống linh hoạt và hiệu quả. Ngoài lập trình, tôi còn có kỹ năng chụp ảnh, chỉnh sửa video, và thiết kế đồ họa chuyên nghiệp với Photoshop và Illustrator — giúp tôi biến ý tưởng thành những sản phẩm kỹ thuật số đẹp mắt, sáng tạo và tối ưu trải nghiệm người dùng.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Xem Dự Án
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Liên Hệ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
