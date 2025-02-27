import { User } from "../models/user.model.js"

export const addProduct = async (req, res) => {
    try {
        console.log(req.body)
        const { name, description, price, stock, minStock, category, color } = req.body
        console.log('user----------->', req.user)
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                productsList: {
                    name: name,
                    description: description,
                    price: price,
                    stock: stock,
                    minStock: minStock,
                    category: category,
                    color: color,
                    createdAt: new Date(),
                }
            }
        })
        return res.status(200).json({ success: true })
    } catch (error) {
        console.log('error-->', error.message)
        return res.status(500).json({ success: false, message: 'Internal Server Error !!!!' })
    }
}
export const updateProduct = async (req, res) => {
    try {
      const { name, description, price, stock, minStock, category, color } = req.body;
      const productList=req.user.productsList
      const x=await User.find({'productsList.name':'JimJam'})
      console.log('user->',x)
      console.log('in Update route-->2', req.user.productsList[0].name)
      console.log('status-->',req.user.productsList[0].name==req.body.name)


      const updatedUser = await User.findOneAndUpdate(
        { _id: req.user._id, "productsList.name": req.body.name },
        {
          $set: {
            "productsList.$.name": name,
            "productsList.$.description": description,
            "productsList.$.price": price,
            "productsList.$.stock": stock,
            "productsList.$.minStock": minStock,
            "productsList.$.category": category,
            "productsList.$.color": color
          }
        },
        { new: true }  // Returns the updated document
      );
  
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      return res.status(200).json({ success: true, data: updatedUser.productsList });
  
    } catch (error) {
      console.error('Error:', error.message);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  