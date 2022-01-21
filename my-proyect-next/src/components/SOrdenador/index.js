export default class SOrdenador {

    constructor({ data,  }) {
        this.data = data;
    }
    ordernarObject(arrProps) {
        if (!this.data) {
            return [];
        }
        var arr = Object.keys(this.data);
        console.log(arr)
        if (arr.length <= 0) {
            return [];
        }
        // var ordInt = (order == "asc" ? 1 : -1);


        var instance = this;
        arr.sort((a, b) => {
            // 0 iguales , 1 mayor ,  -1 menor
            var peso = 0;
            for (let i = 0; i < arrProps.length; i++) {
                const prop = arrProps[i];

                var prioridad = prop.peso || arrProps.length - i;
                var ordInt = (prop.order == "asc" ? 1 : -1);

                var valA = instance.data[a];
                var valB = instance.data[b];
                var keys = prop.key.split("/");
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if (!valA[key]) {
                        valA = 0;
                    } else {
                        valA = valA[key];
                    }
                    if (!valB[key]) {
                        valB = 0;
                    } else {
                        valB = valB[key];
                    }
                }

                peso += (valA < valB) ? (-1 * prioridad * ordInt) : (valA > valB) ? (1 * prioridad * ordInt) : 0;
            }
            return (peso < 0) ? (-1) : (peso > 0) ? (1) : 0;
            // 
        })
        return arr;
    }
    ordernarArr({ key, order }) {
        return [];
    }
}
