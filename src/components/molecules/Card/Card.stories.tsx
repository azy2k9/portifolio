import React from 'react';
import Card from './Card';
import Frontend from '../../../assets/illustrations/Frontend';
import { Button } from '../../atoms';
import Backend from '../../../assets/illustrations/Backend';
import FrontendSkillIllustration from '../../../assets/illustrations/Skills/FrontendSkill';
import BackendSkillIllustration from '../../../assets/illustrations/Skills/BackendSkill';
import ToolsSkillIllustration from '../../../assets/illustrations/Skills/ToolsSkill';
import LanguageSkillIllustration from '../../../assets/illustrations/Skills/LanguageSkill';
import Chart from '../Chart';
import {
  frontEndData,
  backEndData,
  toolsData,
  languagesData,
} from './Card.data';

export default {
  title: 'Cards',
  parameters: {
    info: { inline: true },
  },
};

export const FrontendCard = () => (
  <Card
    heading="Front End Development"
    illustration={<Frontend />}
    button={<Button borderRadius="rounded">More Info</Button>}
  >
    Through constant development and refinement sessions with clients and
    stakeholders, I am able to convey the clients vision into reality.
  </Card>
);

export const BackendCard = () => (
  <Card
    heading="Back End Development"
    illustration={<Backend />}
    button={<Button borderRadius="rounded">More Info</Button>}
  >
    Through constant development and refinement sessions with clients and
    stakeholders, I am able to convey the clients vision into reality.
  </Card>
);

export const FrontendSkill = () => (
  <Card
    isSkillCard
    heading="Front End"
    illustration={<FrontendSkillIllustration />}
  >
    <Chart data={frontEndData} color="#EF4565" />
  </Card>
);

export const BackendSkill = () => (
  <Card
    isSkillCard
    heading="Back End"
    illustration={<BackendSkillIllustration />}
  >
    <Chart data={backEndData} color="#FFCF41" />
  </Card>
);

export const ToolsSkill = () => (
  <Card isSkillCard heading="Tools" illustration={<ToolsSkillIllustration />}>
    <Chart data={toolsData} color="#1570DB" />
  </Card>
);

export const LanguageSkill = () => (
  <Card
    isSkillCard
    heading="Languages"
    illustration={<LanguageSkillIllustration />}
  >
    <Chart data={languagesData} color="#66DFBC" />
  </Card>
);

// export const ProjectCard = () => (
//   <Card
//     isProjectCard
//     heading="TV Football"
//     illustration={<Backend />}
//     tags={['React', 'Redux', 'Material UI']}
//     button={<Button borderRadius="rounded">More Info</Button>}
//   >
//     Through constant development and refinement sessions with clients and
//     stakeholders, I am able to convey the clients vision into reality.
//   </Card>
// );
