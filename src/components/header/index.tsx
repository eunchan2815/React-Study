import * as S from "./style"

export const Header = () => {
  return (
    <S.Header>
      <S.Logo>토트넘 홋스퍼</S.Logo>
      <S.Menu>
        <S.MenuItem href="#">홈</S.MenuItem>
        <S.MenuItem href="#">스쿼드</S.MenuItem>
        <S.MenuItem href="#">경기일정</S.MenuItem>
        <S.MenuItem href="#">티켓</S.MenuItem>
      </S.Menu>
    </S.Header>
  );
}
