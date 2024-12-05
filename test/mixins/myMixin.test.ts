import { describe, it, expect } from 'vitest';
import { myMixin } from '../../src/mixins/myMixin';

describe('myMixin', () => {
    it('debería definir el mensaje "Hola desde el mixin"', () => {
        const instance = myMixin.data();
        expect(instance.message).toBe('Hola desde el mixin');
    });

    it('debería tener un método saludar que use el mensaje', () => {
        const mockConsole = vi.spyOn(console, 'log').mockImplementation(() => {});
        const instance = { ...myMixin.methods, message: 'Hola desde el mixin' };
        instance.saludar();
        expect(mockConsole).toHaveBeenCalledWith('Hola desde el mixin');
        mockConsole.mockRestore();
    });
});
