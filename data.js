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
  conure: {
    ko: "코뉴어 앵무",
    en: "Conure parrot",
    lifespan: "15~25년",
    size: "소형",
    noise: 62, // 0(조용함) ~ 100(시끄러움)
    feature:
      "평균 15~25년의 수명을 지닌 코뉴어는 화려한 색감과 강아지 같은 애교를 자랑하는 대표적인 소형 반려조입니다. 올바른 식단과 환경이 제공된다면 20년 이상 오랜 시간 함께할 수 있습니다.",
    noiseNote:
      "개체마다 다르지만, 한 마리만 키우신다면 통상적인 주거환경에서 문제없이 사육할 수 있습니다.",
  },
  quaker: {
    ko: "퀘이커 앵무",
    en: "Quaker parrot",
    lifespan: "20~30년",
    size: "중형",
    noise: 55,
    feature:
      "퀘이커 앵무는 수명이 20~30년이며, 높은 지능과 뛰어난 언어 구사력, 강아지 같은 애교를 자랑하는 중형 앵무새입니다. 분변과 앵무새에게 악취가 나지 않습니다.",
    noiseNote:
      "개체마다 다르지만, 한 마리만 키우신다면 통상적인 주거환경에서 문제없이 사육할 수 있습니다.",
  },
};

// 모프(색상)별 공통 정보
const MORPHS = {
  redPineapple: {
    ko: "레드파인애플",
    en: "Red Pineapple",
    color: "#c8323c",
    desc: "레드파인애플 코뉴어의 색감은 마치 잘 익은 열대 과일의 과육처럼 한층 더 짙고 풍부하게 차오른 진홍색(Deep Crimson)을 띱니다.",
  },
  blue: {
    ko: "블루",
    en: "Blue",
    color: "#4f7fa8",
    desc: "선명하고 청량한 파란색 날개와 밝은 은회색 가슴 깃털이 어우러져 볼수록 시원하고 세련된 매력을 발산합니다.",
  },
  greenPallid: {
    ko: "그린팰리드",
    en: "Green Pallid",
    color: "#8cbf3f",
    desc: "기존의 짙은 초록색에서 무거운 빛깔을 덜어내고, 따스한 햇살을 가득 머금은 듯 화사한 라임(Lime)빛 연두색을 띱니다.",
  },
  bluePallid: {
    ko: "블루팰리드",
    en: "Blue Pallid",
    color: "#8fb4d0",
    desc: "기존의 짙고 선명한 푸른빛에서 무거운 색감을 덜어내고, 부드러운 크림을 살짝 섞은 듯한 맑은 소라색(Powder Blue)을 띱니다.",
  },
};

const XRAY_HOSPITAL = { name: "나음 동물 의료센터", address: "서울 강서구 강서로 206" };
const XRAY_OPINION =
  "검진상 이상은 없습니다. 심장 크기 및 폐 음영도, 기낭 음영도 매우 양호합니다. 뼈 음영도는 양호하며, 골격상태도 양호합니다. 소화기관상 선위의 확장은 보이지 않고, 간 및 비장 크기도 양호합니다.";

const BIRDS = [
  { id: "AMZN2686", no: "AMZN 26 86", species: "conure", morph: "redPineapple", hatch: "2026-07-19", sex: "M",
    dad: "Red Pineapple", mom: "Moon Cheek", price: 250000, photo: "images/conure-red-pineapple.jpg", xray: null },
  { id: "AMZN2687", no: "AMZN 26 87", species: "conure", morph: "redPineapple", hatch: "2026-07-21", sex: "M",
    dad: "Red Pineapple", mom: "Moon Cheek", price: 250000, photo: "images/conure-red-pineapple.jpg", xray: null },
  { id: "AMZN2688", no: "AMZN 26 88", species: "conure", morph: "redPineapple", hatch: "2026-07-23", sex: "M",
    dad: "Red Pineapple", mom: "Moon Cheek", price: 250000, photo: "images/conure-red-pineapple.jpg", xray: null },
  { id: "AMZN26X4", no: "AMZN 26 X4", species: "conure", morph: "redPineapple", hatch: "2026-07-25", sex: "M",
    dad: "Red Pineapple", mom: "Moon Cheek", price: 250000, photo: "images/conure-red-pineapple.jpg", xray: null },

  { id: "AMZN2684", no: "AMZN 26 84", species: "quaker", morph: "blue", hatch: "2026-07-20", sex: "F",
    dad: "Blue/Lutino", mom: "Blue", price: 700000, photo: "images/AMZN2684.jpg",
    xray: ["images/AMZN2684-xray1.jpg", "images/AMZN2684-xray2.jpg"] },
  { id: "AMZN2691", no: "AMZN 26 91", species: "quaker", morph: "blue", hatch: "2026-07-25", sex: "F",
    dad: "Blue/Lutino", mom: "Blue", price: 700000, photo: "images/AMZN2691.jpg",
    xray: ["images/AMZN2691-xray1.jpg", "images/AMZN2691-xray2.jpg"] },
  { id: "AMZN2692", no: "AMZN 26 92", species: "quaker", morph: "greenPallid", hatch: "2026-07-28", sex: "F",
    dad: "Aqua Pallid", mom: "Green Opaline", price: 900000, photo: "images/AMZN2692.jpg",
    xray: ["images/AMZN2692-xray1.jpg", "images/AMZN2692-xray2.jpg"] },
  { id: "AMZN26X3", no: "AMZN 26 X3", species: "quaker", morph: "greenPallid", hatch: "2026-08-01", sex: "F",
    dad: "Aqua Pallid", mom: "Green Opaline", price: 900000, photo: "images/AMZN26X3.jpg",
    xray: ["images/AMZN26X3-xray1.jpg", "images/AMZN26X3-xray2.jpg"] },
  { id: "AMZN26X2", no: "AMZN 26 X2", species: "quaker", morph: "bluePallid", hatch: "2026-07-30", sex: "F",
    dad: "Aqua Pallid", mom: "Green Opaline", price: 1000000, photo: "images/AMZN26X2.jpg",
    xray: ["images/AMZN26X2-xray1.jpg", "images/AMZN26X2-xray2.jpg"] },
];
