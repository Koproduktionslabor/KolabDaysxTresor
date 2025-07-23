//p = new P5({mode: 'WEBGL'}) 
p.hide() //hide p5js canvas.


s0.init({
	src: p.canvas
})

solid()
	.layer(src(s0)
		.saturate(0)
		.brightness(1)
		.mult(voronoi(30, 2, 20)
			.rotate(() => time)
			.thresh(0.1)
			.blend(solid(1, 1, 1, 0.01), 0.01)
			.modulate(src(s0)))
		.scale(() => a.fft[0] * 2 + 1))
//.repeat(2,2,0.5)
	// .modulate(o0,()=>Math.sin(time/4)*0.1)
	.blend(src(o0), [0.75, 0.82].ease())
	.add(src(o0)
		.scrollX(0.001), 0.21)
	.out()


src(o0)
//.modulateScale(shape(99,0.1,0.9),-0.5)
  //.modulate(noise(300,2),[0,0,0,0.1].smooth())
  .modulate(src(o1),[0,0.1].smooth())
  .out(o1)

render(o1)



//p5js script
p.draw = () => {
	p.background(0, 0, 0, 0)
	//p.noFill()
	//p.stroke(255)
	p.normalMaterial()
	p.push()
	p.rotateY(time / 2)
	p.sphere(100)
	p.pop()
	p.push()
	p.rotateX(time)
	p.rotateY(time)
	p.torus(200, 30)
	p.pop()
	p.push()
	p.rotateX(time * -1)
	p.rotateY(time - 1)
	p.torus(250, 20)
	p.pop()
   	p.push()
	p.rotateX(time * -1)
	p.rotateY(time - 1)
	p.torus(width, 50)
	p.pop()
}
