import {describe, test, expect, beforeEach, afterEach} from 'vitest';
import { mount } from '@vue/test-utils';
import YupValidationCompositionComponent from '../../src/components/forms/YupValidationCompositionComponent.vue';

describe('LoginForm', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(YupValidationCompositionComponent);
    });

    afterEach(() => {
        wrapper.unmount();
    });
    test('should display error messages for invalid input', async () => {
        const form = wrapper.find('form');

        // Simular envío del formulario sin completar los campos
        await form.trigger('submit');

        expect(wrapper.find('.invalid-feedback').text()).toContain('El campo es obligatorio');
    });

    test('should submit the form successfully with valid data', async () => {
        const form = wrapper.find('form');
        const input = form.find('input[type="text"]');
        // Simular envío del formulario con datos válidos
        await input.setValue('John Doe');
        await form.trigger('submit');
        expect(wrapper.find('#resultado').text()).toBe('{"name":"John Doe"}');
    });

});