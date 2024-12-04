import { describe, it, expect} from 'vitest';
import { mount } from '@vue/test-utils';
import YupValidationCompositionComponent from '../../src/components/forms/YupValidationCompositionComponent.vue';

describe('LoginForm', () => {
    it('should display error messages for invalid input', async () => {
        const wrapper = mount(YupValidationCompositionComponent);
        const form = wrapper.find('form');

        // Simular envío del formulario sin completar los campos
        await form.trigger('submit');

        expect(wrapper.find('.invalid-feedback').text()).toContain('El nombre debe tener al menos 3 caracteres');
    });

    it('should submit the form successfully with valid data', async () => {
        const wrapper = mount(YupValidationCompositionComponent);
        const form = wrapper.find('form');
        const input = form.find('input[type="text"]');
        // Simular envío del formulario con datos válidos
        await input.setValue('John Doe');
        await form.trigger('submit');
        expect(wrapper.find('#resultado').text()).toBe('{"name":"John Doe"}');
    });

});