import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Vivek',
   initials: 'DV',
   url: 'https://vipin.nexus',
   location: 'Miami, FL',
   locationLink: 'https://www.google.com/maps/place/miami',
   description:
    'Fanatical open sourcerer, educator, indie hacker,Quant developer and a dedicated white hat hacker',
   summary:
    'I am the 3rd year Vellore Institute of Technology, Chennai studnet, have previous experience in building and scaling Deepcure.in, shortlisted for Shark Tank, backed by Mirosoft and Amazon, also cover by Entreovert magazine as an Emerging Studentpreneur ALong with this I am Quantitative research consulant in WorldQuant , got this role by securing Global rank 23 in Internation Quant Championship 2024 out of 40,000 teams across the globe. Also a Passionate Web Developer and exploring Data field. \n\n'
    + 'Creator of  [Conventional Emoji Commits](https://conventional-emoji-commits.site) and [others](https://vipin.nexus/projects).\n\n'
    + 'Dreaming up ideas and nurturing them to reality, especially in the realm of education, is where my passion lies.\n\n',
   avatarUrl: '/me.png',
   skills: [
      'React',
      'Next.js',
      'Typescript',
      'Node.js',
      'Python',
      'Postgres',
      'Docker',
      'Kubernetes',
      'Rust',
      'C++',
      'Machine Learning',
      'Quantitative Finance',
   ],
   navbar: [
      { href: '/', icon: HomeIcon, label: 'Home' },
      { href: '/blog', icon: NotebookIcon, label: 'Blog' },
      { href: '#projects', icon: CodeIcon, label: 'Projects' },
      { href: '#contact', icon: PencilLine, label: 'Contact' },
   ],
   contact: {
      email: 'hello@example.com',
      tel: '+301456789',
      social: {
         GitHub: {
            name: 'GitHub',
            url: 'https://github.com/vivekgautamgv',
            icon: Icons.github,

            navbar: true,
         },
         LinkedIn: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/vivek-gautam-670017225/',
            icon: Icons.linkedin,

            navbar: true,
         },
         X: {
            name: 'X',
            url: 'https://vipin.link/x',
            icon: Icons.x,

            navbar: true,
         },
         Youtube: {
            name: 'Youtube',
            url: 'https://vipin.link/yt',
            icon: Icons.youtube,
            navbar: true,
         },
         email: {
            name: 'Send Email',
            url: '#',
            icon: Icons.email,

            navbar: false,
         },
      },
   },

   work: [
      {
         company: 'WorldQuant',
         href: 'https://vipin.nexus',
         badges: [],
         location: 'Remote',
         title: 'Quantitative Research Consultant',
         logoUrl: '/me.png',
         start: 'June 2024',
         end: 'Current',
         description:
        '• Engineered and rigorously backtested 50+ quantitative trading strategies, delivering an impressive 14% annual return• Constructed predictive models using multiple Python libraries and APIs to generate actionable trading signals.• Conducted in-depth market research for bid-ask spread analysis and statistical modeling of historical market data.',
      },
      {
         company: 'SS Research and development',
         href: 'https://vipin.nexus',
         badges: [],
         location: 'Agra',
         title: 'Web Developer Intern',
         logoUrl: '/me.png',
         start: 'June 2024',
         end: 'July 2024',
         description:
        'Spearheaded the development and deployment of dynamic full-stack web applications utilizing React JS, Node JS, and MongoDB, enhancing application efficiency and user experience.',
      },
      {
         company: 'JP MORGAN CHASE&CO',
         href: 'https://vipin.nexus',
         badges: [],
         location: 'Remote',
         title: 'Web Developer Intern',
         logoUrl: '/me.png',
         start: 'June 2024',
         end: 'July 2024',
         description:
        '• Demonstrated software development fundamentals by setting up a local development environment and troubleshooting code issues within a repository. • Leveraged data visualization tools to create interactive graphs using JPMorgan Chase Perspective library, providing actionable insights for traders.',
      },
      {
         company: 'DEEPCURE.IN',
         href: 'https://vipin.nexus',
         badges: [],
         location: 'Remote',
         title: 'Co-Founder and CEO',
         logoUrl: '/me.png',
         start: 'June 2023',
         end: 'July 2024',
         description:
        '• Build AI-powered mental healthcare platform generated~5 Lakhs INR revenue in 6 months.Implemented MERN stack architecture for scalability, integrating multiple APIs to power chatbot and anonymous chatspace functionalities • Successfully integrated AI components and multiple APIs to create a robust and engaging user experience. • Backed by Microsoft For Startups and received grant of $5000 AWS credits from AMAZON and product validation from Shark Tank India Season 3[Shortlisted till 3rd round].',
      },
   ],
   education: [
      {
         school: 'Vellore Institute of technology, Chennai',
   
         degree: 'B.Tech',
        
         start: '2022',
         end: '2026',
      },
   
   ],
   projects: [
      {
         title: 'Conventional Emoji Commits',
         href: 'https://conventional-emoji-commits.site',
         dates: 'Oct 2023 - Present',
         active: true,
         description:
        'A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈',
         technologies: [
            'git',
            'emoji',
            'commit',
            'conventional',
            'nuxt',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://conventional-emoji-commits.site',
               icon: <Icons.smile className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/conventional-emoji-commits/conventional-emoji-commits.site',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video:
        'https://cdn.vipinui.design/conventional-emoji-commits.mp4',
      },
      {
         title: 'vipin UI',
         href: 'https://magicui.design',
         dates: 'June 2023 - Present',
         active: true,
         description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
         technologies: [
            'Next.js',
            'Typescript',
            'TailwindCSS',
            'vipin UI',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://vipinui.design',
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/magicuidesign/magicui',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video: 'https://cdn.vipinui.design/bento-grid.mp4',
      },
      {
         title: 'More Projects',
         href: 'https://vipin.nexus/projects',
         dates: '',
         active: true,
         description:
        'Explore many more projects here.',
         technologies: [],
         links: [
            {
               type: 'Website',
               href: 'https://vipin.nexus/projects',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '',
         video: 'https://cdn.vipinui.design/more-projects.mp4',
      },
   ],
   hackingEvents: [
      // {
      //    title: 'HackerOne Live Hacking Event',
      //    dates: 'June 14th - 16th, 2022',
      //    location: 'Las Vegas, Nevada',
      //    description:
      //   'Participated in a live hacking event, uncovering security vulnerabilities in various web applications.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.hackerone.com/resources/hackerone/live-hacking-event-invitations-2022-guide',
      //       },
      //    ],
      // },
      // {
      //    title: 'Bugcrowd LevelUp',
      //    dates: 'April 10th, 2021',
      //    location: 'Online',
      //    description:
      //   'Participated in a virtual event focused on enhancing the skills of bug bounty hunters.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEX////959/60MDxUgDxWgD5w6/yZx/yaCLxXgD3sJXxYAjyYQ/3poj+8+70gE7zeEDxWQD96+T1kGfyYxX1lnH0hFX72Mz3qIv70cPzczfyaiX5v6r+9/T/+vf4tJv2nXr0iV32nn1FGKDsAAAA5UlEQVR4AbWRR4KFIAxAY0uwR5mx1/tfcoRvGHT/3448IA2+TODxdmEUO6LkJRHJgerp0ozw3+eF78qYsKrqXCw3nmw1xQDwo2+pf8HRMZHqAHr3NB5AGE22qISCmRUaiZO4WdnLl0yWtavt39kGllXhLVcw1HI07DnJqeVqhc5+pFsrDy1yjkkVALGVlTR5y13b2IReq2kmBeX2t+wxJMSPbCIVddDERJitIsP4I6GZAzCfk/IWU+lLrmAjqXk4+ptmE6j1tO9kMnIHHmd+WSTUGqVHQaYkcAkPZlYO3uBF6AHf5Q/1ow5yOIAYvAAAAABJRU5ErkJggg==',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.bugcrowd.com/blog/how-to-succeed-in-bug-bounties-as-a-pentester/',
      //       },
      //    ],
      // },
      // {
      //    title: 'HackerOne h@cktivitycon',
      //    dates: 'September 14th - 16th, 2021',
      //    location: 'Online',
      //    description:
      //   'Participated in a virtual conference for the hacker community, uncovering various security vulnerabilities in web applications.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.hackerone.com/hackerone-community-blog/get-invited-how-live-hacking-event-invites-have-changed',
      //       },
      //    ],
      // },
      // {
      //    title: 'Bugcrowd Bug Bash',
      //    dates: 'March 23rd - 24th, 2021',
      //    location: 'San Francisco, California',
      //    description:
      //   'Participated in a Bug Bash event, uncovering security vulnerabilities in various applications.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEX////959/60MDxUgDxWgD5w6/yZx/yaCLxXgD3sJXxYAjyYQ/3poj+8+70gE7zeEDxWQD96+T1kGfyYxX1lnH0hFX72Mz3qIv70cPzczfyaiX5v6r+9/T/+vf4tJv2nXr0iV32nn1FGKDsAAAA5UlEQVR4AbWRR4KFIAxAY0uwR5mx1/tfcoRvGHT/3448IA2+TODxdmEUO6LkJRHJgerp0ozw3+eF78qYsKrqXCw3nmw1xQDwo2+pf8HRMZHqAHr3NB5AGE22qISCmRUaiZO4WdnLl0yWtavt39kGllXhLVcw1HI07DnJqeVqhc5+pFsrDy1yjkkVALGVlTR5y13b2IReq2kmBeX2t+wxJMSPbCIVddDERJitIsP4I6GZAzCfk/IWU+lLrmAjqXk4+ptmE6j1tO9kMnIHHmd+WSTUGqVHQaYkcAkPZlYO3uBF6AHf5Q/1ow5yOIAYvAAAAABJRU5ErkJggg==',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.bugcrowd.com/blog/how-to-succeed-in-bug-bounties-as-a-pentester/',
      //       },
      //    ],
      // },
      // {
      //    title: 'HackerOne h1-702',
      //    dates: 'August 3rd - 5th, 2020',
      //    location: 'Las Vegas, Nevada',
      //    description:
      //   'Participated in one of the largest live hacking events, uncovering security vulnerabilities in various web applications.',
      //    image:
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
      //    links: [
      //       {
      //          title: 'Event Details',
      //          icon: <Icons.globe className="size-4" />,
      //          href: 'https://www.hackerone.com/resources/hackerone/live-hacking-event-invitations-2022-guide',
      //       },
      //    ],
      // },
   ],
} as const
