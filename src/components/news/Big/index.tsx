import * as S from "./style";
import type NewsCardProps from "../../../types/NewsCardProps";

export const BigNewsCard: React.FC<NewsCardProps> = ({ tag, title, dateAgo, imageUrl }) => {
  return (
    <S.Card>
      <S.BackgroundImage src={imageUrl} alt={title} />
      <S.Overlay>
        <S.Tag>#{tag}</S.Tag>
        <S.Title>{title}</S.Title>
        <S.DateText>{dateAgo}</S.DateText>
      </S.Overlay>
    </S.Card>
  )
}
