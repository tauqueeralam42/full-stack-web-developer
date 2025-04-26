const Todo = require('../models/Todo');

exports.updateTodo = async(req,res) => {
    try{
        const id = req.params.id;
        const {title,description} = req.body;

        let todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt: Date.now()},
        )
        todo = await Todo.findById({_id:id});

        res.status(200).json(
            {
                success:true,
                data: todo,
                message: `Updated Successfully`,
            }
        )

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'Server Error',
        })

    }
}