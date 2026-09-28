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
