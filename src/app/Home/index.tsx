import * as S from "./style";

export const Home = () => {
  return (
    <>
      <S.MainContainer>
        <S.Background src="/TOT_background.jpg" alt="Background" />
        <S.ContentWrapper>
          <S.Title>토트넘 홋스퍼</S.Title>
          <S.ButtonGroup>
            <S.PrimaryButton>가입하기</S.PrimaryButton>
            <S.SecondaryButton>스퍼스 샵</S.SecondaryButton>
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

      </S.ArticleContainer>
    </>
  );
};
