<template>
  <NavLayout>
    <TitleAndText
      :title="'Project'"
      :type="'h2'"
      :text="''"
      :TitleStyle="TitleStyle()"
    ></TitleAndText>
    <CardList :CardValue="CardValue" @click="CardClick"></CardList>
    <transition name="center">
      <ModalCard
        v-if="card"
        @close="card = false"
        :title="CardValue[cardIndex].title"
        :Tag="CardValue[cardIndex].Tag"
        :CardDetail="CardValue[cardIndex].CardDetail"
        :github="CardValue[cardIndex].github"
        :link="CardValue[cardIndex].link"
        :SubImage="CardValue[cardIndex].SubImage"
        :NextImage="NextImage"
        @current="NextCurrentImage"
      ></ModalCard>
    </transition>
  </NavLayout>
</template>

<script>
import TitleAndText from "../../components/atoms/TitleAndText.vue";
import CardList from "../../components/organisms/CardList.vue";
import ModalCard from "../../components/organisms/ModalCard.vue";
import NavLayout from "../../components/templates/NavLayout.vue";
export default {
  data() {
    return {
      CardValue: [
        {
          title: "서울시 대사증후군 고도화 사업",
          image: "온서울건강온.png",
          SubImage: [
            "온서울건강온.png",
            "온서울건강온2.png",
            "온서울건강온3.png",
            "온서울건강온4.png",
            "온서울건강온5.png",
            "온서울건강온6.png",
            "온서울건강온7.png",
            "온서울건강온8.png",
            "온서울건강온9.png",
            "온서울건강온10.png",
            "온서울건강온11.png",
            "온서울건강온12.png"
          ],
          github: "",
          link: "https://onhealth.seoul.go.kr/",
          Tag: ["vue.js", "html5", "scss", "javascript", "vuex", "chart.js"],
          CardDetail: [
            {
              title: "개요",
              text:
                "스마트 밴드와 앱을 통한 건강관리 서비스 사업을 신청하고<br>건강데이터 및 상담서비스를 보여주기 위한 웹 사이트 제작"
            },
            {
              title: "제작 기간",
              text: "2021.10.18 ~"
            },
            {
              title: "인원",
              text: "2명"
            },
            {
              title: "담당 업무",
              text:
                "1. 퍼블리싱 (80%)<br>2. 깃허브를 통한 백엔드와의 소통<br>3. 크로스 브라우징(IE) 지원<br>4. 미디어쿼리를 활용한 반응형 지원<br>5. chart.js를 활용한 data visualize<br>6. keyframes를 활용한 애니메이션<br>7. vue.js를 활용한 데이터 배열 push 생성 및 filter 기능<br>8. 웹 접근성을 고려한 퍼블리싱"
            }
          ]
        },
        {
          title: "나트륨 앱",
          image: "나트륨편집.gif",
          SubImage: [
            "나트륨.png",
            "나트륨2.png",
            "나트륨3.png",
            "나트륨4.png",
            "나트륨5.png",
            "나트륨6.png",
            "나트륨7.png"
          ],
          github: "",
          link: "",
          Tag: ["html5", "css", "jQuery", "javascript", "d3.js"],
          CardDetail: [
            {
              title: "개요",
              text:
                "하루 나트륨 권장 섭취량 수행을 위해 <br>사용자가 스스로 식단을 기록하고 나트륨 섭취량을 조절하는 앱"
            },
            {
              title: "제작 기간",
              text:
                "어플 : 2020.11.27~2020.12.08<br>관리자 : 2021.02.22~2021.02.24"
            },
            {
              title: "인원",
              text: "1명"
            },
            {
              title: "담당 업무",
              text:
                "1. 퍼블리싱 (100%)<br>2. 제이쿼리 모바일을 사용한 레이아웃 작업<br>3. d3.js를 활용한 data visualize"
            }
          ]
        },
        {
          title: "루푸스 지킴이",
          image: "루푸스.png",
          SubImage: [
            "루푸스.png",
            "루푸스2.png",
            "루푸스3.png",
            "루푸스4.png",
            "루푸스5.png"
          ],
          github: "",
          link:
            "https://play.google.com/store/apps/details?id=kr.co.thejoin.lab.sle",
          Tag: ["html5", "css", "jQuery", "javascript", "d3.js"],
          CardDetail: [
            {
              title: "개요",
              text:
                "루푸스 질환 환자들을 대상으로<br>본인의 증상을 기록하고 체크하는 앱"
            },
            {
              title: "제작 기간",
              text:
                "어플 : 2020.11.09~2020.11.20<br>관리자 : 2020.12.18~2020.12.23"
            },
            {
              title: "인원",
              text: "1명"
            },
            {
              title: "담당 업무",
              text:
                "1. 퍼블리싱 (100%)<br>2. 제이쿼리 모바일을 사용한 레이아웃 작업<br>3. d3.js를 활용한 data visualize"
            }
          ]
        },
        {
          title: "Todo List",
          image: "todolist편집.gif",
          SubImage: ["todolist.png", "todolist2.png", "todolist3.png"],
          github: "https://github.com/limjaehee/Todo-App",
          link: "https://limjaehee.github.io/Todo-App/#/",
          Tag: ["html5", "css", "jQuery", "javascript", "d3.js"],
          CardDetail: [
            {
              title: "개요",
              text: "오늘 할 일을 기록하고 진행상황을 볼 수 있는 앱"
            },
            {
              title: "제작 기간",
              text: "2021.06.14 ~ 2021.06.22"
            },
            {
              title: "인원",
              text: "1명"
            },
            {
              title: "담당 업무",
              text:
                "1. 디자인 (100%)<br>2. 퍼블리싱 (100%)<br>3. vue.js를 통한 어플 개발<br>4. keyframes를 활용한 애니메이션"
            }
          ]
        },
        {
          title: "J-VMP",
          image: "jvmp.png",
          SubImage: [
            "jvmp.png",
            "jvmp2.png",
            "jvmp3.png",
            "jvmp4.png",
            "jvmp5.png"
          ],
          github: "",
          link: "http://www.thejoin.co.kr/#/JVmpPage",
          Tag: ["vue.js", "html5", "scss", "javascript"],
          CardDetail: [
            {
              title: "개요",
              text: "J-VMP 어플 소개 웹 사이트"
            },
            {
              title: "제작 기간",
              text: "2021.05.07~2021.05.11"
            },
            {
              title: "인원",
              text: "1명"
            },
            {
              title: "담당 업무",
              text:
                "1. 퍼블리싱 (100%)<br>2. vue.js를 통한 어플 개발<br>3. keyframes를 활용한 애니메이션<br>4. 미디어쿼리를 활용한 반응형 지원"
            }
          ]
        },
        {
          title: "ALL PASS",
          image: "올패스편집.gif",
          SubImage: [
            "올패스.png",
            "올패스2.png",
            "올패스3.png",
            "올패스4.png",
            "올패스5.png",
            "올패스6.png",
            "올패스7.png"
          ],
          github: "",
          link:
            "https://play.google.com/store/apps/details?id=kr.co.thejoin.Apas",
          Tag: ["vue.js", "html5", "scss", "javascript", "vuex", "chart.js"],
          CardDetail: [
            {
              title: "개요",
              text:
                "소방/경찰 공무원 실기 준비생들을 대상으로<br>모의체력검정 지원 및 리포트, 컨텐츠 등을 제공해주는 앱"
            },
            {
              title: "제작 기간",
              text:
                "어플 : 2021.03.18~2021.03.31<br>관리자: 2021.06.02~2021.06.11"
            },
            {
              title: "인원",
              text: "1명"
            },
            {
              title: "담당 업무",
              text:
                "1. 퍼블리싱 (100%)<br>2. vue.js를 통한 어플 개발<br>3. keyframes를 활용한 애니메이션"
            }
          ]
        },
        {
          title: "건기식",
          image: "건기식.png",
          SubImage: [
            "건기식.png",
            "건기식2.png",
            "건기식3.png",
            "건기식4.png",
            "건기식5.png",
            "건기식6.png",
            "건기식7.png",
            "건기식8.png",
            "건기식9.png",
            "건기식10.png"
          ],
          github: "",
          link: "",
          Tag: ["vue.js", "html5", "scss", "javascript", "chart.js"],
          CardDetail: [
            {
              title: "개요",
              text:
                "신체 측정, 문진입력 및 식이입력을 기반으로 리포트를 산출하여 <br>맞춤 건기식을 추천해주는 태블릿 앱 및 관리자 앱"
            },
            {
              title: "제작 기간",
              text: "2021.02.08~2021.03.05"
            },
            {
              title: "인원",
              text: "1명"
            },
            {
              title: "담당 업무",
              text:
                "1. 퍼블리싱 (100%)<br>2. vue.js를 통한 어플 개발<br>3. keyframes를 활용한 애니메이션"
            }
          ]
        },
        {
          title: "Food Solution API",
          image: "푸드솔루션편집.gif",
          SubImage: [
            "푸드솔루션.png",
            "푸드솔루션2.png",
            "푸드솔루션3.png",
            "푸드솔루션4.png",
            "푸드솔루션5.png",
            "푸드솔루션6.png"
          ],
          github: "",
          link: "",
          Tag: ["vue.js", "html5", "scss", "javascript", "chart.js"],
          CardDetail: [
            {
              title: "개요",
              text: "셀프 식생활 관리를 돕는 다양한 평가모델 제공하는 앱"
            },
            {
              title: "제작 기간",
              text:
                "웹: 2020.12.30~2021.01.05<br>어플 : 2021.04.01~2021.04.13<br>관리자 : - 2021.04.14~2021.04.16"
            },
            {
              title: "인원",
              text: "1명"
            },
            {
              title: "담당 업무",
              text:
                "1. 퍼블리싱 (100%)<br>2. 제이쿼리 모바일을 사용한 레이아웃 작업<br>3. d3.js를 활용한 data visualize"
            }
          ]
        }
      ],
      //팝업 카드
      card: false,
      cardIndex: 0,
      NextImage: [],
      NextIndex: []
    };
  },
  components: {
    CardList,
    NavLayout,
    ModalCard,
    TitleAndText
  },
  methods: {
    CardClick(index) {
      this.cardIndex = index;
      this.card = true;

      this.CurrentcardIndex(index);
    },
    TitleStyle() {
      return {
        paddingTop: "5vh"
      };
    },
    NextCurrentImage(index) {
      this.cardIndex = this.NextIndex[index];

      this.CurrentcardIndex(this.NextIndex[index]);
    },
    CurrentcardIndex(index) {
      this.NextImage = [];
      this.NextIndex = [];
      var cnt = 0;

      for (var i = index; i < index + 3; i++) {
        if (i > this.CardValue.length - 2) {
          //순번이 끝나갈 때
          this.NextImage.push(this.CardValue[cnt].image);
          this.NextIndex.push(cnt);
          cnt = cnt + 1;
        } else {
          this.NextImage.push(this.CardValue[i + 1].image);
          this.NextIndex.push(i + 1);
        }
      }
    }
  }
};
</script>

<style lang="scss"></style>
