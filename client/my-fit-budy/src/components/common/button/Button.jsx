const Button = ({ text, color, onClick, id, icon, reverseOrder }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`bg-button-${color} flex justify-center items-center py-2.5 px-4 rounded-lg text-white transform transition-transform duration-100 hover:scale-110`}
    >
      {reverseOrder ? (
        <>
          <p>{icon}</p>
          <p>{text}</p>
        </>
      ) : (
        <>
          <p>{text}</p>
          <p>{icon}</p>
        </>
      )}
    </button>
  );
};

export default Button;
