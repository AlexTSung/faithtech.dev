export type AudienceId = "churches" | "nonprofits" | "faithtech";

export type AudiencePage = {
  id: AudienceId;
  path: string;
  navLabel: string;
  /** Short gateway / header label, e.g. "For Churches" */
  shortLabel: string;
  eyebrow: string;
  h1: string;
  lead: string;
  heroAlt: string;
  problemsTitle: string;
  problems: { title: string; body: string }[];
  outcomesTitle: string;
  outcomes: string[];
  howTitle: string;
  howLead: string;
  howItems: { title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
  metaTitle: string;
  metaDescription: string;
};

export const audiences: Record<AudienceId, AudiencePage> = {
  churches: {
    id: "churches",
    path: "/for-churches",
    navLabel: "Churches & Pastors",
    shortLabel: "For Churches",
    eyebrow: "For Churches & pastors",
    h1: "Church technology consulting for pastors who need digital strategy that gets adopted.",
    lead:
      "You carry the mission. I bring product clarity so your church invests in technology people actually use, not tools that sit unused. Pastoral experience meets Silicon Valley rigor.",
    heroAlt: "Open Bible with light representing church technology consulting for pastors",
    problemsTitle: "What pastors and church leaders usually face",
    problems: [
      {
        title: "Tech before clarity",
        body: "Vendors and platforms show up before anyone has mapped the real pastoral or congregation need.",
      },
      {
        title: "Tools people ignore",
        body: "Apps and sites launch, then sit unused because the workflow never matched how your church actually lives.",
      },
      {
        title: "No product owner",
        body: "Staff juggle ministry and vendors. Nobody owns discovery, roadmap, or whether the investment worked.",
      },
    ],
    outcomesTitle: "What we aim for together",
    outcomes: [
      "A clear digital roadmap tied to discipleship and community outcomes",
      "Products and platforms your congregation and staff actually use",
      "Fewer failed builds: validate before you spend on development",
      "A bridge from digital Bible engagement back into local church life",
    ],
    howTitle: "How I consult with churches",
    howLead:
      "I have served in church and non-profit ministry for 15+ years, and I lead product at YouVersion. That dual lens is the point of FaithTech.dev.",
    howItems: [
      {
        title: "Discover before you buy",
        body: "Short discovery sprints with real users (staff, volunteers, members) so the problem is named before the stack is chosen.",
      },
      {
        title: "Build what congregations adopt",
        body: "MLP scoping, phased launches, and weekly reviews. Bias toward tools that fit pastoral care and church rhythms.",
      },
      {
        title: "Scale with church networks in mind",
        body: "Experience connecting Bible users to 20K+ churches across 150+ countries. Strategy that respects denominations and local context.",
      },
    ],
    ctaTitle: "Ready to bring clarity to your church's tech?",
    ctaBody:
      "Book a free 30-minute strategy call. Leave with a clearer next step, whether we work together or not.",
    metaTitle: "Church Technology Consulting for Pastors | FaithTech.dev",
    metaDescription:
      "Church technology consulting for pastors and ministry leaders. Validate before you build, ship digital tools congregations adopt, and connect engagement to local community.",
  },
  nonprofits: {
    id: "nonprofits",
    path: "/for-nonprofits",
    navLabel: "Non-profits & Leaders",
    shortLabel: "For Non-profits",
    eyebrow: "For Non-profits & directors",
    h1: "Non-profit product consulting for directors who cannot afford a wrong digital bet.",
    lead:
      "Directors and ministry leaders need more than a freelancer or a generic agency. You need someone who understands donors, beneficiaries, and the constraint of stewardship.",
    heroAlt: "Faith and technology visual for non-profit digital strategy consulting",
    problemsTitle: "Where non-profit digital work often stalls",
    problems: [
      {
        title: "Fragmented systems",
        body: "CRM, giving, content, and programs live in separate tools. Nobody owns the end-to-end experience.",
      },
      {
        title: "Builders hired too early",
        body: "Budget goes to development before the audience journey and success metrics are clear.",
      },
      {
        title: "Vanity over outcomes",
        body: "Launches look good in a board deck, then fail to move engagement, giving, or program impact.",
      },
    ],
    outcomesTitle: "Outcomes we design for",
    outcomes: [
      "A validated roadmap your board and staff can defend",
      "Experiences that convert curiosity into lasting support",
      "Product decisions that honor mission and stewardship",
      "A single senior point of contact from discovery through launch",
    ],
    howTitle: "How I consult with non-profits",
    howLead:
      "I have spent 15+ years in church and non-profit ministry, and 10+ years shipping products at scale. I treat your mission as the constraint, not a slogan.",
    howItems: [
      {
        title: "Strategy & discovery first",
        body: "UXR, journey mapping, and MLP scoping before a dollar goes to a build that the wrong audience will never use.",
      },
      {
        title: "Build with stewardship in mind",
        body: "Phased delivery, clear scope, and weekly reviews so leadership always knows what shipped and what is next.",
      },
      {
        title: "Grow what already works",
        body: "Activation loops, partnerships, and advisory retainers for teams that have launched but are not yet scaling impact.",
      },
    ],
    ctaTitle: "Ready to align your digital roadmap with the mission?",
    ctaBody:
      "Book a free 30-minute strategy call. Clarity on what to build, in what order, and why.",
    metaTitle: "Non-Profit Product Consulting for Ministry Leaders | FaithTech.dev",
    metaDescription:
      "Non-profit product and digital strategy consulting for directors and ministry leaders. Validate before you build. Ship with stewardship and mission in mind.",
  },
  faithtech: {
    id: "faithtech",
    path: "/for-faithtech",
    navLabel: "FaithTech Leaders",
    shortLabel: "For FaithTech",
    eyebrow: "For FaithTech CEOs, product & tech leaders",
    h1: "FaithTech product consulting for CEOs, product, and tech leaders shipping at scale.",
    lead:
      "You already know the stack. What you need is product judgment: what to build, what to cut, how to grow, and how to partner. That is the work.",
    heroAlt: "Faith technology product consulting for CEOs and tech leaders",
    problemsTitle: "Pressure points for FaithTech teams",
    problems: [
      {
        title: "0→1 fog",
        body: "Vision is big, scope is soft, and the team is shipping features without a Minimum Lovable Product or a clear bet.",
      },
      {
        title: "Live but not growing",
        body: "The product launched. Activation, retention, and partnerships are still stuck in founder intuition.",
      },
      {
        title: "AI and platform noise",
        body: "Everyone wants AI and integrations. Few have a product strategy that ties those bets to user outcomes.",
      },
    ],
    outcomesTitle: "What strong FaithTech engagements produce",
    outcomes: [
      "A prioritized roadmap grounded in user research, not feature requests",
      "Shipped MLP and launch plans with a single accountable product lead",
      "PLG loops, personalization, and partnership strategy that move metrics",
      "Embedded advisory when you need senior product depth without a full-time hire",
    ],
    howTitle: "How I consult with FaithTech leaders",
    howLead:
      "As Head of Product at YouVersion, I have led products reaching 300M+ users and partnerships with Bible societies and ministries worldwide. I bring that operating altitude to your team.",
    howItems: [
      {
        title: "Product strategy under pressure",
        body: "Discovery sprints, UXR synthesis, and roadmap facilitation for CEOs and product leads who need a sharper bet.",
      },
      {
        title: "0→1 and post-launch growth",
        body: "Architecture and design decisions through launch, then PLG, A/B testing, and iteration driven by real usage.",
      },
      {
        title: "Platforms and partnerships",
        body: "Bible platform integrations, publisher and ministry partnerships, and AI personalization with a product-first lens.",
      },
    ],
    ctaTitle: "Need a senior product partner for the next phase?",
    ctaBody:
      "Book a free 30-minute strategy call. Bring the roadmap, the metric, or the stuck decision.",
    metaTitle: "FaithTech Product Consulting for CEOs & Tech Leaders | FaithTech.dev",
    metaDescription:
      "FaithTech product consulting for CEOs, product, and engineering leaders. Strategy, 0→1 leadership, and growth advisory with YouVersion-scale experience.",
  },
};

export const audienceOrder: AudienceId[] = ["churches", "nonprofits", "faithtech"];

export const audienceList = audienceOrder.map((id) => audiences[id]);
