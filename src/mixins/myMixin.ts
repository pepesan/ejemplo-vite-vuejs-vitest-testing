export const myMixin = {
    data() {
        return {
            message: 'Hola desde el mixin'
        };
    },
    methods: {
        saludar() {
            console.log(this.message);
        }
    }
};
