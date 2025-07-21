# Strudel Workshop Kolab-Days
<img width="853,3" height="533,3" alt="Screenshot 2025-07-12 155911" src="https://github.com/user-attachments/assets/60898389-0d1d-4ab7-bddd-47b7d0d8e359" />


documentation writen based in personal learning and Strudel official documentation

## Table of contents:

- load samples
- bank function
- create sequences
- play notes
- generate scales
- how to use sliders
- visualisation
- mask function
- set bpm
- load external samples

*** 

## Load samples

Strudel has its own folders with samples (audio files), one can also load external samples.

Type something such as:

``
$: s("insect")
``

The symbol ``$:`` it's generating like a track, if you would have multiple lines, then you would have ***multiple tracks***. 

The ``s`` stands for sound, which is refered to audio files/samples.

For example:

``$:s("insect numbers")``

``
$:s("metal casio numbers:1 space")
``

## Drum sounds [(Reference from Strudel documentation)](https://strudel.cc/workshop/first-sounds/#drum-sounds) 
<img width="600" height="452.5" alt="image" src="https://github.com/user-attachments/assets/eb66d538-9e9c-4db4-a9d5-2247569d0fc2" />


``$:s("bd hh sd oh")``

- bd = bass drum
- sd = snare drum
- rim = rimshot
- hh = hihat
- oh = open hihat
- lt = low tom
- mt = middle tom
- ht = high tom
- rd = ride cymbal
- cr = crash cymbal

### bank function

It is also possible to access to a folder that contains this samples and use them with the ``.bank()`` function like this:

``$:s("bd hh sd oh").bank("RolandTR909")``

***
## Create sequences

As you already can see from the previous examples, the more samples you accumulate in one track, ***the faster the sounds will run***. This order and ammount of samples also ***affects the tempo***.

``$:s("bd hh sd oh")``  will sound like 4/4

``$:s("bd hh sd")`` meanwhile this will sound more like 3/4

When you combine different lines of code/tracks with different timing you can get [polyrhitmic patterns](https://en.wikipedia.org/wiki/Polyrhythm).

Another interesting possibility is to interate samples, for example having one time in a cycle "bd" and the next one "hh":

For this we use the  < .. > (angle brackets):

``$:s("<bd hh>")``

The angle brackets are very useful for changing tempo or samples or everything at the same time 🫠

``$:s("<bd hh>")``

Add a rests in a sequence with ’-’ or ’~’

``$: s("<bd ~ sd oh>*4").bank("RolandTR909")``

Sub-Sequences with [brackets]

``$: s("<[bd cp] ~ sd oh [hh hh]>*6").bank("RolandTR909")``

Sub-Sub-Sequences with [[brackets]]

``$: s("<[bd [cp rim]] ~ sd oh [hh [hh rim]]>*6").bank("RolandTR909")``

Play sequences in parallel with comma

``$:s("<bd,sd><hh,rim>")``

Multiple Lines with backticks
``$:s(`[bd]*3, ~ hh, [ch rim]*2`).bank("RolandTR909")``

***
# Play notes
<img width="690" height="252" alt="image" src="https://github.com/user-attachments/assets/6f2ed043-3e98-43cc-ac29-346f8a81f523" />


with letters

``$: note("c e g b").s("piano")``

flat, sharp and different octaves are also possible

``$: note("c#4 eb3 gb2 a#5").sound("piano")``

Make patterns with sub-sequences 

``$: note("[[c#4 gb2]*2 [eb4 gb2]*2 [a#3 bb3]*2]").sound("gm_electric_guitar_muted")``

### automate scales

``$:n("<1 0> 2 5 <[3,8] [7,9]>").scale("C:minor").sound("piano")``

``$: n("<1 0> 2 5 <[3,8] [7,9]>").scale("<C:minor G2:minor:pentatonic>").sound("piano")``

[list of scales](https://pulse.berklee.edu/scales/index.html)

Elongate with @

``$: note("c@3 eb").sound("gm_acoustic_bass")``

``$:n("0@2 [4 3 5 7]").scale("<C:mixolydian>").sound("piano")``

``$:n("[0@2 0] [4 3@2 5@2 7]").scale("<A:minor:pentatonic>").sound("piano")``

Replicate using !

``$:n("0!2 [4 3 5 7]").scale("<C:mixolydian>").sound("piano")``

