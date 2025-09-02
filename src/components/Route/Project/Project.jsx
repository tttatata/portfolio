import React, { useState } from "react";
import ProjectPopup from "../../Layout/Popup";

// Import hình ảnh dự án
import PharmacyImg from "../../../Assests/screen/phamacyapp.png";
import ChatappImg from "../../../Assests/screen/chatapp.png";
import SmartparkImg from "../../../Assests/screen/smartpark.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const appProjects = [
 {
    id: "pharmacy",
    type: "development",
    title: "Pharmacy E-commerce",
    description: "Dashboard quản lý với React, Chart.js và Redux Toolkit",
    intro: "Dự án xây dựng hệ thống thương mại điện tử cho hiệu thuốc...",
    image: PharmacyImg,
    tags: ["React", "Flutter", "Node.js"],
    tasks: [/* nhiệm vụ */],
    demo: "https://pharmacy-app.vercel.app",
    github: "https://github.com/yourusername/pharmacy-app"
  },
  {
    id: "chatapp", type: "development",
    title: "Chat App",
    description: "Ứng dụng tán gẫu với real-time messaging",
    intro: "Ứng dụng mạng xã hội đơn giản cho phép người dùng đăng nhập, gửi tin nhắn và trò chuyện theo thời gian thực.",
    image: ChatappImg,
    tags: ["React", "Firebase", "Socket.io"],
    tasks: [
      "Tạo hệ thống đăng nhập bằng Firebase Auth",
      "Xây dựng giao diện chat realtime bằng React",
      "Tích hợp Socket.io để xử lý tin nhắn trực tiếp",
      "Thiết kế responsive cho mobile và desktop"
    ],
  },
  {
    id: "smartpark", type: "development",
    title: "SmartPark",
    description: "Ứng dụng quản lý bãi giữ xe bằng điện thoại",
    intro: "Ứng dụng giúp quản lý phương tiện giao thông ",
    image: SmartparkImg,
    tags: ["Flutter", "Firebase"],
    tasks: [
      "Thiết kế giao diện người dùng bằng Flutter",
      "Xây dựng hệ thống đặt chỗ và thanh toán",
      "Quản lý dữ liệu người dùng bằng Firebase Firestore"
    ],
  },
];


  const designProjects = [
  {
    id: "branding",
    type: "design",
    title: "Portfolio Branding",
    description: "Thiết kế nhận diện cá nhân với Illustrator",
    intro: "Dự án xây dựng bộ nhận diện cá nhân...",
    image: "URL_ẢNH_4",
    tags: ["Illustrator", "Photoshop", "Typography"],
    tasks: [/* nhiệm vụ */],
    gallery: [
      { src: "URL_THIET_KE_1", caption: "Logo cá nhân" },
      { src: "URL_THIET_KE_2", caption: "Banner portfolio" }
    ]
  },
  {
    id: "branding",  type: "design",
    title: "Portfolio Branding",
    description: "Thiết kế nhận diện cá nhân với Illustrator",
    intro: "Dự án xây dựng bộ nhận diện cá nhân bao gồm logo, màu sắc, font chữ và các yếu tố đồ họa.",
    image: "URL_ẢNH_4",
    tags: ["Illustrator", "Photoshop", "Typography"],
    tasks: [
      "Thiết kế logo cá nhân bằng Illustrator",
      "Tạo bộ màu sắc và font chữ chủ đạo",
      "Thiết kế banner và hình ảnh cho portfolio",
      "Chỉnh sửa ảnh bằng Photoshop để đồng bộ phong cách"
    ],
  },
];
const mediaProjects = [
  {
    id: "videoediting", type: "media",
    title: "Video Editing Reel",
    description: "Biên tập video highlight cho sự kiện",
    intro: "Dự án biên tập video tổng hợp các khoảnh khắc nổi bật trong sự kiện, sử dụng hiệu ứng chuyển cảnh và âm thanh chuyên nghiệp.",
    image: "URL_ẢNH_5",
    tags: ["Premiere", "After Effects", "Motion"],
    tasks: [
      "Chọn lọc và cắt ghép các đoạn video nổi bật",
      "Thêm hiệu ứng chuyển cảnh bằng After Effects",
      "Đồng bộ âm thanh và nhạc nền",
      "Xuất video chất lượng cao cho nhiều nền tảng"
    ],
    gallery: [
      { src: "URL_ẢNH_CHỤP_1", caption: "Chân dung khách hàng" },
      { src: "URL_ẢNH_CHỤP_2", caption: "Ảnh sản phẩm mỹ phẩm" }
    ]
  },
 {
    id: "photography",
    type: "media",
    title: "Photography Showcase",
    description: "Bộ ảnh chân dung và sản phẩm",
    intro: "Dự án chụp ảnh chân dung và sản phẩm...",
    image: "URL_ẢNH_6",
    tags: ["Lightroom", "Canon", "Retouch"],
    tasks: [/* nhiệm vụ */],
    gallery: [
      { src: "URL_ẢNH_CHỤP_1", caption: "Chân dung khách hàng" },
      { src: "URL_ẢNH_CHỤP_2", caption: "Ảnh sản phẩm mỹ phẩm" }
    ]
  }
];



  const renderSection = (title, projects) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dự Án Đã Tham Gia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Các dự án tiêu biểu trong lĩnh vực phát triển ứng dụng, thiết kế và media
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Các nhóm dự án */}
        {renderSection("Phát triển ứng dụng", appProjects)}
        {renderSection("Thiết kế", designProjects)}
        {renderSection("Media", mediaProjects)}

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
            Xem tất cả dự án →
          </a>
        </div>
      </div>
<ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};


export default Projects;
