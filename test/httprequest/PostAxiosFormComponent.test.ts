// FormularioComponent.spec.ts
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import PostAxiosFormComponent from '../../src/components/httprequest/PostAxiosFormComponent.vue';
import flushPromises from "flush-promises";

// Mock de axios
vi.mock('axios');

describe('FormularioComponent', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(PostAxiosFormComponent);
        // Restablecer mocks antes de cada prueba
        vi.resetAllMocks();
    });

    it('debe renderizar correctamente el formulario', () => {
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('input#title').exists()).toBe(true);
        expect(wrapper.find('textarea#body').exists()).toBe(true);
        expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
    });

    it('debe mostrar errores de validación si los campos están vacíos', async () => {
        await wrapper.find('form').trigger('submit.prevent');

        expect(wrapper.find('.error').exists()).toBe(true);
        expect(wrapper.find('#errors-title').text()).toContain('El título es obligatorio');
        expect(wrapper.find('#errors-body').text()).toContain('El contenido es obligatorio');
    });

    it('debe enviar el formulario correctamente y mostrar el mensaje de éxito', async () => {
        const mockResponse = { data: { id: 101, title: 'Título de prueba', body: 'Contenido de prueba' } };
        vi.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse);

        await wrapper.find('input#title').setValue('Título de prueba');
        await wrapper.find('textarea#body').setValue('Contenido de prueba');

        await wrapper.find('form').trigger('submit.prevent');

        // Esperamos a que se resuelvan todas las promesas y actualizaciones reactivas
        await flushPromises();

        expect(axios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
            title: 'Título de prueba',
            body: 'Contenido de prueba',
        });

        expect(wrapper.find('.success').exists()).toBe(true);
        expect(wrapper.find('.success p').text()).toBe('¡Formulario enviado exitosamente!');
        expect(wrapper.find('pre').text()).toContain('"id": 101');
    });

    it('debe manejar errores al enviar el formulario y mostrar el mensaje de error', async () => {
        const mockError = new Error('Error de red');
        vi.spyOn(axios, 'post').mockRejectedValueOnce(mockError);

        await wrapper.find('input#title').setValue('Título de prueba');
        await wrapper.find('textarea#body').setValue('Contenido de prueba');

        await wrapper.find('form').trigger('submit.prevent');

        // Esperamos a que se resuelvan todas las promesas y actualizaciones reactivas
        await flushPromises();

        expect(axios.post).toHaveBeenCalled();

        expect(wrapper.find('.submit-error').exists()).toBe(true);
        expect(wrapper.find('.submit-error p').text()).toBe(
            'Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.'
        );
    });
});
