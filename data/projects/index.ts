import { helixProject } from './helix';
import { redRoomProject } from './red-room';
import { diagramStudioProject } from './diagram-studio';

export const projects = {
  'helix-plus': helixProject,
  'red-room': redRoomProject,
  'diagram-studio': diagramStudioProject,
} as const;
