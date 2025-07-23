# Strudel Workshop Kolab-Days
<img width="853,3" height="533,3" alt="Screenshot 2025-07-12 155911" src="https://github.com/user-attachments/assets/60898389-0d1d-4ab7-bddd-47b7d0d8e359" />


documentation writen by [@flordefuego](https://github.com/flordefuego) based in personal learning and [Strudel official documentation](https://strudel.cc/workshop/getting-started/)

## Table of contents:

- [Load samples](#load-samples)
- [Lank function](#bank-function)
- [Create sequences](#create-sequences)
- [Play notes](#play-notes)
- [Generate automate scales](#generate-automate-scales)
- [Combine samples and notes](#combine-samples-and-notes)
- [How to use sliders](#how-to-use-sliders)
- [Visualisation](#visualisation)
- [Effects](#effects)
- [Mask function](#mask-function)
- [Set bpm](#set-bpm)
- [Load external samples](#load-external-samples)
- [Bonus: load Hydra](#bonus-load-hydra)

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

## Bank function

It is also possible to access to a folder that contains this samples and use them with the ``.bank()`` function like this:

``$:s("bd hh sd oh").bank("RolandTR909")``

***
## Create sequences

As you already can see from the previous examples, the more samples you accumulate in one track, ***the faster the sounds will run***. This order and ammount of samples also ***affects the tempo***.

``$:s("bd hh sd oh")``  will sound like 4/4

``$:s("bd hh sd")`` meanwhile this will sound more like 3/4

When you combine different lines of code/tracks with different timing you can get [polyrhytmic patterns](https://en.wikipedia.org/wiki/Polyrhythm).

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

# Generate automate scales

``$:n("<1 0> 2 5 <[3,8] [7,9]>").scale("C:minor").sound("piano")``

``$: n("<1 0> 2 5 <[3,8] [7,9]>").scale("<C:minor G2:minor:pentatonic>").sound("piano")``

[list of scales](https://pulse.berklee.edu/scales/index.html)

## Elongate with @

``$: note("c@3 eb").sound("gm_acoustic_bass")``

``$:n("0@2 [4 3 5 7]").scale("<C:mixolydian>").sound("piano")``

``$:n("[0@2 0] [4 3@2 5@2 7]").scale("<A:minor:pentatonic>").sound("piano")``

## Replicate using !

``$:n("0!2 [4 3 5 7]").scale("<C:mixolydian>").sound("piano")``

## Arpegios

## Chords

Using chord symbols but the voicings will be automatically generated with smooth voice leading, minimizing jumps. It is inspired by the way a piano or guitar player would pick chords to accompany a song. (From Strudel documentation) 

``$:chord(`<Cm D7 Ab Cm>`).voicing().sound("piano")``

### Arpeggios

``$:n("0 3 1 2").chord("<Cm D7 Ab Cm>").voicing().sound("piano")``

# Combine samples and notes
``$:s(`[bd]*3, ~ hh, [ch rim]*2`).bank("RolandTR909")``

``$: note("E2 D2 C2 A2").sound("triangle").gain(0.5)``

``$: note("[<A2 A4> A3 D3 G3 E3 <C4 C5>]").sometimes(x=>x.fast(2)).room(0.3).gain(0.7)``

[more info about chords and voicing here](https://strudel.cc/understand/voicings/#what-is-a-chord)

***
# Effects

<img width="720" height="611" alt="image" src="https://github.com/user-attachments/assets/c3b8a11a-3936-48c7-b9df-ca7514bd822d" />


There are plenty of effects in Strudel, and this depends on what style you want to achieve/generate.

Here there are some ideas, but the combinations and possibilities are wide...

Reverb

room sets levels of reverb

``$:s("bd hh").room("<0.5 0 1 0.2>")``

delay

``$:s("bd hh").delay("<0 0.5 1 2>")``

crush (bit crusher effect)

``$:s("bd hh").crush("<1 0.5 16 8>")``

degradeBy -removes randomly events from the patterns, making in this way sound more 'organic' or imperfect

``$:s("hh*8").degradeBy(0.2)``

speed -changes the speed of the sample and the pitch

``$:s("rim*8").speed("1 0.5 2 0.3 -1 -0.1 -3")`` 

# How to use sliders

slider(val,max,min)

Generate UI sliders to control your music code

``$:s("bd*4").lpf(slider(100,100,5000))``

Slider party

``all(x=>x.lpf(slider(2770.5,100,5000).room(0.1)))``

``$:s("[~ bd]*4").bank("RolandTR909").room(0.2)`` 

``$:s(`[<hh hh*2 cp> ~]*<2 4>`).bank("rolandtr808").gain(slider(0,0,0.5))``

``$:n("[0@2 3 5 1 4 3@2 5@2 7]*2").scale("<A2:minor>").s('triangle').delay(0.1).gain(slider(0.5,0,0.5))``

``$:n("[0 3 5 1 4 3 5 7]").scale("<A3:minor>").s('triangle').delay(0.5).gain(slider(0,0,0.5))``

# Visualisation

there are different ways of visualisation and one can use this for each line or for the whole code

``$:n("[0@2 3 5 1 4 3@2 5@2 7]*2").scale("<A2:minor>").s('triangle').delay(0.1).gain(slider(0.5,0,0.5))._pitchwheel()``

or

``all(x=>x.lpf(slider(2770.5,100,5000).room(0.1).color("cyan").punchcard({vertical: 1})))``

``$:s("[~ bd]*4").bank("RolandTR909").room(0.2) ``

``$:s(`[<hh hh*2 cp> ~]*<2 4>`).bank("rolandtr808").gain(slider(0,0,0.5))``


# Mask function

Mask it's useful for making silence intervals

``$:n("[0 3 5 1 4 3 5 7]").scale("<A3:minor>").s('triangle').delay(0.5).mask("<1@2 0@1>")``

``$:n("[0 3 5 1 4 3 5 7]*2").scale("<A5:minor>").s('triangle').delay(0.5).mask("<0 1>") ``

# Set bpm

Strudel uses CPM (cycles per minute)

``setcpm(120)``

When you devide per 4, you would get something like 120 pmb in 4 cycles which would be 4/4.

``setcpm(120/4)``

``$:s("bd*4")``

``$:s("rim*3")``  (this would sound like 3/4)



# Load external samples

[load external samples](https://strudel.cc/learn/samples/#loading-custom-samples)

# Bonus: Load Hydra

``await initHydra()``

``let pattern = sine.range(10,100).slow(8)``

``voronoi().blend(voronoi(H(pattern),10).thresh(0.5)).out(o0)``

``
$:n("[0 3 5 1 4 3 5 7]").scale("<A3:minor>").s('triangle').delay(0.5).mask("<1@2 0@1>")
``

``$:n("[0 3 5 1 4 3 5 7]*2").scale("<A5:minor>").s('triangle').delay(0.5).mask("<0 1>")``

``$:s("[~ bd]*4").bank("RolandTR909").room(0.2)``

``$:s(`[<hh hh*2 cp> ~]*<2 4>`).bank("rolandtr808").gain(slider(0,0,0.5))``
