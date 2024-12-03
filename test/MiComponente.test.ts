import { mount } from '@vue/test-utils';
import MiComponente from '../src/components/MiComponente.vue';
import {describe, test, expect} from "vitest";

describe('MiComponente', () => {
    test('renders the correct message', () => {
        const wrapper = mount(MiComponente, {
            props: {
                message: 'Hello, Vitest!',
            },
        });

        expect(wrapper.text()).toBe('Hello, Vitest!');
    });
});
