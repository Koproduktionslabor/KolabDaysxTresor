//https://hydra.ojack.xyz/?code=JTBBJTBBdm9yb25vaSg1MCUyQzIlMkMyMCklMEEuYWRkKHZvcm9ub2koMTAlMkM1JTJDMTApLmx1bWEoMC4xKSklMEEuYWRkKG5vaXNlKDEpLnRocmVzaCgwLjElMkMwLjkpLmNvbG9yKDAuMyUyQzAuOCUyQzElMkMwLjIpJTJDMC41KSUwQS5ibGVuZChub2lzZSgyJTJDMikudGhyZXNoKDAuMSUyQzAuOSkuY29sb3IoMCUyQzAuNSUyQzAuOCkpJTBBLm1vZHVsYXRlKG9zYygxMCkua2FsZWlkKDk5KSklMEElMkYlMkYua2FsZWlkKDIpJTBBLmFkZChzcmMobzApLnNjcm9sbFkoMC4wMDEpJTJDMC45OCklMEEubW9kdWxhdGUoc3JjKG8wKSUyQzAuMDAxKSUwQS5ibGVuZChzcmMobzApLnNjcm9sbFgoMC4wMSklMkMwLjMpJTBBLm91dCgpJTBBJTBBJTBBJTBBc3JjKG8wKS5hZGQoc3JjKG8xKS5zY3JvbGxYKDAuMDAxKSUyQzAuOCkub3V0KG8xKSUwQSUwQSUwQXNyYyhvMSklMEElMjAlMkYlMkYlMjAubXVsdChub2lzZSgyJTJDMikudGhyZXNoKDAuMSUyQzAuNSkpJTBBJTIwJTIwLm91dChvMiklMEElMEFyZW5kZXIobzIpJTBB


voronoi(50,2,20)
.add(voronoi(10,5,10).luma(0.1))
.add(noise(1).thresh(0.1,0.9).color(0.3,0.8,1,0.2),0.5)
.blend(noise(2,2).thresh(0.1,0.9).color(0,0.5,0.8))
.modulate(osc(10).kaleid(99))
//.kaleid(2)
.add(src(o0).scrollY(0.001),0.98)
.modulate(src(o0),0.001)
.blend(src(o0).scrollX(0.01),0.3)
.out()



src(o0).add(src(o1).scrollX(0.001),0.8).out(o1)


src(o1)
 // .mult(noise(2,2).thresh(0.1,0.5))
.out(o2)

render(o2)
