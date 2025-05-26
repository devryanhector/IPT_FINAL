const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const AdminModel = require("./admin");
const ProductModel = require("./product");

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));


app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

mongoose.connect('mongodb://127.0.0.1:27017/final', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AdminModel.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ success: false, message: 'Authentication failed. Invalid email or password.' });
        }

        res.json({ success: true, message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: false, message: 'Login error', error: error.message });
    }
});

app.post('/products', async (req, res) => {
    try {
        const { name, price, description, image } = req.body;

        // Convert base64 encoded image to buffer
        const imageBuffer = Buffer.from(image, 'base64');

        const product = new ProductModel({
            name,
            price,
            description,
            image: {
                data: imageBuffer,
                contentType: 'image/png'
            }
        });

        const savedProduct = await product.save();

        res.status(201).json({ success: true, message: 'Product added successfully', product: savedProduct });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, message: 'Error adding product', error: error.message });
    }
});
//delete
app.delete('/products/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.json({ success: true, message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ success: false, message: 'Error deleting product', error: error.message });
    }
});

// Update product 
app.put('/products/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, price, description } = req.body;

        const updatedProduct = await ProductModel.findByIdAndUpdate(productId, {
            name,
            price,
            description
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.json({ success: true, message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, message: 'Error updating product', error: error.message });
    }
});


app.get('/getproducts', async (req, res) => {
    try {
        const products = await ProductModel.find();

        const productsWithBase64Image = products.map(product => ({
            ...product.toJSON(),
            image: `data:${product.image.contentType};base64,${product.image.data.toString('base64')}`
        }));
        res.json(productsWithBase64Image);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, message: 'Error fetching products', error: error.message });
    }
});



const port = 1337;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
