const ColorChangeButton = ({colors, setColors}) => {
  const renderButton = colors.map((color, index) => 
    <button 
    key={index} 
    className={color}
    onClick={() => setColors(color)}>
    {color}
    </button>
  );
  return renderButton;
};

export default ColorChangeButton;