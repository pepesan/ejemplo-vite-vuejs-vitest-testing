import { mount } from '@vue/test-utils';
import MiComponente from '../src/components/MiComponente.vue';
import {describe, test, expect} from "vitest";

describe('MiComponente', () => {

    test('MI ultima Prueba', () => {
        // API de Expect para las comprobaciones
        expect(1).toBe(1);
        expect(2).toBe(2);
        expect(3).toBe(3);
    })
    /*
    test('renders the correct message', () => {
        const wrapper = mount(MiComponente, {
            props: {
                message: 'Hello, Vitest!',
            },
        });

        expect(wrapper.text()).toBe('Hello, Vitest!');
    });

     */
});
