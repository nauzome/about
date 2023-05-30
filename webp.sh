#!/bin/sh
# license @ https://qiita.com/tomokei5634/items/64b0f0b2246987936c6f
cd public
Files=$(find . -type f -iname '*'.jpg -o -iname '*'.png)
for File in $Files
do
    echo $File
    cwebp -preset photo -metadata icc -sharp_yuv -o $File".webp" -progress -short $File
done