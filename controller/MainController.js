const main ={
    index:(req, res)=>{
        res.render('index');
    },
    coke:(req, res)=>{
        res.render('coke');
    },
    sprite:(req, res)=>{
        res.render('sprite');
    },
    royal:(req, res)=>{
        res.render('royal');
    },
    pepsi:(req, res)=>{
        res.render('pepsi');
    },
}
module.exports=main;