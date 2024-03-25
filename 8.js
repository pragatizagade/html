document.addEventListener('DOMContentLoaded',fetchData)

function fetchData()
{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data=>{
            displayData(data);
        })
        .catch(error=>console.error('Error fetching Data:',error))

}
function displayData(data)
{
    const d=document.getElementById('data-Container')
    d.innerHTML=''
    
    data.forEach(product=>{
        const pE=document.createElement('div')
        pE.classList.add('product');

        
            
            const pN= document.createElement('h3');
            pN.textContent = product.title;
            pE.appendChild(pN);
    
        
            const priceE = document.createElement('p');
            priceE.textContent = product.price;
            pE.appendChild(priceE);
    
        
            const imageE = document.createElement('img');
            imageE.src = product.image;
            pE.appendChild(imageE);
    
        
            const descriptionE = document.createElement('p');
            descriptionE.textContent = product.description;
            pE.appendChild(descriptionE);
    
    
            const categoryE = document.createElement('p');
            categoryE.textContent = product.category;
            pE.appendChild(categoryE);
    
        
             d.appendChild(pE);
        });
 }

