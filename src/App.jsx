import React from 'react';
import './App.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaGithub, FaLinkedin, FaFacebook, FaBriefcase, FaCertificate } from 'react-icons/fa';

// Import ảnh từ thư mục assets (Đảm bảo đuôi file chuẩn là .jpg hoặc đổi lại nếu là .png)
import avatarImg from './assets/avatar.jpg';

function App() {
  return (
    <div className="main-wrapper">
      <div className="container">
        
        {/* 1. MỤC GIỚI THIỆU & LIÊN HỆ (Phong cách MeetMe) */}
        <div className="portfolio-card">
          <div className="left-side">
            <div className="image-container">
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

        {/* 2. MỤC DỰ ÁN */}
        <div className="section-card">
          <h2 className="section-title"><FaBriefcase className="section-icon"/> DỰ ÁN TIÊU BIỂU</h2>
          <div className="projects-grid">
            <div className="project-item">
              <h3>HomeMarket</h3>
              <p className="tech-stack">React Native | Supabase</p>
              <p className="desc">Ứng dụng di động đa nền tảng mua sắm siêu thị trực tuyến. Thiết kế giao diện và làm fontend cho dự án</p>
            </div>
            <div className="project-item">
              <h3>Techmart Dashboard</h3>
              <p className="tech-stack">ReactJS | Laravel</p>
              <p className="desc">Hệ thống quản trị thương mại điện tử tập trung. Thiết kế giao diện và làm fontend cho dự án</p>
            </div>
            <div className="project-item">
              <h3>MOMOCHA Management</h3>
              <p className="tech-stack">C# WinForms | VS 2022</p>
              <p className="desc">Phần mềm desktop quản lý bán hàng nội bộ cho cửa hàng trà sữa. Thiết kế giao diện và làm fontend cho dự án</p>
            </div>
          </div>
        </div>

        {/* 3. MỤC CHỨNG CHỈ */}
        <div className="section-card">
          <h2 className="section-title"><FaCertificate className="section-icon"/> CHỨNG CHỈ & HỌC VẤN</h2>
          <ul className="cert-list">
            <li>
              <strong>Trường Đại học Sư phạm TP.HCM</strong>
              <span>Cử nhân Công nghệ Thông tin (2023 - Hiện tại) | GPA: 2.67/4.0</span>
            </li>
            <li>
              <strong>Chứng chỉ: Build a free website with WordPress</strong>
              <strong>Chứng chỉ: Foundations of Coding Front-End</strong>
            </li>
            <li>
              <strong>Chứng chỉ TOEIC</strong>
              <span>Đang trong lộ trình học tập, mục tiêu đạt 450+ điểm.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;