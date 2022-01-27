function sLargest() {
    const arr = [1, 5, 4, 9, 8];
    const def = arr.sort((a, b) => b - a);
    console.log(def[1]);
}
sLargest()