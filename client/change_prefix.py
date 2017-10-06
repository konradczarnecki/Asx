import fileinput
import sys

name = sys.argv[1]

with fileinput.FileInput(files='dist/index.html', inplace=True) as file:
  for line in file:
    print(line.replace('src="', 'src="' + name + '/'))
