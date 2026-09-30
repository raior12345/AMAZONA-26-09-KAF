// ============================================================
//  앵무새 데이터 — 행사마다 이 파일만 고치면 됩니다.
//  새 아이 추가: 아래 BIRDS 배열에 { ... } 블록 하나를 복사해서 수정
//  분양 완료 표시: sold: true 로 바꾸기
// ============================================================

const EVENT = {
  title: "KAF 2026 · 아마조나 분양 앵무새",
  subtitle: "KAF에서 만나는 아마조나 앵무새",
  contactUrl: "https://m.site.naver.com/24nfQ", // 문의/매장 정보 링크
};

// 종(species)별 공통 정보
const SPECIES = {
  quaker: {
    ko: "퀘이커 앵무",
    en: "Quaker parrot",
    lifespan: "20~30년",
    size: "중형",
    noise: 55, // 0(조용함) ~ 100(시끄러움)
    feature:
      "퀘이커 앵무는 수명이 20~30년이며, 높은 지능과 뛰어난 언어 구사력, 강아지 같은 애교를 자랑하는 중형 앵무새입니다. 분변과 앵무새에게 악취가 나지 않습니다.",
    noiseNote:
      "개체마다 다르지만, 한 마리만 키우신다면 통상적인 주거환경에서 문제없이 사육할 수 있습니다.",
  },
  conure: {
    ko: "코뉴어 앵무",
    en: "Conure parrot",
    lifespan: "15~25년",
    size: "소형",
    noise: 62,
    feature:
      "평균 15~25년의 수명을 지닌 코뉴어는 화려한 색감과 강아지 같은 애교를 자랑하는 대표적인 소형 반려조입니다. 올바른 식단과 환경이 제공된다면 20년 이상 오랜 시간 함께할 수 있습니다.",
    noiseNote:
      "개체마다 다르지만, 한 마리만 키우신다면 통상적인 주거환경에서 문제없이 사육할 수 있습니다.",
  },
};

// 모프(색상)별 공통 정보 — color는 목록의 색깔 점 색상
const MORPHS = {
  green: {
    ko: "그린", en: "Green", color: "#5f9e3a",
    desc: "가장 직관적인 싱그러움으로 당신의 곁을 가장 든든하게 채워줄 싱그러운 활력입니다.",
  },
  blue: {
    ko: "블루", en: "Blue", color: "#4f7fa8",
    desc: "선명하고 청량한 파란색 날개와 밝은 은회색 가슴 깃털이 어우러져 볼수록 시원하고 세련된 매력을 발산합니다.",
  },
  cobalt: {
    ko: "코발트", en: "Cobalt", color: "#2c4a86",
    desc: "일반적인 밝은 블루보다 한 톤 더 깊게 가라앉은, 무게감 있고 진한 다크 블루(Cobalt) 색감을 띱니다.",
  },
  greenPallid: {
    ko: "그린팰리드", en: "Green Pallid", color: "#9cc94a",
    desc: "기존의 짙은 초록색에서 무거운 빛깔을 덜어내고, 따스한 햇살을 가득 머금은 듯 화사한 라임(Lime)빛 연두색을 띱니다.",
  },
  bluePallid: {
    ko: "블루팰리드", en: "Blue Pallid", color: "#8fb4d0",
    desc: "기존의 짙고 선명한 푸른빛에서 무거운 색감을 덜어내고, 부드러운 크림을 살짝 섞은 듯한 맑은 소라색(Powder Blue)을 띱니다.",
  },
  greenSnow: {
    ko: "그린스노우", en: "Green Snow", color: "#e8d64a",
    desc: "오파린과 팰리드의 유전자 교차로 루티노의 옐로우와 팰리드의 색감이 그라데이션으로 아름답게 펼쳐진 특징을 띱니다.",
  },
  greenSnowLutino: {
    ko: "그린스노우 / 루티노", en: "Green Snow / Lutino", color: "#f2e37e",
    desc: "오파린과 팰리드의 유전자 교차로 루티노의 옐로우와 팰리드의 색감이 그라데이션으로 아름답게 펼쳐진 특징을 띱니다.",
  },
  blueSnow: {
    ko: "블루스노우", en: "Blue Snow", color: "#cfe2ee",
    desc: "오파린과 팰리드의 유전자 교차로 알비노의 화이트와 팰리드의 아이스블루 색감이 그라데이션으로 아름답게 펼쳐진 특징을 띱니다.",
  },
  creamino: {
    ko: "크리미노", en: "Creamino", color: "#efe3bd",
    desc: "아쿠아 특유의 맑은 청록빛 위로 따뜻한 크림색 필터가 부드럽게 내려앉은, 극강의 파스텔 크림(Pastel Cream) 색감입니다.",
  },
  albino: {
    ko: "알비노", en: "Albino", color: "#fbfbf6",
    desc: "멜라닌과 시타코풀빈 색소가 완전히 빠져나가, 완벽하고 깨끗한 순백(Pure White)의 깃털을 입은 신비로운 변이입니다.",
  },
  redPineapple: {
    ko: "레드파인애플", en: "Red Pineapple", color: "#c8323c",
    desc: "레드파인애플 코뉴어의 색감은 마치 잘 익은 열대 과일의 과육처럼 한층 더 짙고 풍부하게 차오른 진홍색(Deep Crimson)을 띱니다.",
  },
};

