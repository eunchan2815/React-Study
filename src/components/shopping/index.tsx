import * as S from "./style";
import type { ShoppingProps } from "../../types/ShoppingProps";

export const ShoppingCard: React.FC<ShoppingProps> = ({ imageUrl }) => {
  return (
    <S.Card>
      <S.BackgroundImage src={imageUrl} alt="쇼핑 이미지" />
      <S.ButtonWrapper>
        지금 바로 쇼핑하기
      </S.ButtonWrapper>
    </S.Card>
  );
};
