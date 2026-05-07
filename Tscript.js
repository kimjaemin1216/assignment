/* VIBE FINDER — script.js */

/* 샘플 데이터 */

let contentDB = [
  /* ─── 음악 ─── */
  {
    id: 'm001', type: 'music', title: 'Dynamite', artist: 'BTS',
    image: 'https://i.ytimg.com/vi/eHiPI6fybFo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLATUpU3NLiwnuV0a-Oo9hWIMCjgmA',
    link: 'https://youtu.be/eHiPI6fybFo?list=RDeHiPI6fybFo',
    keywords: ['신나는', 'K팝', '아이돌', '운동할때'],
    desc: '신나는 디스코팝 분위기의 BTS 영어 싱글. 어디서든 기분 업!',
    likes: 512, views: 3200, createdAt: '2024-01-10'
  },
  {
    id: 'm002', type: 'music', title: 'Playlist', artist: 'SEORI',
    image: 'https://i.scdn.co/image/ab67616d0000b273f6b4c8c0a4d2df26b8e5e0a3',
    link: 'https://www.youtube.com/watch?v=eTocM4jE7I4',
    keywords: ['몽환적인', '감성적인', 'K팝', '새벽감성', '집중용'],
    desc: '새벽 감성에 딱 맞는 몽환적인 R&B. 귀에 녹아드는 목소리.',
    likes: 387, views: 2100, createdAt: '2024-02-14'
  },
  {
    id: 'm003', type: 'music', title: 'Night Drive Mix', artist: 'Various Artists',
    image: '',
    link: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    keywords: ['신나는', 'EDM', '팝송', '드라이브', '운동할때'],
    desc: '드라이브할 때 창문 열고 틀기 딱 좋은 EDM 믹스셋.',
    likes: 298, views: 1850, createdAt: '2024-03-01'
  },
  {
    id: 'm004', type: 'music', title: 'Lofi Study Chill', artist: 'ChillHop Music',
    image: '',
    link: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
    keywords: ['조용한', '집중용', '공부할때', '팝송'],
    desc: '공부나 작업할 때 방해 없이 집중력 높여주는 로파이 힙합.',
    likes: 445, views: 4100, createdAt: '2024-01-22'
  },
  {
    id: 'm005', type: 'music', title: 'Gurenge', artist: 'LiSA',
    image: 'https://i.ytimg.com/vi/x1FV6IrjZCY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCt_OSyDjx40OhJzduQEWoWwGAewg',
    link: 'https://youtu.be/x1FV6IrjZCY?list=RDx1FV6IrjZCY',
    keywords: ['신나는', '긴장감있는', '애니송', 'J팝'],
    desc: '귀멸의 칼날 OP. 처음부터 끝까지 긴장감과 열정 폭발.',
    likes: 634, views: 5600, createdAt: '2023-12-05'
  },
  {
    id: 'm006', type: 'music', title: 'Usseewa', artist: 'Ado',
    image: 'https://i.ytimg.com/vi/Qp3b-RXtz4w/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDeGYIeSyKr0zA5FpKbzz5Hu_r-Fw',
    link: 'https://youtu.be/Qp3b-RXtz4w?list=RDQp3b-RXtz4w',
    keywords: ['긴장감있는', '감성적인', 'J팝', '아이돌'],
    desc: '강렬하고 거친 보컬로 화제가 된 Ado의 대표곡.',
    likes: 711, views: 6800, createdAt: '2023-11-20'
  },
  {
    id: 'm007', type: 'music', title: 'Jazz in the Rain', artist: 'Various Artists',
    image: '',
    link: 'https://www.youtube.com/watch?v=WONwbIQzG0I',
    keywords: ['조용한', '재즈', '감성적인', '새벽감성', '공부할때'],
    desc: '빗소리와 함께 흐르는 재즈. 카페 감성이 물씬.',
    likes: 201, views: 980, createdAt: '2024-04-05'
  },
  {
    id: 'm008', type: 'music', title: 'Blinding Lights', artist: 'The Weeknd',
    image: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
    link: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
    keywords: ['신나는', '팝송', '드라이브', '운동할때'],
    desc: '80년대 신스웨이브 감성의 팝. 드라이브 플레이리스트 1순위.',
    likes: 889, views: 9100, createdAt: '2023-10-15'
  },
  {
    id: 'm009', type: 'music', title: 'STAY WITH ME', artist: '강남(with. 기안 84)',
    image: 'https://i.ytimg.com/vi/40v_N14OYc4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvP_732qtI8Z_kmxDbiOvQna7j3A',
    link: 'https://youtu.be/40v_N14OYc4?list=RD40v_N14OYc4',
    keywords: ['조용한', '발라드', 'J팝', '감성적인', '새벽감성'],
    desc: '평범한데 중독적인 감성 발라드.',
    likes: 352, views: 2700, createdAt: '2024-03-20'
  },
  {
    id: 'm010', type: 'music', title: 'Psycho', artist: 'Red Velvet',
    image: 'https://i.ytimg.com/vi/uR8Mrt1IpXg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeCZsyFiISjqvXgd8kjhRA-cEOWQ',
    link: 'https://www.youtube.com/watch?v=uR8Mrt1IpXg',
    keywords: ['신나는', '재밌는', 'K팝', '아이돌'],
    desc: '레드벨벳 특유의 아방가르드 팝. 중독성 폭발.',
    likes: 478, views: 4300, createdAt: '2023-12-28'
  },
  {
    id: 'm011', type: 'music', title: 'Classical Focus Mix', artist: 'Various Artists',
    image: 'https://i.ytimg.com/vi/lTRiuFIWV54/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDloH_6oIjW8_vayDs_sY5zfI2QNQ',
    link: 'https://youtu.be/lTRiuFIWV54',
    keywords: ['조용한', '클래식', '공부할때', '집중용'],
    desc: '집중력을 극한으로 끌어올리는 클래식 모음집.',
    likes: 167, views: 1200, createdAt: '2024-02-08'
  },
  {
    id: 'm012', type: 'music', title: 'TOMBOY', artist: '(여자)아이들',
    image: 'https://i.ytimg.com/vi/Jh4QFaPmdss/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA0coQ8pAvdYa_dQPVc9otj48c9nQ',
    link: 'https://youtu.be/Jh4QFaPmdss?list=RDJh4QFaPmdss',
    keywords: ['신나는', '재밌는', 'K팝', '아이돌', '락'],
    desc: '강렬한 록 사운드와 걸크러시 에너지.',
    likes: 556, views: 5100, createdAt: '2023-11-10'
  },

  /* ─── 게임 ─── */
  {
    id: 'g001', type: 'game', title: 'Hades', platform: 'PC / Switch / PS5',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/1145360/Hades/',
    keywords: ['로그라이크', '싱글플레이', '어려운', '스토리중심', '3인칭', '탑다운'],
    desc: '스파이라소프트의 걸작 로그라이크. 죽을수록 강해지는 쾌감과 탄탄한 스토리.',
    likes: 724, views: 6700, createdAt: '2023-09-15'
  },
  {
    id: 'g002', type: 'game', title: 'Overwatch 2', platform: 'PC / Console',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/2357570/Overwatch_2/',
    keywords: ['FPS', '멀티플레이', '경쟁', '협동', '1인칭', '긴장감있는'],
    desc: '블리자드의 팀 기반 FPS. 다양한 영웅으로 팀플레이를 즐겨보자.',
    likes: 412, views: 4800, createdAt: '2023-10-01'
  },
  {
    id: 'g003', type: 'game', title: 'Stardew Valley', platform: 'PC / Mobile / Console',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
    keywords: ['RPG', '싱글플레이', '힐링', '캐주얼', '탑다운'],
    desc: '혼자 만든 힐링 농장 시뮬레이션 RPG. 세상 모든 스트레스 해소.',
    likes: 865, views: 7200, createdAt: '2023-08-20'
  },
  {
    id: 'g004', type: 'game', title: 'ELDEN RING', platform: 'PC / PS5 / Xbox',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
    keywords: ['RPG', '싱글플레이', '어려운', '스토리중심', '긴장감있는', '3인칭'],
    desc: '프롬소프트웨어 × 조지 R.R. 마틴. 모든 죽음이 배움이 되는 오픈월드.',
    likes: 930, views: 9500, createdAt: '2023-07-05'
  },
  {
    id: 'g005', type: 'game', title: 'Lethal Company', platform: 'PC',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/1966720/Lethal_Company/',
    keywords: ['공포게임', '멀티플레이', '협동', '긴장감있는', '3인칭', '캐주얼'],
    desc: '친구들과 우주 고철을 수거하다 괴물을 만나는 공포 협동 게임.',
    likes: 678, views: 6300, createdAt: '2024-01-08'
  },
  {
    id: 'g006', type: 'game', title: 'Hollow Knight', platform: 'PC / Switch',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/367520/Hollow_Knight/',
    keywords: ['로그라이크', '싱글플레이', '어려운', '스토리중심', '긴장감있는', '횡스크롤'],
    desc: '아름다운 벌레 세계를 탐험하는 메트로이드바니아 걸작.',
    likes: 799, views: 7400, createdAt: '2023-09-30'
  },
  {
    id: 'g007', type: 'game', title: 'It Takes Two', platform: 'PC / Console',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/1426210/It_Takes_Two/',
    keywords: ['멀티플레이', '협동', '캐주얼', '스토리중심', '3인칭', '힐링'],
    desc: '2인 필수 협동 어드벤처. 연인이나 친구와 함께라면 필수.',
    likes: 701, views: 5900, createdAt: '2024-02-20'
  },
  {
    id: 'g008', type: 'game', title: 'League of Legends', platform: 'PC',
    image: 'https://i.namu.wiki/i/OKtqfoJ7O_fSttQ7GtltSV1kBgTFbky6LMp5KDBEBbzBOfLSEnNHfUed21eXE-uK_uZjItYLEfOGjdX_bMjGIHEJDr9PmlbSlfHQP7PWrrHErg3_qYxOo2tvt-p5kFYCeGRhLTC0g8H_iGaDDV8uzw.webp',
    link: 'https://www.leagueoflegends.com/ko-kr/',
    keywords: ['전략게임', '멀티플레이', '경쟁', '긴장감있는', '탑다운'],
    desc: '전 세계 가장 많이 플레이되는 전략 배틀 아레나.',
    likes: 885, views: 11000, createdAt: '2023-06-01'
  },
  {
    id: 'g009', type: 'game', title: 'Sekiro', platform: 'PC / PS5 / Xbox',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/',
    keywords: ['싱글플레이', '어려운', '긴장감있는', '스토리중심', '3인칭'],
    desc: '막혀도 막혀도 뚫어내는 쾌감. 세키로 특유의 검술 액션.',
    likes: 760, views: 8100, createdAt: '2023-08-10'
  },
  {
    id: 'g010', type: 'game', title: 'Minecraft', platform: 'PC / Mobile / Console',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/capsule_616x353.jpg',
    link: 'https://www.minecraft.net/ko-kr',
    keywords: ['싱글플레이', '멀티플레이', '협동', '힐링', '캐주얼', '1인칭'],
    desc: '만들고, 탐험하고, 생존하는 영원한 샌드박스 게임.',
    likes: 950, views: 13500, createdAt: '2023-05-01'
  },
  {
    id: 'g011', type: 'game', title: 'Celeste', platform: 'PC / Switch',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/504230/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/504230/Celeste/',
    keywords: ['싱글플레이', '어려운', '스토리중심', '횡스크롤'],
    desc: '어려운 플랫포머이지만 감동적인 스토리로 유명한 인디 게임.',
    likes: 631, views: 4900, createdAt: '2024-01-15'
  },
  {
    id: 'g012', type: 'game', title: 'Phasmophobia', platform: 'PC (VR 지원)',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/capsule_616x353.jpg',
    link: 'https://store.steampowered.com/app/739630/Phasmophobia/',
    keywords: ['공포게임', '멀티플레이', '협동', '긴장감있는', '1인칭'],
    desc: '4인 협동 귀신 조사 공포게임. 친구들과 비명 지르기 최강.',
    likes: 589, views: 5700, createdAt: '2024-03-12'
  }
];

