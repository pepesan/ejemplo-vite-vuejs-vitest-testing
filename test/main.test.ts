import {describe, test, expect} from 'vitest';

describe('test', () => {  
	test('test', async () => {      
		await expect(1).toBe(1);      
		expect(2).toBe(2);      
		expect(3).toBe(3);  
	})
});
