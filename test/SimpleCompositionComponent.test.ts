import { mount } from '@vue/test-utils'; // Importamos el método 'mount'
import SimpleCompositionComponent from '../src/components/SimpleCompositionComponent.vue'; // Importamos el componente a probar

describe('ComponenteSimpleComposition', () => {
    it('debería renderizar el mensaje correcto', () => {
        // Montamos el componente
        const wrapper = mount(SimpleCompositionComponent);
        const elemento = wrapper.find('p#mensaje');
        // Buscamos el elemento <p> y verificamos su contenido
        expect(elemento.text()).toBe('Hola desde Composition API');
        const elemento2 = wrapper.find('h4.card');
        expect(elemento2.text()).toBe('Titulo');
    });
});
