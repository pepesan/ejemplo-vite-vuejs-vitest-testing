import { mount } from '@vue/test-utils';
import MiComponente from '../src/components/MiComponente.vue';
import {describe, test, expect} from "vitest";

describe('MiComponente', () => {
    test('renders the correct message', () => {
        // carga del componente en "pantalla"
        const wrapper = mount(MiComponente);
        // Comprobación del contenido del componente cargado
        expect(wrapper.text()).toBe("Mensaje");
    });
});
