const channels = [
  { name: 'BBC One', code: 'BBC', country: 'United Kingdom', region: 'Europe', type: 'Free-to-air', genre: 'News · Drama', colors: ['#27345b', '#fff'] },
  { name: 'ITV1', code: 'ITV', country: 'United Kingdom', region: 'Europe', type: 'Free-to-air', genre: 'Entertainment · Drama', colors: ['#43326a', '#f7dcff'] },
  { name: 'Sky Atlantic', code: 'SKY', country: 'United Kingdom', region: 'Europe', type: 'Pay TV', genre: 'Drama · Series', colors: ['#25314a', '#b9d9ff'] },
  { name: 'France 24', code: 'F24', country: 'France', region: 'Europe', type: 'Free-to-air', genre: 'International news', colors: ['#243752', '#a9d8ff'] },
  { name: 'Canal+', code: 'C+', country: 'France', region: 'Europe', type: 'Pay TV', genre: 'Movies · Sport', colors: ['#253a36', '#c6f6da'] },
  { name: 'ZDF', code: 'ZDF', country: 'Germany', region: 'Europe', type: 'Free-to-air', genre: 'News · Entertainment', colors: ['#29375f', '#c3ceff'] },
  { name: 'RAI 1', code: 'RAI', country: 'Italy', region: 'Europe', type: 'Free-to-air', genre: 'Culture · Entertainment', colors: ['#28434b', '#c5f1e1'] },
  { name: 'RTÉ One', code: 'RTÉ', country: 'Ireland', region: 'Europe', type: 'Free-to-air', genre: 'News · Drama', colors: ['#24404a', '#bceaff'] },
  { name: 'CNN International', code: 'CNN', country: 'United States', region: 'Americas', type: 'Pay TV', genre: 'International news', colors: ['#512e3a', '#ffc3d1'] },
  { name: 'PBS', code: 'PBS', country: 'United States', region: 'Americas', type: 'Free-to-air', genre: 'Documentary · Culture', colors: ['#263d5c', '#b8d5ff'] },
  { name: 'HBO', code: 'HBO', country: 'United States', region: 'Americas', type: 'Pay TV', genre: 'Drama · Movies', colors: ['#343454', '#d1c4ff'] },
  { name: 'Telemundo', code: 'TEL', country: 'United States', region: 'Americas', type: 'Free-to-air', genre: 'Spanish-language · Drama', colors: ['#4b3432', '#ffd2a8'] },
  { name: 'TV Globo', code: 'GLO', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'News · Entertainment', colors: ['#30413a', '#c5f6d4'] },
  { name: 'SBT', code: 'SBT', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'Entertainment · News', colors: ['#354c7a', '#d2e3ff'] },
  { name: 'Record', code: 'REC', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'News · Entertainment', colors: ['#4d3434', '#ffd1c7'] },
  { name: 'Band', code: 'BAND', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'News · Sport', colors: ['#343b52', '#c9d5ff'] },
  { name: 'RedeTV!', code: 'RTV', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'Entertainment · News', colors: ['#3d3156', '#e0d0ff'] },
  { name: 'TV Brasil', code: 'TVB', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'Public · Culture', colors: ['#274a47', '#c3f0e8'] },
  { name: 'TV Cultura', code: 'CULT', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'Culture · Education', colors: ['#344b56', '#c6eaff'] },
  { name: 'GloboNews', code: 'GN', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'News', colors: ['#44394f', '#e0ceff'] },
  { name: 'CNN Brasil', code: 'CNN', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'News', colors: ['#512e3a', '#ffc3d1'] },
  { name: 'Canal Futura', code: 'FUT', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'Education · Culture', colors: ['#315044', '#c4f0d5'] },
  { name: 'TV Senado', code: 'SEN', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'Public affairs', colors: ['#293e55', '#c5ddf4'] },
  { name: 'TV Câmara', code: 'CAM', country: 'Brazil', region: 'Americas', type: 'Free-to-air', genre: 'Public affairs', colors: ['#304a42', '#c7edda'] },
  { name: 'SporTV', code: 'SPT', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Sport', colors: ['#394b35', '#d1f2b9'] },
  { name: 'Multishow', code: 'MUL', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Music · Entertainment', colors: ['#533653', '#f2c8ed'] },
  { name: 'GNT', code: 'GNT', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Lifestyle · Entertainment', colors: ['#374b55', '#c8e9f2'] },
  { name: 'ESPN Brasil', code: 'ESPN', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Sport', colors: ['#57343c', '#ffc7d0'] },
  { name: 'ESPN 2', code: 'E2', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Sport', colors: ['#57343c', '#ffc7d0'] },
  { name: 'ESPN 3', code: 'E3', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Sport', colors: ['#57343c', '#ffc7d0'] },
  { name: 'ESPN 4', code: 'E4', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Sport', colors: ['#57343c', '#ffc7d0'] },
  { name: 'Premiere', code: 'PRE', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Football · Sport', colors: ['#34443c', '#d0f2c7'] },
  { name: 'Combate', code: 'COM', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Combat sports', colors: ['#4d3434', '#ffd1c7'] },
  { name: 'TNT', code: 'TNT', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Movies · Series', colors: ['#493a36', '#f4d5c7'] },
  { name: 'Warner Channel', code: 'WARN', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Series · Entertainment', colors: ['#30445d', '#c7ddf6'] },
  { name: 'Sony Channel', code: 'SONY', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Series · Entertainment', colors: ['#354353', '#cbdff3'] },
  { name: 'AXN', code: 'AXN', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Action · Series', colors: ['#4b343b', '#f1c9d1'] },
  { name: 'Universal TV', code: 'UNI', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Series · Drama', colors: ['#344657', '#c7e1f3'] },
  { name: 'Paramount Network', code: 'PAR', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Movies · Series', colors: ['#354268', '#d0d8ff'] },
  { name: 'Cinemax', code: 'CIN', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Movies', colors: ['#50383a', '#ffd1c7'] },
  { name: 'Telecine Premium', code: 'TP', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Movies', colors: ['#493a50', '#e4d2ff'] },
  { name: 'Telecine Action', code: 'TA', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Action · Movies', colors: ['#503737', '#ffd1c7'] },
  { name: 'Telecine Touch', code: 'TT', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Drama · Movies', colors: ['#4e3b52', '#eed3ff'] },
  { name: 'Telecine Fun', code: 'TF', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Comedy · Movies', colors: ['#514432', '#ffe2b8'] },
  { name: 'Telecine Cult', code: 'TC', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Classic · Art-house movies', colors: ['#35483c', '#c9efd5'] },
  { name: 'HBO', code: 'HBO', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Drama · Movies', colors: ['#343454', '#d1c4ff'] },
  { name: 'HBO 2', code: 'H2', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Movies · Series', colors: ['#343454', '#d1c4ff'] },
  { name: 'HBO Family', code: 'HBF', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Family · Movies', colors: ['#344b56', '#c6eaff'] },
  { name: 'HBO Plus', code: 'HBP', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Movies · Series', colors: ['#393955', '#d1c4ff'] },
  { name: 'Discovery Home & Health', code: 'DHH', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Lifestyle · Health', colors: ['#374b55', '#c8e9f2'] },
  { name: 'Animal Planet', code: 'AP', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Animals · Nature', colors: ['#344a3d', '#c9eed3'] },
  { name: 'TLC', code: 'TLC', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Lifestyle · Reality', colors: ['#433655', '#e1d0ff'] },
  { name: 'History', code: 'HIST', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'History · Documentary', colors: ['#524232', '#f0d6b5'] },
  { name: 'National Geographic', code: 'NG', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Documentary · Science', colors: ['#33465c', '#c4dfff'] },
  { name: 'Nat Geo Wild', code: 'NGW', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Wildlife · Nature', colors: ['#344a3d', '#c9eed3'] },
  { name: 'Cartoon Network', code: 'CN', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Animation · Kids', colors: ['#343a50', '#d4dcff'] },
  { name: 'Nickelodeon', code: 'NICK', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Kids · Animation', colors: ['#514432', '#ffe2b8'] },
  { name: 'Disney Channel', code: 'DIS', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Kids · Family', colors: ['#354268', '#d0d8ff'] },
  { name: 'Gloob', code: 'GLOO', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Kids · Animation', colors: ['#493a50', '#e4d2ff'] },
  { name: 'Discovery Channel', code: 'DISC', country: 'Brazil', region: 'Americas', type: 'Pay TV', genre: 'Documentary · Science', colors: ['#33465c', '#c4dfff'] }
];

const grid = document.getElementById('channelGrid');
const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const filterButtons = document.querySelectorAll('.filter-chip');
const directoryTabs = document.querySelectorAll('.directory-tab');
let activeType = 'all';

function activateTab(tab) {
  directoryTabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.dataset.panel).hidden = !selected;
  });
}

directoryTabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const nextIndex = (Array.from(directoryTabs).indexOf(tab) + (event.key === 'ArrowRight' ? 1 : directoryTabs.length - 1)) % directoryTabs.length;
      const nextTab = directoryTabs[nextIndex];
      activateTab(nextTab);
      nextTab.focus();
    }
  });
});

const playerForm = document.getElementById('playerForm');
const videoUrl = document.getElementById('videoUrl');
const openVideoLink = document.getElementById('openVideoLink');
const videoPlayer = document.getElementById('videoPlayer');
const playerStatus = document.getElementById('playerStatus');
let currentVideoFormat = 'video';

function getVideoFormat(url) {
  const path = url.pathname.toLowerCase();
  if (path.endsWith('.m3u8')) return 'HLS (.m3u8)';
  if (path.endsWith('.ts')) return 'MPEG-TS (.ts)';
  return 'video';
}

function getFormatGuidance() {
  if (currentVideoFormat === 'HLS (.m3u8)') {
    return ' HLS playback depends on native browser support (commonly available in Safari).';
  }
  if (currentVideoFormat === 'MPEG-TS (.ts)') {
    return ' Direct TS playback is not supported by many browsers; a compatible browser and direct stream URL are required.';
  }
  return '';
}

openVideoLink.addEventListener('click', () => {
  let url;
  try {
    url = new URL(videoUrl.value.trim());
  } catch {
    playerStatus.textContent = 'Enter a valid HTTP or HTTPS video URL.';
    return;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    playerStatus.textContent = 'Only HTTP and HTTPS video links are supported.';
    return;
  }

  window.open(url.href, '_blank', 'noopener,noreferrer');
});

playerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let url;
  try {
    url = new URL(videoUrl.value.trim());
  } catch {
    playerStatus.textContent = 'Enter a valid HTTP or HTTPS video URL.';
    return;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    playerStatus.textContent = 'Only HTTP and HTTPS video links are supported.';
    return;
  }

  currentVideoFormat = getVideoFormat(url);
  videoPlayer.src = url.href;
  videoPlayer.load();
  playerStatus.textContent = `Loading ${currentVideoFormat}…${getFormatGuidance()} Standard HTTP redirects are followed automatically; the final response must be a playable stream and allowed by browser security settings.`;
  videoPlayer.play().catch(() => {
    playerStatus.textContent = `Playback did not start automatically.${getFormatGuidance()} Press play or check the direct URL and stream access settings.`;
  });
});

videoPlayer.addEventListener('error', () => {
  playerStatus.textContent = `Could not play this ${currentVideoFormat}. The link may be unavailable, unsupported by this browser, or blocked by browser security settings.${getFormatGuidance()}`;
});

function renderChannels() {
  const query = searchInput.value.trim().toLowerCase();
  const region = regionFilter.value;
  const matchingChannels = channels.filter((channel) => {
    const searchable = `${channel.name} ${channel.country} ${channel.region} ${channel.genre} ${channel.type}`.toLowerCase();
    return searchable.includes(query)
      && (region === 'all' || channel.region === region)
      && (activeType === 'all' || channel.type === activeType);
  });

  grid.innerHTML = matchingChannels.map((channel) => `
    <article class="channel-card">
      <div class="card-top">
        <div class="channel-identity">
          <span class="channel-logo" style="--logo-bg:${channel.colors[0]};--logo-color:${channel.colors[1]}" aria-hidden="true">${channel.code}</span>
          <div>
            <h3 class="channel-name">${channel.name}</h3>
            <p class="channel-country">${channel.country}</p>
          </div>
        </div>
        <span class="channel-type${channel.type === 'Pay TV' ? ' pay' : ''}">${channel.type}</span>
      </div>
      <div class="card-meta"><span>${channel.genre}</span><span class="card-region">${channel.region}</span></div>
    </article>
  `).join('');

  resultsCount.textContent = `${matchingChannels.length} channel${matchingChannels.length === 1 ? '' : 's'}`;
  emptyState.hidden = matchingChannels.length > 0;
  grid.hidden = matchingChannels.length === 0;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeType = button.dataset.type;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderChannels();
  });
});

searchInput.addEventListener('input', renderChannels);
regionFilter.addEventListener('change', renderChannels);
document.getElementById('allCount').textContent = channels.length;
document.getElementById('channelTotal').textContent = channels.length;
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
});

renderChannels();
