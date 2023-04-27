import * as Styled from './styles';
import Links from '../../../../components/Links';

export type CardProps = {
  img: string;
  alt: string;
  title: string;
  description: string;
  path: string;
};

export default function Card({
  img,
  alt,
  title,
  description,
  path,
}: CardProps) {
  return (
    <Styled.Container>
      <Links link={path}>
        <Styled.Img>
          <img src={img} alt={alt} />
        </Styled.Img>
        <Styled.Description>
          <h2>{title}</h2>
          <p>{description}</p>
        </Styled.Description>
      </Links>
    </Styled.Container>
  );
}
