import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UsaMixinComponent from '../../src/components/mixins/UsaMixinComponent.vue';

describe('MyComponent', () => {
    it('debería renderizar el mensaje desde el mixin', () => {
        const wrapper = mount(UsaMixinComponent);
        expect(wrapper.text()).toContain('Hola desde el mixin');
    });

    it('debería llamar al método saludar al hacer clic en el botón', async () => {
        const mockConsole = vi.spyOn(console, 'log').mockImplementation(() => {});
        const wrapper = mount(UsaMixinComponent);

        await wrapper.find('button').trigger('click');

        expect(mockConsole).toHaveBeenCalledWith('Hola desde el mixin');
        mockConsole.mockRestore();
    });
});
