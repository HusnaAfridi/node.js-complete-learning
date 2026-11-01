import{ users }from "../model/usermodel.js";

export function getUser(req,res){
    res.render("user",{users});
}
