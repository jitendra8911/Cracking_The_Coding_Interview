export class CountStairs {
    runtime: number;
    constructor() {
        this.runtime = 0;
    }


    countStairsUsingTopDownApproach(n: number) {
        return this.countStairsRecursively(n, []);
    }

    private countStairsRecursively(n: number, memo: number[]) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        if (!memo[n]) {
            this.runtime++;
            memo[n] = this.countStairsRecursively(n - 1, memo) + this.countStairsRecursively(n - 2, memo) +
                this.countStairsRecursively(n - 3, memo);
        }

        return memo[n];
    }

    counStairsUsingBottomUpApproach(n: number) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (n === 2) return 1;
        if (n === 3) return 2;

        let numberOfWaysToReachFirstStep: number = 1;
        let numberOfWaysToReachSecondStep: number = 1;
        let numberOfWaysToReachThirdStep: number = 2;
        let numberOfWaysToReachI: number = 0;

        for(let i: number = 4; i <= n; i++) {
            this.runtime++;
            numberOfWaysToReachI = numberOfWaysToReachFirstStep + numberOfWaysToReachSecondStep + numberOfWaysToReachThirdStep;
            numberOfWaysToReachFirstStep = numberOfWaysToReachSecondStep;
            numberOfWaysToReachSecondStep = numberOfWaysToReachThirdStep;
            numberOfWaysToReachThirdStep = numberOfWaysToReachI;
        }

        return numberOfWaysToReachI;
    }
}

let cs = new CountStairs();
console.log(cs.counStairsUsingBottomUpApproach(6));
console.log('runtime is ', cs.runtime);
