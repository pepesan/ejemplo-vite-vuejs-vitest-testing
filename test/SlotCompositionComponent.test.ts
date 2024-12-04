import {mount} from '@vue/test-utils';
import SlotCompositionComponent from '../src/components/SlotCompositionComponent.vue';

describe('ComponenteSlot', () => {
    it('debe renderizar el título correctamente', () => {
        const wrapper = mount(SlotCompositionComponent);
        expect(wrapper.text()).toContain('Componente Slot');
    });

    it('debe renderizar el contenido del slot', () => {
        const wrapper = mount(SlotCompositionComponent, {
            slots: {
                default: 'Contenido del slot'
            }
        });
        expect(wrapper.text()).toContain('Contenido del slot');
    });
});