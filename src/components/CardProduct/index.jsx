const CardProduct = ({ image, title, price, handleClick }) => {
  return (
    <section className="border-2 border-black w-[200px] h-[350px] flex flex-col rounded-lg">
      <figure className="w-full bg-white">
        <img
          className="aspect-square w-full object-contain rounded-lg"
          src={image}
          alt=""
        />
      </figure>
      <section className="flex flex-col items-start p-2 justify-between h-full">
        <section className="pb-3 flex flex-col gap-2">
          <h1 className="font-bold line-clamp-2 overflow-ellipsis">{title}</h1>
          <p className="text-sm text-justify line-clamp-2 overflow-ellipsis">
            ${price}
          </p>
        </section>
        <section>
          <button
            onClick={handleClick}
            className="bg-[#5C469C] text-white p-2 rounded-lg"
          >
            Add To Cart
          </button>
        </section>
      </section>
    </section>
  );
};

export default CardProduct;
