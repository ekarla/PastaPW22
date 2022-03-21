const index = (req, res)=>{
    const username = "Elenkarla";
    res.render("main/index",{
        username: username,
        isRyan: username ==='Ryan'
        
    });
}

const about = (req, res)=>{
    res.render("main/about");
}

const ui = (req,res)=>{
    res.render("main/ui");
}

export default {index, about, ui}