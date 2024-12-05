import { mount } from '@vue/test-utils';
import CounterComponent from '../../src/components/composables/UseCounterComposableComponent.vue';

test('incrementa el contador al hacer clic en el botón', async () => {
    const wrapper = mount(CounterComponent);

    expect(wrapper.text()).toContain('Contador: 0');

    await wrapper.find('button').trigger('click');

    expect(wrapper.text()).toContain('Contador: 1');
});
