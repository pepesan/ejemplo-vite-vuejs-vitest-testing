// useDouble.js
import { ref, computed } from 'vue'

export function useDouble(initialValue = 0) {
    const number = ref(initialValue)
    const double = computed(() => number.value * 2)

    return { number, double }
}
