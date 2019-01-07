echo public-hr | awk -F'-' '{print $2}'

echo public-hr | grep -oP "(?<=public-)+"