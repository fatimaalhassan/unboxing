const express = require("express");
const router = express.Router();

const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({}).populate("owner");
    res.render("products/index.ejs", { products });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get('/makeup', async (req, res) => {
   try {
    const products = await Product.find({category: "makeup"}).populate("owner");
    res.render("products/index.ejs", { products });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get('/perfume', async (req, res) => {
   try {
    const products = await Product.find({category: "perfume"}).populate("owner");
    res.render("products/index.ejs", { products });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get('/giftwrapping', async (req, res) => {
  try {
    const products = await Product.find({category: "giftWrapping"}).populate("owner");
    res.render("products/index.ejs", { products });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});


router.get("/new", (req, res) => {
  res.render("products/new.ejs");
});

router.post("/", async (req, res) => {
  try {
    req.body.owner = req.session.user._id; 
    await Product.create(req.body);
    res.redirect("/products");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("owner")

    res.render("products/show.ejs", { product });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:id/edit", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render("products/edit.ejs", { product });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.owner.equals(req.session.user._id)) {
      await product.updateOne(req.body);
      res.redirect(`/products/${req.params.id}`);
    } else {
      console.log("Permission denied");
      res.redirect("/products");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.owner.equals(req.session.user._id)) {
      await product.deleteOne();
      res.redirect("/products");
    } else {
      console.log("Permission denied");
      res.redirect("/products");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});



// router.post("/:id/favourite-by/:userId", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product.favouritedByUsers.includes(req.params.userId)) {
//       product.favouritedByUsers.push(req.params.userId);
//       await product.save();
//     }
//     res.redirect(`/products/${req.params.id}`);
//   } catch (error) {
//     console.log(error);
//     res.redirect(`/products/${req.params.id}`);
//   }
// });

// router.delete("/:id/favourite-by/:userId", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     product.favouritedByUsers.pull(req.params.userId);
//     await product.save();
//     res.redirect(`/products/${req.params.id}`);
//   } catch (error) {
//     console.log(error);
//     res.redirect(`/products/${req.params.id}`);
//   }
// });

module.exports = router;
