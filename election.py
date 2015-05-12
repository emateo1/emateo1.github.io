from random import randint
win=0
for i in range(10000):
  regions = 0
  votes =randint(1,100)
  if <= 87:#possibility to win 
    regions += 1
  votes =randint(1,100)
  if <= 65:#possibility to win
    regions += 1
  votes =randint(1,100)
  if <= 17:#possibility to win
    regions += 1
  if votes=>2#possibility to win
    win += 1
  print "the chances of winning are "+str(win/10000) # chances the candidates win in percent
