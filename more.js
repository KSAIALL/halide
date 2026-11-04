/* HALIDE — extra presets. Add new looks here; index.html never needs editing for them.
   Each preset: id (unique), name, cat (Colour Film | Cinematic | Vintage | Monochrome | My Presets),
   desc, a (adjustments, Lightroom-style numbers), hsl (r o y g a b p m: [hue, sat, lum]),
   split ({s:[hue,sat], h:[hue,sat], bal}), g ([grain amount, size, roughness]),
   fx ({dust:1, halation:1}), mono ([r,g,b] channel mix for black & white). */
(window.HALIDE_PRESETS = window.HALIDE_PRESETS || []).push(

{ id:'kodachrome', name:'Kodachrome', cat:'Colour Film',
  desc:'Dense slide-film colour: deep reds, saturated cobalt blues, warm punch.',
  a:{co:28,hi:-22,sh:10,wh:10,bl:-10,te:10,ti:2,vi:18,sa:10},
  hsl:{r:[0,30,-6],o:[0,10,0],y:[-6,14,0],g:[10,-15,-8],a:[0,10,0],b:[4,35,-14]},
  split:{s:[25,8],h:[45,10],bal:0}, g:[30,30,40] },

{ id:'crossprocess', name:'Cross Process', cat:'Vintage',
  desc:'Lab-gone-wrong chemistry: acid-green shadows, magenta highlights.',
  a:{co:34,hi:-10,sh:12,bl:4,te:-4,vi:20,sa:10},
  hsl:{y:[-10,25,0],g:[-20,20,0],b:[0,25,0],m:[0,20,0]},
  split:{s:[95,26],h:[320,22],bal:0}, g:[36,36,50] },

{ id:'cyanotype', name:'Cyanotype', cat:'Monochrome',
  desc:'Prussian-blue sun print. Cool, graphic, chemical.',
  a:{co:18,hi:-12,sh:14,wh:4,bl:8},
  split:{s:[218,48],h:[195,22],bal:0}, g:[22,28,32], mono:[.30,.59,.11] },

{ id:'albumen', name:'Albumen', cat:'Monochrome',
  desc:'A faded nineteenth-century print: cream paper, brown-gold tones.',
  a:{co:6,hi:-26,sh:22,wh:-12,bl:24},
  split:{s:[32,30],h:[42,24],bal:0}, g:[20,34,34], fx:{dust:1}, mono:[.35,.55,.10] },

{ id:'bleachbypass', name:'Bleach Bypass', cat:'Cinematic',
  desc:'Gritty and desaturated with hard contrast. Silver left in the print.',
  a:{co:42,hi:-30,sh:-4,wh:6,bl:-22,vi:-20,sa:-45},
  hsl:{r:[0,-10,0],o:[0,-18,0],y:[0,-30,0],g:[0,-50,0],b:[0,-30,0]},
  split:{s:[205,8],h:[45,6],bal:0}, g:[48,42,62] },

{ id:'neonrain', name:'Neon Rain', cat:'Cinematic',
  desc:'Wet-street night: violet shadows, pink highlights, electric cyan.',
  a:{ex:-.2,co:28,hi:-34,sh:8,bl:-26,te:-6,ti:10,vi:30,sa:4},
  hsl:{r:[0,14,0],o:[0,-8,0],y:[0,-40,-6],g:[0,-40,0],a:[10,34,6],b:[0,30,-6],p:[0,30,0],m:[-10,32,6]},
  split:{s:[262,34],h:[330,26],bal:0}, g:[30,30,40], fx:{halation:1} },

{ id:'arctic', name:'Arctic', cat:'Colour Film',
  desc:'Clean, bright and icy. Cold whites, pale skin, frosted blues.',
  a:{ex:.15,co:14,hi:-26,sh:18,wh:10,bl:6,te:-26,ti:-4,vi:6,sa:-16},
  hsl:{r:[0,-18,0],o:[0,-28,4],y:[0,-35,0],g:[10,-25,6],a:[0,14,12],b:[-6,18,10]},
  split:{s:[210,16],h:[190,8],bal:0}, g:[18,24,28] },

{ id:'verdant', name:'Verdant', cat:'Colour Film',
  desc:'Lush, mossy greens with a cool tint. Made for gardens and forests.',
  a:{co:12,hi:-22,sh:14,bl:6,te:4,ti:-22,vi:24,sa:4},
  hsl:{r:[0,-10,0],o:[0,-6,4],y:[12,26,6],g:[10,40,-4],a:[-10,10,0],b:[0,-10,0]},
  split:{s:[130,10],h:[60,10],bal:0}, g:[28,32,42] },

{ id:'rose', name:'Rosé', cat:'Vintage',
  desc:'Blush pinks and soft magentas with a gentle, milky fade.',
  a:{ex:.12,co:-6,hi:-28,sh:24,wh:-8,bl:20,te:-4,ti:24,vi:14,sa:-4},
  hsl:{r:[0,10,6],o:[0,-14,8],y:[0,-30,0],g:[0,-40,0],a:[0,-10,6],b:[8,-14,10],p:[0,10,6],m:[0,18,10]},
  split:{s:[335,14],h:[15,14],bal:0}, g:[20,28,34] }

);
