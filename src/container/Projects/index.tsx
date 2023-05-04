import Container from '../../components/Container';
import { projects } from '../../page/ProjectContentPage/projects';

import Card from './components/Card';
import * as Styled from './styles';

export default function Projects() {
  return (
    <Styled.Container>
      <Container height={'full'} background="dark">
        <Styled.Content>
          {projects.map((project) => (
            <Card
              key={project.id}
              img={project.image.url}
              alt={project.image.alt}
              title={project.title}
              description={project.description}
              path={`/projects/${project.id}`}
            />
          ))}
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
