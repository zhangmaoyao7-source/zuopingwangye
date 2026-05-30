const cursorGlow = document.querySelector(".cursor-glow");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const tiltCards = document.querySelectorAll("[data-tilt]");
const revealItems = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter-btn");
const workCards = document.querySelectorAll(".work-card, .featured-case");
const projectCards = document.querySelectorAll(".work-card[data-project]");
const skillTabs = document.querySelectorAll(".skill-tab");
const skillFeatureButtons = document.querySelectorAll(".skill-feature");
const skillControls = document.querySelectorAll(".skill-tab, .skill-feature");
const skillShell = document.querySelector("[data-skill-shell]");
const skillContent = document.querySelector(".skill-content");
const skillTitle = document.querySelector("#skill-title");
const skillText = document.querySelector("#skill-text");
const skillMeter = document.querySelector("#skill-meter");
const skillPercent = document.querySelector("#skill-percent");
const skillRadarValue = document.querySelector("#skill-radar-value");
const skillBadge = document.querySelector("#skill-badge");
const canvas = document.querySelector("#spark-canvas");
const ctx = canvas.getContext("2d");
const projectModal = document.querySelector("#project-modal");
const projectModalTitle = document.querySelector("#project-modal-title");
const projectModalLabel = document.querySelector("#project-modal-label");
const projectModalText = document.querySelector("#project-modal-text");
const projectModalTags = document.querySelector("#project-modal-tags");
const projectModalDetails = document.querySelector("#project-modal-details");
const projectModalGallery = document.querySelector("#project-modal-gallery");
const modalClose = document.querySelector(".modal-close");
const modalPrev = document.querySelector("[data-modal-prev]");
const modalNext = document.querySelector("[data-modal-next]");
const filterStatus = document.querySelector("#filter-status");
const teamValueControls = document.querySelectorAll("[data-team-value]");
const teamValueText = document.querySelector("#team-value-text");
const teamValueStatus = document.querySelector("#team-value-status");
const thankActions = document.querySelectorAll("[data-contact-target]");
const thankEmailButton = document.querySelector("[data-copy-email]");
const thankStatus = document.querySelector("#thank-status");
const preferredProjectOrder = ["chando", "qingli", "chaoneng", "cup", "yinlu", "jianlibao", "eightdolls", "otherworks"];

function applyProjectOrder() {
  const workGrid = document.querySelector(".work-grid");
  if (!workGrid) return;

  const worksSection = document.querySelector("#works");
  const sectionTitle = worksSection?.querySelector(":scope > .section-title");
  if (worksSection && sectionTitle) {
    worksSection.insertBefore(workGrid, sectionTitle);
  }

  const featuredCases = new Map(
    Array.from(document.querySelectorAll(".featured-case[data-project]")).map((caseNode) => [caseNode.dataset.project, caseNode]),
  );
  let featuredAnchor = document.querySelector("#works .filter-bar") || workGrid;

  preferredProjectOrder.forEach((projectId) => {
    const caseNode = featuredCases.get(projectId);
    if (caseNode) {
      featuredAnchor.after(caseNode);
      featuredAnchor = caseNode;
    }
  });

  preferredProjectOrder.forEach((projectId) => {
    const card = workGrid.querySelector(`.work-card[data-project="${projectId}"]`);
    if (card) {
      workGrid.appendChild(card);
    }
  });

  Array.from(workGrid.querySelectorAll(".work-card[data-project]")).forEach((card, index) => {
    const number = card.querySelector(".work-visual span");
    if (number) {
      number.textContent = String(index + 1).padStart(2, "0");
    }
  });
}

applyProjectOrder();

