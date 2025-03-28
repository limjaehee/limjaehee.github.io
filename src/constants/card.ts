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
import todolistMain from 'assets/images/content/todolist편집.gif'
import todolist from 'assets/images/content/todolist.png'
import todolist2 from 'assets/images/content/todolist2.png'
import todolist3 from 'assets/images/content/todolist3.png'

import Jvmp from 'assets/images/content/jvmp.png'

export const CardValue: CardListType = [
  {
    title: '서울시 대사증후군 고도화 사업',
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
          '웹사이트를 통해 실시간 건강 데이터 시각화 및 상담 이력을 확인할 수 있도록 하여, 사용자와 전문가 간의 원활한 커뮤니케이션을 지원하고 비대면 건강관리 서비스의 효율성을 높이는 것을 목표로 하였습니다.',
      },
      {
        title: '제작 기간',
        text: '2021.10.18 ~',
      },
      {
        title: '주요 기능 및 특징',
        text:
          '1. 사업 신청/조회\n' +
          '2. 건강데이터 조회 (신체활동, 영양, 수면, 심박, 체중, 혈압)\n' +
          '3. 실시간 상담\n' +
          '4. 포인트 조회\n' +
          '5. 공지사항\n',
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
    image: lupus,
    height: 35,
    SubImage: [lupus, lupus2, lupus3, lupus4, lupus5],
    github: '',
    link: 'https://play.google.com/store/apps/details?id=kr.co.thejoin.lab.sle',
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
    title: 'Todo List',
    image: todolistMain,
    height: 28,
    SubImage: [todolist, todolist2, todolist3],
    github: 'https://github.com/limjaehee/Todo-App',
    link: 'https://limjaehee.github.io/Todo-App/#/',
    Tag: ['Vue.js', 'HTML5', 'CSS', 'JavaScript', 'D3.js'],
    CardDetail: [
      {
        title: '개요',
        text: '오늘 할 일을 기록하고 진행상황을 볼 수 있는 앱',
      },
      {
        title: '제작 기간',
        text: '2021.06.14 ~ 2021.06.22',
      },
      {
        title: '프로젝트 기여도',
        text: '퍼블리싱 (100%)',
      },
      {
        title: '작업 기여도',
        text:
          '1. 디자인 (100%)\n' +
          '3. vue.js를 통한 개발\n' +
          '4. CSS keyframes를 활용한 인터랙티브한 애니메이션 효과 적용',
      },
    ],
  },
  {
    title: 'J-VMP',
    image: 'jvmp.png',
    height: 40,
    SubImage: ['jvmp.png', 'jvmp2.png', 'jvmp3.png', 'jvmp4.png', 'jvmp5.png'],
    github: '',
    link: 'http://www.thejoin.co.kr/#/JVmpPage',
    Tag: ['vue.js', 'html5', 'scss', 'javascript'],
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
        title: '인원',
        text: '1명',
      },
      {
        title: '담당 업무',
        text: '1. 퍼블리싱 (100%)<br>2. vue.js를 통한 어플 개발<br>3. keyframes를 활용한 애니메이션<br>4. 미디어쿼리를 활용한 반응형 지원',
      },
    ],
  },
  {
    title: 'ALL PASS',
    image: '올패스편집.gif',
    height: 40,
    SubImage: [
      '올패스.png',
      '올패스2.png',
      '올패스3.png',
      '올패스4.png',
      '올패스5.png',
      '올패스6.png',
      '올패스7.png',
    ],
    github: '',
    link: 'https://play.google.com/store/apps/details?id=kr.co.thejoin.Apas',
    Tag: ['vue.js', 'html5', 'scss', 'javascript', 'vuex', 'chart.js'],
    CardDetail: [
      {
        title: '개요',
        text: '소방/경찰 공무원 실기 준비생들을 대상으로<br>모의체력검정 지원 및 리포트, 컨텐츠 등을 제공해주는 앱',
      },
      {
        title: '제작 기간',
        text: '어플 : 2021.03.18~2021.03.31<br>관리자: 2021.06.02~2021.06.11',
      },
      {
        title: '인원',
        text: '1명',
      },
      {
        title: '담당 업무',
        text: '1. 퍼블리싱 (100%)<br>2. vue.js를 통한 어플 개발<br>3. keyframes를 활용한 애니메이션',
      },
    ],
  },
  {
    title: '건기식',
    image: '건기식.png',
    height: 40,
    SubImage: [
      '건기식.png',
      '건기식2.png',
      '건기식3.png',
      '건기식4.png',
      '건기식5.png',
      '건기식6.png',
      '건기식7.png',
      '건기식8.png',
      '건기식9.png',
      '건기식10.png',
    ],
    github: '',
    link: '',
    Tag: ['vue.js', 'html5', 'scss', 'javascript', 'chart.js'],
    CardDetail: [
      {
        title: '개요',
        text: '신체 측정, 문진입력 및 식이입력을 기반으로 리포트를 산출하여 <br>맞춤 건기식을 추천해주는 태블릿 앱 및 관리자 앱',
      },
      {
        title: '제작 기간',
        text: '2021.02.08~2021.03.05',
      },
      {
        title: '인원',
        text: '1명',
      },
      {
        title: '담당 업무',
        text: '1. 퍼블리싱 (100%)<br>2. vue.js를 통한 어플 개발<br>3. keyframes를 활용한 애니메이션',
      },
    ],
  },
  {
    title: 'Food Solution API',
    image: '푸드솔루션편집.gif',
    height: 40,
    SubImage: [
      '푸드솔루션.png',
      '푸드솔루션2.png',
      '푸드솔루션3.png',
      '푸드솔루션4.png',
      '푸드솔루션5.png',
      '푸드솔루션6.png',
    ],
    github: '',
    link: '',
    Tag: ['vue.js', 'html5', 'scss', 'javascript', 'chart.js'],
    CardDetail: [
      {
        title: '개요',
        text: '셀프 식생활 관리를 돕는 다양한 평가모델 제공하는 앱',
      },
      {
        title: '제작 기간',
        text: '웹: 2020.12.30~2021.01.05<br>어플 : 2021.04.01~2021.04.13<br>관리자 : - 2021.04.14~2021.04.16',
      },
      {
        title: '인원',
        text: '1명',
      },
      {
        title: '담당 업무',
        text: '1. 퍼블리싱 (100%)<br>2. 제이쿼리 모바일을 사용한 레이아웃 작업<br>3. d3.js를 활용한 data visualize',
      },
    ],
  },
]
