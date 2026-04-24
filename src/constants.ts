export interface Phase {
  id: number;
  title: string;
  description: string;
  tasks: string[];
}

export const BIZZALL_FLOW_PHASES: Phase[] = [
  {
    id: 1,
    title: 'Prospecting',
    description: 'Initial interest and information gathering.',
    tasks: ['Watch Scorecard Video', 'Watch iDecide Video']
  },
  {
    id: 2,
    title: 'Connection',
    description: 'Establishing a relationship and scheduling initial talk.',
    tasks: ['Schedule 1-on-1 with Builder', 'Automated reminders setup']
  },
  {
    id: 3,
    title: 'Signup',
    description: 'Officially joining the system.',
    tasks: ['Tevah Signup (GFi general link + referral code)']
  },
  {
    id: 4,
    title: 'Orientation',
    description: 'Basic training and first appointments.',
    tasks: ['PFR setup', 'Licensing intro', 'Appointment training', 'First appointments scheduled']
  },
  {
    id: 5,
    title: 'Licensing',
    description: 'Regulatory requirements and quiz.',
    tasks: ['Quiz completion', 'Update profile (Name, GFi ID, etc.)', 'Xcel access request', 'License tracking start']
  },
  {
    id: 6,
    title: 'Exam',
    description: 'Final state regulatory exam.',
    tasks: ['Schedule exam', 'Reminders sent']
  },
  {
    id: 7,
    title: 'Activation',
    description: 'Post-exam requirements.',
    tasks: ['Fingerprints process', 'License application', 'Continuing Education (AML, Best Interest)', 'E&O Insurance']
  },
  {
    id: 8,
    title: 'Senior Associate Promotion',
    description: 'Growing your team and field training.',
    tasks: ['Master appointment script', 'Complete 3-10 field trainings', '3-3-30 Challenge', 'Ethos Fast Start Bonus']
  },
  {
    id: 9,
    title: 'Carrier Appointments',
    description: 'Getting appointed with major carriers.',
    tasks: ['Appoint with F&G, Ameritas, Corebridge, etc.', 'Direct deposit setup', 'Wingspan setup']
  },
  {
    id: 10,
    title: 'Skill Development',
    description: 'Mastering the 5 Fingers Solutions.',
    tasks: ['Income Protection training', 'IUL training', 'Annuities training', 'Million Dollar Baby training', 'Final Expense training']
  },
  {
    id: 11,
    title: 'Licensed Agent Milestone',
    description: 'Earning your first major commission.',
    tasks: ['Earn minimum $1,000 after appointment']
  },
  {
    id: 12,
    title: 'Leadership Track',
    description: 'Advancing to Marketing Director and EMD.',
    tasks: ['Certified Field Trainer', 'Build Marketing Directors', 'EMD Targets']
  }
];
