// =============================================================================
// About / CV content types
// -----------------------------------------------------------------------------
// Shape of the per-locale profile content used by the home page, the projects
// page, the "Sobre mí" CV page and the project fact box.
// =============================================================================

export type NarrativeBlock =
  | { type: 'h'; text: string }
  | { type: 'p'; text: string }
  | { type: 'img'; src: string; alt: string };

export interface SkillGroup {
  icon: string;
  title: string;
  items: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  description: string;
  icon: string;
}

export interface AboutLabels {
  skills: string;
  education: string;
  experience: string;
  /** Title of the experience + education section */
  career: string;
  contact: string;
  downloadCv: string;
  viewProjects: string;
  aboutMe: string;
  /** Section title for the project grid */
  projects: string;
  /** Link to the full project list; `{count}` is replaced */
  allProjects: string;
  /** Badge on the featured (TFG) project */
  featured: string;
  demo: string;
  code: string;
  video: string;
  pdf: string;
  viewProject: string;
  /** Note under the project section title */
  noAiNote: string;
  contactTitle: string;
  /** `{email}` is replaced */
  contactText: string;
  facts: {
    title: string;
    type: string;
    role: string;
    stack: string;
    links: string;
    development: string;
    noAi: string;
  };
}

export interface AboutContent {
  /** Document title + cover banner */
  title: string;
  coverTitle: string;
  /** Hero */
  name: string;
  /** Short job title used in page titles */
  jobTitle: string;
  /** Degree, university and year */
  kicker: string;
  /** Specialty line under the name */
  role: string;
  tagline: string;
  badges: {
    availability: string;
    languages: string;
    location: string;
  };
  stack: string[];
  labels: AboutLabels;
  cvHref: string;
  /** File name suggested to the browser when downloading the CV */
  cvFileName: string;
  narrative: NarrativeBlock[];
  skills: SkillGroup[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
}