// 바이러스(PDD/PBFD/앵무병) 검사 성적서 — 경기도(북부) 동물위생시험소
const CERTS = {
  "260520": { date: "2026.05.20", img: "images/cert-260520.jpg" },
  "260602": { date: "2026.06.02", img: "images/cert-260602.jpg" },
  "260702": { date: "2026.07.02", img: "images/cert-260702.jpg" },
  "260720": { date: "2026.07.20", img: "images/cert-260720.jpg" },
  "260723": { date: "2026.07.23", img: "images/cert-260723.jpg" },
  "260901": { date: "2026.09.01", img: "images/cert-260901.jpg" },
};

const XRAY_HOSPITAL = { name: "나음 동물 의료센터", address: "서울 강서구 강서로 206" };
const XRAY_OPINION =
  "검진상 이상은 없습니다. 심장 크기 및 폐 음영도, 기낭 음영도 매우 양호합니다. 뼈 음영도는 양호하며, 골격상태도 양호합니다. 소화기관상 선위의 확장은 보이지 않고, 간 및 비장 크기도 양호합니다.";

const xr = (id, n) => Array.from({ length: n }, (_, i) => `images/${id}-xray${i + 1}.jpg`);

const BIRDS = [
  // ---------- 퀘이커 ----------
  { id: "AMZN2653", no: "AMZN 26 53", species: "quaker", morph: "green", hatch: "2026-06-04", sex: "M",
    dad: "Aqua Pallid", mom: "Green Opaline", price: 600000, photo: "images/AMZN2653.jpg", cert: "260702", xray: xr("AMZN2653", 2) },
  { id: "AMZN2684", no: "AMZN 26 84", species: "quaker", morph: "blue", hatch: "2026-07-20", sex: "F",
    dad: "Blue/Lutino", mom: "Blue", price: 700000, photo: "images/AMZN2684.jpg", cert: "260901", xray: xr("AMZN2684", 2) },
  { id: "AMZN2691", no: "AMZN 26 91", species: "quaker", morph: "blue", hatch: "2026-07-25", sex: "F",
    dad: "Blue/Lutino", mom: "Blue", price: 700000, photo: "images/AMZN2691.jpg", cert: "260901", xray: xr("AMZN2691", 2) },
  { id: "AMZN2672", no: "AMZN 26 72", species: "quaker", morph: "cobalt", hatch: "2026-06-15", sex: "F",
    dad: "Cobalt / Snow", mom: "Aqua Snow", price: 1000000, photo: "images/AMZN2672.jpg", cert: "260720", xray: xr("AMZN2672", 2) },
  { id: "AMZN2692", no: "AMZN 26 92", species: "quaker", morph: "greenPallid", hatch: "2026-07-28", sex: "F",
    dad: "Aqua Pallid", mom: "Green Opaline", price: 900000, photo: "images/AMZN2692.jpg", cert: "260901", xray: xr("AMZN2692", 2) },
  { id: "AMZN26X3", no: "AMZN 26 X3", species: "quaker", morph: "greenPallid", hatch: "2026-08-01", sex: "F",
    dad: "Aqua Pallid", mom: "Green Opaline", price: 900000, photo: "images/AMZN26X3.jpg", cert: "260901", xray: xr("AMZN26X3", 2) },
  { id: "AMZN26X2", no: "AMZN 26 X2", species: "quaker", morph: "bluePallid", hatch: "2026-07-30", sex: "F",
    dad: "Aqua Pallid", mom: "Green Opaline", price: 1000000, photo: "images/AMZN26X2.jpg", cert: "260901", xray: xr("AMZN26X2", 2) },
  { id: "AMZN2617", no: "AMZN 26 17", species: "quaker", morph: "greenSnow", hatch: "2026-05-01", sex: "M",
    dad: "Green Snow / Blue", mom: "Green Snow / Blue", price: 1200000, photo: "images/AMZN2617.jpg", cert: "260602", xray: xr("AMZN2617", 2) },
  { id: "AMZN2681", no: "AMZN 26 81", species: "quaker", morph: "greenSnow", hatch: "2026-06-27", sex: "M",
    dad: "Green Snow / Blue", mom: "Green Snow / Blue", price: 1200000, photo: "images/AMZN2681.jpg", cert: "260723", xray: xr("AMZN2681", 2) },
  { id: "AMZN2669", no: "AMZN 26 69", species: "quaker", morph: "greenSnowLutino", hatch: "2026-06-13", sex: "M",
    dad: "Green Pallidino", mom: "Green Snow", price: 1000000, photo: "images/AMZN2669.jpg", cert: "260720", xray: xr("AMZN2669", 2) },
  { id: "AMZN2682", no: "AMZN 26 82", species: "quaker", morph: "blueSnow", hatch: "2026-07-01", sex: "F",
    dad: "Blue Snow", mom: "Blue Snow", price: 1300000, photo: "images/AMZN2682.jpg", cert: "260901", xray: xr("AMZN2682", 2) },
  { id: "AMZN2607", no: "AMZN 26 07", species: "quaker", morph: "creamino", hatch: "2026-04-21", sex: "M",
    dad: "Aqua Pallidino", mom: "Creamino", price: 900000, photo: "images/AMZN2607.jpg", cert: "260520", xray: xr("AMZN2607", 1) },
  { id: "AMZN2677", no: "AMZN 26 77", species: "quaker", morph: "albino", hatch: "2026-06-24", sex: "F",
    dad: "Cobalt Snow / Lutino", mom: "Blue Snow", price: 1000000, photo: "images/AMZN2677.jpg", cert: "260723", xray: xr("AMZN2677", 2) },

  // ---------- 코뉴어 ----------
  { id: "AMZN2686", no: "AMZN 26 86", species: "conure", morph: "redPineapple", hatch: "2026-07-19", sex: "M",
    dad: "Moon Cheek", mom: "Red Pineapple", price: 250000, photo: "images/conure-red-pineapple.jpg", cert: "260901", xray: null },
  { id: "AMZN2687", no: "AMZN 26 87", species: "conure", morph: "redPineapple", hatch: "2026-07-21", sex: "M",
    dad: "Moon Cheek", mom: "Red Pineapple", price: 250000, photo: "images/conure-red-pineapple.jpg", cert: "260901", xray: null },
  { id: "AMZN2688", no: "AMZN 26 88", species: "conure", morph: "redPineapple", hatch: "2026-07-23", sex: "M",
    dad: "Moon Cheek", mom: "Red Pineapple", price: 250000, photo: "images/conure-red-pineapple.jpg", cert: "260901", xray: null },
  { id: "AMZN26X4", no: "AMZN 26 X4", species: "conure", morph: "redPineapple", hatch: "2026-07-25", sex: "M",
    dad: "Moon Cheek", mom: "Red Pineapple", price: 250000, photo: "images/conure-red-pineapple.jpg", cert: "260901", xray: null },
];

