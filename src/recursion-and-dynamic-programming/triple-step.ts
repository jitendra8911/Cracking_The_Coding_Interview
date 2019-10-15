export class CountStairs {
    runtime: number;
    constructor() {
        this.runtime = 0;
    }


 countStairs(n: number) {
    return this.countStairsRecursively(n, []);
}

 countStairsRecursively(n: number, memo: number[]) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    if (!memo[n]) {
        this.runtime ++;
        memo[n] = this.countStairsRecursively(n-1, memo) + this.countStairsRecursively(n-2, memo) +
         this.countStairsRecursively(n-3, memo);
    }

    return memo[n];
}
}

let cs = new CountStairs();
console.log(cs.countStairs(6));
console.log('runtime is ', cs.runtime);
