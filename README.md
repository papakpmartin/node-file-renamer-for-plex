# node-file-renamer-for-plex

Like Wile E. Coyote, I had a great idea. I would rip a bunch of my Looney Tunes Collections DVDs, label them faithfully with the episode name, and drop them into Plex.

Of course, this failed. Plex is [very picky abut filenames](https://support.plex.tv/articles/naming-and-organizing-your-tv-show-files/). And there was no reference to the DVD collections from which I could find a season/episode reference to name these by.

So I asked on Reddit, and someone pointed me to this [canonical list of Looney Tunes episodes](https://thetvdb.com/series/looney-tunes/allseasons/official), which was wonderful, but I'd have a lot of renaming to do.

Also, I have some NodeJS work coming up, and it's been a while since I've worked with that, so...

## Two steps to rename the files

### First, gather a canonical reference

```> node fetchEpisodes```

### Then rename the files

```> node renameFiles FullPathToTheDirectoryHoldingTheFiles```

## Notes

* You'll need a JWT from thetvdb.com to use their API. See their site... it's easy.
* Yes, I hardcoded the series ID, and yes, that could be an arg. Good thinking! Please do!
* **The actual file moving bit is commented out** so you'll see what _would_ happen in the log. If that looks good, then uncomment that bit and rerun.