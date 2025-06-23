#!/bin/bash

mkdir -p output

i=1
for f in $(ls *.mp4 | sort); do
    newname=$(printf "video_%02d.mp4" $i)
    echo "Processing $f -> $newname"

    ffmpeg -i "$f" \
        -c:v libx264 \
        -b:v 2000k \
        -preset slow \
        -movflags +faststart \
        -an \
        -y "output/$newname"

    ((i++))
done