/* 상태 */

let selectedKeywords = new Set();
let rouletteKeywords = new Set();
let currentSearchResults = [];
let currentSort = 'match';
let currentType = 'all';
let currentLobbyTab = 'music';
let currentLobbySort = 'likes';
let currentMyType = 'liked';
let currentMySort = 'likes';
let rouletteMode = 'music';
let rouletteSpinning = false;
let likedItems = JSON.parse(localStorage.getItem('vf_liked') || '[]');
let bookmarkedItems = JSON.parse(localStorage.getItem('vf_bookmarked') || '[]');

/* 배경 파티클 캔버스 */

(function initBgCanvas() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * (W || 1200),
      y: Math.random() * (H || 800),
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      color: ['#b44fff','#00d4ff','#ff4fa0','#00ffb3'][Math.floor(Math.random()*4)]
    };
  }

  function init() {
    resize();
    particles = Array.from({length: 120}, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  init();
  draw();
})();

/* 페이지 네비게이션 */

function goPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelector(`[data-page="${page}"]`)?.classList.add('active');

  if (page === 'lobby') renderLobby();
  if (page === 'mylist') renderMyList();
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => goPage(btn.dataset.page));
});

/* 유틸 */

function saveLikes() { localStorage.setItem('vf_liked', JSON.stringify(likedItems)); }
function saveBookmarks() { localStorage.setItem('vf_bookmarked', JSON.stringify(bookmarkedItems)); }

