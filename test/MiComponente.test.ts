import { mount } from '@vue/test-utils';
import MiComponente from '../src/components/MiComponente.vue';

describe('MiComponente', () => {
    it('renders the correct message', () => {
        const wrapper = mount(MiComponente, {
            props: {
                message: 'Hello, Vitest!',
            },
        });

        expect(wrapper.text()).toBe('Hello, Vitest!');
    });
});
