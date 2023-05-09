import * as Styled from '../styles';

export type DescriptionProps = {
  title: string;
  isProject?: boolean;
  content: string;
  stack?: string;
  libs?: string;
};

export default function Description({
  title,
  content,
  stack,
  libs,
  isProject = false,
}: DescriptionProps) {
  return (
    <>
      <Styled.SubTitle>{title}</Styled.SubTitle>
      {isProject ? (
        <Styled.Techs>
          <Styled.Topics>Stack: {stack}</Styled.Topics>
          <Styled.Topics>Libs: {libs}</Styled.Topics>
        </Styled.Techs>
      ) : null}
      <Styled.Paragraph>{content}</Styled.Paragraph>
    </>
  );
}
