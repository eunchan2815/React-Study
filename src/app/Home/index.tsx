import { BigNewsCard } from "../../components/news/Big";
import { NewsCard } from "../../components/news/Small";
import { VideoCard } from "../../components/video";
import * as S from "./style";

export const Home = () => {
  const newsList = [
    {
      tag: "스퍼스코리아",
      title: "2025/26 시즌 일정 확정일 발표",
      dateAgo: "5 Days ago",
      imageUrl: "/Stadium.jpg",
    },
    {
      tag: "스퍼스코리아",
      title: "쿠팡시리즈 상대팀 확정",
      dateAgo: "6 Days ago",
      imageUrl: "/Newcastle.webp",
    },
    {
      tag: "스퍼스코리아",
      title: "어려움 끝 이뤄낸 큰 성과, 토트넘의 2024/25시즌 리뷰",
      dateAgo: "3 Days ago",
      imageUrl: "/Win.jpg",
    },
    {
      tag: "스퍼스코리아",
      title: "선수 업데이트",
      dateAgo: "2 Days ago",
      imageUrl: "/player.webp",
    },
  ];

  return (
    <>
      <S.MainContainer>
        <S.Background src="/TOT_background.jpg" alt="Background" />
        <S.ContentWrapper>
          <S.Title>토트넘 홋스퍼</S.Title>
          <S.ButtonGroup>
            <S.PrimaryButton>가입하기</S.PrimaryButton>
            <a href="https://shop.tottenhamhotspur.com/all-spurs-kit?utm_source=thfc&utm_medium=kr-page&utm_campaign=retail_kitroom_1_2024_9&utm_content=htb_home_kv_desk&_gl=1*hq5iui*_gcl_au*MTYyODY0NjE3OS4xNzQ4NDc5OTI4*_ga*MTA0MDEyOTY0Ni4xNzQ4NDc5OTI3*_ga_75QKF6HR92*czE3NDg2MTQzMjkkbzckZzEkdDE3NDg2MTczNDgkajQ2JGwwJGgw" target="_blank" rel="noopener noreferrer">
              <S.SecondaryButton>스퍼스 샵</S.SecondaryButton>
            </a>
          </S.ButtonGroup>
        </S.ContentWrapper>
      </S.MainContainer>

      <S.BannerContainer>
        <a href="https://shop.tottenhamhotspur.com/all-spurs-kit?utm_source=thfc&utm_medium=kr-page&utm_campaign=retail_kitroom_1_2024_9&utm_content=htb_home_kv_desk&_gl=1*hq5iui*_gcl_au*MTYyODY0NjE3OS4xNzQ4NDc5OTI4*_ga*MTA0MDEyOTY0Ni4xNzQ4NDc5OTI3*_ga_75QKF6HR92*czE3NDg2MTQzMjkkbzckZzEkdDE3NDg2MTczNDgkajQ2JGwwJGgw" target="_blank" rel="noopener noreferrer">
          <S.UniformBanner src="/uniform.jpg" alt="Tottenham Hotspur uniform banner" />
        </a>
      </S.BannerContainer>


      <S.ArticleContainer>
        <S.ArticleTitle>인기 기사</S.ArticleTitle>
        <S.NewscardContainer>
          {newsList.map((news, idx) => (
            <NewsCard
              key={idx}
              tag={news.tag}
              title={news.title}
              dateAgo={news.dateAgo}
              imageUrl={news.imageUrl}
            />
          ))}
        </S.NewscardContainer>
      </S.ArticleContainer>

      <S.ArticleContainer>
        <S.ArticleTitle>최신</S.ArticleTitle>
        <S.BigNewscardContainer>
          <S.Hstack>
            <VideoCard
              thumbnailUrl="https://i.ytimg.com/vi/KRssaeHy9CU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLBZR1AY1cc88FOjg-5vc56A0ABwvw"
              videoUrl="https://www.youtube.com/watch?v=KRssaeHy9CU"
              title="24/25 시즌, 제임스 메디슨의 모든골과 어시스트"
            />

            <VideoCard
              thumbnailUrl="https://i.ytimg.com/vi/JvPK5rlpT2w/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAgJRlpAWNLkEQc9NnjSiycSo0xsQ"
              videoUrl="https://www.youtube.com/watch?v=JvPK5rlpT2w"
              title="유로파리그 우승컵 트로피 세레모니"
            />
          </S.Hstack>

          <BigNewsCard
            tag="스퍼스코리아"
            title="브라질 대표팀에 복귀한 히샬리송"
            dateAgo="4 days ago"
            imageUrl="/song.webp"
          />

          <S.Hstack>
            <VideoCard
              thumbnailUrl="https://i.ytimg.com/vi/FE2JeeMVtD8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBIWIlJqs5V5Ln9jxI3LhWRsMGuyw"
              videoUrl="https://www.youtube.com/watch?v=FE2JeeMVtD8&t=61s"
              title="토트넘의 시즌 마지막 경기"
            />

            <VideoCard
              thumbnailUrl="https://i.ytimg.com/vi/nYMuw6CT7GY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6fNx-h1WN3C_hJ5rvVrnvcQeoRA"
              videoUrl="https://www.youtube.com/watch?v=nYMuw6CT7GY"
              title="선수들의 훈련 모음"
            />
          </S.Hstack>

          <BigNewsCard
            tag="스퍼스코리아"
            title="손흥민의 최신 기록 정리"
            dateAgo="3 days ago"
            imageUrl="/Son.jpg"
          />

        </S.BigNewscardContainer>
      </S.ArticleContainer>

    </>
  );
};