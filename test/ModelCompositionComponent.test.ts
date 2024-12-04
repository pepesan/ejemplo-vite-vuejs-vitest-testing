import { mount } from '@vue/test-utils';
import {describe, test, expect} from "vitest";
import ModelCompositionComponent from "../src/components/ModelCompositionComponent.vue";

describe('MyComponent', () => {
    test('should render the correct message and initial count', async () => {
        const wrapper = mount(ModelCompositionComponent);

        const input = wrapper.find('input#campo');

        await input.setValue('Hola, mundo!');

        expect(wrapper.find('p#mensaje').text()).toBe('El valor actual es: Hola, mundo!');
    });
});
