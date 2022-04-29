import { Curso } from "../models/index";

const index = (req, res)=>{
    const username = "Elenkarla";
    res.render("main/index",{
        username: username,
        isRyan: username ==='Ryan'
        
    });
}

const signup = async (req,res)=>{
    const cursos = await Curso.findAll();
    res.render("main/signup",{
        curso: cursos.map(c =>c.toJSON())
    });
}

const about = (req, res)=>{
    res.render("main/about");
}

const ui = (req,res)=>{
    res.render("main/ui");
}

export default {index, about,signup, ui}