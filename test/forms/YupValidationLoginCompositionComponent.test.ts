// tests/unit/LoginForm.spec.js
import { mount } from '@vue/test-utils';
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import YupValidationLoginCompositionComponent from '../../src/components/forms/YupValidationLoginCompositionComponent.vue';

describe('YupValidationLoginCompositionComponent.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(YupValidationLoginCompositionComponent);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('debería renderizar el formulario correctamente', () => {
        expect(wrapper.find('h2').text()).toBe('Iniciar Sesión');
        expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
    });

    test('debería inicializar con valores vacíos', () => {
        expect(wrapper.vm.form.username).toBe('');
        expect(wrapper.vm.form.password).toBe('');
    });

    test('debería mostrar errores de validación cuando los campos están vacíos', async () => {
        const form = wrapper.find('form');
        // Simular envío del formulario sin completar los campos
        await form.trigger('submit');

        expect(wrapper.find('.invalid-feedback').exists()).toBe(true);
        expect(wrapper.findAll('.invalid-feedback').at(0).text()).toBe('El campo es obligatorio');
        expect(wrapper.findAll('.invalid-feedback').at(1).text()).toBe('El campo es obligatorio');
    });

    test('debería mostrar errores de validación para entradas inválidas', async () => {
        // Establecer valores inválidos
        await wrapper.find('#username').setValue('ab');
        await wrapper.find('#password').setValue('12345');

        const form = await wrapper.find('form');
        // Simular envío del formulario sin completar los campos
        await form.trigger('submit');

        expect(wrapper.findAll('.invalid-feedback').at(0).text()).toBe(
            'El usuario debe tener al menos 3 caracteres'
        );
        expect(wrapper.findAll('.invalid-feedback').at(1).text()).toBe(
            'La contraseña debe tener al menos 6 caracteres'
        );
    });

    test('debería enviar el formulario correctamente con datos válidos', async () => {
        // Espiar en console.log
        const consoleSpy = vi.spyOn(console, 'log');

        // Establecer valores válidos
        await wrapper.find('#username').setValue('usuario123');
        await wrapper.find('#password').setValue('contraseñaSegura');

        const form = await wrapper.find('form');
        // Simular envío del formulario sin completar los campos
        await form.trigger('submit');

        // Verificar que no hay errores
        expect(wrapper.find('.invalid-feedback').exists()).toBe(false);

        // Verificar que se muestra el mensaje de éxito
        expect(wrapper.find('#resultado').text()).toBe('Formulario enviado exitosamente');

        // Verificar que console.log fue llamado con los datos del formulario
        expect(consoleSpy).toHaveBeenCalledWith('Formulario enviado:', {
            username: 'usuario123',
            password: 'contraseñaSegura',
        });

        // Restaurar console.log
        consoleSpy.mockRestore();
    });
});
