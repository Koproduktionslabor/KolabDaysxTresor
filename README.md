# Strudel Workshop Kolab-Days

## Table of contents:

- load samples
- bank function
- create sequences
- load synths
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
