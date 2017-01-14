export function popRandom(arr) {
    if (arr.length < 1) {
        return [[], null];
    }

    const index = Math.floor(Math.random() * arr.length);
    const val = arr[index];
    const postOp = [
        ...arr.slice(0, index),
        ...arr.slice(index + 1),
    ];

    return [
        postOp,
        val,
    ];
}

export function angleDiff(a, b) {
    const c = Math.abs(a - b);
    return Math.abs(((c + 180) % 360) - 180);
}
