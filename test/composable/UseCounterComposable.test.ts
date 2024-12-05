import { useCounter } from '../../src/composables/useCounter';

test('incrementa el contador al llamar a increase', () => {
    const { counter, increase } = useCounter();

    expect(counter.value).toBe(0);

    increase();

    expect(counter.value).toBe(1);
});
