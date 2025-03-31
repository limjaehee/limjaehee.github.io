import { CardListType } from 'types/cardType'
import onSeoul from 'assets/images/content/온서울건강온.png'
import onSeoul2 from 'assets/images/content/온서울건강온2.png'
import onSeoul3 from 'assets/images/content/온서울건강온3.png'
import onSeoul4 from 'assets/images/content/온서울건강온4.png'
import onSeoul5 from 'assets/images/content/온서울건강온5.png'
import onSeoul6 from 'assets/images/content/온서울건강온6.png'
import onSeoul7 from 'assets/images/content/온서울건강온7.png'
import onSeoul8 from 'assets/images/content/온서울건강온8.png'
import onSeoul9 from 'assets/images/content/온서울건강온9.png'
import onSeoul10 from 'assets/images/content/온서울건강온10.png'
import onSeoul11 from 'assets/images/content/온서울건강온11.png'
import onSeoul12 from 'assets/images/content/온서울건강온12.png'

import sodium from 'assets/images/content/나트륨.png'
import sodium2 from 'assets/images/content/나트륨2.png'
import sodium3 from 'assets/images/content/나트륨3.png'
import sodium4 from 'assets/images/content/나트륨4.png'
import sodium5 from 'assets/images/content/나트륨5.png'
import sodium6 from 'assets/images/content/나트륨6.png'
import sodium7 from 'assets/images/content/나트륨7.png'
import sodiumMain from 'assets/images/content/나트륨편집.gif'

import lupus from 'assets/images/content/루푸스.png'
import lupus2 from 'assets/images/content/루푸스2.png'
import lupus3 from 'assets/images/content/루푸스3.png'
import lupus4 from 'assets/images/content/루푸스4.png'
import lupus5 from 'assets/images/content/루푸스5.png'

import Jvmp from 'assets/images/content/jvmp.png'
import Jvmp2 from 'assets/images/content/jvmp2.png'
import Jvmp3 from 'assets/images/content/jvmp3.png'
import Jvmp4 from 'assets/images/content/jvmp4.png'
import Jvmp5 from 'assets/images/content/jvmp5.png'

import allPassMain from 'assets/images/content/올패스편집.gif'
import allPass from 'assets/images/content/올패스.png'
import allPass2 from 'assets/images/content/올패스2.png'
import allPass3 from 'assets/images/content/올패스3.png'
import allPass4 from 'assets/images/content/올패스4.png'
import allPass5 from 'assets/images/content/올패스5.png'
import allPass6 from 'assets/images/content/올패스6.png'
import allPass7 from 'assets/images/content/올패스7.png'

import dryFood from 'assets/images/content/건기식.png'
import dryFood2 from 'assets/images/content/건기식2.png'
import dryFood3 from 'assets/images/content/건기식3.png'
import dryFood4 from 'assets/images/content/건기식4.png'
import dryFood5 from 'assets/images/content/건기식5.png'
import dryFood6 from 'assets/images/content/건기식6.png'
import dryFood7 from 'assets/images/content/건기식7.png'
import dryFood8 from 'assets/images/content/건기식8.png'
import dryFood9 from 'assets/images/content/건기식9.png'
import dryFood10 from 'assets/images/content/건기식10.png'

import foodSolutionMain from 'assets/images/content/푸드솔루션편집.gif'
import foodSolution from 'assets/images/content/푸드솔루션.png'
import foodSolution2 from 'assets/images/content/푸드솔루션2.png'
import foodSolution3 from 'assets/images/content/푸드솔루션3.png'
import foodSolution4 from 'assets/images/content/푸드솔루션4.png'
import foodSolution5 from 'assets/images/content/푸드솔루션5.png'
import foodSolution6 from 'assets/images/content/푸드솔루션6.png'

import daechi from 'assets/images/content/모두의대치동.png'

import visang from 'assets/images/content/visang.png'
import visang2 from 'assets/images/content/visang2.png'
import visang3 from 'assets/images/content/visang3.png'
import visang4 from 'assets/images/content/visang4.png'
import visang5 from 'assets/images/content/visang5.png'
import visang6 from 'assets/images/content/visang6.png'
import visang7 from 'assets/images/content/visang7.png'
import visang8 from 'assets/images/content/visang8.png'

import naafaaMain from 'assets/images/content/naafaaMain.png'
import naafaa from 'assets/images/content/naafaa.png'
import naafaa2 from 'assets/images/content/naafaa2.png'
import naafaa3 from 'assets/images/content/naafaa3.png'
import naafaa4 from 'assets/images/content/naafaa4.png'

