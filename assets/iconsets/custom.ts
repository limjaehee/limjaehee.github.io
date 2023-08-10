import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
//system
import arrowLeftLine from "assets/iconsets/icons/system/arrow-left-line.vue";
import arrowRightLine from "assets/iconsets/icons/system/arrow-right-line.vue";
import arrowDownSLine from "assets/iconsets/icons/system/arrow-down-s-line.vue";
import arrowLeftSLine from "assets/iconsets/icons/system/arrow-left-s-line.vue";
import arrowRightSLine from "assets/iconsets/icons/system/arrow-right-s-line.vue";
import arrowUpSLine from "assets/iconsets/icons/system/arrow-up-s-line.vue";
import moreHorizontal from "assets/iconsets/icons/system/more-horizontal.vue";
import moreVertical from "assets/iconsets/icons/system/more-vertical.vue";
import closeLine from "assets/iconsets/icons/system/close-line.vue";
import checkLine from "assets/iconsets/icons/system/check-line.vue";
import addLine from "assets/iconsets/icons/system/add-line.vue";
import removeLine from "assets/iconsets/icons/system/remove-line.vue";
import arrowUpSFill from "assets/iconsets/icons/system/arrow-up-s-fill.vue";
import arrowDownSFill from "assets/iconsets/icons/system/arrow-down-s-fill.vue";
import arrowRightSFill from "assets/iconsets/icons/system/arrow-right-s-fill.vue";
import arrowLeftSFill from "assets/iconsets/icons/system/arrow-left-s-fill.vue";
import downloadLine from "assets/iconsets/icons/system/download-line.vue";
import notifications from "assets/iconsets/icons/system/notifications.vue";
import notificationsOff from "assets/iconsets/icons/system/notifications-off.vue";
import homeLine from "assets/iconsets/icons/system/home-line.vue";
import homeFill from "assets/iconsets/icons/system/home-fill.vue";
import infoLine from "assets/iconsets/icons/system/info-line.vue";
import questionLine from "assets/iconsets/icons/system/question-line.vue";
import play from "assets/iconsets/icons/system/play.vue";
import closeCircleCheck from "assets/iconsets/icons/system/close-circle-check.vue";
import closeCircleDelete from "assets/iconsets/icons/system/close-circle-delete.vue";
import arrowWide from "assets/iconsets/icons/system/arrow_wide.vue";
import reset from "assets/iconsets/icons/system/reset.vue";
import menuLine from "assets/iconsets/icons/system/menu-line.vue";
import starLine from "assets/iconsets/icons/system/star-line.vue";
import starFill from "assets/iconsets/icons/system/star-fill.vue";
//logos
import naver from "assets/iconsets/icons/logos/naver.vue";
import facebook from "assets/iconsets/icons/logos/facebook.vue";
import google from "assets/iconsets/icons/logos/google.vue";
import apple from "assets/iconsets/icons/logos/apple.vue";
import kakao from "assets/iconsets/icons/logos/kakao.vue";
//social
import heartFill from "assets/iconsets/icons/social/heart-fill.vue";
import heartLine from "assets/iconsets/icons/social/heart-line.vue";
import review from "assets/iconsets/icons/social/review.vue";
import shareLine from "assets/iconsets/icons/social/share-line.vue";
import thumbUpLine from "assets/iconsets/icons/social/thumb-up-line.vue";
//tool
import zoomIn from "assets/iconsets/icons/tool/zoom-in.vue";
import search from "assets/iconsets/icons/tool/search.vue";
import attachment from "assets/iconsets/icons/tool/attachment.vue";
import pencilLine from "assets/iconsets/icons/tool/pencil-line.vue";
import pencilFill from "assets/iconsets/icons/tool/pencil-fill.vue";
import image from "assets/iconsets/icons/tool/image.vue";
import camera from "assets/iconsets/icons/tool/camera.vue";
import shoppingCart from "assets/iconsets/icons/tool/shopping-cart.vue";
import zoomOut from "assets/iconsets/icons/tool/zoom-out.vue";
import movieLine from "assets/iconsets/icons/tool/movie-line.vue";
import movieFill from "assets/iconsets/icons/tool/movie-fill.vue";
import show from "assets/iconsets/icons/tool/show.vue";
import hide from "assets/iconsets/icons/tool/hide.vue";
import link from "assets/iconsets/icons/tool/link.vue";
import mailLine from "assets/iconsets/icons/tool/mail-line.vue";
import mailFill from "assets/iconsets/icons/tool/mail-fill.vue";
import align from "assets/iconsets/icons/tool/align.vue";
import filter from "assets/iconsets/icons/tool/filter.vue";
import copy from "assets/iconsets/icons/tool/copy.vue";
import downloadBox from "assets/iconsets/icons/tool/download_box.vue";
//vuetify
import radioOff from "assets/iconsets/icons/vuetify/radio-off.vue";
import radioOn from "assets/iconsets/icons/vuetify/radio-on.vue";
import checkOn from "assets/iconsets/icons/vuetify/check-on.vue";
import checkOff from "assets/iconsets/icons/vuetify/check-off.vue";
import ratingOff from "assets/iconsets/icons/vuetify/rating-off.vue";
import ratingOn from "assets/iconsets/icons/vuetify/rating-on.vue";

const customSvgNameToComponent: any = {
    ratingOff,
    ratingOn,
    checkOn,
    checkOff,
    radioOff,
    radioOn,
    zoomIn,
    search,
    attachment,
    pencilLine,
    pencilFill,
    image,
    camera,
    shoppingCart,
    zoomOut,
    movieLine,
    movieFill,
    show,
    hide,
    link,
    mailLine,
    mailFill,
    align,
    filter,
    copy,
    downloadBox,
    heartLine,
    review,
    heartFill,
    shareLine,
    thumbUpLine,
    kakao,
    apple,
    google,
    facebook,
    naver,
    starFill,
    starLine,
    menuLine,
    reset,
    arrowWide,
    closeCircleDelete,
    closeCircleCheck,
    play,
    questionLine,
    infoLine,
    arrowLeftLine,
    arrowRightLine,
    arrowDownSLine,
    arrowLeftSLine,
    arrowRightSLine,
    arrowUpSLine,
    moreHorizontal,
    moreVertical,
    closeLine,
    checkLine,
    addLine,
    removeLine,
    arrowUpSFill,
    arrowDownSFill,
    arrowRightSFill,
    arrowLeftSFill,
    downloadLine,
    notifications,
    notificationsOff,
    homeLine,
    homeFill,
};

const customSVGs: IconSet = {
    component: (props: IconProps) => {
        return h(customSvgNameToComponent[props.icon]);
    },
};

export { customSVGs };
