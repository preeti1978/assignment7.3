/*Create  a  Ja va Sc rip t  fil e ap p .j s  an d i nc lude  t hat sc r ip t file  in to yo u r in dex .html file  
using  <sc rip t> t ag . I n ap p .j s file , wri te a J av aSc rip t f unc tio n  name d c oun ter.  E ac h time we c all this  fu nc t ion, we  should  get  a  
n ext i nc remen ted  v alue  star ti ng from 1. Disp lay  the re tur n  val ue i n c onsole.*/
var i=0;

function counter(){
  i+=1; //This variable i is accessed by the closure. Incrementing the variable i
  console.log("count="+i);
}


counter();//calling closure 1st time. This time i = 1
counter();// calling again etc. This time i=2 etc
counter();//calling again. This time i=3
counter();
counter();
counter();
