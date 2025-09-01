import React from "react";

const ProjectPopup = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 relative animate-fade-in">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Ảnh đại diện */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded mb-6"
        />

        {/* Tiêu đề */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>

        {/* Giới thiệu */}
        {project.intro && (
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-gray-800">Giới thiệu dự án:</span> {project.intro}
          </p>
        )}

        {/* Mô tả */}
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Công nghệ */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag, i) => (
            <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Nhiệm vụ */}
        {project.tasks && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Nhiệm vụ đã thực hiện:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {project.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Nội dung theo loại dự án */}
        {project.type === "media" && project.gallery && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Ảnh / Video dự án:</h4>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.src}
                    alt={`Media ${index + 1}`}
                    className="w-full h-40 object-cover rounded shadow mb-2"
                  />
                  <p className="text-sm text-gray-600 text-center">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.type === "design" && project.gallery && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">File thiết kế:</h4>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.src}
                    alt={`Thiết kế ${index + 1}`}
                    className="w-full h-40 object-cover rounded shadow mb-2"
                  />
                  <p className="text-sm text-gray-600 text-center">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.type === "development" && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Liên kết dự án:</h4>
            <div className="flex flex-col gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  🌐 Website demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  💻 Mã nguồn GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPopup;