// ============================================================
//  아마조나 소개 (분양 혜택 · 브리딩센터 · 브리딩 철학)
//  출처: amazona.co.kr 앵무새 분양 페이지. 문구·사진을 바꾸려면 여기만 수정
// ============================================================
const IMG = "https://ecimg.cafe24img.com/pg1558b05363116017/amazona2023/web/awesome_img/";
const img = name => IMG + encodeURIComponent(name);

const LINKS = {
  consult: "https://naver.me/FmGri6UT",               // 분양 상담 신청 (네이버폼)
  kakao: "http://pf.kakao.com/_NtIxjG",                // 카카오 채널 문의
  store: "https://smartstore.naver.com/amazonastore",  // 아마조나 네이버 스토어
  instagram: "https://www.instagram.com/amazona_parrot/",
  youtube: "https://www.youtube.com/@amazona_parrot",
  site: "https://amazona.co.kr/",
  map: "https://map.naver.com/p/search/" + encodeURIComponent("경기도 가평군 청평면 말래골길 59"),
  csTel: "010-8200-3415",     // 고객센터 (평일 10시-18시)
  visitTel: "010-9175-6597",  // 방문 상담 예약
};

const INFO = {
  // 첫 화면 배너 (누르면 해당 탭으로 이동)
  banners: [
    { to: "benefits", title: "분양, 그 이후까지\n책임집니다", sub: "전용 멤버십과 연계 병원 무료 진료", photo: img("자사몰 이미지 1000px-6-분양혜택 800x600.png") },
    { to: "center", title: "국내 최대 규모의\n앵무새 브리딩센터", sub: "경기도 가평 · 5M 대형 비행 케이지", photo: img("자사몰 이미지 1000px-14-아마조나는 이런 곳이에요 1000x1000.png") },
    { to: "about", title: "건강한 개체는\n건강한 부모로부터", sub: "아마조나의 브리딩 철학", photo: img("자사몰 이미지 1000px-1-국내 최대 규모의 앵무새 브리딩센터 1000x1000.png") },
  ],

  benefits: {
    lead: "아마조나가 제공하는 프리미엄 서비스",
    items: [
      { title: "수의학적 검사", body: "PBFD · PDD · 성별검사 · X-RAY 완료, 건강검진 1회 무료 제공", photo: img("자사몰 이미지 1000px-5-분양혜택 800x600.png") },
      { title: "평생 케어 서비스", body: "분양 이후에도 아마조나와 함께하는 지속적인 케어 혜택", photo: img("자사몰 이미지 1000px-6-분양혜택 800x600.png") },
      { title: "브리딩 노트", body: "출생부터 분양까지 기록된 우리 아이의 성장 스토리", photo: img("자사몰 이미지 1000px-7-분양혜택 800x600.png") },
      { title: "앵무새용품 할인", body: "아마조나 네이버 스토어 전용 10% 할인 혜택", photo: img("자사몰 이미지 1000px-8-분양혜택 800x600.png") },
    ],
    included: ["건강검진서", "브리딩노트", "바이러스 검사지", "성별검사지", "X-RAY 검사지"],
    process: [
      { title: "네이버폼 작성", body: "원하시는 앵무새 종류와 간단한 정보를 남겨주시면 브리더가 순차적으로 상담 연락을 드립니다." },
      { title: "상담 및 개체 선택", body: "보호자의 환경과 라이프스타일, 원하는 성향을 함께 고려해 가장 잘 맞는 아이를 고릅니다." },
      { title: "계약 및 예약", body: "예약금 납부로 분양이 확정되고, 성장 과정을 사진과 영상으로 정기적으로 공유해드립니다." },
      { title: "분양 전 준비", body: "건강검진과 각종 검사·서류를 준비하고, 사육 방법과 주의사항을 체계적으로 안내합니다." },
      { title: "분양 및 사후 케어", body: "분양 당일 1:1 교육을 진행하고, 이후에도 카카오톡과 전화로 계속 상담해드립니다." },
    ],
  },

  center: {
    lead: "태어나는 순간부터 분양까지 모든 과정을 체계적으로 관리합니다.",
    photos: [
      { src: img("자사몰 이미지 1000px-14-아마조나는 이런 곳이에요 1000x1000.png"), alt: "아마조나 브리딩센터 외관" },
      { src: img("자사몰 이미지 1000px-15.png"), alt: "실내 정원형 비행장" },
      { src: img("자사몰 이미지 1000px-3-국내 최대 규모의 앵무새 브리딩센터 1000x1000.png"), alt: "대형 비행 케이지" },
      { src: img("자사몰 이미지 1000px-1-국내 최대 규모의 앵무새 브리딩센터 1000x1000.png"), alt: "브리더가 아기새를 돌보는 모습" },
      { src: img("자사몰 이미지 1000px-19-아마조나는 이런 곳이에요 1000x1000.png"), alt: "아마조나 카페 내부" },
    ],
    features: [
      { title: "5M 대형 비행 케이지", body: "부모새에게 단순한 사육이 아닌 '사는 환경'을 제공합니다. 넓은 공간에서 자유롭게 비행하며 실내외를 오갑니다.", icon: "bird" },
      { title: "부모새 프리미엄 영양과 환경", body: "엄선된 생식·영양제·사료를 급여하고, 자연 소재 장난감으로 본능을 해소하며 스트레스 없이 생활합니다.", icon: "leaf" },
      { title: "체중 관리와 브리딩 노트", body: "출생부터 분양까지 매일 체중을 재고, 성장 과정을 사진과 함께 기록해 육아일기로 전해드립니다.", icon: "notebook" },
      { title: "철저한 건강 검진 시스템", body: "연계 동물병원과 연구소를 통해 X-RAY, CT, 바이러스 검사, 성별 검사를 거쳐 건강이 확인된 아이만 분양합니다.", icon: "stethoscope" },
      { title: "연계 병원 건강 케어", body: "분양 후 연계 동물병원에서 분변 검사 1회를 무료로 받아 초기 건강 상태를 한 번 더 확인할 수 있습니다.", icon: "shield-check" },
    ],
    address: "경기도 가평군 청평면 말래골길 59",
    visitNote: "방문 상담은 미리 예약 후 방문해 주세요. 방문 시 아마조나 카페 이용 요금(1인 10,000원, 앵무새 1마리 5,000원)이 있습니다.",
  },

  about: {
    motto: "YOUR PARROT WILL BE HAPPY",
    mottoKo: "당신의 앵무새가 행복해질 그 순간까지, 아마조나는 언제나 노력하겠습니다.",
    story: [
      "아마조나는 건강하고 행복한 앵무새를 책임감 있게 분양하며, 평생을 함께할 소중한 인연을 이어갑니다.",
      "건강한 개체는 건강한 부모로부터 시작된다는 기준 아래, 부모새의 행복과 건강을 위한 환경을 최우선으로 관리합니다.",
    ],
    pillars: [
      { title: "분양, 그 이후까지 책임집니다", body: "아마조나 고객 전용 멤버십 운영과 연계 동물병원 무료 진료권", icon: "heart-straight" },
      { title: "성장 히스토리 투명 공개", body: "부화부터 보호자 인도까지 출생·건강·관리 기록을 전달합니다", icon: "notebook" },
      { title: "분양 전 의료 스크리닝", body: "PDD · PBFD · X-RAY · 성별검사 · 장애 유무 확인 · 사이테스 등록", icon: "stethoscope" },
    ],
    faq: [
      { q: "초보자도 앵무새를 키울 수 있나요?", a: "물론입니다. 분양 당일 먹이 급여 방법, 온도 관리, 행동 교육 등 초보자를 위한 1:1 교육을 진행하고, 분양 후에도 언제든 카카오톡이나 전화로 상담할 수 있습니다." },
      { q: "택배 분양도 가능한가요?", a: "앵무새의 안전과 스트레스를 줄이기 위해 택배 분양은 하지 않으며, 직접 방문 수령을 권장합니다." },
      { q: "분양 비용에는 무엇이 포함되나요?", a: "종류, 나이, 개체 상태에 따라 다르며 건강검진서, 브리딩노트, 바이러스 검사지, 성별검사지, X-RAY 검사지가 기본 포함됩니다." },
      { q: "용품은 어떻게 준비하나요?", a: "아마조나 네이버 스토어에서 10% 할인 혜택으로 구매하실 수 있도록 안내해드리고, 분양 당일 함께 준비해드립니다. 직접 준비해 오셔도 괜찮습니다." },
    ],
  },
};
