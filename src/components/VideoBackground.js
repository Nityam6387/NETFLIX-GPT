
import { useSelector } from 'react-redux';
import useGetMovieVideos from '../utils/useGetMovieVideos';

const VideoBackground = ({id}) => {

    useGetMovieVideos(id);
    const trailer = useSelector((store)=> store?.movie?.trailerVideo);

  return (
    <div className=''>
          <iframe
        id="yt-player"
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&controls=0&enablejsapi=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
        {/* <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/8aulMPhE12g?si=qzo--" + trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
  )
}

export default VideoBackground;