export const CardValue: CardListType = [
  {
    title: '나아파 에이전시',
    type: 'front',
    image: naafaaMain,
    height: 45,
    SubImage: [naafaaMain, naafaa2, naafaa, naafaa3, naafaa4],
    github: '',
    link: '',
    Tag: [
      'TypeScript',
      'React',
      'TanStack Query',
      'Zustand',
      'Styled-Components',
    ],
    CardDetail: [
      {
        title: '개요',
        text:
          '해외 환자의 신상 정보를 관리하고, 성형외과 예약을 스케줄링하며,\n' +
          '입국과 출국을 포함한 전체 여정을 조율하는 서비스',
      },
      {
        title: '개발 기간',
        text: '2024.10.01 ~ 2025.01.08',
      },
      {
        title: '주요 기능 및 특징',
        text:
          '1. 고객 정보 관리 (신상정보, 메모, 상담내역, 히스토리, 파일)\n' +
          '2. SMS 보내기\n',
      },
      {
        title: '프로젝트 기여도',
        text: '프론트엔드 (80%)',
      },
      {
        title: '작업 기여도',
        text:
          ' 1. 프론트 아키텍처 설계 및 구축\n' +
          '2. 환자 관리를 위한 기본적인 CRUD 개발\n' +
          '3. React와 css를 활용한 월별 스케줄 기능 개발\n' +
          '4. Google Calendar API를 이용한 공휴일 연동 기능 개발\n' +
          '5. Canvas를 이용한 이미지 리사이징 개발\n' +
          '6. 크로스 브라우징 및 반응형 웹 퍼블리싱',
      },
    ],
  },
  {
    title: '용인비상에듀 CRM',
    type: 'front',
    image: visang,
    height: 40,
    SubImage: [
      visang,
      visang2,
      visang3,
      visang4,
      visang5,
      visang6,
      visang7,
      visang8,
    ],
    github: '',
    link: '',
    Tag: ['TypeScript', 'Next.js', 'React', 'Redux', 'SCSS'],
    CardDetail: [
      {
        title: '개요',
        text:
          '기숙학원 내 신규 학생 상담, 예약 일정 관리, 학생 정보 공유 및\n' +
          '신상 정보 작성을 통합적으로 지원하는 프로그램',
      },
      {
        title: '개발 기간',
        text: '2024.02.01 ~ 2024.09.11',
      },
      {
        title: '주요 기능 및 특징',
        text:
          '1. 공유 캘린더\n' +
          '2. 운영관리 (계정, 입핛유형, SMS 상용문구, 각종항목, 상담일정)\n' +
          '3. 상담관리 (전체목록, 약속일, 등록현황, 교무실, 경리부, SMS 전송조회)\n' +
          '4. 긴급공유 게시판',
      },
      {
        title: '프로젝트 기여도',
        text: '프론트엔드 (100%)',
      },
      {
        title: '작업 기여도',
        text:
          '1. 프론트 아키텍처 설계 및 구축\n' +
          '2. PM으로 고객과의 커뮤니케이션 및 일정 조율\n' +
          '3. 학생 관리 시스템의 기본 정보 및 상담 내역 CRUD 개발\n' +
          '4. SSE 기반 실시간 CID 기능 개발\n' +
          '5. Chart.js를 활용한 통계 대시보드 구현\n' +
          '6. RBAC를 이용한 권한별 페이지 접근 제어\n' +
          '7. API 모듈화로 중앙 집중식 axios 인스턴스 관리 및 호출의 재사용성 및 유지보수성 향상',
      },
    ],
  },
  {
    title: '모두의 대치동',
    type: 'front',
    image: daechi,
    height: 38,
    SubImage: [daechi],
    github: '',
    link: 'https://www.modoodaechi.com/',
    Tag: ['Vue.js', 'Vuex', 'HTML5', 'SCSS', 'JavaScript', 'Chart.js'],
    CardDetail: [
      {
        title: '개요',
        text: '중고등학생을 대상으로 한 온라인 라이브 교육 및 성적 관리 프로그램',
      },
      {
        title: '개발 기간',
        text: '2022.02.01 ~ 2023.03.31',
      },
      {
        title: '주요 기능 및 특징',
        text:
          '1. 수강신청/결제/쿠폰\n' +
          '2. 학생 학습관리 (공지사항, 학습과제, Q&A, 학습자료실, 학습통계)\n' +
          '3. 실시간 라이브 강의 수강 (시험, 조교 채팅, 경고)\n' +
          '4. 권한별 마이페이지 (학생, 강사, 조교, 학부모)\n' +
          '5. 학원 어드민 (통계, 결제관리, 학원관리, 강사관리, 상품관리, 리뷰관리, 업데이트 소식)\n',
      },
      {
        title: '프로젝트 기여도',
        text: '프론트엔드 (90%)',
      },
      {
        title: '작업 기여도',
        text:
          '1. 강의 할인쿠폰 및 리뷰 시스템 개발\n' +
          '2. 학생 학습관리 시스템 구현 - 공지사항, 학습과제, Q&A, 학습자료실, 학습통계, 수강후기 개발\n' +
          '3. Chart.js를 활용한 매출 및 클래스 통계 대시보드 구현' +
          '4. 웹 페이지 로딩 속도 개선 (tiny Png, Lazy Loading, 폰트 최적화, 아이콘 최적화 등)',
      },
    ],
  },
  {
    title: '온서울 건강온',
    type: 'publish',
    image: onSeoul,
    height: 40,
    SubImage: [
      onSeoul,
      onSeoul2,
      onSeoul3,
      onSeoul4,
      onSeoul5,
      onSeoul6,
      onSeoul7,
      onSeoul8,
      onSeoul9,
      onSeoul10,
      onSeoul11,
      onSeoul12,
    ],
    github: '',
    link: 'https://onhealth.seoul.go.kr/',
    Tag: ['Vue.js', 'HTML5', 'SCSS', 'JavaScript', 'Chart.js'],
    CardDetail: [
      {
        title: '개요',
        text:
          '스마트 밴드와 모바일 앱을 연동하여 사용자 건강 데이터를 수집하고, 이를 기반으로 맞춤형 건강 상담 서비스를 제공하는 헬스케어 플랫폼 구축 프로젝트입니다.\n\n' +
          '웹사이트를 통해 실시간 건강 데이터 시각화 및 상담 이력을 확인할 수 있도록 하여, 사용자와 전문가 간의 원활한 커뮤니케이션을 지원하고 비대면 건강관리 서비스의 효율성을 높이는 것을 목표로 하였습니다.\n\n' +
          '* 현재는 손목닥터 9988로 명칭이 변경되었습니다.',
      },
      {
        title: '제작 기간',
        text: '2021.10.18 ~ 2021.11.22',
      },
      {
        title: '프로젝트 기여도',
        text: '퍼블리싱 (80%)',
      },
      {
        title: '작업 기여도',
        text:
          '1. 크로스 브라우징(IE) 지원\n' +
          '2. 미디어쿼리를 활용한 반응형 웹 페이지 구현\n' +
          '3. Chart.js를 활용하여 데이터 시각화 기능 개발\n' +
          '4. CSS keyframes를 활용한 인터랙티브한 애니메이션 효과 적용\n' +
          '5. 웹 접근성(WA)을 고려한 마크업 및 스타일 작업',
      },
    ],
  },
  {
    title: '나트륨 앱',
    type: 'publish',
    image: sodiumMain,
    height: 45,
    SubImage: [sodium, sodium2, sodium3, sodium4, sodium5, sodium6, sodium7],
    github: '',
    link: '',
    Tag: ['HTML5', 'CSS', 'jQuery', 'JavaScript', 'D3.js'],
    CardDetail: [
      {
        title: '개요',
        text:
          '하루 나트륨 권장 섭취량 수행을 위해\n' +
          '사용자가 스스로 식단을 기록하고 나트륨 섭취량을 조절하는 앱',
      },
      {
        title: '제작 기간',
        text:
          // eslint-disable-next-line no-useless-concat
          '어플 : 2020.11.27~2020.12.08\n' + '관리자 : 2021.02.22~2021.02.24',
      },
      {
        title: '프로젝트 기여도',
        text: '퍼블리싱 (100%)',
      },
      {
        title: '작업 기여도',
        text:
          '1. 제이쿼리 모바일을 사용한 레이아웃 작업\n' +
          '2. d3.js를 활용하여 데이터 시각화 기능 개발',
      },
    ],
  },
  {
    title: '루푸스 지킴이',
    type: 'publish',
    image: lupus,
    height: 35,
    SubImage: [lupus, lupus2, lupus3, lupus4, lupus5],
    github: '',
    link: '',
    Tag: ['HTML5', 'CSS', 'jQuery', 'JavaScript', 'D3.js'],
    CardDetail: [
      {
        title: '개요',
        text:
          '루푸스 질환 환자들을 대상으로\n' +
          '본인의 증상을 기록하고 체크하는 앱',
      },
      {
        title: '제작 기간',
        text:
          // eslint-disable-next-line no-useless-concat
          '어플 : 2020.11.09~2020.11.20\n' + '관리자 : 2020.12.18~2020.12.23',
      },
      {
        title: '프로젝트 기여도',
        text: '퍼블리싱 (100%)',
      },
      {
        title: '작업 기여도',
        text:
          '1. 제이쿼리 모바일을 사용한 레이아웃 작업\n' +
          '2. d3.js를 활용하여 데이터 시각화 기능 개발',
      },
    ],
  },
  {
    title: 'J-VMP',
    type: 'publish',
    image: Jvmp,
    height: 30,
    SubImage: [Jvmp, Jvmp2, Jvmp3, Jvmp4, Jvmp5],
    github: '',
    link: 'http://www.thejoin.co.kr/#/JVmpPage',
    Tag: ['Vue.js', 'HTML5', 'SCSS', 'JavaScript'],
    CardDetail: [
      {
        title: '개요',
        text: 'J-VMP 어플 소개 웹 사이트',
      },
      {
        title: '제작 기간',
        text: '2021.05.07~2021.05.11',
      },
      {
        title: '프로젝트 기여도',
        text: '퍼블리싱 (100%)',
      },
      {
        title: '작업 기여도',
        text:
          '1. CSS keyframes를 활용한 인터랙티브한 애니메이션 효과 적용\n' +
          '2. 미디어쿼리를 활용한 반응형 웹 페이지 구현',
      },
    ],
  },
  {
    title: 'ALL PASS',
    type: 'publish',
    image: allPassMain,
    height: 50,
    SubImage: [
      allPass,
      allPass2,
      allPass3,
      allPass4,
      allPass5,
      allPass6,
      allPass7,
    ],
    github: '',
    link: 'https://play.google.com/store/apps/details?id=kr.co.thejoin.Apas',
    Tag: ['Vue.js', 'HTML5', 'SCSS', 'JavaScript', 'Chart.js'],
    CardDetail: [
      {
        title: '개요',
        text:
          '소방/경찰 공무원 실기 준비생들을 대상으로\n' +
          '모의체력검정 지원 및 리포트, 컨텐츠 등을 제공해주는 앱',
      },
      {
        title: '제작 기간',
        text:
          // eslint-disable-next-line no-useless-concat
          '어플 : 2021.03.18~2021.03.31\n' + '관리자: 2021.06.02~2021.06.11',
      },
      {
        title: '프로젝트 기여도',
        text: '퍼블리싱 (100%)',
      },
      {
        title: '작업 기여도',
        text:
          '1. CSS keyframes를 활용한 인터랙티브한 애니메이션 효과 적용 \n' +
          '2. Chart.js를 활용하여 데이터 시각화 기능 개발',
      },
    ],
  },
  {
    title: '건기식',
    type: 'publish',
    image: dryFood,
    height: 40,
    SubImage: [
      dryFood,
      dryFood2,
      dryFood3,
      dryFood4,
      dryFood5,
      dryFood6,
      dryFood7,
      dryFood8,
      dryFood9,
      dryFood10,
    ],
    github: '',
    link: '',
    Tag: ['Vue.js', 'HTML5', 'SCSS', 'JavaScript', 'Chart.js'],
    CardDetail: [
      {
        title: '개요',
        text:
          '신체 측정, 문진입력 및 식이입력을 기반으로 리포트를 산출하여\n' +
          '맞춤 건기식을 추천해주는 태블릿 앱 및 관리자 앱',
      },
      {
        title: '제작 기간',
        text: '2021.02.08~2021.03.05',
      },
      {
        title: '프로젝트 기여도',
        text: '퍼블리싱 (100%)',
      },
      {
        title: '작업 기여도',
        text:
          '1. CSS keyframes를 활용한 인터랙티브한 애니메이션 효과 적용 \n' +
          '2. Vue.js를 활용하여 컴포넌트 단위 UI 개발',
      },
    ],
  },
  {
    title: 'Food Solution API',
    type: 'publish',
    image: foodSolutionMain,
    height: 35,
    SubImage: [
      foodSolution,
      foodSolution2,
      foodSolution3,
      foodSolution4,
      foodSolution5,
      foodSolution6,
    ],
    github: '',
    link: '',
    Tag: ['Vue.js', 'HTML5', 'SCSS', 'JavaScript', 'Chart.js'],
    CardDetail: [
      {
        title: '개요',
        text: '셀프 식생활 관리를 돕는 다양한 평가모델 제공하는 앱',
      },
      {
        title: '제작 기간',
        text:
          '웹: 2020.12.30~2021.01.05\n' +
          '어플 : 2021.04.01~2021.04.13\n' +
          '관리자 : 2021.04.14~2021.04.16',
      },
      {
        title: '프로젝트 기여도',
        text: '퍼블리싱 (100%)',
      },
      {
        title: '담당 업무',
        text:
          '1. 제이쿼리 모바일을 사용한 레이아웃 작업\n' +
          '2. d3.js를 활용하여 데이터 시각화 기능 개발',
      },
    ],
  },
]
