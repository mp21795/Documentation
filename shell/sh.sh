# count
grep ${word} ${file} | wc -l

# grep single word
grep ${word} ${file}

# grep regEx
grep -oP ${regEx} ${file}