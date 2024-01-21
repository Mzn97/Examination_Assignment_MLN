

import MyButton from "./MyButton";


 function CategoryCard(){
     return (

        <div>
        
         <div className="categorycard">
             <img src="src\img\photo-1676498111080-5b73b7f0122c.avif" alt="category img" height={210}></img>
             <MyButton to="About" name="Shirts" />
             
            
    
      
        </div>
        <div className="categorycard">
             <img src="src\img\photo-1676498111080-5b73b7f0122c.avif" alt="category img" height={210}></img>
             <MyButton to="About" name="Shoes" />
             
            
    
      
        </div>

        <div className="categorycard">
             <img src="src\img\photo-1676498111080-5b73b7f0122c.avif" alt="category img" height={210}></img>
             <MyButton to="About" name="Balls" />
             
            
    
      
        </div>
    
        </div>
        
    );

}

 export default CategoryCard