function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function formatNum(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (diff === 0) return '오늘';
  if (diff < 7) return diff + '일 전';
  if (diff < 30) return Math.floor(diff/7) + '주 전';
  if (diff < 365) return Math.floor(diff/30) + '달 전';
  return Math.floor(diff/365) + '년 전';
}

/* 카드 렌더링 */

function buildCard(item, matchedKws = []) {
  const isLiked = likedItems.includes(item.id);
  const isBookmarked = bookmarkedItems.includes(item.id);
  const matchCount = matchedKws.filter(k => item.keywords.includes(k)).length;
  const sub = item.type === 'music' ? (item.artist || '') : (item.platform || '');

  const thumbHtml = item.image
    ? `<img class="card-thumb" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
       <div class="card-thumb-placeholder" style="display:none;">${item.type === 'music' ? '🎵' : '🎮'}</div>`
    : `<div class="card-thumb-placeholder">${item.type === 'music' ? '🎵' : '🎮'}</div>`;

  const kwHtml = item.keywords.slice(0, 4).map(k =>
    `<span class="card-kw ${matchedKws.includes(k) ? 'matched' : ''}">${k}</span>`
  ).join('');

  const matchBadge = matchCount > 0
    ? `<div class="match-badge">${matchCount}매치</div>`
    : '';

  return `
    <div class="content-card" onclick="openModal('${item.id}')">
      ${matchBadge}
      ${thumbHtml}
      <div class="card-body">
        <div>
          <span class="card-type-badge ${item.type === 'music' ? 'badge-music' : 'badge-game'}">
            ${item.type === 'music' ? '🎵 MUSIC' : '🎮 GAME'}
          </span>
        </div>
        <div class="card-title">${item.title}</div>
        ${sub ? `<div class="card-sub">${sub}</div>` : ''}
        <div class="card-keywords">${kwHtml}</div>
        <div class="card-footer">
          <div class="card-stats">
            <span class="card-stat">❤️ ${formatNum(item.likes)}</span>
            <span class="card-stat">👁 ${formatNum(item.views)}</span>
          </div>
          <div class="card-actions">
            <button class="btn-like ${isLiked ? 'active' : ''}" 
              onclick="event.stopPropagation(); toggleLike('${item.id}')" 
              title="좋아요">❤</button>
            <button class="btn-bookmark ${isBookmarked ? 'active' : ''}"
              onclick="event.stopPropagation(); toggleBookmark('${item.id}')"
              title="북마크">🔖</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* 좋아요 / 북마크 */

function toggleLike(id) {
  const item = contentDB.find(i => i.id === id);
  if (!item) return;
  if (likedItems.includes(id)) {
    likedItems = likedItems.filter(i => i !== id);
    item.likes--;
    showToast('좋아요를 취소했습니다');
  } else {
    likedItems.push(id);
    item.likes++;
    showToast('❤️ 좋아요!');
  }
  saveLikes();
  refreshCurrentView();
}

function toggleBookmark(id) {
  if (bookmarkedItems.includes(id)) {
    bookmarkedItems = bookmarkedItems.filter(i => i !== id);
    showToast('북마크를 해제했습니다');
  } else {
    bookmarkedItems.push(id);
    showToast('🔖 북마크에 추가했습니다!');
  }
  saveBookmarks();
  refreshCurrentView();
}

function refreshCurrentView() {
  const activePage = document.querySelector('.page.active')?.id;
  if (activePage === 'page-lobby') renderLobby();
  else if (activePage === 'page-search') renderSearchResults(currentSearchResults);
  else if (activePage === 'page-mylist') renderMyList();
}

/* 정렬 함수 */

function sortItems(items, sortType) {
  const sorted = [...items];
  if (sortType === 'likes') sorted.sort((a,b) => b.likes - a.likes);
  else if (sortType === 'views') sorted.sort((a,b) => b.views - a.views);
  else if (sortType === 'newest') sorted.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  else if (sortType === 'match') {
    sorted.sort((a, b) => {
      const aM = [...selectedKeywords].filter(k => a.keywords.includes(k)).length;
      const bM = [...selectedKeywords].filter(k => b.keywords.includes(k)).length;
      if (bM !== aM) return bM - aM;
      return b.likes - a.likes;
    });
  }
  return sorted;
}

/* 로비 렌더링 */

function renderLobby() {
  // 트렌드 키워드 (좋아요 상위 콘텐츠의 키워드를 모아서 빈도순)
  const kwCount = {};
  contentDB.forEach(item => {
    item.keywords.forEach(k => { kwCount[k] = (kwCount[k] || 0) + item.likes; });
  });
  const topKws = Object.entries(kwCount).sort((a,b) => b[1]-a[1]).slice(0, 14).map(e => e[0]);

  document.getElementById('trendKeywords').innerHTML = topKws.map(k =>
    `<span class="trend-kw" onclick="quickSearch('${k}')"># ${k}</span>`
  ).join('');

  // 로비 카드
  let items = contentDB.filter(i => i.type === currentLobbyTab);
  items = sortItems(items, currentLobbySort).slice(0, 8);
  document.getElementById('lobbyCards').innerHTML = items.map(i => buildCard(i)).join('');

  // 최근 추가
  const recent = sortItems(contentDB, 'newest').slice(0, 6);
  document.getElementById('recentCards').innerHTML = recent.map(i => buildCard(i)).join('');
}

