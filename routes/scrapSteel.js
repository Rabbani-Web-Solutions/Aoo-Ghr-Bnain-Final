const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');
const request = require('request');

const scrapSteel = (req, response) => {

    const Product = [];
    const columns = [];
    
    request('https://priceindex.pk/saria-rate-pakistan-today-steel-iron-rod-price/' , 
    (err, res , html) => {

        if(!err && res.statusCode === 200) 
        {
                const $ = cheerio.load(html)

                $('tbody tr td').each((index, el) => { 
                    columns.push($(el).text()); 
                });

                // console.log(columns)

                Product.title = columns[3]
                Product.Image = 'https://tameerghar.com/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/s/q/squarebox-03.jpg'
                Product.priceG40 = columns[4]
                Product.priceG60 = columns[5]
      

                Product.title3 = columns[6]
                Product.Image3 = 'https://tameerghar.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/s/q/squarebox-02.jpg'
                Product.price3G40 = columns[7]
                Product.price3G60 = columns[8]



                Product.title2 = columns[9]
                Product.Image2 = 'https://tameerghar.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/s/q/squarebox-04.jpg'
                Product.price2G40 = columns[10]
                Product.price3G60 = columns[11]
      
        }

        var myProduct = '{"products":[' +
                            '{"title":"'+ Product.title +'","image":"'+ Product.Image +'","price":"'+ Product.priceG40 +'"},'+
                            '{"title":"'+ Product.title2 +'","image":"'+ Product.Image2 +'","price":"'+ Product.price2G40 +'"},'+
                            '{"title":"'+ Product.title3 +'","image":"'+ Product.Image3 +'","price":"'+ Product.price3G40 +'"}]}';

                            
                
    if(Product.title === undefined || Product.title3 === undefined){
        scrapSteel(request, response)
        console.log(Product)
    }
    else{
        // console.log(Product)
        // console.log(myProduct)
        response.send(myProduct)
    }}
    
    )



}

module.exports = scrapSteel;