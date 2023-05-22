const Contact= require ("../Model/ModelUser")
exports.addUser = async(req,res)=>{
    const{name,email}= req.body
    try { 
        const find= await Contact.findOne({email})
        if (find){ return res.status(400).send('user already exist')}
        const contact = new Contact({name,email})
    await contact.save()
    res.status(201).send({msg:'user created', contact})
        
    } catch (error) { res.status(500).send('error')
       
        
    }
}
exports.getAllUsers=  async(req,res)=>{
    try { const contacts= await Contact.find();
        res.status(201).send({msg:'all users', contacts})
        
    } catch (error) { res.status(500).send({msg:'error'})       
    }
}
exports.deleteUser= async(req,res)=>{
    const {id}=req.params
    
    try {
        await Contact.findByIdAndDelete(id)
        res.status(200).send({msg:'user is deleted'})
    
    } catch (error) {}
        res.status(500).send({msg:'error'})}
        
        exports.updateUser= async(req,res)=>{
            const{id}=req.params;
            try { 
         const  contactUpdate = await Contact. findByIdAndUpdate(id,{$set:{...req.body}
        },{new:true})
            res.status(201).send({msg:'user is updating', contactUpdate})
                
            } catch (error) {res.status(500).send({msg:'error'})
                
            }
        };
        exports.getOneUser=async(req,res)=>{
            const{id}=req.params;
            try {const contactOne= await Contact.findById(id)
                 res.status(201).send({msg:'one user' , contactOne})
                
            } catch (error) { res.status(500).send({msg:'eror'})
                
            }
        }
