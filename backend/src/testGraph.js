import { investmentGraph } from "./graph/investmentGraph.js";

const result = await investmentGraph.invoke({

    company: "Apple"

});

console.log(result);