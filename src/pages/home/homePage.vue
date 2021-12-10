<template>
  <NavLayout>
    <CardList :CardValue="CardValue" @click="CardClick"></CardList>
    <ModalCard></ModalCard>
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
          image: ""
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
      ]
    };
  },
  components: {
    CardList,
    NavLayout,
    ModalCard
  },
  methods: {
    CardClick(index) {
      console.log("sss");
      console.log(index);
    }
  }
};
</script>

<style lang="scss"></style>
