import { mount } from '@vue/test-utils';
import CondicionalCompositionComponent from '../../src/components/directivas/CondicionalCompositionComponent.vue'; // Reemplaza con la ruta de tu componente

describe('MyComponent', () => {
    it('should initially hide the content', () => {
        const wrapper = mount(CondicionalCompositionComponent);
        expect(wrapper.find('p').exists()).toBe(false);
    });

    it('should show the content after clicking the button', async () => {
        const wrapper = mount(CondicionalCompositionComponent);
        const button = wrapper.find('button');
        await button.trigger('click');
        expect(wrapper.find('p').exists()).toBe(true);
    });

    it('should hide the content again after clicking the button twice', async () => {
        const wrapper = mount(CondicionalCompositionComponent);
        const button = wrapper.find('button');
        await button.trigger('click');
        await button.trigger('click');
        expect(wrapper.find('p').exists()).toBe(false);
    });
});