const skills = {
  brand: {
    title: "品牌视觉设计",
    text: "能够围绕品牌定位建立色彩、字体、图形、版式与传播物料体系，让视觉调性在海报、包装、周边与线上页面中保持统一。",
    badge: "当前专精领域",
    meter: "92%",
    angle: "331deg",
    accent: "#9b63ff",
    rgb: "155, 99, 255",
  },
  ip: {
    title: "IP 形象设计",
    text: "能够从角色性格、造型比例、表情动作、故事场景和衍生物料出发，塑造有记忆点、可传播、可延展的品牌 IP 形象。",
    meter: "90%",
    badge: "角色资产搭建",
    angle: "324deg",
    accent: "#ff74c8",
    rgb: "255, 116, 200",
  },
  ecommerce: {
    title: "电商美工设计",
    text: "关注商品卖点提炼、详情页信息节奏、移动端阅读体验和转化路径，能够把产品功能、场景氛围与购买理由组织成完整页面。",
    meter: "88%",
    badge: "转化页面组织",
    angle: "317deg",
    accent: "#54f4d0",
    rgb: "84, 244, 208",
  },
  video: {
    title: "视频剪辑",
    text: "能够进行素材整理、节奏剪辑、字幕包装、基础调色与短视频成片输出，适配品牌宣传、作品展示和社媒内容场景。",
    meter: "82%",
    badge: "动态内容表达",
    angle: "295deg",
    accent: "#6aa8ff",
    rgb: "106, 168, 255",
  },
};

