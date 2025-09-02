import React, { useState } from "react";
import ProjectPopup from "../../Layout/Popup";

// Import hình ảnh dự án
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
import product8kImg from "../../../Assests/imageproject/bg.jpg";
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const appProjects = [
    {
      id: "pharmacy",
      type: "development",
      title: "Pharmacy E-commerce",
      description: "Dashboard quản lý với React, Chart.js và Redux Toolkit",
      intro:
        "Dự án xây dựng hệ thống thương mại điện tử cho hiệu thuốc trên nền tảng web và mobille",
      image: PharmacyImg,
      tags: ["React", "Flutter", "Node.js"],
      tasks: [
        "Thiết kế giao diện người dùng bằng Figma: bố cục, màu sắc, trải nghiệm người dùng",
        "Xây dựng ứng dụng mobile bằng Flutter: đăng nhập, tìm kiếm sản phẩm, đặt hàng",
        "Phát triển server backend với Node.js và Express: xử lý API, xác thực người dùng, quản lý đơn hàng",
        "Tích hợp Redux Toolkit và Chart.js vào dashboard quản lý hiệu thuốc",
        "Chỉnh sửa và tối ưu giao diện web với React: responsive, hiệu ứng, cấu trúc component",
        "Triển khai website lên Vercel và kiểm tra hiệu suất hoạt động",
      ],
      demo: "https://nhathuocthanhthuong.vercel.app/",
      github: {
        web: "https://github.com/SirenFong/KLTN-Ecommerce",
        mobile: "https://github.com/tttatata/app_mobi_pharmacy",
      },
    },
    {
      id: "chatapp",
      type: "development",
      title: "Chat App",
      description: "Ứng dụng tán gẫu với real-time messaging",
      intro:
        "Ứng dụng mạng xã hội đơn giản cho phép người dùng đăng nhập, gửi tin nhắn và trò chuyện theo thời gian thực.",
      image: ChatappImg,
      tags: ["React", "Firebase", "Socket.io"],
      tasks: [
        "Tạo hệ thống đăng nhập bằng Firebase Auth",
        "Xây dựng giao diện chat realtime bằng React",
        "Tích hợp Socket.io để xử lý tin nhắn trực tiếp",
        "Thiết kế responsive cho mobile và desktop",
      ],
      github: {
        mobile: "https://github.com/tttatata/chatapp",
      },
    },
    {
      id: "smartpark",
      type: "development",
      title: "SmartPark",
      description: "Ứng dụng quản lý bãi giữ xe bằng điện thoại",
      intro: "Ứng dụng giúp quản lý xe ra vào bãi bằng thẻ nfc ",
      image: SmartparkImg,
      tags: ["Flutter", "Firebase"],
      tasks: [
        "Thiết kế giao diện người dùng bằng Flutter",
        "Xây dựng hệ thống đặt chỗ và thanh toán",
        "Quản lý dữ liệu người dùng bằng Firebase database",
        "Lưu hình ảnh trên Cloudinary",
      ],
      github: {
        mobile: "https://github.com/tttatata/smartpark.git",
      },
    },
  ];

  const designProjects = [
    {
      id: "branding",
      type: "design",
     title: "Design Editing & Print Production",
      description: "Thiết kế, chỉnh sửa file và in sản phẩm",
      intro:
        "Thiết kế chỉnh sửa và tạo các sản phẩm đồ họa phục vụ truyền thông và in ấn.",
      image: product8kImg,
      tags: ["Illustrator", "Photoshop", "Typography", "In ấn"],
      tasks: [
        "Thiết kế banner và hình ảnh được khách hàng yêu cầu",
        "Chỉnh sửa file thiết kế bằng Photoshop, Illustrator để đồng bộ phong cách hình ảnh",
        "Chuẩn hóa kích thước và định dạng file phục vụ in ấn tại Tam Vạn Cát",
        "Xuất file in theo yêu cầu kỹ thuật: CMYK, DPI cao, định dạng PDF/InDesign",
        "Kiểm tra bản in thử và tinh chỉnh chi tiết để đảm bảo chất lượng đầu ra",
      ],
      gallery: [
        { src: product7kImg, caption: "Background chương trình" },
        { src: product8kImg, caption: "Background chương trình" },
      ],
    },
    {
      id: "branding",
      type: "design",
      title: "Chibi Branding",
      description: "Thiết kế nhận diện cá nhân với Illustrator",
      intro:
        "Thiết kế xây dựng bộ nhận diện cá nhân bao gồm logo, màu sắc, font chữ và các yếu tố đồ họa.",
      image: product6kImg,
      tags: ["Illustrator", "Photoshop", "Typography"],
      tasks: [
        "Chỉnh sửa ảnh bằng Photoshop để đồng bộ phong cách",
        "Thiết kế nhân vật chibi đại diện cho IUH: tạo dáng, biểu cảm, màu sắc",
        "Phối hợp với bộ phận truyền thông để đảm bảo tính nhận diện thương hiệu",
        "Xuất file thiết kế phục vụ in ấn và truyền thông online",
      ],
      gallery: [
        {
          src: product6kImg,
          caption: "Nhân vật chibi nam, nữ đại diện sinh viên IUH",
        },
      ],
    },
  ];
  const mediaProjects = [
    {
      id: "videoediting",
      type: "media",
      title: "Video Editing Reel",
      description: "Biên tập video highlight cho sự kiện",
      intro:
        "Dự án biên tập video tổng hợp các khoảnh khắc nổi bật trong sự kiện, sử dụng hiệu ứng chuyển cảnh và âm thanh chuyên nghiệp.",
      image: "URL_ẢNH_5",
      tags: ["Premiere", "After Effects", "Motion"],
      tasks: [
        "Chọn lọc và cắt ghép các đoạn video nổi bật",
        "Thêm hiệu ứng chuyển cảnh bằng After Effects",
        "Đồng bộ âm thanh và nhạc nền",
        "Xuất video chất lượng cao cho nhiều nền tảng",
      ],
      gallery: [
        { src: "URL_ẢNH_CHỤP_1", caption: "Chân dung khách hàng" },
        { src: "URL_ẢNH_CHỤP_2", caption: "Ảnh sản phẩm mỹ phẩm" },
      ],
    },
    {
      id: "photography",
      type: "media",
      title: "Photography Showcase",
      description: "Hình ảnh sự kiện và các dự án đã tham gia",

      image: product2kImg,
      tags: ["Lightroom", "Canon", "Retouch"],
      tasks: [
        "Lên kế hoạch chụp ảnh theo yêu cầu khách hàng (chân dung, sản phẩm, sự kiện)",
        "Chuẩn bị thiết bị: máy ảnh Canon/Sony, đèn chiếu, phông nền, đạo cụ",
        "Chọn địa điểm và bố trí ánh sáng phù hợp cho từng bối cảnh",
        "Thực hiện chụp ảnh chân dung và sản phẩm theo concept đã thống nhất",
        "Ghi lại khoảnh khắc nổi bật trong sự kiện: phát biểu, tương tác, sân khấu",
        "Chỉnh màu và ánh sáng bằng Lightroom để tạo cảm xúc thị giác",
        "Retouch chi tiết bằng Photoshop: da, sản phẩm, hậu cảnh",
        "Sắp xếp bố cục ảnh và xuất file theo định dạng yêu cầu",
      ],
      gallery: [
        {
          src: product1kImg,
          caption:
            "Kỷ niệm 80 năm thành lập nước Cộng hòa Xã hội Chủ nghĩa Việt Nam 2/9/1945 – Đông Tháp",
        },
        {
          src: product2kImg,
          caption:
            "Kỷ niệm 80 năm thành lập nước Cộng hòa Xã hội Chủ nghĩa Việt Nam 2/9/1945 – Đông Tháp",
        },
        {
          src: product3kImg,
          caption: "IUH Fashion Show 2023 - ĐHCN TP. Hồ Chí Minh",
        },
        {
          src: product4kImg,
          caption:
            "Giới thiệu Đại biểu Đoàn đánh giá Chương trình AUN 2023 - ĐHCN TP. Hồ Chí Minh",
        },
        {
          src: product5kImg,
          caption:
            "Đoàn đánh giá Chương trình AUN 2023 tham quan cơ sở vật chất - ĐHCN TP. Hồ Chí Minh",
        },
      ],
    },
  ];

  const renderSection = (title, projects) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Xem thêm →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dự Án Đã Tham Gia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Các dự án tiêu biểu trong lĩnh vực phát triển ứng dụng, thiết kế và
            media
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Các nhóm dự án */}
        {renderSection("Phát triển ứng dụng", appProjects)}
        {renderSection("Thiết kế", designProjects)}
        {renderSection("Media", mediaProjects)}

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Xem tất cả dự án →
          </a>
        </div>
      </div>
      <ProjectPopup
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
