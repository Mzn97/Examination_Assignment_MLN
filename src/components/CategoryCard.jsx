

import MyButton from "./MyButton";


 function CategoryCard(){
     return (

        <div className="category">
        
         <div className="categorycard">
             <img src="src\img\photo-1676498111080-5b73b7f0122c.avif" alt="category img" height={240} width={310}></img>
             <MyButton to="About" name="Shirts" />
             
            
    
      
        </div>
        <div className="categorycard">
             <img src="src\img\photo-1536122985607-4fe00b283652.avif" alt="category img" height={240} width={310}></img>
             <MyButton to="About" name="Shoes" />
             
           
    
      
        </div>

        <div className="categorycard">
             <img src="src\img\photo-1553778263-73a83bab9b0c.avif" alt="category img" height={240} width={310}></img>
             <MyButton to="About" name="Balls" />
             
            
    
      
        </div>
    
        </div>
        
    );

}

 export default CategoryCard