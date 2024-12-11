infile = 'data.txt'
D = map(int, open(infile).read().strip().split(' '))
print(D)
stones = [
  D
]

def trans(s):
		if s == 0:
				return [1]
		elif len(str(s)) % 2 == 0:
				middle_index = len(str(s)) // 2
				return [int(str(s)[0:middle_index]), int(str(s)[middle_index:len(str(s))])]
		else:
				return [s * 2024]

def blink(counts):
	new = {}
	for s, c in counts.items():
		for ns in trans(s):
			new[ns] = new.get(ns, 0) + c
	return new

c = {}

for n in D:
	c[n] = c.get(n, 0) + 1

for _ in range(75):
	c = blink(c)

print(sum(c.values()))
