export type ContentDefaultProps = {
  isProject?: boolean;
  title: string;
  content: string;
  url: string;
  alt: string;
};

export type ProjectIconsProps = {
  isProject?: boolean;
  github?: string;
  githuback?: string;
  website?: string;
  stack?: string;
  libs?: string;
};

export type ProjectProps = ContentDefaultProps & ProjectIconsProps;

export type ContentProps = ProjectProps;
