import Content from '../../container/Content';
import { about } from './about';

export default function AboutPage() {
  return (
    <Content
      isProject={false}
      title={about.title}
      content={about.content}
      url={about.image.url}
      alt={about.image.alt}
    />
  );
}
