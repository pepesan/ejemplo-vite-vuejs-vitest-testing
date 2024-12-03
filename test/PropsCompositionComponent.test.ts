import { mount } from '@vue/test-utils';
import PropsCompositionComponent from '../src/components/PropsCompositionComponent.vue';
import {describe, test, expect} from "vitest";

describe('MiComponente', () => {

    test('renders the correct message with 2 props', () => {
        const wrapper = mount(PropsCompositionComponent, {
            props: {
                title: 'Hello, Vitest!',
                numero: 2
            },
        });
        // console.log("find(p): "+ JSON.stringify(wrapper.props()))
        expect(wrapper.props().title).toBe('Hello, Vitest!')
        expect(wrapper.props().numero).toBe(2)
        expect(wrapper.find('h3').text()).toBe('El número es: 2');
        expect(wrapper.find('h2').text()).toBe('El mensaje recibido es: Hello, Vitest!');
    });

    test('renders the correct message with only one prop', () => {
        const wrapper = mount(PropsCompositionComponent, {
            props: {
                title: 'Hello, Vitest!'
            },
        });
        // console.log("find(p): "+ JSON.stringify(wrapper.props()))
        expect(wrapper.props().title).toBe('Hello, Vitest!');
        expect(wrapper.props().numero).toBe(PropsCompositionComponent.props.numero.default);
        expect(wrapper.find('h3').text()).toBe('El número es: 0');
        expect(wrapper.find('h2').text()).toBe('El mensaje recibido es: Hello, Vitest!');
    });


});
