const {
    Network,
    Layer,
    InputLayer,
    OutputLayer,
    FCLayer,
    ConvLayer,
    PoolLayer,
    Filter,
    Neuron,
    Module
} = require("jsnet").webassembly();

const data = [{
    "input": [0, 0],
    "output": [0]
}, {
    "input": [0, 1],
    "output": [0]
}, {
    "input": [1, 0],
    "output": [0]
}, {
    "input": [1, 1],
    "output": [1]
}];

global.onWASMLoaded = () => {

    const net = new Network({
        Module: Module,
        layers: [new InputLayer(2), new FCLayer(3), new OutputLayer(1)],
    });

    net.train(data, {
        epochs: 10000,
        log:false
    });

    console.log(net.forward([1,1]))

}