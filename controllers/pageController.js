const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'info.json');

exports.getPage = (req,res) =>{
   fs.readFile(filePath,(error, fileContent) => {
       if(error){
           console.log(error);
       }else{
           let infoBd  = JSON.parse(fileContent);
           res.render(path.join(__dirname, '..', 'views', 'page.ejs'),{

               info: infoBd
           });
       }
   });
};
exports.addPage=(req, res) =>{
    res.render(path.join(__dirname, '..', 'views', 'changePage.ejs'));
};
exports.postPage=(req,res) =>{
    let addIno = {
        imgUrl: req.body.imageUrl, 
        namePage: req.body.namePage,
        achievement: req.body.achievement
    };
    fs.writeFile(filePath, JSON.stringify(addIno), (error) =>{
       if(error)console.log(error);
    });
        res.render(path.join(__dirname, '..', 'views', 'page.ejs'),{

            info: addIno
        });

};