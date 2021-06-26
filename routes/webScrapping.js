const fs = require('fs');
const cheerio = require('cheerio');

const got = require('got');
const request = require('request');

const webScrapping = (req, response) => {

    const Product = [];
    const columns = [];
  
    request('https://priceindex.pk/cement-price-pakistan/' , 
    (err, res , html) => {

        if(!err && res.statusCode === 200) 
        {
                const $ = cheerio.load(html)

                $('tbody tr td').each((index, el) => { 
                    columns.push($(el).text()); 
                });

                // console.log(columns[2])
                
                Product.title = columns[2]
                Product.Image = 'https://paperads.com/uploads/co_img/1547701681.jpg'
                Product.price = columns[3]

                var text = '{"employees":[' +
                    '{"firstName":"John","lastName":"Doe" },' +
                    '{"firstName":"Anna","lastName":"Smith" },' +
                    '{"firstName":"Peter","lastName":"Jones" }]}';

                // var myProduct = '{"products":[' +
                //     '{"title":"'+ Product.title +'","image":"'+ Product.Image +'","price":"'+ Product.price +'"}]}';
                // console.log(Product.title)
        
    
                // response.send(myProduct)
    
    
               

                Product.title3 = columns[4]
                Product.Image3 = 'https://www.lucky-cement.com/wp-content/uploads/2017/02/lucky-logo.png'
                Product.price3 = columns[5]

                var text = '{"employees":[' +
                    '{"firstName":"John","lastName":"Doe" },' +
                    '{"firstName":"Anna","lastName":"Smith" },' +
                    '{"firstName":"Peter","lastName":"Jones" }]}';

                // var myProduct = '{"products":[' +
                //     '{"title":"'+ Product.title +'","image":"'+ Product.Image +'","price":"'+ Product.price +'"}]}';
                
        
    
                // response.send(myProduct)

                Product.title2 = columns[6]
                Product.Image2 = 'https://jobzalert.pk/uploads/co_img/1534506420.png'
                Product.price2 = columns[7]

                var text = '{"employees":[' +
                    '{"firstName":"John","lastName":"Doe" },' +
                    '{"firstName":"Anna","lastName":"Smith" },' +
                    '{"firstName":"Peter","lastName":"Jones" }]}';
                  
                    // var myProduct2 = '{"products":[' +
                    // '{"title":"'+ Product2.title +'","image":"'+ Product2.Image +'","price":"'+ Product2.price +'"}]}';
                
        }

        var myProduct = '{"products":[' +
                            '{"title":"'+ Product.title +'","image":"'+ Product.Image +'","price":"'+ Product.price +'"},'+
                            '{"title":"'+ Product.title2 +'","image":"'+ Product.Image2 +'","price":"'+ Product.price2 +'"},'+
                            '{"title":"'+ Product.title3 +'","image":"'+ Product.Image3 +'","price":"'+ Product.price3 +'"}]}';

                            
                
    if(Product.title === undefined || Product.title3 === undefined){
        webScrapping(request, response)

        console.log(Product)
        
    }
    else{
        // console.log(Product)
        // console.log(myProduct)
        response.send(myProduct)
    }}
    
    )



}

module.exports = webScrapping;