function quickSearch(keyword) {
  selectedKeywords.add(keyword);
  goPage('search');
  updateKeywordUI();
  doSearch();
}

// 로비 탭 이벤트
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLobbyTab = btn.dataset.tab;
    renderLobby();
  });
});

// 로비 정렬 이벤트
const lobbySortBtns = document.querySelectorAll('#page-lobby .sort-btn');
lobbySortBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    lobbySortBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLobbySort = btn.dataset.sort;
    renderLobby();
  });
});

/* 키워드 시스템 */

function updateKeywordUI() {
  // 검색 패널 키워드 태그 상태 업데이트
  document.querySelectorAll('#page-search .kw-tag').forEach(tag => {
    tag.classList.toggle('selected', selectedKeywords.has(tag.dataset.value));
  });

  // 선택된 키워드 바
  const bar = document.getElementById('selectedKeywordsBar');
  const display = document.getElementById('selectedTagsDisplay');
  if (selectedKeywords.size > 0) {
    bar.style.display = 'flex';
    display.innerHTML = [...selectedKeywords].map(k =>
      `<span class="sel-tag">${k}</span>`
    ).join('');
  } else {
    bar.style.display = 'none';
  }
}

// 검색 페이지 키워드 태그 클릭
document.querySelectorAll('#page-search .kw-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const v = tag.dataset.value;
    if (selectedKeywords.has(v)) selectedKeywords.delete(v);
    else selectedKeywords.add(v);
    tag.classList.toggle('selected');
    updateKeywordUI();
    doSearch();
  });
});

