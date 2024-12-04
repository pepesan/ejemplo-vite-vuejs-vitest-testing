import {mount, shallowMount} from '@vue/test-utils';
import PartidosAxiosComponent from "../../src/components/httprequest/PartidosAxiosComponent.vue";
import {expect, vi } from "vitest";
import axios from 'axios';
import flushPromises from 'flush-promises'; // Importa flushPromises
// Mock de axios
vi.mock('axios');

describe('Resultados', () => {
    it('should fetch data and display results', async () => {
        const wrapper = mount(PartidosAxiosComponent);
        expect(wrapper.text()).toContain('Cargando resultados...');
    });

    it('muestra un error si la solicitud falla', async () => {
        // Simulamos un error en la solicitud
        axios.get.mockRejectedValueOnce(new Error('Error de red'));

        const wrapper = mount(PartidosAxiosComponent);

        // Esperamos a que se resuelvan todas las promesas y actualizaciones reactivas
        await flushPromises();

        expect(wrapper.text()).toContain('Error al cargar los datos: Error de red');
    });

    it('muestra la lista de partidos cuando los datos se cargan correctamente', async () => {
        // Simulamos una respuesta exitosa
        axios.get.mockResolvedValueOnce({
            data: [
                { nombre: 'Partido 1', dipu: 100, imagen: 'partido1.png' },
                { nombre: 'Partido 2', dipu: 200, imagen: 'partido2.png' },
            ],
        });

        const wrapper = mount(PartidosAxiosComponent);

        // Esperamos a que se resuelvan todas las promesas y actualizaciones reactivas
        await flushPromises();

        // Verificamos que el estado de carga desapareció
        expect(wrapper.text()).not.toContain('Cargando resultados...');

        // Verificamos que se muestren los partidos
        expect(wrapper.text()).toContain('Partido 1: 100 diputados');
        expect(wrapper.text()).toContain('Partido 2: 200 diputados');

        // Verificamos que las imágenes estén presentes
        const images = wrapper.findAll('img');
        expect(images.length).toBe(2);
        expect(images[0].attributes('src')).toContain('partido1.png');
        expect(images[1].attributes('src')).toContain('partido2.png');
    });
});