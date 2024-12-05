// FormularioComponent.spec.ts
import { mount } from '@vue/test-utils';
import PostAxiosFormComponent from '../../src/components/httprequest/PostAxiosFormComponent.vue';
import axios from 'axios';
import { nextTick } from 'vue';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('FormularioComponent', () => {
    test('debe mostrar errores de validación cuando el formulario es inválido', async () => {
        const wrapper = mount(PostAxiosFormComponent);

        await wrapper.find('form').trigger('submit.prevent');
        await nextTick();

        expect(wrapper.text()).toContain('El título es obligatorio');
        expect(wrapper.text()).toContain('El contenido es obligatorio');
    });

    test('debe enviar el formulario cuando es válido', async () => {
        const wrapper = mount(PostAxiosFormComponent);

        mockedAxios.post.mockResolvedValue({ data: { success: true } });

        await wrapper.find('#title').setValue('Título de prueba');
        await wrapper.find('#body').setValue('Contenido de prueba');

        await wrapper.find('form').trigger('submit.prevent');

        expect(mockedAxios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
            title: 'Título de prueba',
            body: 'Contenido de prueba',
        });
    });
});
