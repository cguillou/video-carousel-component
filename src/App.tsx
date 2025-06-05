
import './App.css';

import { CarouselVideo } from './CarouselVideo/CarouselVideo';
import { VideoSource } from './types';

const VIDEO_LIST: VideoSource[] = [
  { source: '/assets/medias/1.mp4', type: 'video/mp4' },
  { source: '/assets/medias/2.mp4', type: 'video/mp4' },
  { source: '/assets/medias/3.mp4', type: 'video/mp4' },
  { source: '/assets/medias/4.mp4', type: 'video/mp4' },
  { source: '/assets/medias/5.mp4', type: 'video/mp4' },
  { source: '/assets/medias/6.mp4', type: 'video/mp4' },
  { source: '/assets/medias/7.mp4', type: 'video/mp4' },
  { source: '/assets/medias/8.mp4', type: 'video/mp4' },
  { source: '/assets/medias/9.mp4', type: 'video/mp4' },
  { source: '/assets/medias/10.mp4', type: 'video/mp4' },
  { source: '/assets/medias/11.mp4', type: 'video/mp4' },
  { source: '/assets/medias/12.mp4', type: 'video/mp4' },
  { source: '/assets/medias/13.mp4', type: 'video/mp4' },
  { source: '/assets/medias/14.mp4', type: 'video/mp4' },
];

function App() {
  return (
    <div className="App">
      <CarouselVideo videoSources={VIDEO_LIST} />
    </div>
  );
}

export default App;
