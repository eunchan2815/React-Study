import * as S from "./style"

export const Home = () => {
  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.Background>
        <S.Textfield placeholder="이메일" />
        <S.Textfield placeholder="비밀번호" type="password" />
        <S.Button>로그인</S.Button>
      </S.Background>
    </S.Container>
  )
}
