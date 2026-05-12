import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  ExternalLink,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

const profile = {
  name: "御痕",
  role: "社會線記者、製播人、會吸貓咪的人。",
  slogan: "有些人寫程式改世界，我負責把世界正在改變的事寫下來。",
  photo: "/profile.webp",
};

const tickerItems = [
  "BREAKING: 個人網站不是 Linktree，是一個可以被點擊的現場。",
  "LIVE: 記者模式啟動，terminal cursor 持續閃爍中。",
  "OPEN SOURCE: 社群、媒體、公民科技，正在連線。",
  "STATUS: Available for stories, collaborations, and weird internet things.",
  "Meow：我好想吸貓...我家花生才來1年2個月就去當天使了QQ"
];

const attendedEvents = [
  {
    title: "APGS 亞太遊戲高峰會",
    years: [
	  { year: "2023", href: "https://tgs.tca.org.tw/apgs" },  
	  { year: "2024", href: "https://tgs.tca.org.tw/apgs" },
	  { year: "2025", href: "https://tgs.tca.org.tw/apgs" },
	],
  },
  {
    title: "AWS Summit Taipei",
    years: [
	  { year: "2024", href: "https://aws.amazon.com/tw/events/taiwan/2024-aws-summit-taipei" },
	  { year: "2025", href: "https://aws.amazon.com/tw/events/summits/taipei" },
	],
  },
  {
    title: "COMPUTEX",
    years: [
      { year: "2024", href: "https://www.computextaipei.com.tw/zh-tw/index.html" },
      { year: "2025", href: "https://www.computextaipei.com.tw/zh-tw/index.html" },
      { year: "2026", href: "https://www.computextaipei.com.tw/zh-tw/index.html" },
    ],
  },
  {
    title: "COSCUP 開源人年會",
    years: [
	  { year: "2021", href: "https://coscup.org/2021" },
	  { year: "2022", href: "https://coscup.org/2022" },
	  { year: "2023", href: "https://coscup.org/2023" },
      { year: "2024", href: "https://coscup.org/2024" },
      { year: "2025", href: "https://coscup.org/2025" },
      { year: "2026", href: "https://coscup.org/2026" },
    ],
  },
  {
    title: "CYBERSEC 臺灣資安大會",
    years: [
      { year: "2022", href: "https://cybersec.ithome.com.tw" },
      { year: "2023", href: "https://cybersec.ithome.com.tw" },
      { year: "2024", href: "https://cybersec.ithome.com.tw" },
      { year: "2025", href: "https://cybersec.ithome.com.tw" },
      { year: "2026", href: "https://cybersec.ithome.com.tw" },
    ],
  },
  {
    title: "DevFest Taipei",
    years: [{ year: "2025", href: "https://devfest-taipei.gdg.tw/2025" }],
  },
  {
    title: "台北國際動漫節",
    years: [{ year: "2026", href: "https://www.ccpa.org.tw/tica/index.php?tpl=11" }],
  },
  {
    title: "g0v Summit 台灣零時政府雙年會",
    years: [
      { year: "2024", href: "https://summit.g0v.tw/2024" },
      { year: "2026", href: "https://summit.g0v.tw/2026" },
    ],
  },
  {
    title: "Google Cloud Summit Taipei",
    years: [
      { year: "2023", href: "https://cloudonair.withgoogle.com/events/summit-taipei-2023" },
      { year: "2025", href: "https://cloudonair.withgoogle.com/events/summit-taipei-2025" },
    ],
  },
  {
    title: "Google Search Central Live Taipei",
    years: [
	  { year: "2024", href: "https://example.com" },
	],
  },
  {
    title: "HITCON CMT 台灣駭客年會",
    years: [
	  { year: "2021", href: "https://example.com" },
	  { year: "2022", href: "https://example.com" },
	  { year: "2023", href: "https://example.com" },
      { year: "2024", href: "https://example.com" },
      { year: "2025", href: "https://example.com" },
      { year: "2026", href: "https://example.com" },
    ],
  },
  {
    title: "Secutech 台北國際安全科技應用博覽會",
    years: [
      { year: "2025", href: "https://example.com" },
      { year: "2026", href: "https://example.com" },
    ],
  },
  {
    title: "SITCON 學生計算機年會",
    years: [
	  { year: "2020", href: "https://sitcon.org/2020" },
      { year: "2021", href: "https://sitcon.org/2021" },
      { year: "2022", href: "https://sitcon.org/2022" },
      { year: "2024", href: "https://sitcon.org/2024" },
      { year: "2025", href: "https://sitcon.org/2025" },
      { year: "2026", href: "https://sitcon.org/2026" },
    ],
  },
  {
    title: "SITCON 學生計算機年會夏令營",
    years: [
      { year: "2021", href: "https://example.com" },
    ],
  },
  {
    title: "台北國際電玩展",
    years: [
	  { year: "2015", href: "https://tgs.tca.org.tw/index_c.php" },
	  { year: "2016", href: "https://tgs.tca.org.tw/index_c.php" },
	  { year: "2017", href: "https://tgs.tca.org.tw/index_c.php" },
	  { year: "2018", href: "https://tgs.tca.org.tw/index_c.php" },
	  { year: "2019", href: "https://tgs.tca.org.tw/index_c.php" },
	  { year: "2020", href: "https://tgs.tca.org.tw/index_c.php" },
      { year: "2021", href: "https://tgs.tca.org.tw/index_c.php" },
      { year: "2022", href: "https://tgs.tca.org.tw/index_c.php" },
      { year: "2023", href: "https://tgs.tca.org.tw/index_c.php" },
	  { year: "2024", href: "https://tgs.tca.org.tw/index_c.php" },
	  { year: "2025", href: "https://tgs.tca.org.tw/index_c.php" },
      { year: "2026", href: "https://tgs.tca.org.tw/index_c.php" },
    ],
  },
];

