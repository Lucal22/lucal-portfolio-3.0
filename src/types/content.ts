export type ContentDefaultProps = {
  isProject?: boolean;
  title: string;
  content: string;
  url: string;
  alt: string;
};

export type ProjectIconsProps = {
  github?: string;
  website?: string;
};

export type ProjectProps = ContentDefaultProps & ProjectIconsProps;

export type ContentProps = ProjectProps;