function clearKeywords(type) {
  const prefixes = type === 'music' ? ['music-'] : ['game-'];
  document.querySelectorAll('#page-search .kw-tags').forEach(group => {
    const cat = group.dataset.category || '';
    if (prefixes.some(p => cat.startsWith(p))) {
      group.querySelectorAll('.kw-tag').forEach(tag => {
        selectedKeywords.delete(tag.dataset.value);
        tag.classList.remove('selected');
      });
    }
  });
  updateKeywordUI();
  doSearch();
}

function clearAllKeywords() {
  selectedKeywords.clear();
  document.querySelectorAll('#page-search .kw-tag').forEach(t => t.classList.remove('selected'));
  updateKeywordUI();
  doSearch();
}

/* 검색 */

function doSearch() {
  const titleQ = document.getElementById('titleSearchInput').value.trim().toLowerCase();
  const kws = [...selectedKeywords];

  let results = contentDB.filter(item => {
    const titleMatch = !titleQ || item.title.toLowerCase().includes(titleQ) ||
      (item.artist || '').toLowerCase().includes(titleQ);
    const kwMatch = kws.length === 0 || kws.some(k => item.keywords.includes(k));
    return titleMatch && kwMatch;
  });

  // 타입 필터
  if (currentType !== 'all') results = results.filter(i => i.type === currentType);

  currentSearchResults = results;
  renderSearchResults(results);
}