const projectData = {
  chando: {
    label: "CHANDO HIMALAYA / IP PRE-DESIGN",
    title: "自然堂喜马拉雅雪山守护 IP 形象设计",
    text: "以雪山生态守护为叙事母题，将小熊猫、兔狲、雪豹转化为三位性格鲜明的品牌角色，并延展至毛绒娃娃、服装、漫画、文创周边与户外传播应用。",
    tags: ["角色矩阵", "生态守护叙事", "毛绒打样", "文创传播"],
    details: [
      ["角色", "熊嘟嘟 / 孙稳稳 / 豹莎莎"],
      ["职责", "IP 设定、三视图、周边延展"],
      ["场景", "文创礼品、户外灯箱、漫画传播"],
      ["亮点", "把雪山守护叙事转成可亲近的角色矩阵"],
    ],
    images: [
      ["assets/chando-new-01-deploy.jpg", "角色总览、熊嘟嘟设定与毛绒打样"],
      ["assets/chando-new-02-deploy.jpg", "狲稳稳 / 防御型雪山守护角色"],
      ["assets/chando-new-03-deploy.jpg", "豹飒飒 / 巡逻型雪豹守护角色"],
      ["assets/chando-new-04-deploy.jpg", "服装造型、文创周边与户外传播延展"],
    ],
  },
  qingli: {
    label: "CR DOUBLE-CRANE QINGLI / IP & DERIVATIVES",
    title: "清利「鲸小利」医药品牌 IP 形象与文创衍生设计",
    text: "围绕口咽抗菌、随时清利的核心心智，塑造兼具安全感和亲和力的鲸系 IP，并延展至表情包、服装、场景、周边产品与户外传播。",
    tags: ["医药品牌 IP", "安全抗菌心智", "文创衍生品", "产品传播场景"],
    details: [
      ["角色", "鲸小利"],
      ["职责", "角色规范、动作表情、周边系统"],
      ["场景", "医药产品传播、户外广告、社交表情"],
      ["亮点", "用亲和角色降低医药品牌的距离感"],
    ],
    images: [
      ["assets/qingli-main-deploy.jpg", "鲸小利 / 角色设定与视觉规范"],
      ["assets/qingli-character-deploy.jpg", "动作、表情、服装与场景延展"],
      ["assets/qingli-product-new-deploy.jpg", "产品传播、周边系统与户外广告"],
    ],
  },
  chaoneng: {
    label: "CHAONENG / E-COMMERCE DETAIL PAGE",
    title: "超能植愈香氛洗衣液电商详情页设计",
    text: "本次详情页紧扣“天然植愈、温和洁净、疗愈生活”的产品定位，适配淘宝、京东、拼多多等主流电商平台移动端与 PC 端浏览场景。整体摒弃传统洗护产品生硬的功能堆砌，以“自然植愈，温柔洗护”为核心主题，融合植物天然属性与居家治愈感，兼顾视觉美感、用户阅读体验与产品转化效果。",
    tags: ["电商详情页", "洗护产品视觉", "移动端长图", "转化型信息设计"],
    details: [
      ["产品", "超能植愈香氛洗衣液"],
      ["平台", "淘宝 / 京东 / 拼多多"],
      ["目标", "传递天然植萃、温和护衣、高效去污、持久留香"],
      ["痛点", "洗衣残留、衣物发硬、香味刺鼻、伤手伤衣"],
    ],
    images: [
      ["assets/chaoneng-detail-01-deploy.jpg", "详情页第一段 / 产品首屏、调香故事与生活场景"],
      ["assets/chaoneng-detail-02-deploy.jpg", "详情页第二段 / 留香卖点、洗护痛点与净护因子"],
      ["assets/chaoneng-detail-03-deploy.jpg", "详情页第三段 / 护衣护色、绿色认证与使用说明"],
    ],
  },
  cup: {
    label: "TWINKLE CUP / E-COMMERCE DETAIL PAGE",
    title: "潮流水杯电商详情页设计",
    text: "本次详情页紧扣品牌“童趣萌潮、多巴胺快乐、随行打卡”的核心产品定位，适配淘宝、京东、得物等主流电商平台移动端与 PC 端浏览场景。整体以“梦幻冰淇淋乐园”为核心视觉主题，融合多巴胺高饱和度色彩与 C4D 立体微缩场景，聚焦独创立体外观、一杯三饮功能、母婴级纯净材质与潮流出街配饰四大优势，用强烈的视觉吸睛力和情绪共鸣降低年轻消费群体的决策成本，提升店铺转化。",
    tags: ["电商详情页", "潮流水杯", "多巴胺视觉", "C4D 微缩场景"],
    details: [
      ["产品", "梦幻冰淇淋派对潮流水杯"],
      ["平台", "淘宝 / 京东 / 得物"],
      ["主题", "梦幻冰淇淋乐园"],
      ["卖点", "立体外观、一杯三饮、母婴级材质、潮流挂绳"],
    ],
    images: [
      ["assets/cup-detail-01-deploy.jpg", "详情页第一段 / 首屏视觉、梦幻外观与独创内胆"],
      ["assets/cup-detail-02-deploy.jpg", "详情页第二段 / 随心出街、一键弹盖吸管与安全材质"],
      ["assets/cup-detail-03-deploy.jpg", "详情页第三段 / 多场景饮用、便携挂绳与潮流集结"],
    ],
  },
  jianlibao: {
    label: "JIANLIBAO / IP DERIVATIVES DESIGN",
    title: "健力宝品牌 IP 周边与文创衍生品设计",
    text: "以健大宝和健小宝为核心角色，围绕尽兴劲爽、中国健力宝的品牌主张，延展盲盒、指套玩偶、积木玩具、桌游、运动套组、服装与国潮礼品系统。",
    tags: ["民族品牌焕新", "IP 周边衍生", "年轻消费场景", "国潮礼品系统"],
    details: [
      ["角色", "健大宝 / 健小宝"],
      ["职责", "周边规划、角色拓展、礼品系统"],
      ["场景", "运动、休闲、美食、节庆礼赠"],
      ["亮点", "让国民饮料品牌拥有更年轻的玩具化触点"],
    ],
    images: [
      ["assets/jianlibao/jianlibao-new-01-deploy.jpg", "角色拓展、盲盒系列与指套玩偶"],
      ["assets/jianlibao/jianlibao-new-02-deploy.jpg", "积木玩具、桌游、毛绒与小礼品"],
      ["assets/jianlibao/jianlibao-new-03-deploy.jpg", "服装、运动套组、家居与国潮礼品"],
    ],
  },
  yinlu: {
    label: "YINLU PEANUT MILK / CREATIVE MERCHANDISE",
    title: "银鹭花生牛奶文创周边与品牌陪伴设计",
    text: "以连吃带喝、1罐扛饿为核心传播记忆点，将品牌能量转化为 AR 透卡、日历盲盒、杯具、桌游、毛绒、实用生活好物与广告应用。",
    tags: ["品牌文创周边", "AR 互动透卡", "日常生活好物", "年轻化破圈沟通"],
    details: [
      ["角色", "品牌文创系统"],
      ["职责", "周边规划、AR 互动、广告应用"],
      ["场景", "日常陪伴、节日礼赠、线下传播"],
      ["亮点", "把扛饿卖点转成能被带走的生活化体验"],
    ],
    images: [
      ["assets/yinlu-main-deploy.jpg", "盲盒、日历与 DIY 生活周边"],
      ["assets/yinlu-ar-deploy.jpg", "AR 透卡 / 互动体验可视化"],
      ["assets/yinlu-products-deploy.jpg", "杯具、实用好物、小礼品与广告贴片"],
    ],
  },
  eightdolls: {
    label: "DONGYANG GUANGYAO / EIGHT DOLLS EMOJI DESIGN",
    title: "东阳光药「八个娃娃」表情包设计与物料延展",
    text: "为东阳光药“八个娃娃”IP设计表情包，围绕“健康守护 · 童趣科普”的核心思路展开，将药品功能、品牌温度与生活化场景结合，打造一套既实用又有传播力的表情包。项目希望让表情包成为用户愿意主动使用、分享的社交货币，在无形中完成品牌心智植入与价值传播；以萌趣方式化解健康焦虑，软化用药提醒，成为健康知识的亲切翻译官，在潜移默化中传递品牌专业与关怀。",
    tags: ["品牌 IP 表情包", "健康守护", "童趣科普", "物料延展"],
    details: [
      ["品牌", "东阳光药"],
      ["IP", "八个娃娃"],
      ["内容", "日常篇、校园篇、家庭新年篇表情包"],
      ["延展", "贴纸、笔记本、钥匙扣、包袋、户外广告等物料"],
    ],
    images: [
      ["assets/eight-dolls-01-deploy.jpg", "日常篇与校园篇表情包 / 情绪表达与健康科普场景"],
      ["assets/eight-dolls-02-deploy.jpg", "家庭新年篇表情包 / 节庆场景与社交使用展示"],
      ["assets/eight-dolls-03-deploy.jpg", "物料延展 / 贴纸、文具、钥匙扣、包袋与户外传播"],
    ],
  },
  otherworks: {
    label: "OTHER WORKS / GROWING COLLECTION",
    title: "其它作品合集",
    text: "这里作为后续作品的集合入口，用来收纳还没有单独拆成重点项目的品牌文创、页面视觉、海报物料、IP 小稿和阶段性练习。每组作品会按主题归类，方便持续补充和查看。",
    tags: [],
    details: [],
    collections: [
      {
        category: "品牌文创周边",
        title: "花王碧柔文创周边设计",
        text: "本系列文创周边为花王碧柔打造品牌 IP 衍生设计。以碧柔“硬核防晒、守护肌肤自信”的品牌理念为核心，融合夏日、海洋、元气等年轻化元素，构建覆盖日常、户外、礼品全场景的文创矩阵，强化品牌年轻态形象，并传递“保持自信，身心放松”的品牌态度。",
        tags: ["花王碧柔", "防晒品牌", "IP 衍生", "夏日海洋", "礼品周边"],
        images: [
          ["assets/biore-creative-01-deploy.jpg", "户外大礼包、包包系列、香薰水杯与文创雪糕等周边矩阵"],
          ["assets/biore-creative-02-deploy.jpg", "手持风扇、折叠圆扇补光板、小礼品与礼盒套组延展"],
        ],
      },
      {
        category: "网页 UI / 交互原型",
        title: "个人作品集网页界面",
        text: "围绕个人作品展示、信息架构、动效交互和求职投递场景搭建的网页 UI 作品，用于承载重点项目、能力标签与联系入口。",
        tags: ["网页 UI", "作品集", "交互原型", "响应式页面"],
        images: [
          ["assets/portfolio-preview-deploy.jpg", "作品集网页视觉 / 页面结构与交互氛围"],
          ["assets/hero-profile-banner-deploy.jpg", "个人介绍视觉 / 横幅风格与人物表达"],
          ["assets/portfolio-hero-tools-deploy.jpg", "工具能力展示 / 标签化视觉与辅助图形"],
        ],
      },
    ],
    images: [
      ["assets/biore-creative-01-deploy.jpg", "花王碧柔文创周边设计 / 户外与日常周边"],
      ["assets/biore-creative-02-deploy.jpg", "花王碧柔文创周边设计 / 礼品与小物延展"],
      ["assets/portfolio-preview-deploy.jpg", "作品集网页视觉 / 页面结构与交互氛围"],
      ["assets/hero-profile-banner-deploy.jpg", "个人介绍视觉 / 横幅风格与人物表达"],
      ["assets/portfolio-hero-tools-deploy.jpg", "工具能力展示 / 标签化视觉与辅助图形"],
    ],
  },
};