const communityActivitiesByYear = [
  {
    year: "2026",
    items: [
      { title: "g0v Summit 2026", role: "宣傳組" },
      { title: "SITCON 2026", role: "製播組 副組長" },
      { title: "COSCUP 2026", role: "製播組" },
      { title: "TWNOG 7", role: "製播組" },
      { title: "台北國際動漫節", role: "平面、動態攝影／記者" },
	  { title: "台北國際電玩展", role: "平面、動態攝影／記者" },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "COSCUP 2025", role: "製播組 副組長" },
      { title: "MOPCUP 2025", role: "製播組 副組長" },
      { title: "SITCON 2025", role: "製播組" },
      { title: "SITCON 工人相見歡", role: "去蹭吃的製播組" },
      { title: "HITCON 2025", role: "會眾" },
      { title: "台北國際動漫節", role: "平面、動態攝影／記者" },
	  { title: "台北國際電玩展", role: "平面、動態攝影／記者" },
      { title: "台南跨年演唱會", role: "平面攝影／記者" },
      { title: "將軍吼", role: "平面攝影／記者" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "COSCUP 2024", role: "製播組 副組長" },
      { title: "MOPCUP 2024", role: "媒體組" },
      { title: "SITCON 2024", role: "製播組 組長" },
      { title: "台北國際動漫節", role: "平面、動態攝影／記者" },
	  { title: "台北國際電玩展", role: "平面、動態攝影／記者" },
      { title: "台南跨年演唱會", role: "平面攝影／記者" },
      { title: "將軍吼", role: "平面攝影／記者" },
    ],
  },
  {
    year: "2023",
    items: [
      { title: "COSCUP 2023", role: "製播組 組長" },
      { title: "MOPCUP 2023", role: "媒體組" },
      { title: "SITCON 2023", role: "製播組" },
      { title: "HITCON 2023", role: "會眾" },
	  { title: "台北國際電玩展", role: "平面、動態攝影／記者" },
      { title: "台南跨年演唱會", role: "平面攝影／記者" },
      { title: "將軍吼", role: "平面攝影／記者" },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "COSCUP 2022", role: "製播組 組長" },
      { title: "MOPCUP 2022", role: "媒體組" },
      { title: "SITCON 2022", role: "製播組" },
      { title: "HITCON 2022", role: "會眾" },
      { title: "台北國際動漫節", role: "平面、動態攝影／記者" },
	  { title: "台北國際電玩展", role: "平面、動態攝影／記者" },
      { title: "台南跨年演唱會", role: "平面攝影／記者" },
      { title: "將軍吼", role: "平面攝影／記者" },
    ],
  },
  {
    year: "2021",
    items: [
      { title: "COSCUP 2022", role: "會眾" },
      { title: "MOPCUP 2022", role: "會眾" },
      { title: "SITCON 2022", role: "會眾" },
    ],
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <BackgroundGrid />
      <NewsTicker />
      <Navbar />
      <Hero />

      <section className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-14 pt-12 sm:px-6 lg:px-8">
        <ProfilePage />
        <Footer />
      </section>
    </main>
  );
}

