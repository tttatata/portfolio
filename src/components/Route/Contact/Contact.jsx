import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-purple-700 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Liên Hệ Với Tôi</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Hãy kết nối nếu bạn có dự án thú vị hoặc muốn hợp tác cùng nhau
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </div>

        {/* Nội dung */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Thông tin liên hệ */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
            <div className="space-y-4">
              {[
                {
                  icon: "fas fa-envelope",
                  label: "Email",
                  value: "thuongminhtg@gmail.com",
                },
                {
                  icon: "fas fa-phone",
                  label: "Phone",
                  value: "038606881",
                },
                {
                  icon: "fas fa-map-marker-alt",
                  label: "Location",
                  value: "TP.HCM, Việt Nam",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <i className={`${item.icon}`}></i>
                  </div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-blue-100">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

           
          </div>

          {/* Form liên hệ */}
          <div className="fade-in">
            <form className="space-y-6" id="contact-form">
              <div>
                <label className="block text-sm font-semibold mb-2">Họ và tên</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Nhập tên của bạn"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Tin nhắn</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Viết tin nhắn của bạn..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
