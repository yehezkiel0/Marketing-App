// src/data/dummyData.js
export const statsData = [
  { title: "Traffic", value: "982", change: "+5%", positive: true, prefix: "" },
  { title: "ROI", value: "15%", change: "+3%", positive: true, prefix: "+" },
  {
    title: "Conversions",
    value: "473",
    change: "+9%",
    positive: true,
    prefix: "",
  },
  {
    title: "Expenses",
    value: "884",
    change: "-2%",
    positive: false,
    prefix: "$",
  },
  { title: "CTR", value: "2.5%", change: "-0.2%", positive: false, prefix: "" },
  {
    title: "CPA",
    value: "5.41",
    change: "-$0.34",
    positive: true,
    prefix: "$",
  }, // CPA down is good
];

export const chartData = [
  { name: "Jun 1", traffic: 4000, roi: 2400 },
  { name: "Jun 5", traffic: 3000, roi: 1398 },
  { name: "Jun 10", traffic: 2000, roi: 9800 },
  { name: "Jun 15", traffic: 2780, roi: 3908 },
  { name: "Jun 20", traffic: 1890, roi: 4800 },
  { name: "Jun 25", traffic: 2390, roi: 3800 },
  { name: "Jul 1", traffic: 3490, roi: 4300 },
  { name: "Jul 5", traffic: 4000, roi: 2400 },
  { name: "Jul 10", traffic: 3000, roi: 1398 },
  { name: "Jul 15", traffic: 2000, roi: 9800 },
  { name: "Jul 20", traffic: 2780, roi: 3908 },
  { name: "Jul 25", traffic: 1890, roi: 4800 },
  { name: "Aug 1", traffic: 2390, roi: 3800 },
  { name: "Aug 5", traffic: 3490, roi: 4300 },
];

export const leadsData = [
  {
    date: "Today, 14:12",
    company: "-",
    email: "contact@helpdesk.com",
    status: "NEEDS REVIEW",
    country: "USA",
  },
  {
    date: "Today, 8:34",
    company: "Innovate.co",
    email: "s.chen@innovate.co",
    status: "NEEDS REVIEW",
    country: "Canada",
  },
  {
    date: "Aug 4, 17:57",
    company: "Webmail",
    email: "maria.g@webmail.net",
    status: "GOOD",
    country: "Germany",
  },
  {
    date: "Aug 4, 13:40",
    company: "-",
    email: "john.doe@startup.org",
    status: "GOOD",
    country: "Australia",
  },
  {
    date: "Aug 3, 10:22",
    company: "Designhub",
    email: "contact@designhub.io",
    status: "NEEDS REVIEW",
    country: "UK",
    expanded: true,
  },
  {
    date: "Aug 3, 9:01",
    company: "Proton",
    email: "a.kowalski@proton.me",
    status: "NEUTRAL",
    country: "USA",
  },
  {
    date: "Aug 2, 20:32",
    company: "-",
    email: "assistance@service.net",
    status: "NEEDS REVIEW",
    country: "Japan",
  },
  {
    date: "Aug 2, 11:54",
    company: "-",
    email: "info@braziltech.com.br",
    status: "NEUTRAL",
    country: "Brazil",
  },
];

// Variations for Filtering
export const leadsDataVariations = {
  "Lead Quality": leadsData,
  "Day on Day": [
    {
      date: "Yesterday, 10:00",
      company: "Alpha Corp",
      email: "ceo@alpha.com",
      status: "GOOD",
      country: "USA",
    },
    {
      date: "Yesterday, 14:00",
      company: "Beta Ltd",
      email: "info@beta.co.uk",
      status: "NEEDS REVIEW",
      country: "UK",
    },
  ],
  "Week on Week": [
    {
      date: "Last Week",
      company: "Gamma Inc",
      email: "hr@gamma.com",
      status: "NEUTRAL",
      country: "Canada",
    },
    {
      date: "Last Week",
      company: "Delta Grp",
      email: "sales@delta.org",
      status: "GOOD",
      country: "Germany",
    },
  ],
  SQR: [
    {
      date: "Aug 1",
      company: "Epsilon",
      email: "contact@epsilon.io",
      status: "GOOD",
      country: "France",
    },
  ],
  "Keyword Performance": [
    {
      date: "Aug 5",
      company: "Zeta",
      email: "marketing@zeta.net",
      status: "NEEDS REVIEW",
      country: "Japan",
    },
  ],
};

