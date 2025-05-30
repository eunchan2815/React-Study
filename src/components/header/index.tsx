import * as S from "./style"

export const Header = () => {
  return (
    <S.Header>
      <S.Logo 
        src="/Header_Logo.jpg" 
      />
      <div style={{ 
        display: 'none', 
        color: '#f9c300', 
        fontWeight: 'bold', 
        fontSize: '1.2rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}>
        SPURS
      </div>
      
      <S.Menu>
        <S.MenuItem href="#" title="접근성 도구">
          🌐 Accessibility
        </S.MenuItem>
        <S.MenuItem href="#" title="구독 및 로그인">
          👤 Subscribe・Signin
        </S.MenuItem>
        <S.MenuItem href="#" title="토트넘 회원가입">
          ⚽ Register Tottenham 
        </S.MenuItem>
        <S.Divider />
        <S.Linkitem
          href="https://www.tottenhamhotspurstadium.com"
          target="_blank"
        >
          Hotspur Stadium
        </S.Linkitem>
      </S.Menu>
    </S.Header>
  );
}