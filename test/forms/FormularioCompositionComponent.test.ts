import { mount } from '@vue/test-utils';
import FormularioCompositionComponent from '../../src/components/forms/FormularioCompositionComponent.vue'; // Ajusta la ruta a tu componente
import { describe, it, expect, vi } from 'vitest';

describe('LoginForm', () => {
    it('should display an error message on invalid credentials', async () => {
        const wrapper = mount(FormularioCompositionComponent);
        const form = await wrapper.find('form');

        await form.find('input[type="text"]').setValue('user');
        await form.find('input[type="password"]').setValue('wrongpassword');
        await form.trigger('submit');

        expect(wrapper.find('p#form-error').text()).toBe('Credenciales incorrectas');
    });
});