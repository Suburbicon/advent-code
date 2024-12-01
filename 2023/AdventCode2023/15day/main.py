

sequence = open('./input.txt').read().split(',')
# sequence = ['rn=1','cm-','qp=3','cm=2','qp-','pc=4','ot=9','ab=5','pc-','pc=6','ot=7']
result = 0

for seq in sequence:
	tmp = 0
	for sym in seq:
		code = ord(sym)
		tmp += code
		tmp = tmp * 17 % 256
	result += tmp

print(result)
