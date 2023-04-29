import { useParams } from 'react-router-dom';

export default function ProjectContentPage() {
  const { params } = useParams();
  console.log(params);

  return <>{params}</>;
}
