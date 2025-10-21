import styles from "./RenderSearchedObject.module.css";

function DetailsRenderButton({ onShow, setIsOpen, isOpen }) {
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen((c) => !c);
    onShow();
  };

  return (
    <button onClick={handleClick} className={styles.btn}>
      {isOpen ? "Hide" : "Show"} repositories
    </button>
  );
}

export default DetailsRenderButton;
