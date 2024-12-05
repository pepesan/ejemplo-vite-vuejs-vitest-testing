// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    function update(event) {
        console.log('Mousemove event detected:', event.pageX, event.pageY)
        x.value = event.pageX
        y.value = event.pageY
    }

    onMounted(() => {
        // console.log('Adding mousemove event listener')
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        // console.log('Removing mousemove event listener')
        window.removeEventListener('mousemove', update)
    })

    return { x, y }
}

