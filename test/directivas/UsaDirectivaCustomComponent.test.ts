import { mount } from '@vue/test-utils';
import UsoDirectivaCustomComponent from '../../src/components/directivas/UsaDirectivaCustomComponent.vue';
import vYellowBackground from '../../src/directives/v-yellow-background';

describe('MyComponent.vue', () => {
    it('aplica la directiva v-yellow-background correctamente', () => {
        const wrapper = mount(UsoDirectivaCustomComponent, {
            global: {
                directives: {
                    'yellow-background': vYellowBackground
                }
            }
        });

        const div = wrapper.find('div');
        expect(div.element.style.backgroundColor).toBe('yellow');
    });
});
