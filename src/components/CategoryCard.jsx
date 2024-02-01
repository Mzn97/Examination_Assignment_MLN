

import MyButton from "./MyButton";


 function CategoryCard(){
     return (

        <div className="category">
        
         <div className="categorycard">
             <img className="categorycardimg" src="src\img\photo-1676498111080-5b73b7f0122c.avif" alt="category img"></img>
             <MyButton to="ProductShirts" name="SHIRTS" />
             
            
    
      
        </div>
        <div className="categorycard">
             <img className="categorycardimg" src="src\img\photo-1536122985607-4fe00b283652.avif" alt="category img" ></img>
             <MyButton to="ProductShoes" name="SHOES" />
             
           
    
      
        </div>

        <div className="categorycard">
             <img className="categorycardimg" src="src\img\photo-1553778263-73a83bab9b0c.avif" alt="category img"></img>
             <MyButton to="ProductFootballs" name="FOOTBALLS" />
             
            
    
      
        </div>
    
        </div>
        
    );

}

 export default CategoryCard