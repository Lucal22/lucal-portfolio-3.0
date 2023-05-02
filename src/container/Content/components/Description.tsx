import * as Styled from '../styles';

export type DescriptionProps = {
  title: string;
  content: string;
};

export default function Description({ title, content }: DescriptionProps) {
  return (
    <>
      <Styled.SubTitle>{title}</Styled.SubTitle>
      <Styled.Paragraph>{content}</Styled.Paragraph>
    </>
  );
}
