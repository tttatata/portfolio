import React, { useState } from "react";

// Import hình ảnh kỹ năng
import reactImg from "../../../Assests/image/react.png";
import capcutImg from "../../../Assests/image/Capcut.png";
import nodeImg from "../../../Assests/image/Nodejs.png";
import figmaImg from "../../../Assests/image/figma.png";
import ptsImg from "../../../Assests/image/pts1.png";
import prlImg from "../../../Assests/image/prl.png";
import illustratorImg from "../../../Assests/image/AI.png";
import lightroomImg from "../../../Assests/image/LRC.png";
import flutterImg from "../../../Assests/image/flutter.png";
import cameraImg from "../../../Assests/image/camera.png";
// Component hiển thị từng nhóm kỹ năng
const SkillGroup = ({ title, skills }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skills : skills.slice(0, 3);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="text-center p-6 bg-gray-50 rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500 shadow-md">
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>

      {skills.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 hover:underline font-semibold"
          >
            {showAll ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      )}
    </div>
  );
};

// Component chính hiển thị toàn bộ phần kỹ năng
const Skills = () => {
  const devSkills = [
    {
      title: "ReactJS",
      image: reactImg,
      description: "Hooks, Context API, Redux, Tối ưu hiệu suất",
    },
    {
      title: "Node.js",
      image: nodeImg,
      description: "REST APIs, Express, Tích hợp cơ sở dữ liệu",
    },
    {
      title: "Flutter",
      image: flutterImg,
      description: "Phát triển ứng dụng di động đa nền tảng",
    },
  ];

  const designSkills = [
    {
      title: "Figma",
      image: figmaImg,
      description: "Wireframes, Prototype, Hệ thống component",
    },
    {
      title: "Photoshop",
      image: ptsImg,
      description: "Chỉnh sửa ảnh, Retouch, Thiết kế đồ họa",
    },
    {
      title: "Illustrator",
      image: illustratorImg,
      description: "Thiết kế vector, xây dựng thương hiệu, typography",
    },
  ];

  const mediaSkills = [
    {
  title: "Photography & Videography",
  image: cameraImg , // hoặc ảnh camera nếu bạn có
  description: "Chụp ảnh và quay video, kiểm soát ánh sáng, bố cục, chuyển động và hậu kỳ bằng Lightroom & Premiere Pro",
},
    {
      title: "Premiere Pro",
      image: prlImg,
      description: "Biên tập video, hiệu ứng chuyển cảnh, đồng bộ âm thanh",
    },
    {
      title: "CapCut",
      image: capcutImg,
      description: "Biên tập video, dựng video trên nền tảng Tiktok",
    },
    {
      title: "Lightroom",
      image: lightroomImg,
      description: "Chỉnh màu ảnh, ánh sáng, bố cục hình ảnh",
    },
    {
      title: "Photoshop",
      image: ptsImg,
      description: "Chỉnh sửa sáng tạo, hiệu ứng hình ảnh",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kỹ Năng Chuyên Môn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Các công nghệ và công cụ mà tôi thành thạo trong phát triển ứng dụng web, thiết kế và media
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Các nhóm kỹ năng */}
        <SkillGroup title="Phát triển ứng dụng" skills={devSkills} />
        <SkillGroup title="Thiết kế" skills={designSkills} />
        <SkillGroup title="Media & sáng tạo" skills={mediaSkills} />
      </div>
    </section>
  );
};

export default Skills;
