import { mount } from '@vue/test-utils';
import ListadoCompositionComponent from '../src/components/ListadoCompositionComponent.vue';

describe('ItemList', () => {
    it('should render a list of items based on the prop', () => {
        const items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
        ];
        const wrapper = mount(ListadoCompositionComponent, {
            props: { items },
        });

        const listItems = wrapper.findAll('li');
        expect(listItems.length).toBe(items.length);
        expect(listItems[0].text()).toBe('Item 1');
        expect(listItems[1].text()).toBe('Item 2');
    });
});