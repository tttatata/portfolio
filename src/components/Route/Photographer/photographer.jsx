import React from "react";
import PharmacyImg from "../../../Assests/screen/phamacyapp.png";
import ChatappImg from "../../../Assests/screen/chatapp.png";
import SmartparkImg from "../../../Assests/screen/imagesmp.png";

import product1kImg from "../../../Assests/imageproject/DSC04015.jpg";
import product2kImg from "../../../Assests/imageproject/DSC04019.jpg";
import product3kImg from "../../../Assests/imageproject/fashion.png";
import product4kImg from "../../../Assests/imageproject/thamquan.jpg";
import product5kImg from "../../../Assests/imageproject/daibieu.jpg";
import product6kImg from "../../../Assests/imageproject/chibi.png";
import product7kImg from "../../../Assests/imageproject/KV_Final.png";
import product8kImg from "../../../Assests/imageproject/188A2058.jpg";
import product9kImg from "../../../Assests/imageproject/188A5383.jpg";
import product10kImg from "../../../Assests/imageproject/078A3814.jpg";
import product11kImg from "../../../Assests/imageproject/si1.JPG";
import product12kImg from "../../../Assests/imageproject/DSC04099.jpg";
const photoProjects = [
  {
    title: "Kỷ niệm 80 năm Quốc Khánh 02/09 - Mỹ Tho, Đồng Tháp",
    year: "2025",

    image: product1kImg, // Đường dẫn ảnh
    link: "https://photos.app.goo.gl/1zEfAjCDGAvEKHcs9",
  },
  {
    title: "Bộ ảnh trái dừa - tự  chụp",
    year: "2025",

    image: product12kImg,
    link: "https://photos.app.goo.gl/89NynWzo8xhDWPaE6",
  },
  {
    title: "Bộ ảnh Tết áo dài - Mỹ Tho, Đồng Tháp",
    year: "2025",

    image: product11kImg,
    link: "https://photos.app.goo.gl/EnUnYrQkZuoxB2XRA",
  },
  {
    title: "Ngày hội tư vấn tuyển sinh Bách Khoa 2023 - ĐHBK",
    year: "2023",

    image: product10kImg,
    link: "https://photos.app.goo.gl/erwmn3qWa4m7dhWA9",
  },
  {
    title: "Hội thảo quốc tế hóa học và ứng dụng - IUH",
    year: "2023",

    image: product9kImg,
    link: "https://photos.app.goo.gl/Me2MvPVQS8iE3WAJ6",
  },
    {
    title: "IUH Fashion Show 2023 - IUH",
    year: "2023",

    image:product3kImg ,
    link: "https://photos.app.goo.gl/svc5yGk6pHt5Mv748",
  },
  {
    title: "Team building Trung Tâm TT và TT - IUH ",
    year: "2023",

    image: product8kImg,
    link: "https://photos.app.goo.gl/Ns9uCezsLcM3qReL9",
  },
];

const videoProjects = [
  {
    title: "Video behind the scene khai giảng IUH 2023",
    year: "2023",
    description: [
      "Dự án video behind the scene khai giảng IUH 2023, phụ trách quay, dựng bằng Primiere Pro",
    ],
    videoUrl: "https://www.youtube.com/embed/plPeTFQFyns",
  },
  {
    title: "Short Film 'khoảng khắc TSMT 2023'",
    year: "2023",
    description:
      "Dự án video ngắn khoảng khắc TSMT 2023, phụ trách quay, dựng bằng Catcup ",
    videoUrl: "https://www.youtube.com/embed/gMRdD8M2gR8",
  },
  {
    title: "Short Film 'khoảng khắc visual tân SV 2023'",
    year: "2023",
    description:
      "Dự án video ngắn khoảng khắc visual tân SV 2023, phụ trách quay, dựng cùng team bằng Catcup ",
    videoUrl: "https://www.youtube.com/embed/IKnT34TA5KQ",
  },
  ,
  {
    title: "Dự án video ngắn giới thiệu laptop Legion 5",
    year: "2022",
    description:
      "Dự án video ngắn giới thiệu laptop Legion 5, phụ trách kịch bản, quay, dựng bằng Catcup ",
    videoUrl: "https://www.youtube.com/embed/Jc1x0bk0HS4",
  },
];

const Photographer = () => {
  return (
    <section id="projects" className="bg-white text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Dự Án</h2>

        {/* PHOTO SECTION */}
        <h3 className="text-2xl font-semibold mb-6">📸 Photo Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {photoProjects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-bold">{project.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{project.year}</p>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:underline font-semibold"
              >
                Xem chi tiết →
              </a>
            </div>
          ))}
        </div>

        {/* VIDEO SECTION */}
        <h3 className="text-2xl font-semibold mb-6">🎥 Video Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoProjects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  allowFullScreen
                  className="w-full h-64 rounded"
                ></iframe>
              </div>
              <h4 className="text-xl font-bold">{project.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{project.year}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photographer;
