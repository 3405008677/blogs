/**
 * 设置 放大 or 缩小
 */
// import { setIsFull} from "@/layouts/default/utils"
function setIsFull() {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.children[0].requestFullscreen()
  }
}

export { setIsFull }
