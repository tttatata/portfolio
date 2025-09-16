import React, { useState } from "react";

const ProjectPopup = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        {/* Nút đóng popup */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-white text-gray-700 hover:text-red-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-50 transition duration-200"
          aria-label="Đóng popup"
        >
          &times;
        </button>

        {/* Nội dung popup */}
        <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative animate-fade-in">
          {/* Ảnh đại diện */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[400px] object-contain rounded mb-6 cursor-pointer"
            onClick={() => setSelectedImage(project.image)}
          />

          {/* Tiêu đề */}
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>

          {/* Giới thiệu */}
          {project.intro && (
            <p className="text-gray-700 mb-4">
              <span className="font-semibold text-gray-800">Giới thiệu dự án:</span>{" "}
              {project.intro}
            </p>
          )}

          {/* Mô tả */}
          <p className="text-gray-600 mb-4">{project.description}</p>

          {/* Công nghệ */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
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

          {/* Media */}
          {project.type === "media" && project.gallery && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Ảnh / Video dự án:</h4>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((item, index) => (
                  <div key={index}>
                    {item.type === "video" ? (
                      <div className="aspect-video w-full rounded overflow-hidden shadow mb-2">
                        <iframe
                          src={item.src.replace("youtu.be/", "www.youtube.com/embed/")}
                          title={`Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                        <p className="text-sm text-gray-600 text-center">{item.caption}</p>
                      </div>
                    ) : (
                      <>
                        <img
                          src={item.src}
                          alt={`Media ${index + 1}`}
                          className="w-full max-h-[250px] object-contain rounded shadow mb-2 cursor-pointer"
                          onClick={() => setSelectedImage(item.src)}
                        />
                        <p className="text-sm text-gray-600 text-center">{item.caption}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Design */}
          {project.type === "design" && project.gallery && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">File thiết kế:</h4>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.src}
                      alt={`Thiết kế ${index + 1}`}
                      className="w-full max-h-[250px] object-contain rounded shadow mb-2 cursor-pointer"
                      onClick={() => setSelectedImage(item.src)}
                    />
                    <p className="text-sm text-gray-600 text-center">{item.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Development */}
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
                {project.github?.web && (
                  <a
                    href={project.github.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    💻 Mã nguồn Web
                  </a>
                )}
                {project.github?.mobile && (
                  <a
                    href={project.github.mobile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    📱 Mã nguồn Mobile
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal zoom ảnh */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoom"
            className="max-w-full max-h-full rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectPopup;