const projectIds = preferredProjectOrder.filter((projectId) => projectData[projectId]);
const filterLabels = {
  all: "全部",
  ip: "IP 形象",
  brand: "品牌文创",
  ui: "界面 UI",
};

let particles = [];
let width = 0;
let height = 0;
let activeProjectId = "";
let lastFocusedProject = null;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(80, Math.floor(width / 18)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    radius: Math.random() * 2 + 0.7,
    hue: Math.random() > 0.45 ? "138, 92, 255" : "255, 116, 200",
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < -10) particle.x = width + 10;
    if (particle.x > width + 10) particle.x = -10;
    if (particle.y < -10) particle.y = height + 10;
    if (particle.y > height + 10) particle.y = -10;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${particle.hue}, 0.55)`;
    ctx.fill();

    for (let i = index + 1; i < particles.length; i += 1) {
      const other = particles[i];
      const dx = particle.x - other.x;
      const dy = particle.y - other.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 120) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - distance / 120)})`;
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(drawParticles);
}

window.addEventListener("mousemove", (event) => {
  cursorGlow.style.transform = `translate3d(${event.clientX - 192}px, ${event.clientY - 192}px, 0)`;

  const xOffset = (event.clientX / window.innerWidth - 0.5) * 2;
  const yOffset = (event.clientY / window.innerHeight - 0.5) * 2;
  parallaxItems.forEach((item) => {
    const depth = Number(item.dataset.depth);
    item.style.transform = `translate3d(${xOffset * depth}px, ${yOffset * depth}px, 0)`;
  });
});

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => observer.observe(item));