function renderSearchResults(results) {
  const kws = [...selectedKeywords];
  const sorted = sortItems(results, currentSort);

  document.getElementById('resultCount').textContent =
    `${sorted.length}개 결과${kws.length > 0 ? ` (키워드 ${kws.length}개 선택)` : ''}`;

  const container = document.getElementById('searchResults');
  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>검색 결과가 없습니다.<br/>다른 키워드를 선택해보세요</p>
      </div>`;
    return;
  }

  container.innerHTML = sorted.map(item => buildCard(item, kws)).join('');
}

// 검색 결과 정렬 버튼
document.querySelectorAll('#page-search .sort-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#page-search .sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSort = btn.dataset.sort;
    renderSearchResults(currentSearchResults);
  });
});

// 타입 필터 버튼
document.querySelectorAll('.type-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentType = btn.dataset.type;
    doSearch();
  });
});

// 타이틀 검색 엔터
document.getElementById('titleSearchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') doSearch();
});

/* 룰렛 */

function initRoulette() {
  // 룰렛 모드 버튼
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      rouletteMode = btn.dataset.mode;
      drawWheel();
    });
  });

  // 룰렛 키워드
  document.querySelectorAll('#rouletteKeywords .kw-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const v = tag.dataset.value;
      if (rouletteKeywords.has(v)) rouletteKeywords.delete(v);
      else rouletteKeywords.add(v);
      tag.classList.toggle('selected');
      drawWheel();
    });
  });

  drawWheel();
}

function getRoulettePool() {
  const kws = [...rouletteKeywords];
  let pool = contentDB.filter(item => {
    const typeOk = rouletteMode === 'mix' || item.type === rouletteMode;
    const kwOk = kws.length === 0 || kws.some(k => item.keywords.includes(k));
    return typeOk && kwOk;
  });
  if (pool.length === 0) pool = contentDB.filter(i => rouletteMode === 'mix' || i.type === rouletteMode);
  if (pool.length === 0) pool = contentDB;
  return pool.slice(0, 8); // 최대 8개
}

function drawWheel(rotation = 0) {
  const canvas = document.getElementById('wheelCanvas');
  const ctx = canvas.getContext('2d');
  const pool = getRoulettePool();
  const n = pool.length;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r = cx - 8;

  const colors = [
    '#1e0a3c','#0a2040','#1a0a30','#0a1a38',
    '#2a0a50','#0a3050','#1a1040','#0a2850'
  ];
  const glows = [
    '#b44fff','#00d4ff','#ff4fa0','#00ffb3',
    '#ffe600','#7b2fff','#ff6b35','#00d4ff'
  ];

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < n; i++) {
    const start = rotation + (i / n) * Math.PI * 2 - Math.PI / 2;
    const end = rotation + ((i + 1) / n) * Math.PI * 2 - Math.PI / 2;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.strokeStyle = glows[i % glows.length];
    ctx.lineWidth = 2;
    ctx.stroke();

    // 텍스트
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((start + end) / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#e8e8ff';
    ctx.font = `bold ${Math.min(13, 120 / n)}px 'Noto Sans KR', sans-serif`;
    const label = pool[i].title.length > 8 ? pool[i].title.slice(0, 8) + '…' : pool[i].title;
    ctx.fillText(label, r - 10, 4);
    ctx.restore();
  }

  // 중심 원
  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, Math.PI * 2);
  ctx.fillStyle = '#050510';
  ctx.fill();
  ctx.strokeStyle = '#b44fff';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = '#b44fff';
  ctx.font = 'bold 14px Orbitron';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('◈', cx, cy);
}

function spinRoulette() {
  if (rouletteSpinning) return;
  const pool = getRoulettePool();
  if (pool.length === 0) { showToast('추천할 콘텐츠가 없습니다', 'error'); return; }

  rouletteSpinning = true;
  document.getElementById('spinBtn').disabled = true;
  document.getElementById('rouletteResult').style.display = 'none';

  const winnerIdx = Math.floor(Math.random() * pool.length);
  const winner = pool[winnerIdx];
  const n = pool.length;

  // 당첨 섹터가 포인터(위쪽)에 오도록 각도 계산
  const sectorAngle = (Math.PI * 2) / n;
  const targetAngle = -(winnerIdx * sectorAngle) - sectorAngle / 2;
  const spins = (Math.PI * 2) * (6 + Math.random() * 4);
  const finalAngle = targetAngle + spins;

  const duration = 4000 + Math.random() * 1500;
  const startTime = performance.now();
  let startAngle = 0;

  function ease(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate(now) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const currentAngle = startAngle + (finalAngle - startAngle) * ease(t);
    drawWheel(currentAngle);

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      rouletteSpinning = false;
      document.getElementById('spinBtn').disabled = false;
      showRouletteResult(winner);
    }
  }

  requestAnimationFrame(animate);
}

function showRouletteResult(item) {
  const sub = item.type === 'music'
    ? `🎵 음악 · ${item.artist || ''}`
    : `🎮 게임 · ${item.platform || ''}`;

  const resultEl = document.getElementById('rouletteResult');
  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div style="font-size:0.7rem;color:var(--neon-green);font-family:'Space Mono',monospace;letter-spacing:0.1em;margin-bottom:0.5rem;">✦ 당신의 선택 ✦</div>
    <div class="result-title">${item.title}</div>
    <div class="result-sub" style="margin-bottom:0.75rem;">${sub}</div>
    <div style="display:flex;flex-wrap:wrap;gap:0.3rem;justify-content:center;margin-bottom:0.75rem;">
      ${item.keywords.map(k => `<span class="card-kw">${k}</span>`).join('')}
    </div>
    <button class="btn-primary" style="font-size:0.8rem;padding:0.5rem 1.2rem;" onclick="openModal('${item.id}')">자세히 보기</button>
  `;

  // 화면 흔들림 효과
  document.getElementById('rouletteResult').animate([
    { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' },
    { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' },
    { transform: 'translateX(0)' }
  ], { duration: 400, easing: 'ease-out' });

  showToast(`🎉 ${item.title} 당첨!`);
}

/* 콘텐츠 등록 */

// 등록 탭 전환
document.querySelectorAll('.reg-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.reg-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.regtype;
    document.getElementById('musicForm').style.display = type === 'music' ? 'block' : 'none';
    document.getElementById('gameForm').style.display = type === 'game' ? 'block' : 'none';
  });
});

