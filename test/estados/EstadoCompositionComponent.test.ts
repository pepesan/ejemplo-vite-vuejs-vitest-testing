import { mount } from '@vue/test-utils';
import EstadoCompositionComponent from '../../src/components/estados/EstadoCompositionComponent.vue';
import {describe, test, expect} from "vitest";

describe('MyComponent', () => {
    test('should render the correct message and initial count', () => {
        const wrapper = mount(EstadoCompositionComponent);

        expect(wrapper.text()).toContain('¡Hola, Vue 3!');
        expect(wrapper.text()).toContain('Contador: 0');
        const  header = wrapper.find('h1');
        expect(header.text()).toBe('¡Hola, Vue 3!');
        const  parrafo = wrapper.find('p');
        expect(parrafo.text()).toBe('Contador: 0');
    });
});
