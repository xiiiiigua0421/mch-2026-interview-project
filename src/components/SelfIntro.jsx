import React from 'react';
import '../styles/SelfIntro.css';

const SelfIntro = () => {
  return (
    <section className="intro-section">
      <div className="intro-header">
        <h1>歡迎來到梅竹黑客松 開發部 面試專案</h1>
        <p className="intro-text">
          哈囉！我是 Jules，一名熱愛編程與解決問題的工程師。
          很高興能參與梅竹黑客松開發部的面試專案！
        </p>
      </div>

      <div className="intro-details-card">
        <h3>關於我</h3>
        <div className="intro-grid">
          <div className="intro-item">
            <span className="intro-icon">👤</span>
            <div className="intro-content">
              <strong>姓名</strong>
              <span>Jules</span>
            </div>
          </div>
          <div className="intro-item">
            <span className="intro-icon">🎓</span>
            <div className="intro-content">
              <strong>背景</strong>
              <span>國立某大學 / 資訊工程系 / 四年級</span>
            </div>
          </div>
          <div className="intro-item">
            <span className="intro-icon">💻</span>
            <div className="intro-content">
              <strong>專長</strong>
              <span>React, Vue, Node.js, Python, CSS</span>
            </div>
          </div>
          <div className="intro-item">
            <span className="intro-icon">🎨</span>
            <div className="intro-content">
              <strong>興趣</strong>
              <span>開源貢獻、閱讀、技術寫作</span>
            </div>
          </div>
          <div className="intro-item">
            <span className="intro-icon">🚀</span>
            <div className="intro-content">
              <strong>經歷</strong>
              <span>多次 Hackathon 參賽、全端實習生</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;