function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.12),transparent_30%),linear-gradient(to_bottom,rgba(15,23,42,0.65),rgba(2,6,23,1))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:38px_38px]" />
    </div>
  );
}

function NewsTicker() {
  return (
    <div className="relative z-20 border-b border-cyan-300/20 bg-slate-950/70 backdrop-blur-xl">
      <div className="flex overflow-hidden whitespace-nowrap py-2 text-xs tracking-[0.18em] text-cyan-100/90">
        <motion.div
          className="flex min-w-max gap-8"
          animate={{ x: [0, -900] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="text-slate-300">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: "首頁 / Home", href: "#home" },
    { label: "關於 / About", href: "#about" },
    { label: "現況 / Now", href: "#now" },
    { label: "工作 / Experience", href: "#experience" },
    { label: "活動 / Events", href: "#attended-events" },
    { label: "社群 / Community", href: "#community" },
    { label: "聯絡 / Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-mono text-lg font-black tracking-wide text-cyan-300">
          $&gt; WANG.JS
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-widest text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-2 text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 md:hidden"
          aria-label="開啟導覽選單"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 font-mono text-sm tracking-widest text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <motion.header
      id="home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="relative z-10 min-h-[calc(100svh-6.5rem)] overflow-hidden border-b border-cyan-200/15 bg-slate-950 lg:min-h-[760px]"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[58vw] md:block">
        <img
          src={profile.photo}
          alt={`${profile.name} 的個人照片`}
          className="h-full w-full object-cover object-center opacity-100"
        />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-950 to-transparent" />
      </div>

      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,1)_0%,rgba(2,6,23,.97)_50%,rgba(2,6,23,.68)_72%,rgba(2,6,23,.35)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950" />

        <img
          src={profile.photo}
          alt={`${profile.name} 的個人照片`}
          className="absolute right-[-28%] top-[-8%] h-[68svh] w-[88vw] object-cover object-center opacity-85 mix-blend-screen [mask-image:radial-gradient(ellipse_at_54%_44%,black_36%,rgba(0,0,0,.86)_50%,transparent_78%)] [-webkit-mask-image:radial-gradient(ellipse_at_54%_44%,black_36%,rgba(0,0,0,.86)_50%,transparent_78%)] min-[390px]:right-[-24%] min-[390px]:top-[-8%] min-[390px]:h-[70svh] min-[390px]:w-[82vw]"
        />

        <div className="absolute right-[-32%] top-[0%] h-[74svh] w-[92vw] bg-[radial-gradient(ellipse_at_54%_44%,transparent_36%,rgba(2,6,23,.16)_58%,rgba(2,6,23,.82)_83%)] min-[390px]:right-[-28%]" />
      </div>

      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(2,6,23,1)_0%,rgba(2,6,23,.98)_32%,rgba(2,6,23,.72)_48%,rgba(2,6,23,.12)_62%,transparent_75%)] md:block" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6.5rem)] w-full max-w-7xl items-center px-5 py-10 sm:px-8 md:py-12 lg:min-h-[760px] lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20">
        <div className="w-full max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            社會線記者／資訊社群／睡覺吃飯打咚咚
          </div>

          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-cyan-200/80 sm:text-sm">
            首頁 / Welcome to my website
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white drop-shadow-2xl min-[390px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            <ScrambleText text="歡迎來到" />
            <br />
            <span className="inline-block whitespace-nowrap">
              <span className="text-cyan-300">
                <ScrambleText text={profile.name} delay={450} />
              </span>
              <span className="text-white">
                <ScrambleText text=" 的網站" delay={750} />
              </span>
            </span>
          </h1>

          <p className="mt-4 text-base font-medium text-slate-200 sm:text-xl">{profile.role}</p>

          <TypeLine text={profile.slogan} />

          <div className="mt-5 max-w-xl rounded-2xl border border-white/10 bg-slate-950/70 p-5 font-mono text-base leading-8 text-slate-200 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <p className="text-emerald-300">$ whoami</p>
            <p className="mt-2">特派記者 @ 賴傳媒（記者爆料網）</p>
            <p>目前是一位資管系碩士研究生</p>
            <p>關注媒體、社群、科技、開源、公民科技</p>
            <p className="mt-2 text-slate-400">相信資訊的力量，能讓社會更好。</p>
            <p className="mt-3 text-emerald-300">
              $ <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-300" />
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 pb-8 sm:flex-row sm:flex-wrap lg:pb-0">
            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              探索更多
              <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:Junter1523@new-reporter.com"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              公司信箱
            </a>
			<a
              href="mailto:Junter0323+web@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              個人信箱
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function ScrambleText({ text, delay = 0 }) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$#%&*+=?";
  const [displayText, setDisplayText] = React.useState(text);

  React.useEffect(() => {
    let frame = 0;
    let timer;
    const totalFrames = 28;

    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        frame += 1;

        const nextText = text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            const revealFrame = Math.floor((index / text.length) * totalFrames);
            if (frame > revealFrame + 8) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplayText(nextText);

        if (frame >= totalFrames) {
          window.clearInterval(timer);
          setDisplayText(text);
        }
      }, 38);
    }, delay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
}

