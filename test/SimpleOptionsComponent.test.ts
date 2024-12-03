import { mount } from '@vue/test-utils'; // Importamos el método 'mount'
import SimpleOptionsComponent from '../src/components/SimpleOptionsComponent.vue'; // Importamos el componente a probar

describe('SimpleOptionsComponent', () => {
    it('debería renderizar el mensaje correcto', () => {
        // Montamos el componente
        const wrapper = mount(SimpleOptionsComponent);

        // Buscamos el elemento <p> y verificamos su contenido
        expect(wrapper.find('p').text()).toBe('Hola desde Options API');
    });
});
