# 아마조나 행사용 앵무새 정보 사이트

행사장 QR → 앵무새별 정보 페이지. GitHub Pages로 무료 호스팅.

## 파일 구성
- `index.html` — 사이트 본체 (목록 + 개별 상세 페이지)
- `data.js` — **앵무새 정보. 행사마다 이 파일만 수정**
- `qr.html` — 인쇄용 QR 1장 (배포 후 `주소/qr.html` 접속 → 인쇄 또는 PNG 저장)
- `images/` — 사진, X-RAY, 검사 성적서

## 배포 (최초 1회)
1. github.com 가입 → 우측 상단 `+` → **New repository**
2. 이름 예: `parrots` / **Public** 선택 → Create
3. 생성된 화면에서 **uploading an existing file** 클릭 → 이 폴더 안의 파일·`images` 폴더 전부 드래그 → Commit changes
4. 저장소 **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` / `/(root)` → Save
5. 1~2분 뒤 `https://<아이디>.github.io/parrots/` 에서 접속됨

## 행사 전 준비
- `https://<아이디>.github.io/parrots/qr.html` 열기 → 인쇄, 또는 PNG 저장해서 배너·카드에 삽입
- 방문객은 QR 하나로 들어와서 번호표 끝자리(예: 86, X2) 검색 또는 종류·색깔로 찾음

## 수정하는 법
- GitHub 저장소에서 `data.js` 클릭 → 연필(✏️) 아이콘 → 수정 → Commit → 1분 뒤 반영
- 분양 완료: 해당 아이 줄에 `sold: true,` 추가
- 새 아이: `BIRDS` 안의 `{ ... }` 한 블록 복사 후 값 변경, 사진은 `images/`에 업로드

## 행사 끝나면
- 그대로 두거나(무료), Settings → Pages에서 끄거나, 저장소를 Private으로 전환
