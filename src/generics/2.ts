/*type AllType = {
name: string;
position: number;
color: string;
weight: number
}

function compare (top, bottom): AllType {
return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
}
}*/

type AllType = {
name: string;
position: number;
color: string;
weight: number;
};

function compare<K extends keyof AllType>(
top: Pick<AllType, K>,
bottom: Pick<AllType, K>
): AllType {
  const result: AllType = {} as AllType; // 
for (const key of Object.keys(top) as K[]) {
    result[key] = top[key] || bottom[key];
}

return result;
}

console.log (compare({ name: "Max", position: 1, color: "red" }, { name: "Max", position: 2, color: "blue" }))