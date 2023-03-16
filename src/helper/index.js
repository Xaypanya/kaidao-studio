export function generateSequentialArray(num) {
    if(!num) return
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
}