// 등록 폼 키워드 클릭
document.querySelectorAll('.form-kw .kw-tag').forEach(tag => {
  tag.addEventListener('click', () => tag.classList.toggle('selected'));
});

function registerContent(e, type) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  // 선택된 키워드 모으기
  const keywords = [];
  form.querySelectorAll('.form-kw .kw-tag.selected').forEach(t => keywords.push(t.dataset.value));

  const newItem = {
    id: type[0] + Date.now(),
    type,
    title: data.get('title'),
    image: data.get('image') || '',
    link: data.get('link') || '',
    keywords,
    desc: data.get('desc') || '',
    likes: 0,
    views: 0,
    createdAt: new Date().toISOString().slice(0, 10)
  };

  if (type === 'music') {
    newItem.artist = data.get('artist');
  } else {
    newItem.platform = data.get('platform') || '';
  }

  contentDB.unshift(newItem);
  form.reset();
  form.querySelectorAll('.kw-tag').forEach(t => t.classList.remove('selected'));
  showToast(`✅ "${newItem.title}" 등록 완료!`);
  goPage('lobby');
}

/* 내 목록 */

function renderMyList() {
  let items;
  if (currentMyType === 'liked') items = contentDB.filter(i => likedItems.includes(i.id));
  else items = contentDB.filter(i => bookmarkedItems.includes(i.id));

  items = sortItems(items, currentMySort);

  const container = document.getElementById('mylistCards');
  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${currentMyType === 'liked' ? '❤️' : '🔖'}</div>
        <p>${currentMyType === 'liked' ? '좋아요한 콘텐츠가 없습니다' : '북마크한 콘텐츠가 없습니다'}</p>
      </div>`;
    return;
  }
  container.innerHTML = items.map(i => buildCard(i)).join('');
}

document.querySelectorAll('.mylist-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mylist-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMyType = btn.dataset.mytype;
    renderMyList();
  });
});

const mylistSortBtns = document.querySelectorAll('#page-mylist .sort-btn');
mylistSortBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    mylistSortBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMySort = btn.dataset.sort;
    renderMyList();
  });
});

/* 상세 모달 */

function openModal(id) {
  const item = contentDB.find(i => i.id === id);
  if (!item) return;

  // 조회수 증가
  item.views++;

  const isLiked = likedItems.includes(id);
  const isBookmarked = bookmarkedItems.includes(id);
  const sub = item.type === 'music' ? item.artist : item.platform;

  document.getElementById('modalContent').innerHTML = `
    <span class="modal-type-badge ${item.type === 'music' ? 'badge-music' : 'badge-game'}">
      ${item.type === 'music' ? '🎵 MUSIC' : '🎮 GAME'}
    </span>
    <div class="modal-title">${item.title}</div>
    ${sub ? `<div class="modal-sub">${sub}</div>` : ''}
    ${item.image ? `<img src="${item.image}" alt="${item.title}" style="width:100%;border-radius:8px;margin:0.75rem 0;object-fit:cover;" onerror="this.style.display='none'">` : ''}
    ${item.desc ? `<div class="modal-desc">${item.desc}</div>` : ''}
    <div class="modal-keywords">${item.keywords.map(k => `<span class="modal-kw">${k}</span>`).join('')}</div>
    <div class="modal-stats">
      <span class="modal-stat">❤️ ${formatNum(item.likes)}</span>
      <span class="modal-stat">👁 ${formatNum(item.views)}</span>
      <span class="modal-stat">📅 ${timeAgo(item.createdAt)}</span>
    </div>
    <div class="modal-actions">
      <button class="btn-like ${isLiked ? 'active' : ''}" 
        style="width:auto;padding:0.55rem 1.2rem;font-size:0.85rem;"
        onclick="toggleLike('${id}');updateModalLikeBtn('${id}')">
        ❤️ ${isLiked ? '좋아요 취소' : '좋아요'}
      </button>
      <button class="btn-bookmark ${isBookmarked ? 'active' : ''}"
        style="width:auto;padding:0.55rem 1.2rem;font-size:0.85rem;"
        onclick="toggleBookmark('${id}');updateModalBookmarkBtn('${id}')">
        🔖 ${isBookmarked ? '북마크 해제' : '북마크'}
      </button>
      ${item.link ? `<a class="modal-link" href="${item.link}" target="_blank" rel="noopener">
        ${item.type === 'music' ? '▶ 유튜브로 보기' : '🎮 스팀/공식 링크'}
      </a>` : ''}
    </div>
  `;

  document.getElementById('detailModal').style.display = 'flex';
}

function updateModalLikeBtn(id) {
  const btn = document.querySelector('#modalContent .btn-like');
  if (!btn) return;
  const isLiked = likedItems.includes(id);
  btn.className = `btn-like ${isLiked ? 'active' : ''}`;
  btn.style.cssText = 'width:auto;padding:0.55rem 1.2rem;font-size:0.85rem;';
  btn.innerHTML = `❤️ ${isLiked ? '좋아요 취소' : '좋아요'}`;
}

function updateModalBookmarkBtn(id) {
  const btn = document.querySelector('#modalContent .btn-bookmark');
  if (!btn) return;
  const isBookmarked = bookmarkedItems.includes(id);
  btn.className = `btn-bookmark ${isBookmarked ? 'active' : ''}`;
  btn.style.cssText = 'width:auto;padding:0.55rem 1.2rem;font-size:0.85rem;';
  btn.innerHTML = `🔖 ${isBookmarked ? '북마크 해제' : '북마크'}`;
}

function closeModal() {
  document.getElementById('detailModal').style.display = 'none';
  refreshCurrentView();
}

// 모달 외부 클릭 닫기
document.getElementById('detailModal').addEventListener('click', e => {
  if (e.target === document.getElementById('detailModal')) closeModal();
});

// ESC 키 닫기
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* 초기화 */

document.addEventListener('DOMContentLoaded', () => {
  renderLobby();
  initRoulette();
});

// DOMContentLoaded가 이미 발생했을 경우 대비
if (document.readyState !== 'loading') {
  renderLobby();
  initRoulette();
}