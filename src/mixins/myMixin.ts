export const myMixin = {
    data() {
        return {
            message: 'Hola desde el mixin'
        };
    },
    methods: {
        saludar(this: { message: string }) {
            console.log(this.message);
        }
    }
};
