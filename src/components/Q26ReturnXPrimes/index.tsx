const isPrime = (num: number): boolean => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

interface IQ26ReturnXPrimesProps {
    value: number;
}

const Q26ReturnXPrimes: React.FC<IQ26ReturnXPrimesProps> = ({ value }) => {
    const primes = [];
    let findPrime = 0;
    let countPrime = 0;

    while (countPrime < value) {
        findPrime += 1;
        if (isPrime(findPrime)) {
            primes.push(findPrime);
            countPrime += 1;
        }
    }

    return <span>{primes}</span>;
};

export default Q26ReturnXPrimes;