function TypeLine({ text }) {
  return (
    <div className="mt-5 rounded-2xl border border-emerald-300/15 bg-slate-950/70 p-4 font-mono text-base text-emerald-200 shadow-inner shadow-black/40">
      <span className="text-slate-500">$ echo </span>
      <span>{text}</span>
      <motion.span
        className="ml-1 inline-block h-5 w-2 translate-y-1 bg-emerald-300"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </div>
  );
}

function ProfilePage() {
  const contacts = [
    { label: "個人 Email", value: "Junter0323@gmail.com", href: "mailto:Junter0323@gmail.com", icon: Mail },
    { label: "公司 Email", value: "Junter1523@new-reporter.com", href: "mailto:Junter1523@new-reporter.com", icon: Mail },
    { label: "Facebook", value: "王俊勝", href: "https://www.facebook.com/iwjs323", icon: Facebook },
    { label: "Instagram", value: "CHUN SHEN／俊勝", href: "https://www.instagram.com/wjs.0323", icon: Instagram },
    { label: "Discord", value: "junter1523", href: "https://discord.gg/59jnRR9q", icon: MessageCircle },
    { label: "Telegram", value: "Telegram", href: "https://t.me/Junter0323", icon: MessageCircle },
    { label: "GitHub", value: "GitHub", href: "https://github.com/Junter323", icon: Github },
    { label: "LinkedIn", value: "LinkedIn", href: "https://www.linkedin.com/in/jasonwang0323", icon: Linkedin },
  ];

  const nowItems = [
    "賴傳媒（記者爆料網）特派記者",
    "目前是一位資管系碩士研究生",
    "持續參與資訊社群、開源活動與公民科技相關專案",
  ];

  const experienceItems = [
    "多間新聞報社 SEO 優化講師　⎯⎯　至今",
    "賴傳媒（記者爆料網）特派記者、維運工程師　⎯⎯　至今",
    "壹蘋新聞網 編輯 2024／07–2024／09",
    "網路新聞報社內勤編輯人員",
  ];

  return (
    <div className="space-y-10">
      <ProfileSection id="about" eyebrow="關於我 / About" title="嗨，我是御痕。">
        <div className="space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
          <p>
            我目前是賴傳媒（記者爆料網）的駐地記者，也參與許多資訊社群。平常在媒體、社群、科技、開源與公民科技之間移動，喜歡把複雜的資訊整理成大家願意讀、也讀得懂的內容。
          </p>
          <p>
            這個網站是我的個人入口：你可以在這裡找到我的聯絡方式、新聞作品、社群參與、技術作品與一些正在進行的事情。
          </p>
          <p className="font-mono text-cyan-200">▍有些人寫程式改世界，我負責把世界正在改變的事寫下來。</p>
        </div>
      </ProfileSection>

      <ProfileSection id="contact" eyebrow="聯絡方式 / Contact" title="可以在這些地方找到我">
        <ul className="grid gap-3 sm:grid-cols-2">
          {contacts.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/10 p-2 text-cyan-200">
                    <item.icon className="h-4 w-4" />
                  </div>

                  <span>
                    <span className="block text-sm font-bold text-white">{item.label}</span>
                    <span className="block text-xs text-slate-400">{item.value}</span>
                  </span>
                </div>

                <ExternalLink className="h-4 w-4 text-cyan-200 transition group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </ProfileSection>

      <SimpleListSection id="now" eyebrow="現在進行式 / Now" title="目前正在做的事" items={nowItems} />

      <SimpleListSection
        id="experience"
        eyebrow="工作經驗 / Experience"
        title="工作經驗與技術背景"
        items={experienceItems}
      />

      <AttendedEventsSection />
      <CommunityActivitiesSection />
    </div>
  );
}

function SimpleListSection({ id, eyebrow, title, items }) {
  return (
    <ProfileSection id={id} eyebrow={eyebrow} title={title}>
      <div className="grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
          >
            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/40" />
              <span className="leading-7">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}

function AttendedEventsSection() {
  return (
    <ProfileSection id="attended-events" eyebrow="曾參加過的活動 / Events Attended" title="曾參加過的活動">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {attendedEvents.map((event) => (
          <article
            key={event.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/75"
          >
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />
            <h3 className="relative text-lg font-black text-white">{event.title}</h3>

            <div className="relative mt-4 flex flex-wrap gap-2">
              {event.years.map((item) => (
                <a
                  key={item.year}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 font-mono text-xs font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
                >
                  {item.year}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </ProfileSection>
  );
}

function CommunityActivitiesSection() {
  return (
    <ProfileSection id="community" eyebrow="社群與活動參與 / Community & Activities" title="社群與活動參與">
      <div className="space-y-12">
        {communityActivitiesByYear.map((group) => (
          <section key={group.year}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/40" />
              <h3 className="font-mono text-3xl font-black text-white">{group.year}</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/40 to-transparent" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {group.items.map((item) => (
                <article
                  key={`${group.year}-${item.title}`}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/75"
                >
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />

                  <p className="relative text-lg font-black text-white">{item.title}</p>

                  <div className="relative mt-4 inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                    {item.role}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </ProfileSection>
  );
}

function ProfileSection({ id, eyebrow, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-slate-950/45 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200/80">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer-contact" className="relative z-10 scroll-mt-24 pb-8 pt-4 text-center text-sm text-slate-400">
      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] px-5 py-6 backdrop-blur-xl">
        <p className="font-mono text-cyan-100">歡迎加我個人社群認識認識</p>
        <p className="mt-2">
          © {new Date().getFullYear()} {profile.name} JasonWang.
        </p>
      </div>
    </footer>
  );
}

export default App;
