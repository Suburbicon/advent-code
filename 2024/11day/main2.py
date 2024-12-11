def trans(n):
    if n == 0:
        return [1]
    s = str(n)
    if len(s) % 2 == 0:
        mid = len(s) // 2
        return [int(s[:mid]), int(s[mid:])]
    return [n * 2024]


def blink(counts):
    new = {}
    for s, c in counts.items():
        print(s)
        for ns in trans(s):
            new[ns] = new.get(ns, 0) + c
    return new


c = {}
for n in map(int, next(open('test.txt')).split()):
    c[n] = c.get(n, 0) + 1

for _ in range(6):
    c = blink(c)
    print(c)

print(c.values())
print(sum(c.values()))