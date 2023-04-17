music.setVolume(255)
basic.forever(function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
})
