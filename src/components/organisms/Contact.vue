<template>
  <div class="contact" :class="{ darkmode: $store.state.darkmode }">
    <article class="contact__message">
      <TitleAndText
        :title="'CONTACT'"
        :type="'h2'"
        :text="
          '안녕하세요. <br>제 포트폴리오 사이트에 방문해주셔서 감사합니다.:)<br>연락이 필요하시다면 오른쪽 양식을 채운 뒤에 메일을 보내주세요<br>메일은 1~2일 내에 확인됩니다.<br>'
        "
      ></TitleAndText>
      <p
        class="contact__message__sub"
        :class="{ darkmode: $store.state.darkmode }"
      >
        *회신이 필요한 메일일 경우 반드시 이메일 주소를 정확하게 작성해주세요.
      </p>
      <p
        class="contact__message__sub"
        :class="{ darkmode: $store.state.darkmode }"
      >
        *파일 첨부가 필요한 메일일 경우
        <a href="mailto:rhak39@gmail.com">rhak39@gmail.com</a>으로 직접
        보내주세요.
      </p>
    </article>
    <form class="contact__form" ref="form" @submit.prevent="sendEmail">
      <InputAndLabel
        class="contact__form__item"
        @input="InputTitle"
        :TextValue="title"
        v-model="title"
        :id="'ContactTitle'"
        :title="'제목'"
      ></InputAndLabel>
      <TextareaAndLabel
        class="contact__form__item"
        @input="InputMessage"
        :TextValue="message"
        v-model="message"
        :id="'ContactMessage'"
        :title="'내용'"
      ></TextareaAndLabel>
      <div class="contact__form__wrap">
        <InputAndLabel
          class="contact__form__item"
          @input="InputFrom"
          :TextValue="from"
          v-model="from"
          :id="'ContactFrom'"
          :type="'email'"
          :title="'보내는 사람'"
        ></InputAndLabel>
        <input
          type="submit"
          value="전송하기"
          class="contact__form__submit"
          :class="{ on: isSubmit() }"
        />
      </div>
    </form>
  </div>
</template>

<script>
import TitleAndText from "../atoms/TitleAndText.vue";
import InputAndLabel from "../atoms/InputAndLabel.vue";
import emailjs from "emailjs-com";
import TextareaAndLabel from "../atoms/TextareaAndLabel.vue";
export default {
  data() {
    return {
      title: null,
      from: null,
      message: null
    };
  },

  mounted() {},
  components: {
    TitleAndText,
    InputAndLabel,
    TextareaAndLabel
  },
  methods: {
    InputTitle(value) {
      this.title = value;
    },
    InputMessage(value) {
      this.message = value;
    },
    InputFrom(value) {
      this.from = value;
    },
    isSubmit() {
      if (
        this.title != null &&
        this.title != "" &&
        this.from != null &&
        this.from != "" &&
        this.message != null &&
        this.message != ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    sendEmail() {
      if (this.isSubmit() == true) {
        emailjs
          .send(
            "service_2ksiiqd",
            "template_6dasrhi",
            {
              name: this.title,
              email: this.from,
              message: this.message
            },
            "user_Cdxmfgsy39u3xUnJtzz5m"
          )
          .then(
            result => {
              this.title = "";
              this.message = "";
              this.from = "";
              alert("감사합니다. 이메일이 성공적으로 보내졌습니다.");
            },
            error => {
              console.log("FAILED...", error.text);
            }
          );
      } else {
        alert("내용을 모두 입력해주세요.");
      }
    }
  }
};
</script>

<style lang="scss">
.contact {
  display: flex;
  height: 95vh;
  align-items: center;

  &.darkmode {
    color: #fff;
  }

  &__message {
    flex: 0 0 40%;
    margin-right: 105px;
    animation: Message 1 1s forwards;

    @keyframes Message {
      0% {
        opacity: 0;
        transform: translatey(30px);
      }

      100% {
        opacity: 1;
        transform: translatey(0px);
      }
    }

    &__sub {
      color: #707070;
      margin-top: 10px;

      &.darkmode {
        color: #ddd;

        a {
          color: #fff;
        }
      }
    }
  }

  &__form {
    flex: 0 0 calc(60% - 105px);

    &__wrap {
      display: flex;
      align-items: flex-end;
    }

    &__item {
      padding-top: 26px;
    }

    &__submit {
      color: #fff;
      background: #b4b4b4;
      padding: 11px 24px;
      border-radius: 10px;
      margin-left: 10px;
      @include font-size(16px);
      cursor: pointer;

      &.on {
        background: $c-color;
      }
    }
  }
}

//모바일
@media screen and (max-width: $mobileW) {
  .contact {
    display: block;
    padding: 50px 0 80px;
    height: auto;

    &__message {
      margin-right: 0;
      padding-bottom: 40px;
    }
  }
}
</style>
