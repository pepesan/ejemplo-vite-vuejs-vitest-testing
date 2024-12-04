// useDouble.spec.js
import { useDouble } from '../../src/composables/useDouble'
import { nextTick } from 'vue'

describe('useDouble', () => {
    it('calcula el doble correctamente', async () => {
        const { number, double } = useDouble(2)

        expect(number.value).toBe(2)
        expect(double.value).toBe(4)

        number.value = 5
        await nextTick()

        expect(double.value).toBe(10)
    })
})
