export const PROGRAMS = [
  'Our Future Leaders',
  'Living Labs',
  'Sabbatical',
]

export const alumniStories = [
  {
    id: 'rafaela',
    name: 'Rafaela',
    available: true,
    role: 'Product Designer',
    graduation: 'Class of 2018',
    tagline: 'From quiet observer to voice in the room',
    quote:
      'honesty, vulnerability, opening up and facing my judgements',
    experienceYear: '2023',
    program: 'Our Future Leaders',
    portrait: '/images/rafaela-thumbnail.png',
    accent: '#e85d4c',
    storyFormat: 'scenes',
    contact: {
      prompt: 'Get in contact with Rafaela to know more about her experience?',
      email: 'example@gmail.com',
      programText:
        'Click the link below to find out more about the OFL program and sign up.',
      programUrl:
        'https://recesscollege.org/programmes/our-future-leaders',
    },
    closingReflection: {
      prompt: 'What do you think of your reflections during this experience?',
      body:
        'During the program, there is plenty more space and time to understand how you respond in situations, how much you know yourself and how understanding yourself can improve your leadership skills.',
    },
    disclaimer:
      'This experience highlights Rafaela\'s most profound and insightful moments of her experience at the OFL program of 2023, told from memory.',
    disclaimerNotes: [
      'Listen with headphones in for the best experience.',
      'This story is interactive, at some points during the story you will be able to make choices.',
      'Pay close attention and enjoy',
    ],
    scenes: [
      { id: 'intro', src: '/stories/rafaela/intro.mp4', label: '' },
      { id: 'transition', src: '/stories/rafaela/transition.mp4', label: '' },
      { id: 'exp1.1', src: '/stories/rafaela/exp1.1.mp4', label: '' },
      { id: 'exp1.2', src: '/stories/rafaela/exp1.2.mp4', label: '' },
      { id: 'exp2.1', src: '/stories/rafaela/exp2.1.mp4', label: '' },
      { id: 'exp2.2', src: '/stories/rafaela/exp2.2.mp4', label: '' },
      { id: 'exp2.3', src: '/stories/rafaela/exp2.3.mp4', label: '' },
      { id: 'exp3.1', src: '/stories/rafaela/exp3.1.mp4', label: '' },
      { id: 'exp3.2', src: '/stories/rafaela/exp3.2.mp4', label: '' },
      { id: 'outro', src: '/stories/rafaela/outro.mp4', label: '' },
    ],
    reflections: [
      {
        id: 'r-r1',
        afterSceneIndex: 2,
        prompt: 'Are you bored?',
        context: 'How would you respond?',
        options: [
          {
            id: 'a',
            type: 'Honest',
            text: 'Yes, we\'ve been here for hours and it\'s going nowhere',
          },
          {
            id: 'b',
            type: 'Defensive',
            text: 'Why are you asking me that?',
          },
          { id: 'c', type: 'Deflecting', text: 'shrugs' },
          { id: 'd', type: 'Denial', text: 'No, I\'m fine' },
          {
            id: 'e',
            type: 'Attacking',
            text: 'Yes, because this exercise is pointless',
          },
        ],
      },
      {
        id: 'r-r2',
        afterSceneIndex: 4,
        prompt:
          'How would you feel if you realized you were the one making connection harder for others?',
        context: 'The Mirror',
        options: [
          {
            id: 'a',
            type: 'Sit with it quietly',
            text:
              'I take it in but keep it to myself. I need time to process before I can do anything with it.',
          },
          {
            id: 'b',
            type: 'Turn it outward',
            text:
              'I get curious about the others. Why do they feel this way? What did they notice that I didn\'t?',
          },
          {
            id: 'c',
            type: 'Shame',
            text:
              'I feel exposed and embarrassed. This is not who I want to be and I\'m not sure what to do with that.',
          },
          {
            id: 'd',
            type: 'Open up',
            text:
              'I bring it into the group. I want to understand where this comes from, and I don\'t want to figure it out alone.',
          },
        ],
      },
      {
        id: 'r-r3',
        afterSceneIndex: 5,
        prompt:
          'What would you do when intense emotions well up while in a group setting?',
        context: 'Facilitator Won\'t Look Away',
        options: [
          {
            id: 'a',
            type: 'Hold it together',
            text:
              'I straighten up, clear my throat and steer the conversation somewhere safe. Nobody needs to see this.',
          },
          {
            id: 'b',
            type: 'Leave the room',
            text:
              'I excuse myself. I need a moment alone before I can face anyone.',
          },
          {
            id: 'c',
            type: 'Let it happen',
            text:
              'I stop fighting it. Whatever comes up, comes up. I stay in my seat and let it.',
          },
          {
            id: 'd',
            type: 'Deflect with humor',
            text:
              'I make a light comment to break the tension. Laughing feels safer than crying.',
          },
        ],
      },
      {
        id: 'r-r4',
        afterSceneIndex: 7,
        prompt:
          'Someone you quietly judged just told you they could feel it. What do you do?',
        context: 'He Felt It',
        options: [
          {
            id: 'a',
            type: 'Apologize immediately',
            text:
              'I feel terrible. I say sorry and try to explain myself, even if the words don\'t come out right.',
          },
          {
            id: 'b',
            type: 'Get defensive',
            text:
              'I didn\'t do anything wrong. I was just having a bad day. I don\'t owe anyone a full explanation.',
          },
          {
            id: 'c',
            type: 'Get honest',
            text:
              'I admit that I was cold and that it wasn\'t really about him. It came from somewhere else in me.',
          },
          {
            id: 'd',
            type: 'Shut down',
            text:
              'I don\'t know what to say. I nod and move on, hoping the moment passes quickly.',
          },
        ],
      },
    ],
  },
  {
    id: 'jordan-okafor',
    name: 'Jordan Okafor',
    available: true,
    role: 'Social Entrepreneur',
    graduation: 'Class of 2015',
    tagline: 'When the plan failed, the purpose appeared',
    quote:
      'Failure, accountability, and rebuilding trust when leadership goes wrong.',
    experienceYear: '2014',
    program: 'Our Future Leaders',
    portrait:
      'https://images.unsplash.com/photo-1539579156288-d172b5d7d3c9?w=1200&h=675&fit=crop&q=80',
    accent: '#2a9d8f',
    intro:
      'Jordan built a startup in college that collapsed in six months. What felt like failure became the origin story of a venture that now employs dozens.',
    panels: [
      {
        id: 'j1',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=700&fit=crop&q=80',
        caption: 'Chapter 1 — The pitch that won everything',
        narration:
          'Investors applauded. My team had hoodies printed. We were going to change food deserts overnight.',
      },
      {
        id: 'j2',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=700&fit=crop&q=80',
        caption: 'Month four: the model did not match reality.',
        narration:
          'Families wanted dignity, not discounts. We were solving our assumptions, not their lives.',
      },
      {
        id: 'j3',
        type: 'video',
        src: 'https://videos.pexels.com/video-files/6774633/6774633-uhd_2560_1440_25fps.mp4',
        poster:
          'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=700&fit=crop&q=80',
        caption: 'The night we shut down operations.',
        narration:
          'I sat in an empty warehouse. The silence was louder than any investor call.',
      },
      {
        id: 'j4',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&h=700&fit=crop&q=80',
        caption: 'A neighbor asked a simple question.',
        narration:
          '"Why did you stop listening?" She ran a pantry. She did not need an app—she needed a partner.',
      },
      {
        id: 'j5',
        type: 'video',
        src: 'https://videos.pexels.com/video-files/3945311/3945311-uhd_2560_1440_25fps.mp4',
        poster:
          'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=700&fit=crop&q=80',
        caption: 'Rebuilding — one block, one conversation.',
        narration:
          'No pitch deck. Just showing up every Saturday until trust replaced hype.',
      },
      {
        id: 'j6',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=700&fit=crop&q=80',
        caption: 'Today — impact measured in relationships',
        narration:
          'We employ people from the neighborhoods we serve. Failure taught me that scale without soul is just noise.',
      },
    ],
    reflections: [
      {
        id: 'j-r1',
        afterPanelIndex: 1,
        prompt: 'Jordan realizes the business model is flawed. What is likely running through his mind?',
        context: 'Employees depend on him. Investors expect growth.',
        options: [
          {
            id: 'a',
            type: 'Denial',
            text: 'Push harder and hope the numbers turn around',
          },
          {
            id: 'b',
            type: 'Shame',
            text: 'Worry that he let down everyone who believed in him',
          },
          {
            id: 'c',
            type: 'Responsibility',
            text: 'Recognize harm to the community he claimed to serve',
          },
          {
            id: 'd',
            type: 'Shame and responsibility',
            text: 'A mix of both — he needs to act with integrity',
          },
        ],
      },
      {
        id: 'j-r2',
        afterPanelIndex: 3,
        prompt: 'After shutting down, Jordan meets a community leader. How should he approach the next step?',
        context: 'His reputation in the neighborhood is damaged.',
        options: [
          {
            id: 'a',
            text: 'Ask how he can serve without leading or branding',
          },
          {
            id: 'b',
            text: 'Offer free consulting to make up for past mistakes',
          },
          {
            id: 'c',
            text: 'Explain his vision again with a better pitch',
          },
          {
            id: 'd',
            text: 'Listen weekly before proposing any new solution',
          },
        ],
      },
      {
        id: 'j-r3',
        afterPanelIndex: 5,
        prompt: 'Jordan\'s venture is thriving. What lesson would he want current students to take?',
        context: 'Students often equate success with funding and speed.',
        options: [
          {
            id: 'a',
            text: 'Start small and stay accountable to the people affected',
          },
          {
            id: 'b',
            text: 'Failure is data if you are honest about what went wrong',
          },
          { id: 'c', text: 'Leadership is consistency, not charisma' },
          {
            id: 'd',
            type: 'All of the above',
            text: 'Purpose outlasts any pitch',
          },
        ],
      },
    ],
  },
  {
    id: 'amara-osei',
    name: 'Amara Osei',
    available: false,
    role: 'Policy Advisor',
    graduation: 'Class of 2019',
    tagline: 'Learning to lead from the communities she serves',
    quote:
      'Listening as leadership and learning to act from the community up.',
    experienceYear: '2023',
    program: 'Living Labs',
    portrait:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&h=675&fit=crop&q=80',
  },
  {
    id: 'thomas-van-berg',
    name: 'Thomas van Berg',
    available: false,
    role: 'Operations Director',
    graduation: 'Class of 2012',
    tagline: 'A year away that reset his priorities',
    quote:
      'Stepping back, resetting priorities, and leading with intention.',
    experienceYear: '2021',
    program: 'Sabbatical',
    portrait:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=675&fit=crop&q=80',
  },
  {
    id: 'lin-wei',
    name: 'Lin Wei',
    available: false,
    role: 'Healthcare Innovator',
    graduation: 'Class of 2016',
    tagline: 'From engineer to advocate',
    quote:
      'From systems thinking to human-centered leadership.',
    experienceYear: '2020',
    program: 'Our Future Leaders',
    portrait:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=675&fit=crop&q=80',
  },
  {
    id: 'sofia-martinez',
    name: 'Sofia Martinez',
    available: false,
    role: 'Community Organizer',
    graduation: 'Class of 2017',
    tagline: 'Finding voice in collective work',
    quote:
      'Shared voice, collective action, and leading without the spotlight.',
    experienceYear: '2019',
    program: 'Living Labs',
    portrait:
      'https://images.unsplash.com/photo-1583394295436-0c5c8e3bcca2?w=1200&h=675&fit=crop&q=80',
  },
  {
    id: 'james-okonkwo',
    name: 'James Okonkwo',
    available: false,
    role: 'Finance Lead',
    graduation: 'Class of 2014',
    tagline: 'Redefining what success looks like',
    quote:
      'Humility, uncertainty, and redefining what success demands of a leader.',
    experienceYear: '2018',
    program: 'Our Future Leaders',
    portrait:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&h=675&fit=crop&q=80',
  },
  {
    id: 'elena-varga',
    name: 'Elena Varga',
    available: false,
    role: 'Education Strategist',
    graduation: 'Class of 2020',
    tagline: 'A sabbatical that became a turning point',
    quote:
      'Pause, self-discovery, and finding language for what leadership costs.',
    experienceYear: '2022',
    program: 'Sabbatical',
    portrait:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&h=675&fit=crop&q=80',
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    available: false,
    role: 'Sustainability Consultant',
    graduation: 'Class of 2013',
    tagline: 'Building patience into practice',
    quote:
      'Patience, trust, and leading at the speed of relationships.',
    experienceYear: '2016',
    program: 'Living Labs',
    portrait:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=675&fit=crop&q=80',
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    available: false,
    role: 'Public Health Researcher',
    graduation: 'Class of 2021',
    tagline: 'Crossing the line between theory and fieldwork',
    quote:
      'From data on a page to lives in the field, leadership with context.',
    experienceYear: '2023',
    program: 'Our Future Leaders',
    portrait:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&h=675&fit=crop&q=80',
  },
  {
    id: 'marcus-lindstrom',
    name: 'Marcus Lindström',
    available: false,
    role: 'Urban Planner',
    graduation: 'Class of 2011',
    tagline: 'Seeing the city through different eyes',
    quote:
      'Seeing the city and the people in it with new eyes.',
    experienceYear: '2015',
    program: 'Sabbatical',
    portrait:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&h=675&fit=crop&q=80',
  },
  {
    id: 'yuki-tanaka',
    name: 'Yuki Tanaka',
    available: false,
    role: 'Creative Director',
    graduation: 'Class of 2019',
    tagline: 'Letting go of the perfect plan',
    quote:
      'Letting go of control and leading through change you cannot plan.',
    experienceYear: '2021',
    program: 'Living Labs',
    portrait:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=675&fit=crop&q=80',
  },
]

export function getAlumniById(id) {
  return alumniStories.find((a) => a.id === id)
}

export function getPlayableAlumni() {
  return alumniStories.filter((a) => a.available)
}
