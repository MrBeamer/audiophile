export const products = [
  {
    id: 1,
    model: "XX59 MARK II",
    category: "headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",

    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br/> <br/> The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",

    image: {
      category: "www",
      product: "www",
      cart: "www",
    },
    price_id: "price_1Ij8DuGQ9nm0CiBqDNLTbsht",
    price: "Humans share about 50% of our DNA with bananas",
  },
];

// xx59
// xx99
// yx1
// zx7
// zx9


<>
<CategoryBanner title={params.category} />
<div className="container">
  {category.map((product) => (
    <ProductCard
      key={product.id}
      styles={product.position === "mirrored" ? "mirrored" : ""}
      imgPath={product.image.category}
      linkTo={`/${params.category}/${product.name.split(` `).join(`-`)}`}
      title={`${product.name} ${product.category} `}
      paragraph={product.description}
    />
  ))}
  <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
  <ShopIntro />
</div>
</>


  <ProductCard
        imgPath={product.image?.product}
        title={`${product.name} ${product.category}`}
        paragraph={product.description}
        detailPage={true}
        onProductAdd={onProductAdd}
        price={product.price}
      />



  <div className="productCard">
      <div style={customStyles.right} className="productCard__image-frame">
        <img
          className="productCard__image"
          src={imgPath}
          alt=""
        />
      </div>
      <div style={customStyles.left} className="productCard__content">
        <Overline />
        <ProductHeadline>{title}</ProductHeadline>
        <Paragraph margin="32px 0 38px 0">{paragraph}</Paragraph>
        {detailPage && <p className="productCard__price">{price}</p>}
        <div className="productCard__buttons">
          {detailPage && <QuantityButton />}
          <Button
            onClick={() => onProductAdd()}
            linkTo={linkTo}
            backgroundColor="orange"
          >
            {detailPage ? "Add to cart" : "See Product"}
          </Button>
        </div>
      </div>
    </div>

      //   const total = cart
  //     .map((product) => product.price * product.quantity)
  //     .reduce((sum, product) => sum + product, 0);
  //   console.log(total);
