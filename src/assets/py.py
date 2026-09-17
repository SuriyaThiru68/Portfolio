arr = [5,0,0,2,0,8,0]

res = []
zero = 0
for i in arr:
    if i == 0:
        zero += 1
arr = [0]* zero+ [i for i in arr if i!=0]
print(arr)
