grid = open('./input.txt').read().splitlines()

empty_rows = [r for r, row in enumerate(grid) if all(ch == "." for ch in row)]
empty_cols = [c for c, col in enumerate(grid) if all(ch[c] == "." for ch in grid)]

# print(empty_cols)

points = [(r, c) for r, row in enumerate(grid) for c, ch in enumerate(row) if ch == "#"]
# print(points)

total = 0
scale = 1000000

for i, (r1, c1) in enumerate(points):
    for (r2, c2) in points[:i]:
        for r in range(min(r1, r2), max(r1, r2)):
            total += scale if r in empty_rows else 1
        for c in range(min(c1, c2), max(c1, c2)):
            total += scale if c in empty_cols else 1

print(total)