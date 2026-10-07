import React, { useState } from 'react';
import './App.css';

function App() {
  // 動画リスト - YouTubeリンクから自動取得
  const [videos] = useState([
    {
      id: 'aYjNp55esAU',
      title: '【雨でも安心・静音】ハイエース リアゲート換気ストッパー 車中泊',
      url: 'https://youtu.be/aYjNp55esAU',
      channel: 'ioo3D'
    }
  ]);

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/logo.png" alt="ioo3D car camping logo" className="app-logo" />
        <h1>取付方法ガイド</h1>
        <p>パーツの取付方法をビデオで確認</p>
      </header>

      <main className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
            <div className="video-info">
              <p className="video-title">{video.title}</p>
              <p className="video-channel">by {video.channel}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="app-footer">
        <p>© 2026 ioo3D. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
