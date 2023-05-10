const CardCart = ({ image, title, handleClick }) => {
  return (
    <section className="flex flex-row w-full gap-2 h-[100px] overflow-hidden">
      <figure className="w-2/5 bg-white">
        <img
          src={image}
          alt=""
          className="aspect-square w-full object-contain"
        />
      </figure>
      <section className="flex flex-col justify-between w-3/5">
        <h1 className="font-medium line-clamp-2 overflow-ellipsis">{title}</h1>
        <button
          onClick={handleClick}
          className="bg-red-400 text-black p-2 rounded-lg w-[70px]"
        >
          Delete
        </button>
      </section>
    </section>
  );
};

export default CardCart;
