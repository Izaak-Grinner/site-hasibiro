import { useState, useRef } from 'react';
import clickSound from '../assets/audio/click.mp3';

function Home() {
  const [count, setCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setCount(count + 1);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // ブラウザの自動再生ポリシーなどで再生が失敗した場合のログ
          console.error("Audio play failed:", error);
        });
      }
    }
  };

  return (
    <>
      <h1>ホーム</h1>
      <div>
        <button onClick={handleClick}>Click</button>
        <div>{count}回</div>
      </div>
      {/* 音声ファイルを読み込むためのaudio要素。画面には表示されません */}
      <audio ref={audioRef} src={clickSound} preload="auto"></audio>
    </>
  );
}

export default Home;