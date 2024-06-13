function loadingAnimetion(){
    gsap.from(".line h1",{
        y:150,
        stagger:0.2,
        duration:0.6,
        delay:0.5,
        });
    var tl = gsap.timeline();
    tl.from("#line1-page1, .line h2",{
        opacity:0,
        onStart:function(){
            var h5timer = document.querySelector("#line1-part1 h5");
            var count = 0;
            setInterval(function(){
                if(count < 100){
                    h5timer.innerHTML = count++;
                }
                else h5timer.innerHTML = count;
            },33);
        },
    });
    tl.to(".line h2",{
        animationName:"anime",
        opacity:1,
    })
    tl.to("#loader",{
        opacity:0,
        // delay:4,
        delay:0.5,
        duration:0.4,
    });
    tl.from("#page1",{
        delay:0.2,
        y:1700,
        opacity:0,
        duration:0.5,
        ease:Power4,
    });
    tl.to("#loader",{
        display:'none',
        })
    tl.from("#nav , #nav-part2 h4",{
        opacity:0,
        y:100,
        stagger:0.1,
    })
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2, #hero3 h3, #hero4 h1",{
        y:120,
        stagger:0.2,
    })
}
function curserAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
        })
    });
    // Shery.mouseFollower({
    //     //Parameters are optional.
    //     skew: true,
    //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //     duration: 0.1,
    //   });
    Shery.makeMagnet("#nav-part2 h4, svg");
    }
    
loadingAnimetion();
curserAnimation();