import { ref } from 'vue';

export function useCounter() {
    const counter = ref(0);

    function increase() {
        counter.value += 1;
    }

    return { counter, increase };
}
