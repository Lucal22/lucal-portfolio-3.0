import { useParams } from 'react-router-dom';
import { projects } from './projects';
import Content from '../../container/Content';

export default function ProjectContentPage() {
  const { slug } = useParams();

  return (
    <>
      {slug ? (
        <Content
          title={projects[Number(slug)].title}
          content={projects[Number(slug)].content}
          url={projects[Number(slug)].image.url}
          alt={projects[Number(slug)].image.alt}
          github={projects[Number(slug)].links.github}
          website={projects[Number(slug)].links.website}
          stack={projects[Number(slug)].stack}
          libs={projects[Number(slug)].libs}
        />
      ) : null}
    </>
  );
}