function updateFilterStatus(filter) {
  if (!filterStatus) return;
  const visibleCount = Array.from(projectCards).filter((card) => !card.classList.contains("is-hidden")).length;
  const label = filterLabels[filter] || "当前分类";
  filterStatus.textContent = filter === "all" ? `当前展示 ${visibleCount} 个作品` : `${label}：${visibleCount} 个作品`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    workCards.forEach((card) => {
      const categories = (card.dataset.category || "").split(" ");
      const show = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !show);
    });
    updateFilterStatus(filter);
  });
});

projectCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "28%");
  });
});

function setActiveSkill(skillKey) {
  const current = skills[skillKey] || skills.brand;

  skillTabs.forEach((item) => {
    const isActive = item.dataset.skill === skillKey;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  skillFeatureButtons.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.skill === skillKey);
  });

  if (skillShell) {
    skillShell.style.setProperty("--skill-accent", current.accent);
    skillShell.style.setProperty("--skill-accent-rgb", current.rgb);
    skillShell.style.setProperty("--skill-angle", current.angle);
  }

  if (skillTitle) skillTitle.textContent = current.title;
  if (skillText) skillText.textContent = current.text;
  if (skillMeter) skillMeter.style.width = current.meter;
  if (skillPercent) skillPercent.textContent = current.meter;
  if (skillRadarValue) skillRadarValue.textContent = current.meter;
  if (skillBadge) skillBadge.textContent = current.badge;

  if (skillContent) {
    skillContent.classList.remove("is-switching");
    void skillContent.offsetWidth;
    skillContent.classList.add("is-switching");
  }
}

