# Skyline Advanced MultiMedia Extension (SAMME)

**Skyline Advanced MultiMedia Extension (SAMME)** 는  
TurboWarp / Scratch 기반 프로젝트를 위한 **고급 멀티미디어 확장 프로그램**입니다.

사운드 분석과 이미지 합성 등, 기본 Scratch 확장으로는 구현하기 어려운  
멀티미디어 기능을 제공하는 것을 목표로 합니다.

---

## 🚧 Project Status

> ⚠️ **This project is currently under active development.**  
> 일부 기능은 실험 단계이거나 향후 업데이트에서 변경될 수 있습니다.

또한 현재는 **jsDelivr CDN**을 통해 확장 파일을 제공하고 있으나,  
향후에는 **Skyline 자체 서버에서 확장 파일을 직접 호스팅할 예정**입니다.

---

## ✨ Features

### 🔊 Sound Part
- 프로젝트에 포함된 소리 재생
- 프로젝트에 새로운 소리 추가
- 재생 중인 소리의 **BPM 분석**
- 재생 중인 소리의 **비트(Beat) 감지**
- 오디오 데이터 기반 실시간 분석 (계획)

### 🖼 Image Part
- 여러 이미지를 정확한 위치에 정렬하여 백드롭에 표시
- 이미지 레이어 기반 출력
- 멀티 이미지 조합 렌더링
- 캔버스 기반 이미지 합성 (계획)

---

## 🔬 Technical Details

SAMME는 TurboWarp의 확장 환경을 고려하여  
**sandbox-safe 구조**와 **지연 초기화(lazy initialization)** 를 사용합니다.

### 🎵 Audio Analysis
사운드 파트에서는 다음과 같은 기술이 사용되었거나, 사용될 예정입니다:

- **FFT (Fast Fourier Transform)**  
  - 오디오 신호를 주파수 영역으로 변환
  - 비트 감지 및 BPM 계산의 기반 기술
- **Time-domain peak detection**  
  - 파형의 피크를 분석하여 비트 후보 추출
- **Energy-based beat detection**  
  - 프레임 단위 에너지 변화 분석
- **Hybrid BPM estimation** (계획)
  - FFT + 시간 영역 분석 결합

> ⚠️ 정확한 BPM 분석은 브라우저 성능 및 TurboWarp VM 구조의 영향을 받을 수 있습니다.

---

### 🖼 Image & Rendering
이미지 파트는 다음 구조를 기반으로 설계됩니다:

- Offscreen canvas 기반 렌더링
- 이미지 좌표 정렬 및 스냅 시스템
- 레이어 우선순위 기반 합성
- TurboWarp 백드롭과의 동기화 처리

---

## 📦 Installation (TurboWarp)

### jsDelivr CDN (권장)

TurboWarp의 보안 정책 및 sandbox 환경을 고려하여  
GitHub Raw URL 대신 **jsDelivr CDN**을 사용합니다.

https://cdn.jsdelivr.net/gh/skylineatvega/samme@v0.1.0/samme.js

yaml
Copy code

### 불러오기 방법
1. https://turbowarp.org 접속
2. **Extensions**
3. **Custom Extension**
4. 위 URL 붙여넣기
5. 확인

---

## 🌐 Language Support

- 한국어 (Korean)
- 영어 (English)

블록 이름 및 설명은 다국어 확장을 고려하여 설계되었습니다.

---

## 🚧 Roadmap

- [ ] FFT 기반 비트 감지 구현
- [ ] BPM 계산 정확도 개선
- [ ] 이미지 파트 캔버스 정렬 옵션 추가
- [ ] 블록 UI 정리
- [ ] TurboWarp Packager 대응
- [ ] 자체 서버 기반 확장 호스팅 전환

---

## 📄 License

MIT License  
자유롭게 사용, 수정, 배포가 가능합니다.

---

## 👤 Author

**Skyline / NewEra**

---

## ⚠️ Disclaimer

이 프로젝트는 TurboWarp 또는 Scratch 팀과 공식적으로 연관되어 있지 않습니다.  
모든 상표 및 저작권은 각 소유자에게 있습니다.
