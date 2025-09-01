import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Giới Thiệu</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Nội dung chính */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Hình ảnh bên trái */}
          <div className="fade-in">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b320e0ee-33bd-497d-b7c2-af18ba4951dc.png"
              alt="Developer working on laptop"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Văn bản bên phải */}
          <div className="fade-in self-start">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Chào mừng đến portfolio của tôi!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tôi là một Frontend Developer với hơn 3 năm kinh nghiệm chuyên về ReactJS. Tôi đam mê việc tạo ra những ứng dụng web chất lượng cao, dễ sử dụng và có trải nghiệm người dùng tốt.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Với nền tảng về Khoa học Máy tính và nhiều dự án thực tế, tôi đã tích lũy được khả năng giải quyết vấn đề và làm việc hiệu quả trong môi trường Agile.
            </p>

            {/* Kỹ năng */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "ReactJS Expert",
                "Performance",
                "UI/UX Design",
                "Team Collaboration",
              ].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
