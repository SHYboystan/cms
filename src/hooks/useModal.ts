import { ref } from "vue";

export default function useModal() {
  const visible = ref(false);
  const openModal = () => {
    visible.value = true;
  };
  const closeModal = () => {
    visible.value = false;
  };
  return {
    visible,
    openModal,
    closeModal,
  };
}
