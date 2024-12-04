import { mount } from '@vue/test-utils';
import EventosCompositionComponent from '../../src/components/eventos/EventosCompositionComponent.vue';
import {describe, test, expect} from "vitest";

describe('EventosCompositionComponent', () => {
    test('should render the correct message and initial count', async () => {
        const wrapper = mount(EventosCompositionComponent);

        expect(wrapper.text()).toContain('Contador: 0');
        const parrafo = wrapper.find('p#contador');
        expect(parrafo.text()).toContain('Contador: 0');
    });
    test('should render the correct message and initial count', async () => {
        const wrapper = mount(EventosCompositionComponent);

        const incrementButton = wrapper.find('button#inc');
        await incrementButton.trigger('click');

        expect(wrapper.text()).toContain('Contador: 1');
    });

    it('should decrement the count when the decrement button is clicked', async () => {
        const wrapper = mount(EventosCompositionComponent);
        // const decrementButton = wrapper.find('button:last-child');
        const decrementButton = wrapper.find('#dec');
        await decrementButton.trigger('click');
        await decrementButton.trigger('click'); // Decrement twice to ensure negative count is prevented

        expect(wrapper.text()).toContain('Contador: 0');
    });
});