skillControls.forEach((control) => {
  control.addEventListener("click", () => setActiveSkill(control.dataset.skill));
});

setActiveSkill("brand");

function getActiveProjectList() {
  const visibleIds = new Set(
    Array.from(projectCards)
      .filter((card) => !card.classList.contains("is-hidden"))
      .map((card) => card.dataset.project),
  );
  const orderedVisibleIds = preferredProjectOrder.filter((projectId) => visibleIds.has(projectId) && projectData[projectId]);
  return orderedVisibleIds.includes(activeProjectId) ? orderedVisibleIds : projectIds;
}

function openAdjacentProject(direction) {
  const ids = getActiveProjectList();
  if (ids.length < 2) return;
  const currentIndex = ids.indexOf(activeProjectId);
  const nextIndex = (currentIndex + direction + ids.length) % ids.length;
  openProject(ids[nextIndex]);
}

function openProject(projectId) {
  const project = projectData[projectId];
  if (!project || !projectModal) return;

  const opener = document.activeElement?.closest?.(".work-card[data-project]");
  if (opener) lastFocusedProject = opener;
  activeProjectId = projectId;
  projectModalLabel.textContent = project.label;
  projectModalTitle.textContent = project.title;
  projectModalText.textContent = project.text;
  const projectTags = project.tags || [];
  projectModalTags.replaceChildren();
  projectModalTags.hidden = projectTags.length === 0;
  projectTags.forEach((tag) => {
    const tagNode = document.createElement("span");
    tagNode.textContent = tag;
    projectModalTags.appendChild(tagNode);
  });

  const projectDetails = project.details || [];
  projectModalDetails.replaceChildren();
  projectModalDetails.hidden = projectDetails.length === 0;
  projectDetails.forEach(([label, value]) => {
    const detail = document.createElement("div");
    const labelNode = document.createElement("span");
    const valueNode = document.createElement("strong");
    detail.className = "project-detail";
    labelNode.textContent = label;
    valueNode.textContent = value;
    detail.append(labelNode, valueNode);
    projectModalDetails.appendChild(detail);
  });

  const renderGalleryFigure = ([src, caption], target) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    image.src = src;
    image.alt = caption;
    figcaption.textContent = caption;
    figure.append(image, figcaption);
    target.appendChild(figure);
  };

  projectModalGallery.replaceChildren();
  if (project.collections?.length) {
    project.collections.forEach((collection) => {
      const section = document.createElement("section");
      const header = document.createElement("div");
      const category = document.createElement("span");
      const title = document.createElement("h3");
      const text = document.createElement("p");
      const tags = document.createElement("div");
      const grid = document.createElement("div");

      section.className = "project-collection";
      header.className = "project-collection-head";
      tags.className = "project-collection-tags";
      grid.className = "project-gallery-grid";

      category.textContent = collection.category;
      title.textContent = collection.title;
      text.textContent = collection.text;

      collection.tags?.forEach((tag) => {
        const tagNode = document.createElement("span");
        tagNode.textContent = tag;
        tags.appendChild(tagNode);
      });

      collection.images.forEach((image) => renderGalleryFigure(image, grid));
      header.append(category, title, text, tags);
      section.append(header, grid);
      projectModalGallery.appendChild(section);
    });
  } else {
    project.images.forEach((image) => renderGalleryFigure(image, projectModalGallery));
  }

  projectModal.scrollTop = 0;
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeProject() {
  if (!projectModal) return;
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeProjectId = "";
  if (lastFocusedProject && document.contains(lastFocusedProject)) {
    lastFocusedProject.focus({ preventScroll: true });
  }
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

modalClose?.addEventListener("click", closeProject);
modalPrev?.addEventListener("click", () => openAdjacentProject(-1));
modalNext?.addEventListener("click", () => openAdjacentProject(1));
projectModal?.addEventListener("click", (event) => {
  if (event.target === projectModal) closeProject();
});
window.addEventListener("keydown", (event) => {
  const isModalOpen = projectModal?.classList.contains("is-open");
  if (!isModalOpen) return;

  if (event.key === "Escape") {
    closeProject();
  } else if (event.key === "ArrowLeft") {
    openAdjacentProject(-1);
  } else if (event.key === "ArrowRight") {
    openAdjacentProject(1);
  }
});

function setThankStatus(message) {
  if (thankStatus) {
    thankStatus.textContent = message;
  }
}

function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function activateTeamValue(valueKey) {
  const source = document.querySelector(`.team-card[data-team-value="${valueKey}"]`);
  if (!source) return;

  teamValueControls.forEach((control) => {
    control.classList.toggle("is-active", control.dataset.teamValue === valueKey);
  });

  if (teamValueText && source.dataset.copy) {
    teamValueText.textContent = source.dataset.copy;
  }

  if (teamValueStatus && source.dataset.status) {
    teamValueStatus.textContent = source.dataset.status;
  }
}

teamValueControls.forEach((control) => {
  control.addEventListener("click", () => activateTeamValue(control.dataset.teamValue));
  control.addEventListener("mouseenter", () => activateTeamValue(control.dataset.teamValue));
});

thankActions.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.contactTarget);
    if (!target) return;

    thankActions.forEach((item) => item.classList.toggle("is-active", item === button));
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    const messages = {
      "#works": "已跳转到作品集模块，可以查看完整项目。",
      "#skills": "已跳转到能力标签模块，可以查看技能方向。",
      "#collab": "已跳转到沟通协作模块，可以查看协作优势。",
    };
    setThankStatus(messages[button.dataset.contactTarget] || "已为你跳转到对应模块。");
  });
});

