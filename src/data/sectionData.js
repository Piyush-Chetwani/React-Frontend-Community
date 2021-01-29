//If Know More button is needed, add <button>Know More</button> after p.
import bc from "../images/bc.png";
import eth from "../images/eth.png";
import hyp from "../images/hyp.png";
import women from "../images/women.png";
import live from "../images/live.png";
import hindi from "../images/hindi.png";
import jobs from "../images/jobs.png";
import scholar from "../images/scholar.png";
import events from "../images/events.png";
import intern from "../images/intern.png";
import candidate from "../images/candidate.png";
import hire from "../images/hire.png";

const learn1 = [
  `
    <h2>BLOCKCHAIN+</h2>
    <p>
    Transform yourself now with our Blockchain+ course and transition into a world full of possibilities.
    </p>
    `,
  `
    <h2>BLOCKCHAIN+ ETHEREUM</h2>
    <p>
    Dive deeper into #Blockchain with our Blockchain+Ethereum course and begin your career as an emerging technology leader.
    </p>
    `,
  `
    <h2>BLOCKCHAIN+ HYPERLEDGER</h2>
    <p>
    Start your journey into advance cross-industry blockchain technologies. Become enterprise-ready with our Blockchain+Hyperledger course.
    </p>
    `,
  `
    <h2>Upcoming</h2>
    <p>
    Stay updated about emerging technology courses taught by emerging technology leaders. 
    </p>
    `
];

const learn2 = [`<h2>Coming Soon</h2>`];

const talks1 = [
  `
    <h2>Women Leaders</h2>
    <p>
    Nothing can beat these women. Listen to their inspiring stories and learn from their struggles.</p>
    `,
  `
    <h2>Live</h2>
    <p>
    Listen to a 360 degree perspective on emerging technologies from experts around the globe. Stay #updated with industry trends and adapt.
    </p>
    `,
  `
    <h2>Hindi</h2>
    <p>
    Not your usual videos. Now learn about Blockchain, AI, and other emerging technologies in Hindi.
    </p>
    `,
  `
    <h2>Upcoming</h2>
    <p>
    Our upcoming videos and talks for you to stay updated and ready before the next session. 
    </p>
    `
];

const discover1 = [
  `
    <h2>Jobs</h2>
    <p>
    Make the exponential emerging technology leap with jobs that you love. With #oneclick apply.</p>
    `,
  `
    <h2>Internships</h2>
    <p>
    Reinvent yourself with emerging technology internships demanding a fluid response.
    </p>
    `,
  `
    <h2>Scholarships</h2>
    <p>
    Reshaping the diversity agenda together with emerging technology scholarships. 
    </p>
    `,
  `
    <h2>Events</h2>
    <p>
    Attend Hackathons, meetups, workshops, and other events that help you grow confidently. 
    </p>
    `
];

const assess1 = [
  `
    <h2>Meet</h2>
    <p>
    Meet candidates today, hire them tomorrow!</p>
    `,
  `
    <h2>Recruit</h2>
    <p>
    Recruit and screen candidates with a modern suite of tools. Take your talent acquisition process to the next level.
    </p>
    `
];

const assess2 = [
  `
    <h2>Apply</h2>
    <p>
    Go beyond CVs. Apply with your verified assesment score. </p>
    `,
  `
    <h2>Assessments</h2>
    <p>
    Tailor-made coding tests with top-notch assessments by a panel of experts.
    </p>
    `
];

export const sectionData = [
  {
    title: "learn",
    subtitle: "Courses driving career changes.",
    sectionDescription:
      "Understand and implement emerging technologies with an industry-first approach. See beyond disruption to opportunity.",
    tab1: "Learn at center",
    tab2: "Learn on the go",
    sidebarElements: learn1,
    sidebar1: "BC+",
    sidebar2: "BC+ Eth",
    sidebar3: "BC+ Hyp",
    sidebar4: "Upcoming",
    backgrounds1: [bc, eth, hyp],
    sidebarElements2: learn2,
    sidebar21: null,
    sidebar22: null,
    sidebar23: null,
    sidebar24: null
  },
  {
    title: "talks",
    subtitle: "A journey from the leaders to the leaders.",
    sectionDescription:
      "Get inspired by stories of the people that empower and change. Influential talks from emerging technology experts and women leaders.",
    sidebarElements: talks1,
    sidebar1: "Women Leaders",
    sidebar2: "Live",
    sidebar3: "Hindi",
    sidebar4: "Upcoming",
    backgrounds1: [women, live, hindi]
  },
  {
    title: "discover",
    subtitle: "Discover opportunities to thrive your learning journey.",
    sectionDescription: "",
    sidebarElements: discover1,
    sidebar1: "Jobs",
    sidebar2: "Interns",
    sidebar3: "Scholars",
    sidebar4: "Events",
    backgrounds1: [jobs, intern, scholar, events]
  },
  {
    title: "assess",
    subtitle:
      "Video interview and coding assessments simplified for hassle free recruitment.",
    sectionDescription: "",
    tab1: "For hiring teams",
    tab2: "For candidates",
    sidebarElements: assess1,
    sidebar1: "Meet",
    sidebar2: "Recruit",
    sidebar3: null,
    sidebar4: null,
    sidebarElements2: assess2,
    sidebar21: "Apply",
    sidebar22: "Assess",
    sidebar23: null,
    sidebar24: null,
    backgrounds1: [hire, candidate],
    backgrounds2: [hire, candidate]
  }
];
