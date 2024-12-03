import { mount } from '@vue/test-utils';
import PropsCompositionComponent from '../src/components/PropsCompositionComponent.vue';
import {describe, test, expect} from "vitest";

describe('MiComponente', () => {

    test('renders the correct message', () => {
        const wrapper = mount(PropsCompositionComponent, {
            props: {
                title: 'Hello, Vitest!',
                numero: 2
            },
        });
        console.log("find(p): "+ JSON.stringify(wrapper.props()))
        expect(wrapper.find('h3').text()).toBe('El número es: 2');
    });


});
