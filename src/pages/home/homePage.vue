<template>
  <NavLayout>
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
      ></ModalCard>
    </transition>
  </NavLayout>
</template>

<script>
import CardList from "../../components/organisms/CardList.vue";
import ModalCard from "../../components/organisms/ModalCard.vue";
import NavLayout from "../../components/templates/NavLayout.vue";
export default {
  data() {
    return {
      CardValue: [
        {
          title: "assss",
          image: "",
          github: "https://www.naver.com",
          link: "https://www.naver.com",
          Tag: ["html", "css", "vue.js", "javascript"],
          CardDetail: [
            {
              title: "개요",
              text:
                "스마트 밴드와 앱을 통한 건강관리 서비스 사업을 신청하고 건강데이터 및 상담서비스를 보여주기 위한 웹 사이트 제작"
            },
            {
              title: "제작 기간",
              text: "2021.10.18 ~"
            },
            {
              title: "담당 업무",
              text:
                "1. 퍼블리싱 (80%)<br>2. 깃허브를 통한 백엔드와의 소통<br>3. 크로스 브라우징(IE) 지원<br>4. 미디어쿼리를 활용한 반응형 지원<br>5. chart.js를 활용한 data visualize<br>6. keyframes를 활용한 애니메이션<br>7. vue.js를 활용한 데이터 배열 push 생성 및 filter 기능<br>8. 웹 접근성을 고려한 퍼블리싱"
            }
          ]
        },
        {
          title: "sddfdf",
          image: ""
        },
        {
          title: "rwerwer",
          image: ""
        },
        {
          title: "gdfg",
          image: ""
        },
        {
          title: "gdfg",
          image: ""
        },
        {
          title: "gdfg",
          image: ""
        },
        {
          title: "gdfg",
          image: ""
        },
        {
          title: "gdfg",
          image: ""
        }
      ],
      //팝업 카드
      card: false,
      cardIndex: 0
    };
  },
  components: {
    CardList,
    NavLayout,
    ModalCard
  },
  methods: {
    CardClick(index) {
      this.cardIndex = index;
      this.card = true;
    }
  }
};
</script>

<style lang="scss"></style>
