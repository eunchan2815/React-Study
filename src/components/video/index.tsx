import React, { useState } from "react";
import * as S from "./style";
import type { VideoCardProps } from "../../types/VideoCardProps";

export const VideoCard: React.FC<VideoCardProps> = ({ thumbnailUrl, videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const extractYouTubeId = (url: string) => {
    const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : "";
  };

  return (
    <S.Card>
      <S.VideoContainer>
        {isPlaying ? (
          <S.Iframe
            src={`https://www.youtube.com/embed/${extractYouTubeId(videoUrl)}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <>
            <S.Thumbnail src={thumbnailUrl} alt={title} />
            <S.Overlay onClick={() => setIsPlaying(true)}>
              <S.PlayButton viewBox="0 0 64 64">
                <polygon points="24,16 48,32 24,48" fill="white" />
              </S.PlayButton>
            </S.Overlay>
          </>
        )}
      </S.VideoContainer>
      
      {!isPlaying && <S.Title>{title}</S.Title>}
    </S.Card>
  );
};


