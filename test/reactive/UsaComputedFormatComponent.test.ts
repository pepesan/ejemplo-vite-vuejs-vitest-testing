import { mount } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import UsaComputedFormatComponent from '../../src/components/reactive/UsaComputedFormatComponent.vue';

describe('FechaComponent', () => {
    test('debe mostrar la fecha formateada correctamente', () => {
        // Mock de la fecha actual
        const mockDate = new Date('2023-01-01T00:00:00');
        vi.setSystemTime(mockDate);

        const wrapper = mount(UsaComputedFormatComponent);

        // Obtener el párrafo que muestra la fecha
        const fechaParrafo = wrapper.find('p');

        // Obtener la fecha formateada esperada
        const fechaEsperada = mockDate.toLocaleDateString();

        expect(fechaParrafo.text()).toBe(`Fecha actual: ${fechaEsperada}`);

        // Restaurar el tiempo real
        vi.useRealTimers();
    });
});
