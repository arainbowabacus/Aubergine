n = 600851475143

function PrimeNumber(n) {
    for (i = 2; i < n; i += 1) {
        if (n % i == 0) return 'notprime'

    }
}

result = []

console.log(PrimeNumber(n))

if (PrimeNumber(n) != 'notprime') {

    console.log('solved')
}

else {
    for (a = 2; a < n; a += 1) {
        if (n % a == 0 && PrimeNumber(a) != 'notprime') {

            console.log(a)

            result.push(a)
        }

    }
}

console.log(result)

console.log(result.sort()[result.length - 1])
