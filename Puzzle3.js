n = 78

function PrimeNumber(n) {
    for (i = 2; i < n; i += 1) {
        if (n % i == 0) return 'notprime'
        if (n % i != 0) return 'prime'
    }
}

result = []

if (PrimeNumber(n) == 'prime') {

    console.log('n is prime')

    console.log(n)
}

else {
    for (i = 2; i < n; i += 1) {
        if (n % i == 0 && PrimeNumber(i) == 'prime') {

            result.push(n)
        }

    }
}

result.push(1)

console.log('bob')

result.sort()[-1]