export const instagramStats = {
  followers: "135,145",
  followersChange: "+16",
  interactions: "1,356",
  interactionsChange: "+7",
  details: [
    { label: "Likes", value: "697" },
    { label: "Comments", value: "22" },
    { label: "Saves", value: "566" },
    { label: "Shares", value: "71" },
  ],
};

export const twitterStats = {
  followers: "45,015",
  followersChange: "+7",
  metrics: [
    { label: "Impressions", value: "933", change: "-57%" },
    { label: "Engagement Rate", value: "15.8%", change: "+82%" },
    { label: "Engagement", value: "148", change: "+22%" },
  ],
};

// NEW DATA FOR SIDEBAR PAGES

export const seoStats = [
  { title: "Domain Authority", value: "45", change: "+2", positive: true },
  { title: "Backlinks", value: "1,240", change: "+15%", positive: true },
  { title: "Organic Traffic", value: "12.5k", change: "+8%", positive: true },
  { title: "Avg. Position", value: "14.2", change: "-1.1", positive: true }, // Lower is better for ranking, but visually we want green usually
];

export const keywordData = [
  {
    keyword: "SaaS Dashboard",
    volume: "12,000",
    difficulty: "High",
    position: 4,
    type: "Transactional",
  },
  {
    keyword: "React Admin Template",
    volume: "8,500",
    difficulty: "Medium",
    position: 7,
    type: "Commercial",
  },
  {
    keyword: "Web Analytics",
    volume: "45,000",
    difficulty: "Hard",
    position: 12,
    type: "Informational",
  },
  {
    keyword: "Marketing KPI",
    volume: "3,200",
    difficulty: "Low",
    position: 1,
    type: "Informational",
  },
];

export const paidAdsStats = [
  { title: "Ad Spend", value: "$4,500", change: "+12%", positive: false }, // Spending more might be neutral/bad contextually
  { title: "ROAS", value: "3.2x", change: "+0.4", positive: true },
  { title: "Conversion Rate", value: "4.8%", change: "+1.2%", positive: true },
  { title: "CPC", value: "$1.45", change: "-$0.20", positive: true },
];

export const activeCampaigns = [
  {
    name: "Summer Sale 2026",
    platform: "Google Ads",
    status: "Active",
    spend: "$1,200",
    clicks: 850,
  },
  {
    name: "Retargeting - Visitors",
    platform: "Facebook",
    status: "Active",
    spend: "$850",
    clicks: 1200,
  },
  {
    name: "Brand Awareness",
    platform: "LinkedIn",
    status: "Paused",
    spend: "$400",
    clicks: 120,
  },
  {
    name: "Competitor Conquesting",
    platform: "Google Ads",
    status: "Active",
    spend: "$2,050",
    clicks: 540,
  },
];

export const reportList = [
  {
    name: "Monthly SEO Report - July",
    date: "Aug 1, 2026",
    type: "SEO",
    size: "2.4 MB",
  },
  {
    name: "Social Media Performance",
    date: "Aug 2, 2026",
    type: "Social",
    size: "1.1 MB",
  },
  {
    name: "Q2 Financial Overview",
    date: "Jul 15, 2026",
    type: "Financial",
    size: "5.6 MB",
  },
  {
    name: "User Acquisition Channel",
    date: "Jul 30, 2026",
    type: "Marketing",
    size: "3.2 MB",
  },
];
