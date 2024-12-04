// MyComponent.spec.js
import { mount } from '@vue/test-utils'
import UsaDoubleComposableComponent from '../src/components/UsaDoubleComposableComponent.vue'

describe('MyComponent.vue', () => {
    it('actualiza el doble cuando cambia el número', async () => {
        // Montar el componente
        const wrapper = mount(UsaDoubleComposableComponent)

        // Verificar los valores iniciales
        expect(wrapper.find('p').text()).toContain('Número: 5')
        expect(wrapper.findAll('p').at(1).text()).toContain('El doble: 10')

        // Encontrar el input y cambiar su valor
        const input = wrapper.find('input')
        await input.setValue('7') // El valor debe ser una cadena

        // Verificar que los valores se actualizan correctamente
        expect(wrapper.find('p').text()).toContain('Número: 7')
        expect(wrapper.findAll('p').at(1).text()).toContain('El doble: 14')
    })
})

