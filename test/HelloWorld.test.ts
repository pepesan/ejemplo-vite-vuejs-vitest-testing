import { mount } from '@vue/test-utils';
import HelloWorld from '../src/components/HelloWorld.vue';
import {describe, test, expect} from "vitest";

describe('HelloWorld', () => {
    test('renders the correct message', async () => {
        // carga del componente en "pantalla"
        const wrapper = mount(HelloWorld,{
            props: {
                msg: 'Hello, Vitest!'
            }
        });
        const boton = await wrapper.find("button")
        // Comprobación del contenido del componente cargado
        expect(boton.text()).toBe("count is 0");
    });
    test('renders the correct message', async () => {
        // carga del componente en "pantalla"
        const wrapper = mount(HelloWorld,{
            props: {
                msg: 'Hello, Vitest!'
            }
        });
        const titulo = await wrapper.find("h1")
        // Comprobación del contenido del componente cargado
        expect(titulo.text()).toBe('Hello, Vitest!');
    });
    test('renders the correct message with 2 props', async () => {
        const wrapper = mount(HelloWorld, {
            props: {
                msg: 'Hello, Vitest!'
            }
        });
        const boton = await wrapper.find("button")
        await boton.trigger('click');
        expect(boton.text()).toBe("count is 1");
    })
});