thankEmailButton?.addEventListener("click", async () => {
  const email = thankEmailButton.dataset.copyEmail;
  if (!email) return;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(email);
    } else {
      copyTextFallback(email);
    }
    thankEmailButton.classList.add("is-active");
    setThankStatus(`联系方式已复制：${email}`);
    window.setTimeout(() => thankEmailButton.classList.remove("is-active"), 900);
  } catch (error) {
    copyTextFallback(email);
    setThankStatus(`联系方式已复制：${email}`);
  }
});

const protectedAssetSelectors = [
  "img",
  "picture",
  ".case-gallery",
  ".project-gallery",
  ".work-visual",
  ".hero-photo-frame",
  ".side-mini",
].join(",");

let protectToastTimer = 0;

function showProtectToast() {
  let toast = document.querySelector(".asset-protect-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "asset-protect-toast";
    toast.setAttribute("role", "status");
    toast.textContent = "作品仅供在线浏览，请勿下载、拖拽或二次使用。";
    document.body.appendChild(toast);
  }

  toast.classList.add("is-visible");
  window.clearTimeout(protectToastTimer);
  protectToastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

document.querySelectorAll("img").forEach((image) => {
  image.setAttribute("draggable", "false");
  image.setAttribute("loading", image.getAttribute("loading") || "lazy");
});

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest(protectedAssetSelectors)) {
    event.preventDefault();
    showProtectToast();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target.closest(protectedAssetSelectors)) {
    event.preventDefault();
    showProtectToast();
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  const isSave = (event.ctrlKey || event.metaKey) && key === "s";
  const isPrint = (event.ctrlKey || event.metaKey) && key === "p";
  const isDevTools = key === "f12" || ((event.ctrlKey || event.metaKey) && event.shiftKey && ["i", "j", "c"].includes(key));

  if (isSave || isPrint || isDevTools) {
    event.preventDefault();
    showProtectToast();
  }
});

updateFilterStatus("all");
resizeCanvas();
drawParticles();
window.addEventListener("resize", resizeCanvas);
