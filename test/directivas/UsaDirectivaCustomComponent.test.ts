import { mount } from '@vue/test-utils';
import UsoDirectivaCustomComponent from '../../src/components/directivas/UsaDirectivaCustomComponent.vue';
import vYellowBackground from '../../src/directives/v-yellow-background';
import vRedBackground from '../../src/directives/v-red-background';

describe('MyComponent.vue', () => {
    test('aplica la directiva v-yellow-background correctamente', () => {
        const wrapper = mount(UsoDirectivaCustomComponent, {
            global: {
                directives: {
                    'yellow-background': vYellowBackground,
                    'red-background': vRedBackground
                }
            }
        });

        const div = wrapper.find('div#amarillo');
        expect(div.element.style.backgroundColor).toBe('yellow');
    });
    test('aplica la directiva v-red-background correctamente', () => {
        const wrapper = mount(UsoDirectivaCustomComponent, {
            global: {
                directives: {
                    'yellow-background': vYellowBackground,
                    'red-background': vRedBackground
                }
            }
        });

        const div = wrapper.find('div#rojo');
        expect(div.element.style.backgroundColor).toBe('red');
    });
});
