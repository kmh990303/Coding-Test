n = int(input())

isPrime = [True] * (n + 1)
isPrime[0] = False
isPrime[1] = False

for k in range(2, int(n ** 0.5) + 1):
    if isPrime[k]:
        for multiple in range(k * k, n + 1, k):
            isPrime[multiple] = False

primes = [i for i in range(n + 1) if isPrime[i]]

left, right = 0, 0
sum_val = 0
count = 0

while right < len(primes) or sum_val >= n:
    if sum_val < n:
        sum_val += primes[right]
        right += 1
    elif sum_val > n:
        sum_val -= primes[left]
        left += 1
    else:
        count += 1
        sum_val -= primes[left]
        left += 1

print(count)