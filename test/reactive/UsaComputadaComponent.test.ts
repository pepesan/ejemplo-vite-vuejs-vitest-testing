import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import UsaComputadaComponent from '../../src/components/reactive/UsaComputadaComponent.vue';

describe('MensajeComponent', () => {
    test('debe mostrar el mensaje en mayúsculas correctamente', async () => {
        const wrapper = mount(UsaComputadaComponent);
        const input = wrapper.find('input');

        // Establecer el valor del input
        await input.setValue('hola mundo');

        // Esperar a que el DOM se actualice
        await wrapper.vm.$nextTick();

        // Comprobar el mensaje original
        const mensajeOriginal = wrapper.find('p:nth-of-type(1)');
        expect(mensajeOriginal.text()).toBe('Mensaje original: hola mundo');

        // Comprobar el mensaje en mayúsculas
        const mensajeMayusculas = wrapper.find('p:nth-of-type(2)');
        expect(mensajeMayusculas.text()).toBe('Mensaje en mayúsculas: HOLA MUNDO');
    });
});
