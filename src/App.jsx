import React from 'react';
import './App.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

// 1. CHÈN DÒNG IMPORT NÀY ĐỂ GỌI ẢNH TỪ THƯ MỤC ASSETS
import avatarImg from './assets/avatar.jpg';

function App() {
  return (
    <div className="main-wrapper">
      <div className="portfolio-card">
        <div className="left-side">
          <div className="image-container">
            {/* 2. SỬA LẠI ĐOẠN NÀY: Gọi biến avatarImg thay vì gõ text */}
            <img src={avatarImg} alt="Nguyễn Huy Đông" />
          </div>
        </div>
        
        <div className="right-side">
          <div className="content">
            <p className="greeting">HELLO EVERYBODY, I AM</p>
            <h1 className="name">NGUYỄN HUY ĐÔNG</h1>
            <h3 className="title">JUNIOR FRONTEND DEVELOPER</h3>
            <p className="bio">
              Em là sinh viên năm 3 chuyên ngành Công nghệ Thông tin tại Trường ĐH Sư phạm TP.HCM. 
              Đam mê phát triển Frontend và UI/UX. Luôn chủ động cập nhật công nghệ mới để ứng dụng 
              vào hệ thống thực tế và trở thành một Software Engineer toàn diện.
            </p>
            
            <div className="contact-list">
              <div className="contact-item">
                <FaCalendarAlt className="icon" /> <span>09th November, 2005</span>
              </div>
              <div className="contact-item">
                <FaPhone className="icon" /> <span>097.116.3455</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="icon" /> <span>nhdong9115@email.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" /> <span>Bình Chánh, TP. Hồ Chí Minh</span>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://github.com/huydong0911" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/%C4%91%C3%B4ng-nguy%E1%BB%85n-huy-7ab477405/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://www.facebook.com/nguyen.huy.ong.862486" target="_blank" rel="noreferrer"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;