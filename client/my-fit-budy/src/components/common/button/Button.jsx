function getButtonClassNamesFromShape(shape){
  switch (shape) {
    case 'rectangular':
      return 'py-2.5 px-4 rounded-lg'
    case 'circle':
      return 'w-9 h-9 rounded-full'
  
    default:
      return 'py-2.5 px-4 rounded-lg';
  }
    
}
function getButtonClassNamesFromType(type){
  switch (type) {
    case 'delete':
      return 'text-red-600'
  
    default:
      return 'text-white';
  }
}

const Button = ({ text, color, onClick, id, icon, reverseOrder, shape, type }) => {

  const shapeClassNames = getButtonClassNamesFromShape(shape);
  const typeClassNames = getButtonClassNamesFromType(type);

  return (
    <button
      id={id}
      onClick={onClick}
      className={`bg-button-${color} flex justify-center items-center ${shapeClassNames} ${typeClassNames} transform transition-transform duration-100 hover:scale-110`}
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
